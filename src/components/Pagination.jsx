import React from 'react'

function Pagination( {moviesPerPage, totalMovies, currentPage, setCurrentPage} ) {
    const pages = [];
    for (let i = 1; i<= Math.ceil(totalMovies/moviesPerPage); i++)
    {pages.push(i)}

  return (
    <div className='pagination my-6'>
        {
            pages.map((page,index)=>{
                return (
                    <button 
                        key={index}
                        onClick={()=> setCurrentPage(page)}
                        className={page === currentPage ? 'active' : ''}
                    >
                            {page}
                    </button>
                )
            }
            )
        }
    </div>
  )
}

export default Pagination