import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { rdx_search } from '../Redux/searchSlice';
import { useDispatch } from 'react-redux';

function SearchC() {

  const [search,setSearch]=useState('');
  const dispatch = useDispatch();
  const handleSearch= (e)=>{
    const value= e.target.value;
    setSearch(value);
    dispatch(rdx_search(value))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      dispatch(rdx_search(search));
    }
  };
  return (
    <div className=' flex sm:border-none   border-b-yellow-300 border-b-2 justify-center p-2 gap-1'>
        <div className='search-input flex  items-center rounded-full lg:w-96 sm:w-32  '>
            <input type="text" placeholder='Search Movies' 
                    className='flex rounded-full items-center p-1.5 text-left pl-4 flex-1 focus:ring-1 focus:ring-yellow-400 text-black'
                    value={search}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    
            />
        </div>
        { search ? (
          <Link to="/search" className='flex text-3xl p-2 items-center  text-white hover:text-yellow-300'> <IoSearch />
            </Link>
        ): 
        (
          <span className='flex text-3xl p-2 items-center    text-white hover:text-yellow-300'> <IoSearch />
          </span>
        )
        }
            
    </div>

  )
}

export default SearchC