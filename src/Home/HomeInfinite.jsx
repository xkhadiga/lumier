import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';



function HomeInfinite() {


  // trending movies let API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e71685172e401803cf905541e59f4861&page='+page
  
  // trending tv let API = 'https://api.themoviedb.org/3/trending/tv/day?api_key=e71685172e401803cf905541e59f4861&page='+page

  //top rated movies API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e71685172e401803cf905541e59f4861&page='+page

  // coming soon  API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e71685172e401803cf905541e59f4861&page='+page

  // trending all movies + tv let API = 'https://api.themoviedb.org/3/trending/all/day?api_key=e71685172e401803cf905541e59f4861&page='+page
  
  const [movies,setMovies]=useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore]=useState(true)

    // Fetching Movies API + SEARCH *****

    const handle_api = async(page) => {
      try{
        const API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e71685172e401803cf905541e59f4861&page='+page;

        const res = await axios.get(API)
        const newMovies = res.data.results;
        setMovies((prevMovies)=>[...prevMovies, ...newMovies]); 
        setPage(page + 1);    
        if (page >= res.data.total_pages)
          {setHasMore(false)}       
      }
      catch(error){
        console.error("Failed to fetch movies:", error.response?.data || error.message);
      }
     
    } 


  return (
    <> 
      <InfiniteScroll
          pageStart={0}
          loadMore={handle_api}
          hasMore={true || false}
          loader={<div className="flex py-6 justify-center items-center" key={0}>
                      <div className='loader'></div>
                  </div>}
      >
          
          <div className='flex items-center justify-between mx-20 mt-2 text-2xl text-white'>
              <div> </div>
              <div></div>
          </div>
          <div className='home-container flex flex-col pt-4 '>
            <div className='cards-container flex flex-wrap  '>
              { movies.map((movie, index )=> (

                <Card key={`${movie.id}-${index}`} movie={movie} />

              )) }
            </div>
          </div>
          
      </InfiniteScroll>    



    </>
  )
}

export default HomeInfinite