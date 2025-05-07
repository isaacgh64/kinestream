import SectionInfo from "../components/Home/SectionInfo"
import Cards from '../components/Global/Cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomePage() {
  const elementos = ["Película 1", "Película 2", "Película 3","Película 4","Película 5","Película 6","Película 7","Película 8"];
  return (
    <body className="bg-neutral-50">
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
          {/*Section Cards Films*/}
          <section className="max-w-6xl mx-auto py-6">
            <h3 className="text-3xl text-blue-500 font-bold">Estrenos en cines 🎬</h3>
            <Swiper slidesPerView={4} spaceBetween={8} navigation>
              {
                elementos.map((item,index) =>(
                  <SwiperSlide key={index}>
                       <Cards
                          key={index}
                        />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </section>
          {/*Section Cards*/}
          <section className="max-w-6xl mx-auto py-3">
            <h3 className="text-3xl text-blue-500 font-bold">Lo más visto 🍿</h3>
            <Swiper slidesPerView={4} spaceBetween={8} navigation>
              {
                elementos.map((item,index) =>(
                  <SwiperSlide key={index}>
                       <Cards
                          key={index}
                        />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </section>
        </main>
      </div>
    </body>
    
  )
}
