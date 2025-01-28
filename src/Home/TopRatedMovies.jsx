import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import Loading from './Loading';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { get_page } from '../Redux/pageSlice';
import { useDispatch , useSelector} from 'react-redux';


function TopRatedMovies() {
  const [movies,setMovies]=useState([])
  const page = useSelector((state) => state.page.page);
  const [totalPages,setTotalPages] = useState(0);
  const dispatch = useDispatch();

  // Fetching Movies API + SEARCH *****
  let API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e71685172e401803cf905541e59f4861&page='+page

  // trending movies let API = 
  
  // trending tv let API = 'https://api.themoviedb.org/3/trending/tv/day?api_key=e71685172e401803cf905541e59f4861&page='+page

  //top rated movies API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e71685172e401803cf905541e59f4861&page='+page

  // coming soon  API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e71685172e401803cf905541e59f4861&page='+page

  // trending all movies + tv let API = 'https://api.themoviedb.org/3/trending/all/day?api_key=e71685172e401803cf905541e59f4861&page='+page
  

     // Handle API Fetching ************

    const handle_api = async() => {
      const res = await axios.get(API)
      console.log('axios res', res.data)
      const Result = res.data.results;
      if (Result.length > 0 ){
        setMovies(Result); 
        setTotalPages(res.data.total_pages);
      }            
    } 

     // Handle Pagination ************
    useEffect(()=>{
      handle_api();
      window.scrollTo({
        top: 0 ,
      })
    }, [page])

    const handlePageChange = (newPage) => {
      if (newPage > 0 && newPage <= totalPages) {
        dispatch(get_page(newPage));
      }
    };

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
       
       if (loader) return (  <> 
    <div className='flex items-center justify-between mx-20 mt-2 text-2xl text-white'>
        <div> </div>
        <div></div>
    </div>
    <div className='home-container flex flex-col pt-4 '>
      <div className='cards-container flex flex-wrap  '>
        { movies.map(movie => (

          <Card key={movie.id} movie={movie} />

        )) }
      </div>
    </div>

    {/* Pagination ************** */}

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
  else return   (<Loading />)
}

export default TopRatedMovies