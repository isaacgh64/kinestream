
import { useState } from "react";
import { Globals } from "../../Utils/globals";
import Season from "../../models/seasons";


type CardsType={
  item:Season
}

export default function SeasonCards({ item }: CardsType) {
   const [isLoading, setIsLoading] = useState(true);
  return (
     <div
      className="inline-block w-full max-w-40 sm:max-w-xs bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3"
    >
      <div >
        {isLoading && (
          <img 
            src="/loading.gif"
            alt="Cargando..." 
            className="object-cover w-full aspect-[2/3] rounded-t-xl"
          />
          )}
          <img
            src={(item?.posterPath?.trim()) ? `https://image.tmdb.org/t/p/w1280/${item.posterPath}` : Globals.noPhoto}
            alt={`Actor/Actriz ${item.name}`}
            className="object-cover w-full aspect-[2/3] rounded-t-xl"
            onLoad={() => setIsLoading(false)} // Oculta el loader cuando la imagen se carga
          />
        </div>
    
      <div className="px-3 py-2 sm:px-4 sm:py-3 text-center border-t border-gray-200 bg-gray-50 h-24 flex flex-col justify-center">
        <h4 className="font-semibold text-sm sm:text-base text-gray-900 leading-tight line-clamp-2">
          {item.name}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 leading-tight line-clamp-2">
          {`Episodios: ${item.episodeCount}`}
        </p>
      </div>
    </div>

  );
}