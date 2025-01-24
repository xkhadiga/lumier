import React from 'react'
import { useState } from 'react'

//ICONS
import { FiPlayCircle } from "react-icons/fi";
import { PiHeartBold, PiHeartFill } from 'react-icons/pi';
import { FaBookmark, FaRegBookmark, FaStar  } from "react-icons/fa6";

//REDUX
import { useDispatch } from 'react-redux';
import { add_to_favorites,remove_from_favorites } from '../Redux/favoritesSlice';
import { add_to_wl, remove_from_wl } from '../Redux/watchlistSlice';




function Card( { movie } ) {
    const [hovered, setHovered]=useState(false)

  //Handle Favorites *****
    const dispatch = useDispatch();
    const [isFavorite,setIsFavorite]=useState(false);

    const handleFavorites=()=>{
        setIsFavorite(!isFavorite);
        if(isFavorite){
            dispatch(remove_from_favorites(movie));
        } else{
            dispatch(add_to_favorites(movie));
        }
    };
  //Handle Watchlist *****
    const [inWatchlist, setInWatchlist]=useState(false)
    const handleWatchlist = ()=>{
        setInWatchlist(!inWatchlist);
        if(inWatchlist){dispatch(remove_from_wl(movie))}
        else {dispatch(add_to_wl(movie))}
    }
    return ( 
    <>
            <div 
            className='card-container w-60 h-96 m-2 rounded-2xl overflow-hidden bg-red-800 '
            style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`})`,         backgroundSize: 'cover' }}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            >
                
        {hovered ? (
            <div className='card-hovered flex flex-col justify-center gap-20 pt-12  text-white ' >
                <div className=' flex items-center justify-end gap-1 me-4'>
                    <div className='text-2xl flex items-center'>   
                        <button 
                            onClick={()=> handleFavorites()}
                            className={isFavorite? 'favorite' : ''}
                            >
                                {isFavorite? <PiHeartFill /> : <PiHeartBold />} 
                        </button> 
                    </div>
                    <div className='text-xl flex items-center'> 
                        <button onClick={()=> handleWatchlist()}
                                className={inWatchlist ? 'bookmark' : ''}    
                        >
                            {inWatchlist? <FaBookmark /> : <FaRegBookmark />} 
                        </button>                    
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-28 py-8'>
                    <div className='text-4xl'> <FiPlayCircle /> </div>
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

    </>

  )
}

export default Card