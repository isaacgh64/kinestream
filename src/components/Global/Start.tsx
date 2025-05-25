import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  function navigatePage(){
    navigate("/content");
  }
  return (
    
    <div className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-40">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0h3L61vrZkmivejtFuNVnD3XyqwMJQDFuPC-mrPTjAHLStxG85PjhDgM4EQclSA1zEauRvb3wgfrdR83C6GEHug" 
        alt="Póster de la película Sonic 3: The Hedgehog" 
        className="object-cover w-40 h-50"
      />
      <div className="text-center border-t border-gray-200 bg-gray-50 pb-2">
        <h4 className="font-bold text-xl text-gray-900">Jim Carrey</h4>
      </div>
    </div>
  )
}