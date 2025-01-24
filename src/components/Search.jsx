import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';


function Search( {searchMovies} ) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    const handle_api = async() => {
      const API ='https://api.themoviedb.org/3/search/movie?api_key=e71685172e401803cf905541e59f4861&query='+ {searchMovies}
      const res = await fetch(API);
      const data = await res.json();
      console.log('data',data);
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