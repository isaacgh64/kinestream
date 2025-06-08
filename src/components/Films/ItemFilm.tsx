import Film from "../../models/film"
import Starts from "../../models/starts"
import { Globals } from "../../Utils/globals"
import SwiperSeason from "../Global/SwiperGlobal"


type ItemFilmProps = {
    item:Film |undefined,
    start:Starts[]
    video:string
}
export default function ItemFilm({item,video,start}:ItemFilmProps) {

  return (
    <main className="w-full max-w-7xl bg-white shadow-2xl rounded-b-2xl overflow-hidden">
        {/* Imagen cabecera */}
        <div className="aspect-video w-full">
        <img
            src={(item?.backdropPath?.trim()) ? `https://image.tmdb.org/t/p/w1280/${item?.backdropPath}` : Globals.noPhoto}
            alt={`Póster de la película ${item?.title}`}
            className="w-full h-full object-cover rounded-b-2xl"
        />
        </div>

        <h1 className="text-center text-4xl sm:text-5xl font-bold mt-6 text-blue-500">
        {item?.title}
        </h1>

        <section className="px-6 sm:px-10 py-8 space-y-10">
        {/* Sinopsis */}
        {item?.overview?.trim() ? (
            <div>
            <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
                Sinopsis
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                {item?.overview}
            </p>
            </div>
        ) : <p></p>}
        
        {/* Géneros */}
        {(item?.genres?.length ?? 0) > 0 ? (
            <div>
            <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
                Géneros
            </h2>
            {item?.genres.map((item, index) => (
                <p key={index} className="text-base text-gray-600 italic">
                {item.name}
                </p>
            ))}
            </div>
        ) : <p></p>}

        {/* Actores */}
        {start?.length > 0 ? (
            <div>
            <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
                Actores
            </h2>
            <div className="mt-4">
                <SwiperSeason listStarts={start} type='starts' />
            </div>
            </div>
        ) : <p></p>}

        {/* Tráiler */}
        {video?.trim() ? (
            <div>
            <h2 className="font-semibold text-2xl sm:text-3xl mb-2 border-b-2 border-blue-500">
                Tráiler
            </h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                src={`https://www.youtube.com/embed/${video}`}
                className="w-full h-full"
                allowFullScreen
                title="Tráiler"
                ></iframe>
            </div>
            </div>
        ) : <p></p>}
        </section>
    </main>
  )
}
