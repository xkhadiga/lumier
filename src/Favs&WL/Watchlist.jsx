import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import EmptyWL from './EmptyWL';

import { FaStar,FaRegBookmark, FaBookmark  } from 'react-icons/fa6';
import { PiHeartBold ,PiHeartFill } from 'react-icons/pi';
import { FiPlayCircle } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { add_to_favorites , remove_from_favorites } from '../Redux/favoritesSlice';
import { remove_from_wl } from '../Redux/watchlistSlice';


function Watchlist() {
  const watchlist = useSelector(state => state.watchlist);
  const [hovered, setHovered]=useState(null)
  const dispatch = useDispatch();

  
  
  return (
      watchlist.length === 0 ?  <EmptyWL /> :
    <div className='min-h-screen flex flex-col pt-10 '>
      <div className=' flex flex-wrap items-center justify-center'> 
        { watchlist.map(movie => (

                      <div 
                      className='card-container w-60 h-96 m-2 rounded-2xl overflow-hidden bg-red-800 '
                      style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`})`,    backgroundSize: 'cover', backgroundPosition: 'center' }}
                      onMouseEnter={() => setHovered(movie.id)} 
                      onMouseLeave={() => setHovered(null)}
                      key={movie.id}
                      >
                          
                  {hovered === movie.id ? (
                      <div className='card-hovered flex flex-col justify-center gap-20 pt-12 w-full h-full text-white ' >
                          <div className=' flex items-center justify-end gap-1 me-4'>
 
                              <div className='text-2xl flex items-center'> 
                                  <button 
                                  className='bookmark'
                                  onClick={()=> dispatch(remove_from_wl(movie))}> 
                                    <FaBookmark />  
                                  </button> 
                              </div>                                                     
                          </div>
                          <div className='flex flex-col justify-center items-center gap-28 py-8'>
                              <div className='text-4xl'> <FiPlayCircle />
                              </div>
                              <div className='movie-title text-lg text-center'>{movie.title}</div>
                          </div>
                      
                      </div>
                  ):(
          
                      <div className='w-full h-full flex flex-col items-end justify-between py-6 px-3' >
                          <div className='card-badge px-2 flex items-center'>{movie.release_date.slice(0, 4)}</div>
                          <div className='card-badge px-2 flex gap-1 items-center'> <FaStar /> {movie.vote_average.toFixed(1)}</div>
                              
                      </div>
                  )}
          
          
              </div>
        )) }
      </div>
    </div>
  ) 
}

export default Watchlist