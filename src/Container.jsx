


import Nav from './Components/Nav'
import Favorites from './Favs&WL/Favorites'
import Watchlist from './Favs&WL/Watchlist'
import Login from './Login&Signup/Login'
import Signup from './Login&Signup/Signup'
import Search from './Search/Search'
import Home from './Home/Home'
import Form from './Login&Signup/Form'
import TopRatedMovies from './Home/TopRatedMovies'
import PlayMovie from './Components/PlayMovie'
import { selectFormType } from './Redux/formSlice'
import Categories from './Home/Categories'

import { Routes, Route, Outlet } from 'react-router'
import { useSelector } from 'react-redux'

function Container() {
  const Modal = useSelector(selectFormType)
  return (
    <div className='main-container flex flex-col'> 
      <Nav />
      <Outlet />
    {Modal && (
      <Form />
    )}

      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/search' element={<Search  />} />
        <Route path='/movie' element={<PlayMovie />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/top-rated-movies' element={<TopRatedMovies />} />
        <Route path='/categorie' element={<Categories />} />
      </Routes>
    </div>
  )
}

export default Container
