


import Nav from './components/Nav'
import Favorites from './components/Favorites'
import Watchlist from './components/Watchlist'
import Login from './login/Login'
import Signup from './login/Signup'
import Home from './components/Home'
import Search from './components/Search'

import { Routes, Route, Outlet } from 'react-router'

function Container() {


  return (
    <div className='main-container flex flex-col'> 
      <Nav />
      <Outlet />
      <Routes>
        <Route path='/' element={<Home />} />
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
