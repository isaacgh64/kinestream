import { useEffect, useState } from 'react';
import { Globals } from '../Utils/globals';
import Film from '../models/film';
import { API } from '../Utils/api';
import Starts from '../models/starts';
import { FaHeart, FaClock, FaShareAlt } from "react-icons/fa";
import Charging from '../components/Global/Charging';
import { useStream } from '../hooks/useStream';
import ItemSeason from '../components/TV/ItemSeason';
import ItemFilm from '../components/Films/ItemFilm';
import TVDetail from '../models/tvDetail';
import { useToken } from '../hooks/useToken';

export default function ItemPage() {
  const {state} = useStream()
  const {token} = useToken()
  const [itemFilm, setItemFilm] = useState<Film>()
  const [itemTV, setItemTV] = useState<TVDetail>()
  const [start, setStart] = useState<Starts[]>([])
  const [key, setKey] = useState<string>("")
  const [charge,setCharge] = useState<boolean>(true)
  const [isShow,setIsShow] = useState<boolean>(false)
  useEffect(()=>{
    API.getStreamDetail(Globals.idItem,state.type).then(value=>{
      if(state.type==='movie'){
        setItemFilm(value)
        API.getIdListShow(token.token).then(value1=>{
          API.checkItemFilm(value1,value.id).then(value2=>{
            setIsShow(value2)
          })
        })
      }else{
        setItemTV(value)
      }
      API.getStarts(Globals.idItem,state.type).then(value=>{
        setStart(value)
        API.getTrailer(Globals.idItem,state.type).then(value=>{
          setKey(value)
          setCharge(false)
        })
      })
    })
     window.scrollTo(0, 0);
  },[])

  function saveMovieShow(){
    API.getIdListShow(token.token).then(value=>{
      API.insertItemFilm(value,itemFilm?.id ?? 0).then(()=>{
        setIsShow(true)
      })
    })
  }

  function removeMovieShow(){
    API.getIdListShow(token.token).then(value=>{
      API.removeItemFilm(value,itemFilm?.id ?? 0).then(()=>{
        setIsShow(false)
      })
    })
  }
  return (
    <>
    {!charge?
    <div className="bg-white text-gray-900 min-h-screen flex justify-center relative">
      {(state.type==='movie')?
        <ItemFilm 
          item={itemFilm}
          start={start}
          video={key}
        />
      :
        <ItemSeason
          item={itemTV}
          start={start}
          video={key}
        />
      }

    {/* BOTONES FLOTANTES */}
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
      {/* Favoritos */}
      {(state.type==="movie")?
        <div className="relative group">
          <button
            onClick={() => console.log("Añadido a favoritos")}
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110"
          >
            <FaHeart size={20} />
          </button>
          <span className="absolute right-full mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Añadir a Favoritos
          </span>
        </div>
      :<p></p>
      }
       {/* Ver más tarde */}
      {(state.type==="movie")?
        <div className="relative group">
          <button
            onClick={() => (!isShow)?saveMovieShow():removeMovieShow()}
            className={(isShow)?`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110`:`bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110`}
          >
            <FaClock size={20} />
          </button>
          <span className="absolute right-full mr-2 px-4 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
           {(isShow)?`Quitar ver más tarde`:`Ver más tarde`}
          </span>
        </div>
      :<p></p>
      }
    
      {/* Compartir */}
      <div className="relative group">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "No sé",
                text: "¡Mira esta película!",
                url: window.location.href,
              });
            } else {
              alert("Tu navegador no soporta la función de compartir.");
            }
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110"
        >
          <FaShareAlt size={20} />
        </button>
        <span className="absolute right-full mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Compartir
        </span>
    </div>

    </div>

    </div>

    :<Charging/> }
      
    </>
    

  );
}


