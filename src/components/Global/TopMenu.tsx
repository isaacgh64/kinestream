import { Link } from "react-router";
import { useToken } from "../../hooks/useToken";
import { useStream } from "../../hooks/useStream";

// Top Menu in all pages
export default function TopMenu() {
  const {dispatch} = useStream()
  const {state} = useToken()
  return (
    <header className="bg-blue-600 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
      <Link to={"/"} className="text-3xl font-bold hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true}})}>KineStream</Link>
      <nav className="space-x-15 hidden md:flex text-2xl font-semibold me-10">
        <Link to={"/films"} className="hover:underline hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true}})}>Películas</Link>
        <Link to={"/series"} className="hover:underline hover:text-yellow-300 transition duration-300" onClick={() => dispatch({type:"change-view",payload:{view_stream:true}})}>Series</Link>
        <a href="#" className="hover:underline hover:text-yellow-300 transition duration-300">TV</a>
      </nav>
      <Link to={(!state.logIn)?"/login":"/user"} className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 me-8" onClick={() => dispatch({type:"change-view",payload:{view_stream:true}})}>{(!state.logIn)?"Iniciar Sesión":"Mi Cuenta"}</Link>
    </div>
</header>

    
  )
}
