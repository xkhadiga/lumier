import React from 'react';
import Card from '../Components/Card';
import Pagination from '../Components/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Home() {
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

// Pagination *****
// const [moviesPerPage, setMoviesPerPage] = useState(10);
// const [currentPage, setCurrentPage] = useState(1);

// const LastMovieIndex = currentPage * moviesPerPage;
// const FirstMovieIndex = LastMovieIndex - moviesPerPage;
// const currentMovies = movies.slice(FirstMovieIndex, LastMovieIndex);

// useEffect(() => {
//   window.scrollTo({
//     top: 0,
//   });
// }, [currentPage]);


// const totalMovies = movies.length;

  return (
    <> 
    <div className='home-container flex flex-col pt-4 '>
      <div className='cards-container flex flex-wrap  '>
        { movies.map(movie => (

          <Card key={movie.id} movie={movie} />

        )) }
      </div>
          {/* <Pagination 
            totalMovies={totalMovies} 
            moviesPerPage={moviesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          
          /> */}
    </div>
    </>
  )
}

export default Home