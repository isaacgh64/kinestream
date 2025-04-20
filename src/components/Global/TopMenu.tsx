// Top Menu in all pages
export default function TopMenu() {
  return (
    <nav className="border-b-2 shadow-2xl border-gray-400 w-full p-12 bg-sky-500 flex flex-row justify-between">
        <img src="/logo_app.png" width={90}  alt="" />
        <ul className="flex flex-row">
            {/* <li className="me-30 text-2xl text-white font-bold cursor-pointer hover:border-b-3 border-white">Inicio</li> */}
            <li className="me-30 text-2xl text-white font-bold cursor-pointer hover:border-b-3 border-white">Películas</li>
            <li className="me-30 text-2xl text-white font-bold cursor-pointer hover:border-b-3 border-white">Series</li>
            <li className="text-2xl text-white font-bold cursor-pointer hover:border-b-3 border-white">TV</li>
        </ul>
        <div className="flex flex-row">
            <ul className="pe-2">
              <li className="text-2xl text-white font-bold cursor-pointer hover:border-b-3 border-white">Iniciar Sesión</li>
            </ul>
            <form action="">
              <select name="" id="" className="text-xl text-white">
                <option value="" >--IDIOMA--</option>
              </select>
            </form>
            
        </div>
    </nav>
  )
}
