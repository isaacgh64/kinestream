import { useMemo, useState } from "react"
import { RegisterType, ShowPasswordType } from "../../types/types"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { validateEmail } from "../../helpers"
import ErrorMessage from "../Global/ErrorMessage"
import { useToken } from "../../hooks/useToken"
import { API } from "../../Utils/api"
import { useNavigate } from "react-router-dom"
import { Globals } from "../../Utils/globals"
import Charging from "../Global/Charging"


export default function RegisterView() {
    const [error,setError] = useState('')
    const {dispatch} = useToken()
    const navigate = useNavigate()
    const [showLogIn,setShowLogIn] = useState(false)
    
    //State check LogIn data
    const [register, setRegister] = useState<RegisterType>({
        name:"",
        mail:"",
        password:"",
        repassword:"",
    })
    //Show or hide password
      const [showPassword,setShowPassword] = useState<ShowPasswordType>({
          show:false,
          showre:false,
      })
  
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
  
      const isShowPassword = useMemo(() => {
          return showPassword.show
      },[showPassword])

      const isShowRePassword = useMemo(() => {
        return showPassword.showre
    },[showPassword])

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
          setRegister({
              ...register,
              [name]:value
          })
    }

    //Check the form is correct
    const isValid = useMemo(() => {
        return (register.name.trim() && register.mail.trim() && register.password.trim() && register.repassword.trim())?false:true
    },[register])

    //Create a new account
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        if(Object.values(register).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
    
        if(!validateEmail(register.mail)){
            setError('Introduce un correo electrónico válido')
            return
        }

        if(register.password !== register.repassword){
          setError('Las contraseñas no coinciden')
          return
        }
        
        if(register.password.length < 8){
          setError('La contraseña debe tener 8 caracteres')
          return
        }
        setShowLogIn(true)
         API.register(register.name,register.mail,register.password,dispatch).then(value => {
            console.log(value)
            if(value.trim()&&value!=='mail'){
                API.createList(`${register.mail}`,`${register.mail}`).then(idshow=>{
                    API.createList(`${register.mail}`,`${register.mail}`).then(idFav=>{
                        API.insertList(idFav,idshow,value).then(()=>{
                            setError('')
                            setShowLogIn(false)
                            navigate("/user")
                        })
                    })
                })
                
            }else{
                setShowLogIn(false)
                setError(Globals.messageError);
            }   
        });
    }

    return (
      <>
        {showLogIn &&(<Charging text={'Iniciando sesión...'}/>)}
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {/*Input name*/}
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="name" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Nombre:</label>
            <input type="name" id="name" placeholder="Añada su nombre" className="bg-slate-100 p-2 rounded-lg outline-blue-500" name="name" onChange={handleChange} />
          </div>
          {/*Input mail*/}
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="mail" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Correo electrónico:</label>
            <input type="mail" id="mail" placeholder="Añada el correo electrónico" className="bg-slate-100 p-2 rounded-lg outline-blue-500" name="mail" onChange={handleChange}/>
          </div>
          {/*Input password*/}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Contraseña:</label>
            <div className="relative w-full">
                <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="password" onChange={handleChange} />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowPassword} >
                    {(isShowPassword)?<FaEye/>:<FaEyeSlash/>}
                </button>
            </div>
          </div>
          {/*Input repassword*/}
          <div className="flex flex-col gap-2">
            <label htmlFor="repassword" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Repita la contraseña:</label>
            <div className="relative w-full">
                <input type={(isShowRePassword)?"text":"password"} id="repassword" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="repassword" onChange={handleChange} />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowRePassword}>
                    {(isShowRePassword)?<FaEye/>:<FaEyeSlash/>}
                </button>
            </div>
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {/*Button Submit*/}
          <input type="submit" className="bg-blue-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2 disabled:opacity-40" value={"Registrarse"} disabled={isValid}/>
          </form>
          
      </>
    )
}
