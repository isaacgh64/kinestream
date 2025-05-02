import { Link } from "react-router";

// Top Menu in all pages
export default function TopMenu() {
  return (
    <header className="bg-sky-500 text-white py-10 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl">
          <span>🎬 </span>
          <Link to={"/"} className="font-bold hover:text-blue-800 transition">  KineStream </Link>
        </div>
        <nav className="space-x-6 hidden md:flex text-2xl font-bold max-w-7xl">
          <a href="#" className="hover:underline hover:text-blue-800 transition">Películas</a>
          <a href="#" className="hover:underline hover:text-blue-800 transition">Series</a>
          <a href="#" className="hover:underline hover:text-blue-800 transition">TV</a>
        </nav>
        <div className="text-2xl font-bold">
          <Link to={"/login"} className="cursor-pointer hover:underline hover:text-blue-800 transition">Iniciar Sesión</Link>
          <span> 👤</span>
        </div>
      </div>
      
    </header>
    
  )
}
