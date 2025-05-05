import { createContext, ReactNode, useReducer } from "react"
import { initialState, TokenActions, tokenReducer, TokenState } from "../reducers/token-reducer"

type TokenContextProps = {
    state: TokenState
    dispatch: React.Dispatch<TokenActions>
}

type TokenProvidersProps = {
    children: ReactNode
}

export const TokenContext = createContext<TokenContextProps>(null!)

export const TokenProvider = ({children} : TokenProvidersProps) => {

    const [state,dispatch] = useReducer(tokenReducer,initialState)
     
    return (
        <TokenContext.Provider value={{state,dispatch}}>
            {children}
        </TokenContext.Provider>
    )
}