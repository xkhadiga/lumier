


import Nav from './Components/Nav'
import Favorites from './Favs&WL/Favorites'
import Watchlist from './Favs&WL/Watchlist'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Search from './Components/Search'
import HomeX from './Home/HomeX'
import Pobular from './Home/popular'
import Form from './Login/Form'

import { selectFormType } from './Redux/formSlice'


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
        <Route path='/' element={ <HomeX /> } />
        <Route path='/search' element={<Search  />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Container
