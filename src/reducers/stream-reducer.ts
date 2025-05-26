export type StreamActions = 
    {type:'add-stream',payload:{id_stream:number, view_stream:boolean}} |
    {type:'delete-stream'}|
    {type:'change-view',payload:{view_stream:boolean}}

export type StreamState = {
    id_stream: number
    view_stream:boolean
}


export const initialState : StreamState = {
    id_stream:-1,
    view_stream:true,
}

export const streamReducer = (
    state: StreamState = initialState,
    action: StreamActions
) => {
    if(action.type === 'add-stream'){
        return{
            ...state,
            id_stream:action.payload.id_stream,
            view_stream:action.payload.view_stream,
        }
    }
    if(action.type === 'change-view'){
        return{
            ...state,
            view_stream:action.payload.view_stream,
        }
    }
    if(action.type === 'delete-stream'){
        return{
            ...state,
            id_stream:-1,
            view_stream:true
        }
    }
    return state;
}