import { useEffect} from "react";
import { useToken } from "../hooks/useToken"
import { useNavigate } from "react-router-dom";
import UserForm from '../components/User/UserForm';
import SwiperCarts from '../components/Global/SwiperCards';

export default function UserPage() {
    const {state} = useToken()
    const navigate = useNavigate();
    
    useEffect(()=>{
      if(state.token===""){
        navigate("/login");
      }
    },[state.token,navigate])
    
    return (
        <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
          <div className="w-full max-w-7xl bg-white px-6 py-6 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Perfil de Usuario</h2>
            <UserForm/>
            <SwiperCarts
              title="Guardado para ver más tarde"
               list={[]}
            />
            <SwiperCarts
              title="Tu contenido favorito"
              list={[]}
            />
            <SwiperCarts
              title="Lo que has visto"
              list={[]}
            />
          </div>
        </div>
    )
}
