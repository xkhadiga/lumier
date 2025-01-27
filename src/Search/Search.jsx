import React from 'react'
import Card from '../Components/Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptySearch from './EmptySearch';


function Search( ) {
  const Srch = useSelector((state)=> state.search.input)
  const [movies,setMovies]=useState([])
  const [error, setError] = useState(null);


  useEffect(()=>{
      const handle_api = async() => {
      const API ='https://api.themoviedb.org/3/search/movie?api_key=e71685172e401803cf905541e59f4861&query='+ Srch ; 

      try {
        const data = await fetch(API).then(res => res.json());
        console.log('dts',data);
        const Resp = data.results;
        const Result = Resp.filter((movie)=> movie.poster_path)
        setMovies(Result);
      } catch (error) {
        console.error("Error fetching the data:", error.message);
      }
      
    } 
    handle_api();
  },[Srch]);

  if (Srch) {
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
  else if (Srch === ''){
    return (
      <div className='home-container flex  justify-center pt-4 '>
      <div className='cards-container flex flex-wrap justify-center '>
        <EmptySearch />
      </div>
    </div>
    )
  }

}

export default Search