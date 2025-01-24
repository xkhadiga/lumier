import React from 'react'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa6';
import { IoLogInOutline } from 'react-icons/io5';
import { TiUserAdd } from 'react-icons/ti';

import { Link } from 'react-router';



function Nav( ) {

    // Dropdown menu******
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen); }

    // Search*********
    const [searchMovies,setSearchMovies]=useState('')
    const handleSearchMovies=(e)=>{
      setSearchMovies(e.target.value)
    }
    console.log('searched', searchMovies)

  return (
    <>
        <div className='main-nav flex items-center justify-between bg-black text-white  h-20'>
          {/* Logo And Search  ********** */}
            <div className='flex items-center text-nowrap justify-between ms-4 w-full gap-10'> 
              <div className='logo text-2xl'>
                Lumiere Movies
              </div>
              <div className='search-input hidden xl:flex  items-center rounded-full w-96 border-2 border-white'>
                  <input type="search" placeholder='Search Movies' 
                          className='rounded-l-full items-center p-1 text-black text-left pl-4 flex-1'
                          value={searchMovies}
                          onChange={()=> handleSearchMovies()}
                          
                  />
                  <Link to="/search" className='p-2 items-center'> <IoSearch /> </Link>
              </div>
            </div>
           {/* Links and Login ********** */}
            <div className='nav-links w-full hidden xl:flex items-center justify-end gap-24 me-8'>
                <div className='flex gap-3'>

                  <div className='nav-link'><Link to="/"> Home </Link></div>
                  <div className='nav-link'><Link to="/favorites"> Favorites </Link></div>
                  <div className='nav-link'><Link to="/watchlist"> Watchlist </Link></div>
                </div>

                <div className='flex gap-3'>
                  <div className='nav-link'> <Link to="/Login"> Log in </Link> </div>
                  <span>|</span>
                  <div className='nav-link'> <Link to="/Signup"> Sign up </Link> </div>
                </div>
            </div>
        {/* Small Screens Menu */}
            <div className='relative xl:hidden items-center gap-6 flex'>
              <button  className='me-8 text-2xl' onClick={toggleDropdown}>
                <TiThMenu />
              </button>
              {
                isOpen && (

              <div className='drop-menu absolute border w-52 top-10 right-4 bg-black rounded-2xl p-4 flex flex-col gap-2'>

                  <div className='drop-menu-item'>
                  <AiFillHome /> 
                  <Link to="/"> Home </Link></div> 
                  <span className='span'></span>
                  <div className='drop-menu-item'> <MdFavorite /> <Link to="/favorites"> Favorites </Link></div> <span className='span'></span>
                  <div className='drop-menu-item'><FaBookmark /> <Link to="/watchlist">  Watchlist </Link></div> <span className='span'></span>
                  <div className='drop-menu-item'> <IoLogInOutline /> <Link to="/Login">  Log in </Link> </div> <span className='span'></span>
                  <div className='drop-menu-item'> <TiUserAdd /> <Link to="/Signup">  Sign up </Link> </div>
              </div>
                )
              }
            </div>

        </div>
        {/* Small Screens Search */}
        <div className='bg-black flex sm:hidden items-center justify-center py-4 border-none'>
            <div className=' flex  items-center rounded-full w-52 border-2 border-white '>
                  <input type="search" placeholder='Search Movies' 
                          className='rounded-l-full items-center p-1 text-black text-left pl-4 w-full '
                          
                  />
                  <button className='p-2 items-center text-white '>
                  <IoSearch />
                  </button>
              </div>
        </div>
    </>
  )
}

export default Nav