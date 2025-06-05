import { useEffect, useState } from 'react';
import { Globals } from '../Utils/globals';
import Film from '../models/film';
import { API } from '../Utils/api';
import Starts from '../models/starts';
import SwiperCardsStart from '../components/Starts/SwiperCatdsStart';
import { FaHeart, FaClock, FaShareAlt } from "react-icons/fa";

export default function ItemPage() {
  const [item, setItem] = useState<Film>();
  const [start, setStart] = useState<Starts[]>([]);
  const [key, setKey] = useState<string>("");
  const [charge,setCharge] = useState<boolean>(true);
  useEffect(()=>{
    API.getStreamDetail(Globals.idItem).then(value=>{
      setItem(value)
      API.getStarts(Globals.idItem,"movie").then(value=>{
      setStart(value)
        API.getTrailer(Globals.idItem,"movie").then(value=>{
        console.log(value)
        setKey(value)
        setCharge(false)
        })
      })
    })
     window.scrollTo(0, 0);

  },[])
  return (
    <>
    {!charge?
    

<div className="bg-white text-gray-900 min-h-screen flex justify-center relative">
  <main className="w-full max-w-7xl bg-white shadow-2xl rounded-b-2xl overflow-hidden">
    {/* Imagen cabecera */}
    <div className="aspect-video w-full">
      <img
        src={(item?.backdropPath?.trim()) ? `https://image.tmdb.org/t/p/w1280/${item?.backdropPath}` : Globals.noPhoto}
        alt={`Póster de la película ${item?.title}`}
        className="w-full h-full object-cover rounded-b-2xl"
      />
    </div>

    <h1 className="text-center text-4xl sm:text-5xl font-bold mt-6 text-blue-500">
      {item?.title}
    </h1>

    <section className="px-6 sm:px-10 py-8 space-y-10">
      {/* Sinopsis */}
      {item?.overview.trim() ? (
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
            Sinopsis
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
            {item?.overview}
          </p>
        </div>
      ) : <p></p>}

      {/* Géneros */}
      {(item?.genres.length ?? 0) > 0 ? (
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
            Géneros
          </h2>
          {item?.genres.map((item, index) => (
            <p key={index} className="text-base text-gray-600 italic">
              {item.name}
            </p>
          ))}
        </div>
      ) : <p></p>}

      {/* Actores */}
      {start.length > 0 ? (
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
            Actores
          </h2>
          <div className="mt-4">
            <SwiperCardsStart list={start} />
          </div>
        </div>
      ) : <p></p>}

      {/* Tráiler */}
      {key.trim() ? (
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
            Tráiler
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${key}`}
              className="w-full h-full"
              allowFullScreen
              title="Tráiler"
            ></iframe>
          </div>
        </div>
      ) : <p></p>}
    </section>
  </main>

  {/* BOTONES FLOTANTES */}
  <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">

    {/* Favoritos */}
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

    {/* Ver más tarde */}
    <div className="relative group">
      <button
        onClick={() => console.log("Guardado para ver más tarde")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110"
      >
        <FaClock size={20} />
      </button>
      <span className="absolute right-full mr-2 px-4 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Ver más tarde
      </span>
    </div>

    {/* Compartir */}
    <div className="relative group">
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: item?.title,
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

    : <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium text-gray-700">Cargando...</p>
      </div>
    </div>}
      
    </>
    

  );
}


