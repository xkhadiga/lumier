import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: [],
    reducers: {
        add_to_wl: function(state, action){
            const existingMovie= state.find(item => item.id === action.payload.id)
            if (!existingMovie) {state.push(action.payload)}
        },
        remove_from_wl: function(state, action){
            return state.filter(item => item.id !== action.payload.id)
        },
    }
})
export const { add_to_wl , remove_from_wl } = watchlistSlice.actions;
export default watchlistSlice.reducer;