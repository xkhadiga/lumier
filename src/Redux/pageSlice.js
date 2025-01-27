import { createSlice } from "@reduxjs/toolkit";   

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 1,
    },
    reducers:{
        get_page: function(state,action){
            state.page = action.payload;
        },
        reset_page: function(state){
            state.page = 1;
        }
    }
});

export const {get_page, reset_page} = pageSlice.actions;
export default pageSlice.reducer;