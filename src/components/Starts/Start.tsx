import { useNavigate } from "react-router-dom";
import { Globals } from "../../Utils/globals";
import Starts from "../../models/starts";


type CardsType={
  item:Starts
}

export default function Cards({ item }: CardsType) {
  const navigate = useNavigate()

  function navigatePage() {
    Globals.idItem=item.id
    navigate("/content")
    
  }

  return (
    <div
      onClick={navigatePage}
      className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-40"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.profilePath}`}
        alt={`Póster de la película ${item.name}`}
        className="object-cover w-40 h-50"
      />
      <div className="text-center border-t border-gray-200 bg-gray-50 pb-2">
        <h4 className="font-bold text-xl text-gray-900">
          {item.name}
        </h4>
      </div>
    </div>
  );
}