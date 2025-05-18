import SectionInfo from "../components/Home/SectionInfo"
import SwiperCarts from '../components/Global/SwiperCards';


export default function HomePage() {
  
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
          <SwiperCarts
            title="Solo en cines 🍿"
          />
          <SwiperCarts
            title="Lo más visto 🍿"
          />
         
        </main>
      </div>
    </div>
    
  )
}
