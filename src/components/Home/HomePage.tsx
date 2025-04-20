import SectionInfo from "./SectionInfo"

export default function HomePage() {
  return (
    <main>
        <p className="text-4xl text-sky-500 font-bold text-center flex justify-center mt-3 mb-8">
            ¡Bienvenido! 
            <br/> 
            Aquí empieza tu viaje por el mundo del streaming: lo mejor, lo nuevo y lo imperdible, todo en un solo lugar.
        </p>
        <section className="ms-20 grid grid-cols-2">
           <SectionInfo
            title={"¿Qué es KineStream?"}
            pos={1}
           />
            <SectionInfo
            title={"¿Qué puedes encontrar?"}
            pos={2}
           />
        </section>
    </main>
  )
}
