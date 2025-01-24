import { configureStore } from '@reduxjs/toolkit'
import  favoritesSlice  from './favoritesSlice'
import watchlistSlice from './watchlistSlice'

export const store = configureStore({
  reducer: {favorites: favoritesSlice ,
            watchlist: watchlistSlice,},
            
})

