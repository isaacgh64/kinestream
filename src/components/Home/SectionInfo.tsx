
type SectionInfoProps = {
    title: string,
    pos: number,
}

export default function SectionInfo({title,pos} : SectionInfoProps) {
    return (
        <>
            <div>
                <h3 className="text-3xl font-bold text-sky-600 mb-2">
                    {title}
                </h3>
                {(pos==1)?<>
                    <p className="mb-4">
                        <strong className="text-blue-500 font-semibold">KineStream</strong> es tu nueva ventana al mundo del cine y la televisión.<br/>
                        Una aplicación web inteligente que te permite explorar <strong className="text-blue-500 font-semibold">películas, series y programas de televisión</strong> como nunca antes.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 ms-6 marker:text-blue-500">
                        <li>Títulos destacados y novedades</li>
                        <li>Tráilers oficiales</li>
                        <li>Repartos completos</li>
                        <li>Sinopsis, géneros, fechas de estreno y mucho más</li>
                    </ul>
                    <p className="mb-4">
                        Con <strong className="text-blue-500 font-semibold">KineStream</strong>, la información que buscas está a solo un clic.<br/>
                        Ya sea que estés planeando tu próxima maratón o simplemente tengas curiosidad, aquí encontrarás <strong className="text-blue-500 font-semibold">todo el contenido, en un solo lugar.</strong>
                    </p>
                </>
                :
                <>
                    <p className="mb-4">
                        Todo lo que necesitas saber antes de ver… <strong className="text-blue-500 font-semibold">¡lo que sea!</strong><br/>
                        En <strong className="text-blue-500 font-semibold">KineStream</strong>, no solo exploras títulos, descubres <strong className="text-blue-500 font-semibold">todo lo que hay detrás de tus películas, series y programas favoritos.</strong>
                    </p>
                    <ul className="space-y-1 text-gray-700 mb-4 ms-6">
                        <li>🎞️ Tráilers actualizados</li>
                        <li>🧑‍🎤 Reparto y biografías de actores</li>
                        <li>📝 Sinopsis detalladas</li>
                        <li>📅 Fechas de estreno</li>
                        <li>🎭 Géneros y plataformas donde verlos</li>
                    </ul>
                    <p className="">
                        Desde el próximo gran estreno hasta esa serie que todos comentan, <strong className="text-blue-500 font-semibold">KineStream</strong> te ayuda a decidir <em>qué ver, cuándo y por qué</em>.
                    </p>
                </>
                }
            </div>
        </>
    )
}
