import { useEffect, useState } from 'react';
import Loading from './Loading'
import HomeInfinite from './HomeInfinite';
import MainCarousel from './MainCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Animate } from 'react-simple-animate';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';





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

  // Handle Login********
  const login = useSelector((state)=> state.setForm.login)



     if( loaded) 
      return (
     <>
     {visible && (
        <button className='home-up-btn text-3xl fixed z-10 bottom-10 right-20' onClick={handle_up}>
          <BsArrowUpCircleFill />
        </button>
     )} 

     <div className='main-carousel'>
                  {/* {login && (                  
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      exit={{ opacity: 0 }}
                    > */}
      <Animate
        play
        start={{ opacity: 0, transform: "scale(0.8)" }}
        end={{ opacity: 1, transform: "scale(1)" }}
        duration={0.8}
        delay={0.1}
      >
      <MainCarousel />
      </Animate>
                    {/* </motion.div> )} */}
      </div>
      <Animate
        play
        start={{ transform: "translateY(35%)", opacity: 0 }}
        end={{ transform: "translateY(0)", opacity: 1 }}
        duration={0.7}
        delay={0.5}
        >

      <HomeInfinite />
      </Animate>
     </>

   )
    else return  (
      <Loading />
  ) 
}

export default Home