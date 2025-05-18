import { useEffect, useState } from 'react'
import { UserType } from '../../types/types';
import { API } from '../../Utils/api';
import { useToken } from '../../hooks/useToken';

export default function UserForm() {
    const [editing, setEditing] = useState(false);
    const {state} = useToken()
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
        await API.getDataUser(state.token).then(value => {
          console.log(value)
            setUser({
              name:(value!=null)?value.name:"",
              mail:(value!=null)?value.mail:"",
            })
        })  
      }
      getDataUser()
    },[])

    return (
        <section className="flex flex-col justify-center items-center">
              <form className="w-full max-w-4xl">
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
              <div className="flex flex-row gap-10 mt-4">
                   <button onClick={() => setEditing(!editing)} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">{editing ? "Guardar cambios":"Editar perfil" }</button>
                   <button onClick={() => console.log("buenas")} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer w-45">Cambiar contraseña</button>
              </div>
             
        </section>
  )
}
