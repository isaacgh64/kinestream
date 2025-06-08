import SectionInfo from "../components/Home/SectionInfo"
import SwiperCarts from '../components/Global/SwiperCards';
import { useEffect, useState } from "react";
import { API } from "../Utils/api";
import Films from "../models/films";



export default function HomePage() {
  const [filmsCinema, setFilmsCinema] = useState<Films[]>([]);
  const [filmsPopular, setFilmsPopular] = useState<Films[]>([]);
  const [nextCinema,setNextCinema] = useState<number>(1);
  const [nextPopular,setNextPopular] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    if(!loading){
      setLoading(true)
      API.getFilmsCinema(nextCinema).then(value=>{
        setFilmsCinema(prev => [...prev,...value])
        setLoading(false)
      })
    }
      
    },[nextCinema])
  useEffect(()=>{
    if(!loading){
      setLoading(true)
      API.getFilmsPopular(nextPopular).then(value=>{
        setFilmsPopular(prev => [...prev,...value])
        setLoading(false)
      })
    }
      
    },[nextPopular])
  return (
    <div className="bg-neutral-50">
      <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
        <main className="w-full max-w-7xl bg-white px-6 py-6 shadow-lg rounded-2xl">
          {/*Welcome section*/}
          <section className="text-center py-7">
            <h2 className="text-4xl font-bold text-sky-600 mb-2">¡Bienvenido!</h2>
            <p className="text-lg font-medium text-gray-700">
              Empieza tu viaje por el mundo del streaming: lo mejor, lo nuevo y lo imperdible, todo en un solo lugar.
            </p>
          </section>
          {/*Info section*/}
          <section className="max-w-6xl mx-auto grid md:grid-cols-2">
            <SectionInfo
              title={"¿Qué es KineStream?"}
              pos={1}
            />
            <SectionInfo
              title={"¿Qué puedes encontrar?"}
              pos={2}
            />
          </section>
          {filmsCinema.length > 0 ? (
            <>
              <SwiperCarts title="Solo en cines 🍿" list={filmsCinema} setNext={setNextCinema}/>
            </>
          ) : (
            <p>Cargando películas...</p>
          )}
          {filmsPopular.length > 0 ? (
            <>
              <SwiperCarts title="Lo más visto 🍿" list={filmsPopular} setNext={setNextPopular}/>
            </>
          ) : (
            <p>Cargando películas...</p>
          )}
         
         
        </main>
      </div>
    </div>
    
  )
}
