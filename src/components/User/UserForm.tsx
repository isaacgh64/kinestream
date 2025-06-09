import { useEffect, useState } from 'react'
import { UserType } from '../../types/types';
import { API } from '../../Utils/api';
import { useToken } from '../../hooks/useToken';
import Dialogo from '../Global/Dialog';
import { Globals } from '../../Utils/globals';
import { useNavigate } from 'react-router-dom';

export default function UserForm() {
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);
    const {token, dispatch} = useToken()
    const navigate = useNavigate();
    const [user, setUser] = useState<UserType>({
        name:"",
        mail:""
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
            })
        })  
      }
      getDataUser()
    },[])

    async function changeDataUser(){
      if(!user.name.trim() || !user.mail.trim()){
        setMessage("Error");
        Globals.messageError="Los campos no pueden estar vacíos";
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

    function logOut(){
      localStorage.removeItem("TOKEN")
      dispatch({type:'close-login'})
      navigate("/login");
      
    }
   

    return (
        <section className="flex flex-col justify-center items-center">
          <Dialogo mensaje={message} visible={visible} onClose={() => setVisible(false)} />
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
              <div className="flex flex-col sm:flex-col md:flex-row md:gap-10 gap-5 mt-6">
                   <button onClick={() => (!editing)?setEditing(!editing):changeDataUser()} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">{editing ? "Guardar cambios":"Editar perfil" }</button>
                   <button onClick={() => console.log("buenas")} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">Cambiar contraseña</button>
              </div>
               <button onClick={() => logOut()} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45 mt-8">Cerrar sesión</button>
        </section>
  )
}
