
import { useState } from "react";
import Starts from "../../models/starts";
import { Globals } from "../../Utils/globals";



type CardsType={
  item:Starts
}

export default function Start({ item }: CardsType) {
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
            className="absolute inset-0 w-full h-full object-cover"
          />
          )}
          <img
            src={(item?.profilePath?.trim()) ? `https://image.tmdb.org/t/p/w1280/${item.profilePath}` : Globals.noPhoto}
            alt={`Actor/Actriz ${item.name}`}
            className="object-cover w-full aspect-[2/3] rounded-t-xl"
            onLoad={() => setIsLoading(false)} // Oculta el loader cuando la imagen se carga
          />
        </div>
        <div className="text-center border-t border-gray-200 bg-gray-50 pb-3 h-24 flex flex-col justify-center">
          <h4 className="font-bold text-lg sm:text-xl text-gray-900 m-3 line-clamp-2">
            {item.name}
          </h4>
        </div>
      </div>


  );
}