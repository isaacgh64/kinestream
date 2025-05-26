import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  function navigatePage(){
    navigate("/content");
  }
  return (
    
    <div className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-full cursor-pointer" onClick={ () => navigatePage()}>
      <img 
        src="https://veracines.es/img/peliculas/sonic-3.jpg" 
        alt="Póster de la película Sonic 3: The Hedgehog" 
        className="object-cover w-full h-full"
      />
      <div className="pt-2 pb-3 px-2 sm:pt-4 sm:pb-4 sm:px-4 text-center border-t border-gray-200 bg-gray-50">
        <h4 className="font-bold text-base sm:text-2xl text-gray-900">Sonic 3</h4>
        <p className="text-xs text-gray-600 mt-1 hidden sm:block">
          Sonic y sus amigos enfrentan su mayor aventura para salvar el multiverso.
        </p>
      </div>
    </div>
  )
}
