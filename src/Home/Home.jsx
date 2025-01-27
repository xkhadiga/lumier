import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import HomeX from './HomeX';
import TrendingMovies from './TopRatedMovies';
import Card from '../Components/Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowCircleRight } from 'react-icons/fa';


import SliderCard from '../Components/SliderCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Home() {
  const [movies,setMovies]=useState([])

  let API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e71685172e401803cf905541e59f4861'

  const handle_api = async() => {
    const res = await axios.get(API)
    console.log('axios res', res.data)
    const Result = res.data.results.slice(0, 20);
    if(Result.length > 0){
      setMovies(Result);                
    }
  } 
  useEffect(()=>{
    handle_api();
  },[])

  const RightArrow = (props)=>{
    const {onClick}= props;
    return (
    <button onClick={onClick} className='slider-button right -mx-11'>
      <FaChevronRight />
    </button>   )}
  const LeftArrow = (props)=>{
    const {onClick}= props;
    return (
    <button onClick={onClick} className='slider-button left -mx-11'>
      <FaChevronLeft />
    </button>   )}
  

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 1,
    cssEase: "linear",
    nextArrow: <RightArrow /> ,
    prevArrow: <LeftArrow />,
  };
  

  return (
    <> 
      {/* Trending Movies *********/}

      <div className='relative'>
      <div className='slider-header flex items-center py-2 justify-between mx-16 mt-8'>
            <span className='slider-header-span'>Top Rated Movies</span>
            <Link to='/top-rated-movies' className='slider-header-btn flex items-center gap-2 ' >
                <span>  view more </span>
                <span className='text-sm'> <FaArrowCircleRight /> </span> 

            </Link>
          </div>
          <div className='home-slider rounded-3xl p-2 mx-10'>
            <Slider {...settings}>

              { movies.map(movie => (
                  <SliderCard key={movie.id} movie={movie} />
                  )) }


            </Slider>
          </div> 

      </div>
      {/* All Movies and TV Shows **********/}
      <HomeX />
    </>
  )
}

export default Home