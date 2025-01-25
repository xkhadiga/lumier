import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function Search( ) {
  const Srch = useSelector((state)=> state.search.input)
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    const handle_api = async() => {
      const API ='https://api.themoviedb.org/3/search/movie?api_key=e71685172e401803cf905541e59f4861&query='+ Srch
      const res = await fetch(API);
      const data = await res.json();
      console.log('SRCH',Srch);
      setMovies(data.results);
    } 
    handle_api();
  },[]);
  console.log('movies', movies)
  return (
    <div className='home-container flex  justify-center pt-4 '>
      <div className='cards-container flex flex-wrap justify-center '>
        { movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        )) }
      </div>
    </div>
  )
}

export default Search