import { Link } from 'react-router'
import { BiSolidMoviePlay } from 'react-icons/bi'

function EmptyWL() {


          
      
 return (
        <div className='h-screen flex justify-center mt-14 items-start '>
            <div className=" animate-in slide-in-from-bottom-48 duration-500 w-5/6 xl:w-3/6 mx-auto px-10 py-4  rounded-lg ">
                <div>

                    </div>
                    <div className="flex flex-col justify-center items-center py-12">
                    <div className="text-7xl text-white mb-4" >
                        <BiSolidMoviePlay />
                    </div>
                    <p className="text-xl font-semibold text-gray-300 mb-2">Your Watchlist is empty</p>
                    <p className="text-gray-300 text-center mb-6">Add shows or movies to create your perfect watchlist!</p>
                    <Link to='/' className="px-4 py-2 rounded-lg bg-teal-400 text-white font-semibold hover:bg-teal-600 focus:bg-teal-600">
                        Explore Movies
                    </Link>
                </div>
            </div>
        </div>
  )

}

export default EmptyWL