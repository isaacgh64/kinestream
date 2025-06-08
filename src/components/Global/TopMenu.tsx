import { useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import { useStream } from "../../hooks/useStream";


export default function TopMenu() {
  const { dispatch } = useStream();
  const { token } = useToken();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link to={"/"} className="text-3xl font-bold hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true,type:"movie",title:""}})}>KineStream</Link>
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav className={`absolute top-16 right-6 bg-blue-700 p-6 rounded-lg shadow-xl flex flex-col space-y-4 ${isOpen ? "block" : "hidden"} md:hidden`}>
          <Link 
            to={"/stream/movie/peliculas"} 
            className="hover:underline hover:text-yellow-300 transition duration-300"
            onClick={() =>{
              setIsOpen(false)
              dispatch({type:"change-view",payload:{view_stream:true,type:"movie",title:"películas"}})
            } }
          >
            Películas
          </Link>
          <Link 
            to={"/stream/tv/series"} 
            className="hover:underline hover:text-yellow-300 transition duration-300"
            onClick={() => {
              setIsOpen(false)
              dispatch({type:"change-view",payload:{view_stream:true,type:"tv",title:"series"}})
            } }
          >
            Series
          </Link>
          <Link 
            to={(!token.logIn) ? "/login" : "/user"} 
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {(!token.logIn) ? "Iniciar Sesión" : "Mi Cuenta"}
          </Link>
        </nav>
        <nav className="space-x-15 hidden md:flex text-2xl font-semibold me-10">
          <Link to={`/stream/movie/peliculas`} className="hover:underline hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true,type:"movie",title:"películas"}})}>Películas</Link>
          <Link to={"/stream/tv/series"} className="hover:underline hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true,type:"tv",title:"series"}})}>Series</Link>
         
        </nav>
        <Link to={(!token.logIn)?"/login":"/user"} className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 me-8 hidden md:flex" onClick={() => dispatch({type:"change-view",payload:{view_stream:true,type:"movie",title:""}})}>{(!token.logIn)?"Iniciar Sesión":"Mi Cuenta"}</Link>
      </div>
    </header>
  );
}

        