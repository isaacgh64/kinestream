import { useMemo, useState } from "react"
import { ShowPasswordType } from "../../types/types"
import { FaEye, FaEyeSlash } from "react-icons/fa6"


export default function RegisterView() {
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
        {/*Input name*/}
        <div className="flex flex-col gap-2">
          <label htmlFor="named" className="text-xl cursor-pointer">Nombre:</label>
          <input type="name" id="named" placeholder="Añada su nombre" className="bg-slate-100 p-2 rounded-lg" name="named"/>
        </div>
        {/*Input mail*/}
        <div className="flex flex-col gap-2">
          <label htmlFor="mail" className="text-xl cursor-pointer">Correo electrónico:</label>
          <input type="mail" id="mail" placeholder="Añada el correo electrónico" className="bg-slate-100 p-2 rounded-lg" name="mail"/>
        </div>
        {/*Input password*/}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl cursor-pointer">Contraseña:</label>
          <div className="relative w-full">
              <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg" name="password" />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 cursor-pointer" onClick={handleChangeShowPassword}>
                  {(isShowPassword)?<FaEye className="text-sky-500"/>:<FaEyeSlash className="text-sky-500"/>}
              </button>
          </div>
        </div>
        {/*Input repassword*/}
        <div className="flex flex-col gap-2">
          <label htmlFor="repassword" className="text-xl cursor-pointer">Repita la contraseña:</label>
          <div className="relative w-full">
              <input type={(isShowRePassword)?"text":"password"} id="repassword" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg" name="repassword" />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 cursor-pointer" onClick={handleChangeShowRePassword}>
                  {(isShowRePassword)?<FaEye className="text-sky-500"/>:<FaEyeSlash className="text-sky-500"/>}
              </button>
          </div>
        </div>
        {/*Button Submit*/}
        <input type="submit" className="bg-sky-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2 disabled:opacity-40" value={"Registrarse"} />
      </>
    )
}
