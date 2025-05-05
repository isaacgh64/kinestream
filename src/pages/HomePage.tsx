import SectionInfo from "../components/Home/SectionInfo"

export default function HomePage() {
  return (
    <body className="bg-neutral-50">
      <div className="w-full min-h-[calc(100vh-120px)] flex justify-center bg-neutral-50">
        <main className="w-full max-w-7xl bg-white px-6 py-12 shadow-lg rounded-2xl">
          {/*Welcome section*/}
          <section className="text-center py-12">
            <h2 className="text-4xl font-bold text-sky-600 mb-2">¡Bienvenido!</h2>
            <p className="text-lg font-medium text-gray-700">
              Empieza tu viaje por el mundo del streaming: lo mejor, lo nuevo y lo imperdible, todo en un solo lugar.
            </p>
          </section>
          {/*Info section*/}
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 py-1 px-0">
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
          <section className="max-w-6xl mx-auto py-10 px-0">
            <h3 className="text-3xl text-blue-500 font-bold">Estrenos en cines 🎬</h3>
            <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
              {/* <img src="https://via.placeholder.com/300x400" alt="Póster serie" className="w-full h-48 object-cover"> */}
              <div className="p-4">
                <h4 className="font-semibold text-lg">Serie A</h4>
                <p className="text-sm text-gray-500">Temporada 2</p>
              </div>
            </div>
          </section>
          {/*Section Cards*/}
          <section className="max-w-6xl mx-auto py-10 px-0">
            <h3 className="text-3xl text-blue-500 font-bold">Lo más visto 🍿</h3>
          </section>
        </main>
      </div>
    </body>
    
  )
}
