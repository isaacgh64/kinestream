import { useEffect, useState } from 'react';
import Film from '../models/film';
import { API } from '../Utils/api';
import Starts from '../models/starts';
import { FaHeart, FaClock, FaShareAlt, FaArrowLeft } from "react-icons/fa";
import Charging from '../components/Global/Charging';
import { useStream } from '../hooks/useStream';
import ItemSeason from '../components/TV/ItemSeason';
import ItemFilm from '../components/Films/ItemFilm';
import TVDetail from '../models/tvDetail';
import { useToken } from '../hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ItemPage() {
  const {state} = useStream()
  const {token} = useToken()
  const { search } = useLocation();
  const navigate = useNavigate();
  const [itemFilm, setItemFilm] = useState<Film>()
  const [itemTV, setItemTV] = useState<TVDetail>()
  const [start, setStart] = useState<Starts[]>([])
  const [key, setKey] = useState<string>("")
  const [charge,setCharge] = useState<boolean>(true)
  const [isShow,setIsShow] = useState<boolean>(false)
  const [isFav,setIsFav] = useState<boolean>(false)
  const [insert,setInsert] = useState<boolean>(false)
  const [idFav,setIdFav] = useState<number>(0)
  const [idShow,setIdShow] = useState<number>(0)
  const query = new URLSearchParams(search)
  const id = query.get("id")
  const type = query.get("type")
  useEffect(()=>{
    if(id?.trim()){
      var idint = 0
      try{
        idint = parseInt(id??'870028')
      }catch(e){
        idint = 870028
      }
       API.getStreamDetail(idint,(type==="tv")?type:state.type).then(value=>{
        if(state.type==='movie'&&type!=="tv"){
          setItemFilm(value)
          if(token.token.trim()){
            API.getIdListShow(token.token).then(value1=>{
              if(value1===0){
                API.createList(`${token.token}`,`${token.token}`).then((id)=>{
                  console.log(id)
                  setIdShow(id)
                  setInsert(true)
                })
              }else{
                setIdShow(value1)
                API.checkItemFilm(value1,value.id).then(value2=>{
                  setIsShow(value2)
                })
              }
            })
            API.getIdListFav(token.token).then(value1=>{
              if(value1===0){
                API.createList(`${token.token}`,`${token.token}`).then((id)=>{
                  console.log(id)
                  setIdFav(id)
                  setInsert(true)
                })
              }else{
                setIdFav(value1)
                API.checkItemFilm(value1,value.id).then(value2=>{
                  setIsFav(value2)
                })
              }
            })
          }
        }else{
          setItemTV(value)
        }
         
        API.getStarts(idint,(type==="tv")?type:state.type).then(value=>{
          setStart(value)
          API.getTrailer(idint,(type==="tv")?type:state.type).then(value=>{
            setKey(value)
            setCharge(false)
          })
        })
    })
     window.scrollTo(0, 0);
    }else{
       navigate("/");
    }
   
  },[])

  useEffect(() => {
  if (insert && idFav && idShow) {
    API.insertList(idFav, idShow, token.token).then(value => {
      console.log("Insertado en la lista:", value)
    });
  }
}, [insert, idFav, idShow])

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

  function saveMovieFav(){
    API.getIdListFav(token.token).then(value=>{
      API.insertItemFilm(value,itemFilm?.id ?? 0).then(()=>{
        setIsFav(true)
      })
    })
  }

  function removeMovieFav(){
    API.getIdListFav(token.token).then(value=>{
      API.removeItemFilm(value,itemFilm?.id ?? 0).then(()=>{
        setIsFav(false)
      })
    })
  }
  return (
    <>
    {!charge?
    <div className="bg-white text-gray-900 min-h-screen flex justify-center relative">
      {/*Botón para ir a la página anterior*/}
     
     <button
        className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={20} />
      </button>
      

      {(state.type==='movie' && type!=='tv')?
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
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50 ">
      {/* Favoritos */}
      {(state.type==='movie' && type!=='tv' && token.token.trim())?
        <div className="relative group">
          <button
            onClick={() => (!isFav)?saveMovieFav():removeMovieFav()}
            className={(isFav)?`bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110 cursor-pointer`:`cursor-pointer bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110`}
          >
            <FaHeart size={20} />
          </button>
          <span className="absolute right-full mr-2 px-4 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
           {(isFav)?`Quitar favorito`:`Añadir favorito`}
          </span>
        </div>
      :<p></p>
      }
      
       {/* Ver más tarde */}
      {(state.type==='movie' && type!=='tv'  && token.token.trim())?
        <div className="relative group">
          <button
            onClick={() => (!isShow)?saveMovieShow():removeMovieShow()}
            className={(isShow)?`cursor-pointer bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110`:`cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110`}
          >
            <FaClock size={20} />
          </button>
          <span className="absolute right-full mr-2 px-4 py-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
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
                title: `${itemFilm?.title ?? itemTV?.title}`,
                text: `¡Mira esta ${(type==='tv')?'serie':'película'} que acabo de encontrar!`,
                url: window.location.href,
              });
            } else {
              alert("Tu navegador no soporta la función de compartir.");
            }
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110 cursor-pointer"
        >
          <FaShareAlt size={20} />
        </button>
        <span className="absolute right-full mr-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Compartir
        </span>
    </div>

    </div>

    </div>

    :<Charging text={"Cargando..."}/> }
      
    </>
    

  );
}


