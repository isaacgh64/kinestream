import { useMemo, useState } from "react"
import { RegisterType, ShowPasswordType } from "../../types/types"
import { FaEye, FaEyeSlash } from "react-icons/fa6"


export default function RegisterView() {
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
    return (
      <>
        <form className="space-y-4 mt-4">
          {/*Input name*/}
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="named" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Nombre:</label>
            <input type="name" id="named" placeholder="Añada su nombre" className="bg-slate-100 p-2 rounded-lg outline-blue-500" name="named"/>
          </div>
          {/*Input mail*/}
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="mail" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Correo electrónico:</label>
            <input type="mail" id="mail" placeholder="Añada el correo electrónico" className="bg-slate-100 p-2 rounded-lg outline-blue-500" name="mail"/>
          </div>
          {/*Input password*/}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Contraseña:</label>
            <div className="relative w-full">
                <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="password" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowPassword}>
                    {(isShowPassword)?<FaEye/>:<FaEyeSlash/>}
                </button>
            </div>
          </div>
          {/*Input repassword*/}
          <div className="flex flex-col gap-2">
            <label htmlFor="repassword" className="text-xl font-medium text-gray-700 mb-1 cursor-pointer">Repita la contraseña:</label>
            <div className="relative w-full">
                <input type={(isShowRePassword)?"text":"password"} id="repassword" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="repassword" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-sky-500 cursor-pointer" onClick={handleChangeShowRePassword}>
                    {(isShowRePassword)?<FaEye/>:<FaEyeSlash/>}
                </button>
            </div>
          </div>
          {/*Button Submit*/}
          <input type="submit" className="bg-blue-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2 disabled:opacity-40" value={"Registrarse"} />
          </form>
          
      </>
    )
}
