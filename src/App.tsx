import { BrowserRouter} from "react-router";
import TopMenu from "./components/Global/TopMenu"
import AppRoutes from './routes/AppRoutes';
import { useToken } from "./hooks/useToken";
import { useEffect } from "react";



export default function App() {
    const {token} = useToken()
    useEffect(() => {
      localStorage.setItem('TOKEN',token.token)
    },[token])
    return (
          <BrowserRouter>
            <TopMenu/>
            <AppRoutes/>
          </BrowserRouter> 
    )
}


