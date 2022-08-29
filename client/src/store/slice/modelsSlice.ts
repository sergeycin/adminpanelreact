import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface PagesState{
    loading: boolean,
    error: string,
    models: any[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    models: []

}



export const modelsSLice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<any[]>){
            state.loading = false
            state.models = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default modelsSLice.reducer


