import { useState } from "react";
import { useStream } from "../../hooks/useStream";
import Platform from "../../models/platform";
import { Globals } from "../../Utils/globals";


type CardsType={
  item:Platform
}

export default function Stream({item}:CardsType) {
  const {dispatch} = useStream()
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className="w-36 sm:w-40 md:w-44 lg:w-48 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col items-center"
      onClick={() =>
        dispatch({ type: "add-stream", payload: { id_stream: item.providerId, view_stream: false } })
      }
    >
      <div>
                {isLoading && (
                <img 
                    src="/loading.gif"
                    alt="Cargando..." 
                    className="object-contain w-full h-full"
                />
                )}
                <img
                    src={
                    item?.logoPath?.trim()
                      ? `https://image.tmdb.org/t/p/original/${item.logoPath}`
                      : Globals.noPhoto
                    }
                    alt={item.providerName}
                    className={`object-contain w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                />
        </div>
      <div className="w-full text-center border-t border-gray-200 bg-gray-50 py-3 px-2">
        <h4 className="font-semibold text-sm sm:text-base text-gray-800 truncate">
          {item.providerName}
        </h4>
      </div>
    </div>

  )
}



