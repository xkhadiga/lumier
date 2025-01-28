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

import { useSelector, useDispatch } from 'react-redux';
import { rdx_setForm } from '../Redux/formSlice';
import SearchC from '../Search/SearchC'
import { reset_page } from '../Redux/pageSlice';



function Nav( ) {

    const dispatch = useDispatch();


    // Dropdown menu******
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen); }

  return (
    <>
        <div className='main-nav flex items-center justify-between  text-white gap-2 py-3'>
          {/* Logo And Search  ********** */}
            <div className='flex items-center gap-8 justify-between text-nowrap ms-10 '> 
              <button className='logo text-2xl' onClick={()=>      dispatch(reset_page())}>
                <Link to="/">Lumiere Movies</Link>
              </button>
              <div className='hidden sm:flex items-center '>
                <SearchC />
              </div>

            </div>
           {/* Links and Login ********** */}
            <div className='nav-links w-full hidden xl:flex items-center justify-end gap-40 me-8 '>
                <div className='flex gap-3'>

                  <button className='nav-link' onClick={()=>      dispatch(reset_page())}><Link to="/"> Home </Link></button>
                  <div className='nav-link'><Link to="/favorites"> Favorites </Link></div>
                  <div className='nav-link'><Link to="/watchlist"> Watchlist </Link></div>
                </div>

                <div className='flex gap-3'>
                  <div className='nav-link'> 
                    <button onClick={()=> dispatch(rdx_setForm('login'))}> 
                      Log in 
                    </button> 
                  </div>
                  <span>|</span>
                  <div className='nav-link'> 
                    <button onClick={()=> dispatch(rdx_setForm ('signup'))}> 
                        Sign up 
                    </button> 
                  </div>
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
        <div className='bg-transparent flex sm:hidden items-center justify-center py-4 border-none'>
          <SearchC />
        </div>
    </>
  )
}

export default Nav