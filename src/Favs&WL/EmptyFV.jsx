import React from 'react'
import { Link } from 'react-router'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { useState,useEffect } from 'react'
import Loading from '../Home/Loading'

function EmptyFV() {

      // Handle Loading ******************
      const [loader, setLoader]=useState(false)

      useEffect(()=>{
        const handle_loader = () => {
            window.setTimeout(()=>{
              setLoader(true)
            }, 200 )
          }
            handle_loader();
        },[])
         
return (
        <div className='h-screen flex justify-center mt-14 items-start'>
            <div className="animate-in slide-in-from-bottom-48 duration-500 w-5/6 xl:w-3/6 mx-auto px-10 py-4 rounded-lg">
                <div>

                    </div>
                    <div className="flex flex-col justify-center items-center py-12">
                    <div className="text-7xl text-white mb-4" >
                        <BiSolidMoviePlay />
                    </div>
                    <p className="text-xl font-semibold text-gray-300 mb-2">Your Favorites list is empty</p>
                    <p className="text-gray-300 text-center mb-6">Save your favorite movies to build your own library!</p>
                    
                    <Link to='/' className="px-4 py-2 rounded-lg bg-teal-400 text-white font-semibold hover:bg-teal-600 focus:bg-teal-600">
                        Explore Movies
                    </Link>

                </div>
            </div>
        </div>
  )

}

export default EmptyFV