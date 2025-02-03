import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Card from './Card'
import axios from 'axios';
import Loading from '../Home/Loading'
import { FaStar } from 'react-icons/fa6';
import ReactPlayer from 'react-player';
import { Animate } from 'react-simple-animate';



function PlayMovie() {
  const location = useLocation();
  const movie = location.state?.movie;

  const api = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=e71685172e401803cf905541e59f4861`;
  const [vidKey,setVidKey]=useState([]);
  const handle_api=async ()=> {
    const resp = await axios.get(api);
    const vid = resp.data.results;
    const vidData =(vid.filter(video => video.site === "YouTube"));
    setVidKey(vidData[0].key)
  }
  useEffect(()=>{
    handle_api();
    window.scrollTo({top: '0'})
  },[movie.id])


  const movie_date = new Date(movie.release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const [loaded, setLoaded]=useState(false)

  window.setTimeout(()=> {setLoaded(true)}, 400);
  if (loaded) return (
    <>
 
{/* Movie Trailer Secxtion************** */}
    <div className='animate-in fade-in duration-1000 flex flex-col items-center mt-12'>
      <div className='playvid-title'> {movie.title} </div>
      <div className='playvid w-[75%] p-4 mx-10 mt-3 flex justify-center items-center rounded-2xl '>
                  <ReactPlayer  url={`https://www.youtube.com/embed/${vidKey}`}  controls />
      </div>

{/* Movie Information Section************** */}
      <div className='play-info-container flex items-center justify-between w-[80%] mt-44 mb-32 gap-20 p-4 '>    
        <div >
            <Card movie={movie} key={movie.id} />
        </div>
        <div className='play-text flex flex-col items-start gap-10'>
            <div className='play-title'>{movie.original_title}</div>
            <div className='play-overview '>{movie.overview}</div>
            <div>
                <div className='play-info-sec'>
                  <p className='play-info-p'> Release Date :</p>
                  <span className='play-info-span'>{movie_date}</span>
                </div>
                <div className='play-info-sec'>
                  <p className='play-info-p'>Audience Rating :</p>
                  <span className='play-info-span flex items-center'> {movie.vote_average.toFixed(1)} <span className='play-info-p'> <FaStar/> </span></span>
                </div>
                <div className='play-info-sec'>
                  <p className='play-info-p'>Total Reviews :</p>
                  <span className='play-info-span '> {(movie.vote_count/1000).toFixed(1) + 'K'}  </span>
                  
                </div>
                <div className='play-info-sec'>
                  <p className='play-info-p'>Trending Score :</p>
                  <span className='play-info-span'> {(movie.popularity).toFixed(1) } </span>
                </div>

            </div>            
        </div>
      </div>
    </div>
    </>
  )
  else return (<Loading /> )
}

export default PlayMovie