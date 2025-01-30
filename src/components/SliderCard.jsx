import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

//ICONS
import { PiHeartBold, PiHeartFill } from 'react-icons/pi';
import { FaBookmark, FaRegBookmark, FaStar, FaCirclePlay  } from "react-icons/fa6";

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { add_to_favorites,remove_from_favorites } from '../Redux/favoritesSlice';
import { add_to_wl, remove_from_wl } from '../Redux/watchlistSlice';




function SliderCard( { movie } ) {
    const [hovered, setHovered]=useState(false)
    const navigate = useNavigate();
    const handle_navigate = ()=>{
        navigate("/movie", {state: {movie}})
    }

  //Handle Favorites *****
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)
    const isFavorite = favorites.some(item => item.id === movie.id)

    const handleFavorites=()=>{
        if(isFavorite){
            dispatch(remove_from_favorites(movie));
        } else{
            dispatch(add_to_favorites(movie));
        }
    };
  //Handle Watchlist *****
    const handleWatchlist = ()=>{
        if(inWatchlist){dispatch(remove_from_wl(movie))}
        else {dispatch(add_to_wl(movie))}
    }

    const watchlist = useSelector(state => state.watchlist)
    const inWatchlist = watchlist.some(item => item.id === movie.id);

    return ( 

    <>
            <div 
            className='card-container w-60 h-96 mx-1 my-2  rounded-2xl overflow-hidden bg-red-800'
            style= {{backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`})` ,  backgroundSize: 'cover', backgroundPosition: 'center', }}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            >
                
        {hovered ? (
            <div onClick={()=> handle_navigate()} className='card-hovered flex flex-col justify-around py-6 gap-20  text-white ' >
                <div className=' flex items-center justify-end gap-1 me-4'>
                    <div className='text-2xl flex items-center'>   
                        <button 
                            onClick={()=> handleFavorites()}
                            className={isFavorite? 'favorite' : ''}
                            >
                                {isFavorite?  
                                <div> <PiHeartFill /> </div> : 
                                <div className='fv-empty'> <PiHeartBold /> </div>
                                } 
                        </button> 
                    </div>
                    <div className='text-xl flex items-center'> 
                        <button onClick={()=> handleWatchlist()}
                                className={inWatchlist ? 'bookmark' : ''}    
                        >
                            {inWatchlist? <div> <FaBookmark /> </div>  : 
                            <div className='fv-empty'> <FaRegBookmark /> </div>
                            } 
                        </button>                    
                    </div>
                </div>
                <button onClick={()=> handle_navigate()} className='card-play flex text-4xl items-center justify-center'> <FaCirclePlay /> </button>
                <div className='flex justify-center items-center'>
                    <div className='movie-title text-lg text-center'>{movie.title}</div>
                </div>
            
            </div>
        ):(

            <div className='w-full h-full flex flex-col items-end justify-between py-6 px-3' >
                <div className='card-badge px-2 flex items-center'>{
                 movie.release_date && (movie.release_date.slice(0, 4))}</div>
                <div className='card-badge px-2 flex gap-1 items-center'> <FaStar /> {movie.release_date && (movie.vote_average.toFixed(1))}</div>
                    
            </div>
        )}


    </div>

    </>

  )

}

export default SliderCard