export type TokenActions = 
    {type:'add-token',payload:{token:string}} |
    {type: 'close-login'}

export type TokenState = {
    token: string
    logIn: boolean
}

const initialToken = () : string => {
    const localStorageToken = localStorage.getItem('TOKENS')
    return localStorageToken ? localStorageToken : ""
}

export const initialState : TokenState = {
    token:initialToken(),
    logIn:initialToken()!=""?true:false,
}

export const tokenReducer = (
    state: TokenState = initialState,
    action: TokenActions
) => {
    if(action.type === 'add-token'){
        return{
            ...state,
            token:action.payload.token,
            logIn:true
        }
    }
    if(action.type === 'close-login'){
        return{
            ...state,
            token:"",
            logIn:false
        }
    }
    return state;
}