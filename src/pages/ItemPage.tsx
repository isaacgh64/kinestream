import { useEffect, useState } from 'react';
import { Globals } from '../Utils/globals';
import Film from '../models/film';
import { API } from '../Utils/api';
import Starts from '../models/starts';
import SwiperCardsStart from '../components/Starts/SwiperCatdsStart';

export default function ItemPage() {
  const [item, setItem] = useState<Film>();
  const [start, setStart] = useState<Starts[]>([]);
  useEffect(()=>{
    API.getStreamDetail(Globals.idItem).then(value=>{
      setItem(value)
    })
  },[])
  useEffect(()=>{
    API.getStarts(Globals.idItem,"movie").then(value=>{
      setStart(value)
    })
  },[])
  return (
    <>
  <div className="bg-white text-gray-900 min-h-screen flex justify-center">
    <main className="w-full max-w-7xl bg-white shadow-2xl rounded-b-2xl overflow-hidden">

      {/* Imagen principal pegada a la barra superior */}
      <div className="relative h-[400px] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdropPath}`}
          alt={`Póster de la película ${item?.title}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center px-4">
            {item?.title}
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <section className="px-6 sm:px-10 py-8 space-y-10">

        {/* Sinopsis */}
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
            Sinopsis
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
            {item?.overview}
          </p>
        </div>

        {/* Actores */}
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-3 border-b-2 border-blue-500">
            Actores
          </h2>
          <div className="mt-4">
            {start.length > 0 ? (
              <SwiperCardsStart list={start} />
            ) : (
              <p className="text-gray-600 italic">Cargando actores...</p>
            )}
          </div>
        </div>

        {/* Tráiler */}
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl mb-3 border-b-2 border-blue-500">
            Tráiler
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/2YJXP8CKrNE"
              className="w-full h-full"
              allowFullScreen
              title="Tráiler"
            ></iframe>
          </div>
        </div>

      </section>
    </main>
  </div>
</>

  );
}


