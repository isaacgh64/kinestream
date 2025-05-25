export type StreamActions = 
    {type:'add-stream',payload:{id_Stream:number}} |
    {type: 'close-login'}

export type StreamState = {
    id_Stream: number
}


export const initialState : StreamState = {
    id_Stream:-1,
}

export const streamReducer = (
    state: StreamState = initialState,
    action: StreamActions
) => {
    if(action.type === 'add-stream'){
        return{
            ...state,
            id_Stream:action.payload.id_Stream,
        }
    }
    if(action.type === 'close-login'){
        return{
            ...state,
            id_Stream:-1,
        }
    }
    return state;
}