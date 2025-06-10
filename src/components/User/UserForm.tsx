import { useEffect, useMemo, useState } from 'react'
import { RegisterType, ShowPasswordType } from '../../types/types';
import { API } from '../../Utils/api';
import { useToken } from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import Dialog from '../Global/Dialog';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function UserForm() {
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const [showDialogPassword, setShowDialogPassword] = useState(false);
    const {token, dispatch} = useToken()
    const [error,setError] = useState('')
    //Show or hide password
    const [showPassword,setShowPassword] = useState<ShowPasswordType>({
      show:false,
      showre:false,
    })
    const navigate = useNavigate();
    const [user, setUser] = useState<RegisterType>({
        name:"",
        mail:"",
        password:"",
        repassword:"",
    })

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
          setUser({
              ...user,
              [name]:value
          })
    }
    
    //Cargamos nuestros datos antes de cargar la pantalla
    useEffect(()=>{
      async function getDataUser(){
        await API.getDataUser(token.token).then(value => {
            setUser({
              name:(value!=null)?value.name:"",
              mail:(value!=null)?value.mail:"",
              password:"",
              repassword:"",
            })
        })  
      }
      getDataUser()
    },[])

    async function changeDataUser(){
      if(!user.name.trim() || !user.mail.trim()){
        setMessage("Los campos no pueden estar vacíos");
         setVisible(true)
      }else{
        await API.modifyDataUser(token.token,user.name,user.mail).then(value=>{
          if(value){
            setEditing(false)
            setMessage("Datos actualizados");
          }else{
            setMessage("Algo fue mal");
          }
          setVisible(true)
        
        })
      }
    }

    //Modifi password
    const changePassword = ()=>{
        if(user.password !== user.repassword){
          setError('Las contraseñas deben ser iguales')
          return
        }
        if(Object.values(user).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        API.modifyPassword(user.password,token.token).then(value=>{
          if(value){
            setError('')
            setShowDialogPassword(false)
            setMessage("La contraseña se actualizó correctamente");
            setVisible(true)
          }else{
            setError('Algo fue mal')
          }
        })
    }

    function logOut(){
      localStorage.removeItem("TOKENS")
      dispatch({type:'close-login'})
      navigate("/login");
      
    }
    
    const isShowPassword = useMemo(() => {
              return showPassword.show
          },[showPassword])
    
          const isShowRePassword = useMemo(() => {
            return showPassword.showre
        },[showPassword])

    const handleChangeShowPassword = () => {
          setShowPassword({
              ...showPassword,
              show:!showPassword.show
          })
      }

      const handleChangeShowRePassword = () => {
        setShowPassword({
            ...showPassword,
            showre:!showPassword.showre
        })
    }
   

    return (
        <section className="flex flex-col justify-center items-center">
          <Dialog message={message} visible={visible} onClose={() => setVisible(false)} />
              <form className="w-full max-w-6xl">
                {/* Input name */}
                <div className="mb-4 flex flex-col gap-2 w-full">
                    <label 
                        htmlFor="name" 
                        className="text-xl font-medium text-gray-700 mb-1 cursor-pointer"
                    >
                    Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Añada su nombre"
                        className={`p-2 rounded-lg outline-blue-500 w-full bg-slate-100 `}
                        name="name"
                        onChange={handleChange}
                        disabled={!editing}
                        value={user.name}
                    />
                </div>

                {/* Input mail */}
                <div className="mb-4 flex flex-col gap-2 w-full">
                  <label 
                    htmlFor="mail" 
                    className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="mail"
                    placeholder="Añada el correo electrónico"
                    className="bg-slate-100 p-2 rounded-lg outline-blue-500 w-full"
                    name="mail"
                    onChange={handleChange}
                    disabled={!editing}
                    value={user.mail}
                  />
                </div>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 mt-6">
                   <button onClick={() => (!editing)?setEditing(!editing):changeDataUser()} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">{editing ? "Guardar cambios":"Editar perfil" }</button>
                   <button onClick={() => setShowDialogPassword(true)} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">Cambiar contraseña</button>
                   <div className='col-span-full flex justify-center'>
                      <button onClick={() => logOut()} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">Cerrar sesión</button>
                   </div>    
              </div>
              {/* Diálogo para ingresar correo electrónico */}
            {showDialogPassword && (
                <div className="fixed inset-0 flex items-start justify-center z-100 mt-30 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-90 border-5 border-blue-500">
                        <h2 className="text-lg font-medium mb-4">Introduzca su nueva contraseña</h2>
                        <div className="relative w-full">
                            <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la nueva contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="password" onChange={handleChange} />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowPassword} >
                              {(isShowPassword)?<FaEye/>:<FaEyeSlash/>}
                            </button>
                        </div>
                        <div className="relative w-full mt-5">
                            <input type={(isShowRePassword)?"text":"password"} id="repassword" placeholder="Vuelve a introducir la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="repassword" onChange={handleChange} />
                              <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowRePassword}>
                                  {(isShowRePassword)?<FaEye/>:<FaEyeSlash/>}
                              </button>
                        </div>
                        <p className="text-red-600">{error}</p>
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={()=>{setShowDialogPassword(false); setError('')}}>
                                Cancelar
                            </button>
                            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={changePassword}>
                                Cambiar
                            </button>
                        </div>
                    </div>
                </div>
            )}
               
        </section>
  )
}
