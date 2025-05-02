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
        <div className="w-full min-h-[calc(100vh-120px)] flex justify-center items-center bg-neutral-50">
            <section className="w-full max-w-7xl bg-white px-20 py-20 shadow-lg rounded-2xl">
                <div className="border-2 border-blue-500 p-8 rounded-2xl">
                    <form className="space-y-4">
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
        </div>
       
    )

    
}
