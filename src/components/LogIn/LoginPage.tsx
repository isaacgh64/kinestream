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
            <section className={`flex content-center justify-center ${(isRegister)?"mt-25":"mt-50"} lg:ms-0 lg:me-0 ms-5 me-5`}>
                <div className="border-2 border-sky-500 p-8 rounded-[2vw] w-[800px]">
                    <form className="space-y-2">
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
