import { BrowserRouter} from "react-router";
import TopMenu from "./components/Global/TopMenu"
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <>
      <BrowserRouter>
        <TopMenu/>
        <AppRoutes/>
      </BrowserRouter>
      
    </>
  )
}

export default App
