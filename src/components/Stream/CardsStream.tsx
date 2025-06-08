import { useStream } from "../../hooks/useStream";
import Platform from "../../models/platform";
import { Globals } from "../../Utils/globals";


type CardsType={
  item:Platform
}

export default function Stream({item}:CardsType) {
  const {dispatch} = useStream()
  return (
    <div
      className="w-36 sm:w-40 md:w-44 lg:w-48 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col items-center"
      onClick={() =>
        dispatch({ type: "add-stream", payload: { id_stream: item.providerId, view_stream: false } })
      }
    >
      <div className="w-full h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center bg-white p-4">
        <img
          src={
            item?.logoPath?.trim()
              ? `https://image.tmdb.org/t/p/original/${item.logoPath}`
              : Globals.noPhoto
          }
          alt={item.providerName}
          className="object-contain w-full h-full"
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



