import { createSlice } from '@reduxjs/toolkit'



 const favoritesSlice = createSlice({
  name: 'favorites',
  initialState : [],
  reducers: {
    add_to_favorites: function (state,action){
      const existingMovie = state.find(item => item.id === action.payload.id)
      if (!existingMovie) {state.push(action.payload);}
    },
    remove_from_favorites: function (state,action){
      return state.filter(item => item.id !== action.payload.id);
    },

  },
});


export const { add_to_favorites, remove_from_favorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;