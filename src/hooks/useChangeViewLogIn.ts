import { useState } from 'react'
import { LogInTypePage } from '../types/types'

export default function useChangeViewLogIn() {

    const [state, setView] = useState<LogInTypePage>({
        register:false,
    })

    const changeView = ()  => {
        setView({
            ...state,
            register: (state.register)?false:true,
        })
    }
    return {
        state,
        changeView
    }
}
