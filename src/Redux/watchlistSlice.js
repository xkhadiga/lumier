import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: JSON.parse(localStorage.getItem('watchlist')) || [] ,
    reducers: {
        add_to_wl: function(state, action){
            const existingMovie= state.find(item => item.id === action.payload.id)
            if (!existingMovie) {state.push(action.payload)}
            localStorage.setItem( 'watchlist' , JSON.stringify(state) );
        },
        remove_from_wl: function(state, action){
            const newState =  state.filter(item => item.id !== action.payload.id);
            localStorage.setItem('watchlist' , JSON.stringify(newState) );
            return newState
        },
    }
})
export const { add_to_wl , remove_from_wl } = watchlistSlice.actions;
export default watchlistSlice.reducer;