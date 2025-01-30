import React from 'react'
import Card from '../Components/Card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptySearch from './EmptySearch';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa6';
import { get_page } from '../Redux/pageSlice';


function Search( ) {
  const Srch = useSelector((state)=> state.search.input)
  const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(0)
  const dispatch = useDispatch();


  useEffect(()=>{
      const handle_api = async() => {
      const API =`https://api.themoviedb.org/3/search/movie?api_key=e71685172e401803cf905541e59f4861&query=${Srch}&page=${page}` ; 

      try {
        const data = await fetch(API).then(res => res.json());
        const Resp = data.results;
        setTotalPages(data.total_pages)
        const Result = Resp.filter((movie)=> movie.poster_path)
        setMovies(Result);
      } catch (error) {
        console.error("Error fetching the data:", error.message);
      }
      
    } 
    handle_api();
  },[Srch, page]);


       // Handle Pagination ************
    useEffect(()=>{
      window.scrollTo({
        top: 0 ,
      })
    }, [page])

    const handlePageChange = (newPage) => {
      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage);
        dispatch(get_page(newPage));
      }
    };


  if (Srch) {
    return (
      <>
      <div className='home-container flex  justify-center pt-4 '>
        <div className='cards-container flex flex-wrap justify-center '>
          { movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </div>
         

    <div className="pagination flex items-center justify-center gap-3 m-12">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 mx-2 flex items-center justify-center rounded"
          disabled={page === 1}
        >
          <div><FaChevronLeft /></div>

        </button>
        <span className="text-white text-lg">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 mx-2 flex items-center justify-center rounded "
          disabled={page === totalPages}
        >
          <div><FaChevronRight /></div>

        </button>
      </div> 
      </>
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