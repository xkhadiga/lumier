import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import SearchC from '../Components/SearchC';


function HomeX() {
  // Fetching Movies API + SEARCH *****
  let API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e71685172e401803cf905541e59f4861'
  
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    const handle_api = async() => {
      const res = await axios.get(API)
      console.log('axios res', res.data)
      if (res.data.results.length > 0 ){setMovies(res.data.results);}            
    } 
    handle_api();
  },[]);



  return (
    <> 
            <SearchC />
    <div className='flex items-center justify-between mx-20 mt-2 text-2xl text-white'>
        <div> Trending Movies</div>
        <div></div>
    </div>
    <div className='home-container flex flex-col pt-4 '>
      <div className='cards-container flex flex-wrap  '>
        { movies.map(movie => (

          <Card key={movie.id} movie={movie} />

        )) }
      </div>
    </div>
    </>
  )
}

export default HomeX