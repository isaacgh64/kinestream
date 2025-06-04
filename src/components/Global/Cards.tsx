import { useNavigate } from "react-router-dom";
import Films from "../../models/films";
import { Globals } from "../../Utils/globals";


type CardsType={
  item:Films
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
      className="inline-block w-48 sm:w-60 bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
        alt={`Póster de la película ${item.title}`}
        className="object-cover w-full h-80 sm:h-96"
      />
      <div className="px-3 py-2 sm:px-4 sm:py-3 text-center border-t border-gray-200 bg-gray-50 h-[84px] sm:h-[96px] flex flex-col justify-center">
        <h4 className="font-semibold text-sm sm:text-base text-gray-900 leading-tight line-clamp-1">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 leading-tight line-clamp-1">
          {item.originalTitle}
        </p>
      </div>
    </div>
  );
}



