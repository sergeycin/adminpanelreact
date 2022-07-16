import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PagesState{
    loading: boolean,
    error: string,
    pages: string[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    pages: []

}


export const pagesSLice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<string[]>){
            state.loading = false
            state.pages = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }
    }
})


export default pagesSLice.reducer