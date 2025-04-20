
type SectionInfoProps = {
    title: string,
    pos: number,
}

export default function SectionInfo({title,pos} : SectionInfoProps) {
    return (
        <section>
            <h2 className="text-2xl text-sky-500 font-bold mb-4">
                {title}
            </h2>
            <div>
                {(pos==1)?<>
                    <p className="text-lg">
                        <strong className="text-sky-500">KineStream</strong> es tu nueva ventana al mundo del cine y la televisión.<br/>
                        Una aplicación web inteligente que te permite explorar <strong className="text-sky-500">películas, series y programas de televisión</strong> como nunca antes.
                    </p>
                    <p className="text-lg">Descubre todo lo que necesitas saber:</p>
                    <ul className="text-lg">
                        <li>🔹 Títulos destacados y novedades</li>
                        <li>🔹 Tráilers oficiales</li>
                        <li>🔹 Repartos completos</li>
                        <li>🔹 Sinopsis, géneros, fechas de estreno y mucho más</li>
                    </ul>
                    <p className="text-lg">
                        Con <strong className="text-sky-500">KineStream</strong>, la información que buscas está a solo un clic.<br/>
                        Ya sea que estés planeando tu próxima maratón o simplemente tengas curiosidad, aquí encontrarás <strong className="text-sky-500">todo el contenido, en un solo lugar.</strong>
                    </p>
                    <img src="" alt="" />
                </>
                :
                <>
                    <p className="text-lg">
                        Todo lo que necesitas saber antes de ver… <strong className="text-sky-500">¡lo que sea!</strong><br/>
                        En <strong className="text-sky-500">KineStream</strong>, no solo exploras títulos, descubres <strong className="text-sky-500">todo lo que hay detrás de tus películas, series y programas favoritos.</strong>
                    </p>
                    <p className="text-lg">📌 Encuentra información al instante:</p>
                    <ul className="ms-6 text-lg">
                        <li>🎞️ Tráilers actualizados</li>
                        <li>🧑‍🎤 Reparto y biografías de actores</li>
                        <li>📝 Sinopsis detalladas</li>
                        <li>📅 Fechas de estreno</li>
                        <li>🎭 Géneros y plataformas donde verlos</li>
                    </ul>
                    <p className="text-lg">
                        Desde el próximo gran estreno hasta esa serie que todos comentan, <strong className="text-sky-500">KineStream</strong> te ayuda a decidir <em>qué ver, cuándo y por qué</em>.
                    </p>
                </>
                }
            </div>
        </section>
    )
}
