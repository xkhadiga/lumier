import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Loading from './Loading';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';


function TopRatedMovies() {
 
     // Handle API Fetching ************
      const [movies,setMovies]=useState([]);
      const [page,setPage]=useState(1);
      const [hasMore,setHasMore]=useState(true);

      const handle_api = async(page) => {
        const API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e71685172e401803cf905541e59f4861&page='+page

        const res = await axios.get(API)
        const newMovies = res.data.results;      
          setMovies((prevMovies)=> page === 1 ? (newMovies) :  [...prevMovies, ...newMovies]);       
        if(page >= res.data.total_pages) 
          {setHasMore(false)}           
      } 


    // Handle Loading ******************
    const [loader, setLoader]=useState(false)

    useEffect(()=>{
      const handle_loader = () => {
          window.setTimeout(()=>{
            setLoader(true)
          }, 300 )
        }
          handle_loader();
      },[])
       
       if (loader) return (  

       <> 
           <InfiniteScroll loadMore={handle_api} 
                    pageStart={0} 
                    hasMore={true || false}
                    loader={
                    <div className="flex py-6 justify-center items-center" key={0}>
                      <div className='loader'></div>
                  </div>}
                     >
    <div className='flex items-center justify-center mt-6 text-2xl text-white'>
        <div> Top Rated Movies of All Time</div>
        
    </div>
    <div className='home-container flex flex-col pt-4 '>

      <div className='cards-container flex flex-wrap  '>
        { movies.map((movie, index) => (

          <Card key={`${movie.id}-${index}`} movie={movie} />

        )) }
      </div>

    </div>

            </InfiniteScroll>
    </>

  )
  else return   (<Loading />)
}

export default TopRatedMovies