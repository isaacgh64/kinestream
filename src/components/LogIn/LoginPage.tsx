import { useMemo } from "react"
import LoginView from "./LoginView"
import RegisterView from "./RegisterView"
import ChangeView from './ChangeView';
import useChangeViewLogIn from "../../hooks/useChangeViewLogIn"

export default function LoginPage() {

    const {state,changeView} = useChangeViewLogIn()

    //Check the view Page
    const isRegister = useMemo(() => {
        return state.register
    },[state])

    //Content logIn page
    return (
        <>
            <section className="grid h-250  content-center ms-200 me-200 ">
                <div className="border-2 border-sky-500 p-8 rounded-[2vw]">
                    <form className="space-y-5">
                    <ChangeView
                        isRegister = {isRegister}
                        changeView = {changeView}
                    />
                    {(isRegister)
                        ?<RegisterView/>
                        :<LoginView/>} 
                    </form>
                </div>     
            </section>  
           
        </>
        
    )

    
}
