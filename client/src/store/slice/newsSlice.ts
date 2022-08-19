import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface PagesState{
    loading: boolean,
    error: string,
    news: string[]
}

const initialState: PagesState = {
    loading: false,
    error: '',
    news: []

}



export const newsSLice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<string[]>){
            state.loading = false
            state.news = action.payload
        },
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default newsSLice.reducer


