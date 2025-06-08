import { useEffect, useState} from "react";
import { useToken } from "../hooks/useToken"
import { useNavigate } from "react-router-dom";
import UserForm from '../components/User/UserForm';
import SwiperCardsUser from "../components/User/SwiperCardsUser";
import Films from "../models/films";
import { API } from "../Utils/api";


export default function UserPage() {
    const {token} = useToken()
    const navigate = useNavigate();
    const [films,setFilms] = useState<Films[]>([])
    
    useEffect(()=>{
      if(token.token===""){
        navigate("/login");
      }else{
        API.getIdListShow(token.token).then(value=>{
          API.getFilmsList(value).then(value1=>{
            setFilms(value1)
          })
        })
      }
    },[token.token,navigate])
    
    return (
        <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
          <div className="w-full max-w-7xl bg-white px-6 py-6 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Perfil de Usuario</h2>
            <UserForm/>
            <SwiperCardsUser
              title="Guardado para ver más tarde"
              list={films}
            />
            {/* <SwiperCarts
              title="Guardado para ver más tarde"
               list={[]}
            />
            <SwiperCarts
              title="Tu contenido favorito"
              list={[]}
            /> */}
          </div>
        </div>
    )
}
