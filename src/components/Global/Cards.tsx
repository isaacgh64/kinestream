
export default function Cards() {
  return (
    <div className="inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-8 max-w-xs">
        <img 
            src="https://veracines.es/img/peliculas/sonic-3.jpg" 
            alt="Póster de la película Sonic 3: The Hedgehog" 
            className="object-cover "
        />
        <div className="pt-4 pb-4 px-4 text-center border-t border-gray-200 bg-gray-50">
            <h4 className="font-extrabold text-2xl text-gray-900">Sonic 3</h4>
            <p className="text-sm text-gray-600 mt-1">Sonic y sus amigos enfrentan su mayor aventura para salvar el multiverso.</p>
        </div>
    </div>



  )
}
