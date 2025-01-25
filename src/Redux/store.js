import { configureStore } from '@reduxjs/toolkit'
import  favoritesSlice  from './favoritesSlice'
import watchlistSlice from './watchlistSlice'
import formSlice from './formSlice'
import searchSlice from './searchSlice'

 const store = configureStore({
  reducer: {favorites: favoritesSlice ,
            watchlist: watchlistSlice,
            setForm: formSlice, 
            search: searchSlice,
        },
            
})

export default store