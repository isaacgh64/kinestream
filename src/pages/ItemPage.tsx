import Start from '../components/Global/Start';

export default function ItemPage() {
  return (
    <>
      <div className="bg-white text-gray-900 min-h-screen flex justify-center">
        <main className="w-full max-w-7xl bg-white shadow-lg rounded-2xl overflow-hidden">
          
          {/* Imagen principal */}
          <div className="relative">
            <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/11/sonic-3-pelicula-4263672.jpg?tf=3840x" alt="Sonic 3" 
              className="w-full h-[400px] "/>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white">Sonic 3</h1>
            </div>
          </div>

          {/* Contenido */}
          <section className="px-10 py-6">
            
            {/* Sinopsis */}
            <h5 className="font-bold text-3xl mb-3 border-b-2 border-blue-500">Sinopsis</h5>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius illo vero expedita rem deserunt sit sunt atque consequuntur cum nostrum odit necessitatibus perspiciatis at, consequatur animi! Distinctio dolorem blanditiis corrupti!
              Earum possimus quaerat obcaecati tempora non ullam inventore eos quia dolorum nulla cupiditate maiores, fugit ut in quasi iste consequatur aperiam! Debitis, commodi nihil quidem blanditiis ipsum consequuntur veniam minima?
              Veritatis optio, totam quasi deserunt reiciendis consectetur rerum commodi ipsum alias quo modi. Eum, suscipit eos cum ipsum odit dolorum laboriosam officiis, nostrum error, voluptatem tempore fuga iure sint dolore?
              Adipisci neque veritatis expedita minus natus nesciunt odio repellat! Tempore repellendus quas excepturi iusto debitis voluptatum autem error, consequatur sint iure deserunt dicta perferendis magnam eius dolores numquam sapiente amet!
              Esse iste molestiae repudiandae officia iure dicta a pariatur et animi, qui sint repellendus aspernatur non architecto labore blanditiis quidem ipsam dolorum earum quia exercitationem incidunt minima accusamus. Nesciunt, voluptas!
              Laudantium sunt velit ex distinctio quidem tempora voluptatibus at perferendis quae. Culpa nam aliquid ducimus omnis perspiciatis ea et autem iure, animi, nostrum iste ut reiciendis, facilis asperiores eius praesentium.
            </p>
            
            {/* Actores */}
            <h5 className="font-bold text-3xl mt-6 mb-3 border-b-2 border-blue-500">Actores</h5>
            <div className="ms-10 me-10">
              <Start/>
            </div>
            {/* Tráiler con Modal */}
            <h5 className="font-bold text-3xl mt-6 mb-3 border-b-2 border-blue-500">Tráiler</h5>
             <iframe  height="715" src="https://www.youtube.com/embed/2YJXP8CKrNE"  className='w-full'></iframe>
           

          </section>
        </main>
      </div>
    </>
  );
}


