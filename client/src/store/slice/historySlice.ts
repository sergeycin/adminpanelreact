import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface PagesState{
    loading: boolean,
    error: string,
    autosalon: any[],
    automark: any[],
   message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    autosalon: [],
    automark: [],
    message: ''

}





export const historySLice = createSlice({
    name: 'fields',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccessSalon(state,action: PayloadAction<any[]>){
            state.loading = false
            state.autosalon = action.payload
        },
        fetchSuccessMark(state,action: PayloadAction<any[]>){
            state.loading = false
            state.automark = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default historySLice.reducer


