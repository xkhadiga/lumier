import React, { useEffect, useState, useRef } from 'react';

import HomeX from './HomeX';
import HomeInfinite from './HomeInfinite';
import MainCarousel from './MainCarousel';
import Loading from './Loading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";





function Home() {

// Handle Infinite Loading ********
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    const handle_loading= ()=> {
      window.setTimeout(()=>{
        setLoaded(true)
      }, 500)
    }
    handle_loading();
  },[])

// Handle Up Button********
const [visible, setVisible]= useState(false);
  const handle_up = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  const handle_up_visible = ()=>{
      if (window.scrollY > 300){ setVisible(true) }
      else {setVisible(false)}
  }
  useEffect(()=>{
    window.addEventListener("scroll" , handle_up_visible)
    return () =>{
      window.removeEventListener("scroll" , handle_up_visible)
    }  
  },[])


     if( loaded) 
      return (
     <>
     {visible && (
        <button className='home-up-btn text-3xl fixed z-10 bottom-10 right-20' onClick={handle_up}>
          <BsArrowUpCircleFill />
        </button>
     )} 

     <div className='main-carousel'><MainCarousel /> </div>
      <HomeInfinite />
      {/* <HomeX /> */}
     </>

   )
    else return  (
      <Loading />
  ) 
}

export default Home