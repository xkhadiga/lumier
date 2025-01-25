import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        input:''
    },
    reducers: {
        rdx_search: function(state,action){
            state.input = action.payload;
        }
    }
})
export const {rdx_search} = searchSlice.actions
export default searchSlice.reducer