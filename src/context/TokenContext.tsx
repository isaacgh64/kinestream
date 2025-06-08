import { createContext, ReactNode, useReducer } from "react"
import { initialState, TokenActions, tokenReducer, TokenState } from "../reducers/token-reducer"

type TokenContextProps = {
    token: TokenState
    dispatch: React.Dispatch<TokenActions>
}

type TokenProvidersProps = {
    children: ReactNode
}

export const TokenContext = createContext<TokenContextProps>(null!)

export const TokenProvider = ({children} : TokenProvidersProps) => {

    const [token,dispatch] = useReducer(tokenReducer,initialState)
     
    return (
        <TokenContext.Provider value={{token,dispatch}}>
            {children}
        </TokenContext.Provider>
    )
}