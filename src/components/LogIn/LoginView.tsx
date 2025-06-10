import { useMemo, useState } from "react"
import { LogInType, ShowPasswordType } from "../../types/types"
import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { API } from "../../Utils/api"
import { Globals } from "../../Utils/globals"
import ErrorMessage from "../Global/ErrorMessage"
import { validateEmail } from "../../helpers"
import { useNavigate } from "react-router-dom";
import { useToken } from "../../hooks/useToken"

import Dialog from "../Global/Dialog"

export default function LoginView() {
    const {dispatch} = useToken()
    const navigate = useNavigate();
    const [error,setError] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
     const [visible, setVisible] = useState(false);

    //State check LogIn data
    const [logIn, setLogIn] = useState<LogInType>({
        mail:"",
        password:"",
    })
    
    //Show or hide password
    const [showPassword,setShowPassword] = useState<ShowPasswordType>({
        show:false,
        showre:false,
    })

    //Show password form
    const handleChangeShowPassword = ()=>{
        setShowPassword({
            ...showPassword,
            show:!showPassword.show
        })
    }


    const isShowPassword = useMemo(() => {
        return showPassword.show
    },[showPassword])

    

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
    
    //Change password if mail exits
    const changePassword = ()=>{
        if(!validateEmail(logIn.mail)){
            setError('Introduce un correo electrónico válido')
            return
        }
        API.changePassword(logIn.mail).then(()=>{
            setError('')
            setIsDialogOpen(false)
            setVisible(true)
            
        })
    }

    //Error Message
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(logIn).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        if(!validateEmail(logIn.mail)){
            setError('Introduce un correo electrónico válido')
            return
        }

        API.logIn(logIn.mail,logIn.password,dispatch).then(value => {
            if(value===true){
                navigate("/user");
            }else{
                setError(Globals.messageError);
            }   
        });

    }

    //Return View LogIn
    return (
        <>
            <form className="space-y-4 mt-4" onSubmit={handleSubmit} >
                {/*Input mail*/}
                <div className="mb-4 relative">
                    <label htmlFor="mail" className="block text-xl font-medium mb-1 cursor-pointer text-gray-700">Correo electrónico:</label>
                    <input type="mail" id="mail" placeholder="Añade el correo electrónico" className=" w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="mail" onChange={handleChange}/>     
                </div>
                {/*Input password*/}
                <div className="mb-6 relative">
                    <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-1 cursor-pointer">Contraseña:</label>
                    <div className="relative w-full">
                        <input type={(isShowPassword)?"text":"password"} id="password" placeholder="Introduce la contraseña" className="w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="password" onChange={handleChange}/>
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-blue-500 cursor-pointer " onClick={handleChangeShowPassword}>
                            {(isShowPassword)?<FaEye/>:<FaEyeSlash/>}
                        </button>
                    </div>
                </div>
                 <p className="text-blue-500 text-sm cursor-pointer mt-2" onClick={()=>setIsDialogOpen(true)}>
                    ¿Olvidó su contraseña?
                </p>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {/*Button Submit*/}
                <input type="submit" className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg mt-2 disabled:opacity-40 disabled:cursor-auto" value={"Iniciar Sesión"} disabled={isValid}/>
            </form>
            {/* Enlace para abrir el diálogo debajo de la contraseña */}
           

            {/* Diálogo para ingresar correo electrónico */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-100 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-90 border-5 border-blue-500">
                        <h2 className="text-lg font-medium mb-4">Introduzca su correo electrónico</h2>
                        <input type="mail" id="mail" placeholder="Añade el correo electrónico" className=" w-full bg-slate-100 p-2 rounded-lg outline-blue-500" name="mail" onChange={handleChange}/>
                        <p className="text-red-600">{error}</p>     
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={()=>setIsDialogOpen(false)}>
                                Cancelar
                            </button>
                            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={changePassword}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Dialog message={`Si su usuario existe, recibirá en su correo electrónico más información para recuperar su cuenta`} visible={visible} onClose={() => setVisible(false)} />
            
        </>
    )
}


