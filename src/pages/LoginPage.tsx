import { useMemo } from "react"
import LoginView from "../components/LogIn/LoginView"
import RegisterView from "../components/LogIn/RegisterView"
import ChangeView from '../components/LogIn/ChangeView';
import useChangeViewLogIn from "../hooks/useChangeViewLogIn"

export default function LoginPage() {

    const {state,changeView} = useChangeViewLogIn()

    //Check the view Page
    const isRegister = useMemo(() => {
        return state.register
    },[state])

    //Content logIn page
    return (
        <div className="w-full min-h-[calc(100vh-120px)] flex justify-center items-center bg-neutral-50">
            <section className="w-full max-w-7xl bg-white px-5 lg:px-20 py-20 shadow-2xl rounded-2xl">
                <div className="border-2 border-blue-500 p-8 rounded-2xl">
                    <ChangeView
                        isRegister = {isRegister}
                        changeView = {changeView}
                    />
                    {(isRegister)
                        ?<RegisterView/>
                        :<LoginView/>} 
                    
                </div>     
            </section>       
        </div>
       
    )



    
}
