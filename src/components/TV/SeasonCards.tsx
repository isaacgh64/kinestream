
import { Globals } from "../../Utils/globals";
import Season from "../../models/seasons";


type CardsType={
  item:Season
}

export default function SeasonCards({ item }: CardsType) {
 
  return (
      <div
        className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-40"
      >
      <img
        src={(item?.posterPath?.trim())?`https://image.tmdb.org/t/p/w1280/${item.posterPath}`:Globals.noPhoto}
        alt={`Actor/Actriz ${item.name}`}
        className="object-cover w-40 h-50"
      />
     <div className="px-3 py-2 sm:px-4 sm:py-3 text-center border-t border-gray-200 bg-gray-50 h-[84px] sm:h-[96px] flex flex-col justify-center">
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