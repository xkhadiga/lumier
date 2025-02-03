import React from 'react';
import EmptyFV from './EmptyFV';
import Loading from '../Home/Loading'
import { FaStar } from 'react-icons/fa6';
import {  PiHeartFill } from 'react-icons/pi';
import { FiPlayCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { remove_from_favorites } from '../Redux/favoritesSlice';
import Card from '../Components/Card'


function Favorites() {

  const favorites = useSelector(state => state.favorites);
  const [hovered, setHovered]=useState(null)
  const dispatch = useDispatch();
      
  if (favorites.length === 0)  { return <EmptyFV /> }
  else return ( 

    <div className='min-h-screen flex flex-col pt-10 '>
      <div className='animate-in slide-in-from-bottom-48 duration-500 flex flex-wrap items-center justify-center  '> 
        { favorites.map(movie => (
            <Card key={movie.id} movie={movie} />

              //         <div 
              //         className='card-container w-60 h-96 m-2 rounded-2xl overflow-hidden bg-red-800 '
              //         style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`})`,   backgroundSize: 'cover', backgroundPosition: 'center' }}
              //         onMouseEnter={() => setHovered(movie.id)} 
              //         onMouseLeave={() => setHovered(null)}
              //         key={movie.id}
              //         >
              //     {hovered === movie.id ? (
              //         <div className='card-hovered flex flex-col justify-center gap-20 pt-12 w-full h-full text-white ' >
              //             <div className=' flex items-center justify-end gap-1 me-4'>
              //                 <div className='text-2xl flex items-center'> 
              //                     <button onClick={()=> dispatch(remove_from_favorites(movie))}
              //                       className='favorite'> <PiHeartFill />  
              //                     </button> 
              //                   </div>                            
              //             </div>
              //             <div className='flex flex-col justify-center items-center gap-28 py-8'>
              //                 <div className='text-4xl'> <FiPlayCircle />
              //                 </div>
              //                 <div className='movie-title text-lg text-center'>{movie.title}</div>
              //             </div>
                      
              //         </div>
              //     ):(
          
              //         <div className='w-full h-full flex flex-col items-end justify-between py-6 px-3' >
              //             <div className='card-badge px-2 flex items-center'>{movie.release_date.slice(0, 4)}</div>
              //             <div className='card-badge px-2 flex gap-1 items-center'> <FaStar /> {movie.vote_average.toFixed(1)}</div>
                              
              //         </div>
              //     )}
          
              // </div>
        )) }
      </div>
    </div>
    ) 
  
}

export default Favorites