
import TopMenu from "./components/Global/TopMenu"
import AppRoutes from './routes/AppRoutes';
import { useToken } from "./hooks/useToken";
import { useEffect } from "react";
import { HashRouter } from "react-router-dom";



export default function App() {
    const {token} = useToken()
    useEffect(() => {
      localStorage.setItem('TOKENS',token.token)
    },[token])
    return (
      <HashRouter>
        <TopMenu/>
          <AppRoutes/>
      </HashRouter> 
    )
}


