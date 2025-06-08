
import Starts from "../../models/starts";
import { Globals } from "../../Utils/globals";



type CardsType={
  item:Starts
}

export default function Start({ item }: CardsType) {
 
  return (
      <div
        className="sm:max-w-xs inline-block bg-white overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6 me-3 w-40"
      >
      <img
        src={(item?.profilePath?.trim())?`https://image.tmdb.org/t/p/w1280/${item.profilePath}`:Globals.noPhoto}
        alt={`Actor/Actriz ${item.name}`}
        className="object-cover w-40 aspect-square rounded-t-xl"
      />
      <div className="text-center border-t border-gray-200 bg-gray-50 pb-3 h-20">
        <h4 className="font-bold text-xl text-gray-900 m-3 line-clamp-2">
          {item.name}
        </h4>
      </div>
      </div>
  );
}