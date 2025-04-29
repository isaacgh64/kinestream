import { useMemo, useState } from "react"
import { LogInType, ShowPasswordType } from "../../types/types"
import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6"

export default function LoginView() {

    //Show or hide password
    const [showPassword,setShowPassword] = useState<ShowPasswordType>({
        show:false,
        showre:false,
    })

    const handleChangeShowPassword = ()=>{
        setShowPassword({
            ...showPassword,
            show:!showPassword.show
        })
    }

    const isShowPassword = useMemo(() => {
        return showPassword.show
    },[showPassword])

    //State check LogIn data
    const [logIn, setLogIn] = useState<LogInType>({
        mail:"",
        password:"",
    })

    //Function onChanged inputs form LogIn
    const handleChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setLogIn({
            ...logIn,
            [name]:value
        })
    }

    //Check the form is correct
    const isValid = useMemo(() => {
        return (logIn.mail.trim() && logIn.password.trim())?false:true
    },[logIn])

    //Return View LogIn
    return (
        <>
            {/*Input mail*/}
            <div className="flex flex-col gap-2">
                <label htmlFor="mail" className="text-xl cursor-pointer">Correo electrónico:</label>
                <input type="mail" id="mail" placeholder="Añade el correo electrónico" className="bg-slate-100 p-2 rounded-lg" name="mail" onChange={handleChange}/>
            </div>
            {/*Input password*/}
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-xl cursor-pointer">Contraseña:</label>
                <div className="relative w-full">
                    <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg" name="password" onChange={handleChange}/>
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 cursor-pointer" onClick={handleChangeShowPassword}>
                        {(isShowPassword)?<FaEye className="text-sky-500"/>:<FaEyeSlash className="text-sky-500"/>}
                    </button>
                </div>
                
            </div>
            {/*Button Submit*/}
            <input type="submit" className="bg-sky-500 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2 disabled:opacity-40 disabled:cursor-auto" value={"Iniciar Sesión"} disabled={isValid}/>
        </>
    )
}
