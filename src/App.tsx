import { BrowserRouter} from "react-router";
import TopMenu from "./components/Global/TopMenu"
import AppRoutes from './routes/AppRoutes';
import { useToken } from "./hooks/useToken";
import { useEffect } from "react";



export default function App() {
    const {state} = useToken()
    useEffect(() => {
      localStorage.setItem('TOKEN',state.token)
    },[state])
    return (
          <BrowserRouter>
            <TopMenu/>
            <AppRoutes/>
          </BrowserRouter> 
    )
}


