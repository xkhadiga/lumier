import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router';
import SearchC from '../Search/SearchC'
import {  useDispatch } from 'react-redux';
import { rdx_setForm } from '../Redux/formSlice';
import { reset_page } from '../Redux/pageSlice';
import CategorieMenu from './CategorieMenu';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa6';
import { IoLogInOutline } from 'react-icons/io5';
import { TiThMenu, TiUserAdd } from "react-icons/ti";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { rdx_login } from '../Redux/formSlice';
import { motion } from "framer-motion";





function Nav( ) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dropdownRef = useRef(null)
    const login = useSelector((state)=> state.setForm.login)

    // Dropdown menu********************
    const [isOpen, setIsOpen] = useState(false);
    const [smMenu, setSmMenu]=useState(false);

    const toggleDropdown = () => {
      setIsOpen( !isOpen) }

    useEffect(()=>{
      const handle_click = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) )
        {setIsOpen(!isOpen)};
      }
      document.addEventListener("mousedown", handle_click);
      return () => document.removeEventListener("mousedown", handle_click)
    },[]);
    const handle_navigate=(path) => {
      navigate(path);
      setIsOpen(!isOpen);
    }
    const [categoriesMenu, setCategoriesMenu]=useState(false);
    const handle_categories= ()=> {
      setCategoriesMenu((prev)=> !prev);
    }
    const handle_categories_i = () => {
      setCategoriesMenu(!categoriesMenu)
      setSmMenu(false);
      setIsOpen(false);
    }

    // {*Handle Small menu *}
    const handle_sm_categories= ()=> {
      setSmMenu(!smMenu);
    }
    const handle_logout = ()=>{
      setTimeout(()=> {dispatch(rdx_login(false))}, 2000)
      
    }
    
  return (
    <>
        <div className='main-nav flex items-center justify-between  text-white gap-2 py-3'>
          {/* Logo And Search  *******************8***** */}
            <div className='flex items-center gap-8 justify-between text-nowrap ms-10 '> 
              <button className='logo text-2xl' onClick={()=>      dispatch(reset_page())}>
                <Link to="/">Lumiere Movies</Link>
              </button>
              <div className='hidden sm:flex items-center '>
              <SearchC />
              </div>
            </div>
           {/* Links and Login *********************** */}

            <div className='nav-links w-full hidden xl:flex items-center justify-end gap-28 me-8 '>
            {/* {login && (                  
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              > */}
                <div className='flex gap-3'>

                  <button className='nav-link' onClick={()=>      dispatch(reset_page())}><Link to="/"> Home </Link></button>
                  <div className='nav-link'>
                    <button onClick={()=> navigate("/favorites")}> Favorites </button>
                  </div>
                  <div className='nav-link'><Link to="/watchlist"> Watchlist </Link></div>
            {/*  Categories with IDs************************* */}
                  <div className='flex justify-center'>
                        <button onClick={()=>handle_categories()} 
                        className='relative categoris-btn '>Categories</button>                       
                        {categoriesMenu && (                        
                            <CategorieMenu handle_categories_i={handle_categories_i} />                          
                        )}                       
                  </div>
                </div>
                {/* </motion.div> 
              )} */}
              {/* {!login && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                >                 */}
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
                 {/* </motion.div>
                  )} */}

                {/* {login && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >                   */}
                      {/* <div className='nav-link'> 
                      <button onClick={()=>handle_logout()}> 
                      Log out 
                      </button> 
                      </div> */}
                    {/* </motion.div>
                  )} */}
            </div>
          
        {/* Small Screens Menu */}
        {/* {login && (
                      <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      exit={{ opacity: 0 }}
                    >         */}
            <div className='relative xl:hidden items-center gap-6 flex'>
              <button  className='me-8 text-2xl' onClick={()=> toggleDropdown()}>
                <TiThMenu />
              </button>
              {
                isOpen && (

              <div ref={dropdownRef} className='animate-in zoom-in duration-500 drop-menu absolute border w-52 top-10 right-4 bg-black rounded-2xl p-4 flex flex-col z-50 gap-2'>

                  <div className='drop-menu-item'>
                  <AiFillHome /> 
                  <button  onClick={() => handle_navigate("/")}> Home </button ></div> 
                  <span className='span'></span>
                  <div className='drop-menu-item'> <MdFavorite /> <button onClick={() => handle_navigate("/favorites")}> Favorites </button></div> <span className='span'></span>
                  <div className='drop-menu-item'><FaBookmark /> <button onClick={() => handle_navigate("/watchlist")}>  Watchlist </button></div> <span className='span'></span>
                  {/*Categories Menu *************************** */}
                  <div  className='flex flex-col'>
                      <button onClick={()=> handle_sm_categories()}
                      className='flex relative drop-menu-item'>
                      <span> <BsArrowDownCircleFill /> </span>
                      <p>Categories</p>
                      </button>
                      {smMenu && (
                        <div  className=' right-24 relative'>
                          <CategorieMenu handle_categories_i={handle_categories_i}/>
                        </div>
                      )}
                  </div>
                  <span className='span'></span>
                  <div className='drop-menu-item'> <IoLogInOutline /> <button onClick={() => handle_navigate("/login")}>  Log in </button> </div> <span className='span'></span>
                  <div className='drop-menu-item'> <TiUserAdd /> <button onClick={() => handle_navigate("/signup")}>  Sign up </button> 
                  </div>

              </div>
                )
              }
            </div>
            {/* </motion.div>
        )} */}
        </div>
        {/* Small Screens Search */}
        {/* {login && (
          <motion.div
          initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         exit={{ opacity: 0 }}
                   >          */}
            <div className='bg-transparent flex sm:hidden items-center justify-center pt-4 border-none'>
              <SearchC />         
            </div> 
        {/* </motion.div>  
        ) }     */}
    </>
  )
}

export default Nav