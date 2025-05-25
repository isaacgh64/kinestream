import { createContext, ReactNode, useReducer } from "react"
import { initialState, StreamActions, streamReducer, StreamState } from "../reducers/stream-reducer"


type StreamContextProps = {
    state: StreamState
    dispatch: React.Dispatch<StreamActions>
}

type StreamProvidersProps = {
    children: ReactNode
}

export const StreamContext = createContext<StreamContextProps>(null!)

export const StreamProvider = ({children} : StreamProvidersProps) => {

    const [state,dispatch] = useReducer(streamReducer,initialState)
     
    return (
        <StreamContext.Provider value={{state,dispatch}}>
            {children}
        </StreamContext.Provider>
    )
}