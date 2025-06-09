import { useNavigate } from "react-router-dom";
import Films from "../../models/films";
import TV from "../../models/tv";
import { Globals } from "../../Utils/globals";
import { useState } from "react";


type CardsType={
  item:Films|TV
  type:string
}

export default function Cards({ item,type }: CardsType) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);

  function navigatePage() {
    navigate(`/content?type=${type ?? 'movie'}&id=${item.id}`);
  }

  return (
    <div
      onClick={navigatePage}
      className="inline-block w-full max-w-48 sm:max-w-60 md:max-w-72 lg:max-w-80 bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 cursor-pointer"
    >
      <div>
        
        {isLoading && (
          <img 
            src="/loading.gif"
            alt="Cargando..." 
            className="object-cover w-full aspect-[2/3]"
          />
                )}
                <img
                  src={(item?.posterPath?.trim()) ? `https://image.tmdb.org/t/p/w1280/${item.posterPath}` : Globals.noPhoto}
                  alt={`Póster de la película ${item.title}`}
                  className={`object-cover w-full aspect-[2/3] ${isLoading ? 'hidden' : ''}`}
                  onLoad={() => setIsLoading(false)} // Oculta el loader cuando la imagen se carga
                />
        </div>
      <div className="px-3 py-2 sm:px-4 sm:py-3 text-center border-t border-gray-200 bg-gray-50 h-auto min-h-[84px] sm:min-h-[96px] flex flex-col justify-center">
        <h4 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 leading-tight line-clamp-2">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-tight line-clamp-1">
          {item.originalTitle}
        </p>
      </div>
    </div>

  );
}



