import SectionInfo from "./SectionInfo"

export default function HomePage() {
  return (
    <main>
        <p className="text-4xl text-sky-500 font-bold text-center flex justify-center mt-4 mb-8">
            ¡Bienvenido! 
            <br/> 
            Aquí empieza tu viaje por el mundo del streaming: lo mejor, lo nuevo y lo imperdible, todo en un solo lugar.
        </p>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 lg:ms-10 lg:me-10 ms-5 me-5 ">
           <SectionInfo
            title={"¿Qué es KineStream?"}
            pos={1}
           />
            <SectionInfo
            title={"¿Qué puedes encontrar?"}
            pos={2}
           />
        </section>
        <section className="mt-4 lg:ms-10 lg:me-10 me-5 ms-5">
          <h3 className="text-3xl text-sky-500 font-bold">Estrenos en cines 🎬</h3>
        </section>
        <section className="mt-4 lg:ms-10 lg:me-10 me-5 ms-5">
          <h3 className="text-3xl text-sky-500 font-bold">Lo más visto 🍿</h3>
        </section>
    </main>
  )
}
