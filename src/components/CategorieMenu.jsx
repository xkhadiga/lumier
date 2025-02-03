import React from 'react'
import { useNavigate } from 'react-router';
import { useEffect,useRef } from 'react';

function CategorieMenu({handle_categories_i}) {
    
    const navigate = useNavigate();

    const handle_categorie_nav = (path , genreid) => {
        navigate(path, {state: {genreid}});
      }

  return (
    <>
                              <div className='animate-in zoom-in duration-500 absolute drop-menu justify-around border w-72 top-28 lg:top-16 bg-black rounded-2xl py-6 flex  z-50 '>
                                <div className='flex flex-col gap-1  items-start'>
                                  <button className='cate-menu-item' onClick={()=> {handle_categorie_nav("/categorie", 28, handle_categories_i())}}>Action</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 12, handle_categories_i())}>Adventure</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 16, handle_categories_i())}>Animation</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 35, handle_categories_i())}>Comedy</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 80, handle_categories_i())}>Crime</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 99, handle_categories_i())}>Documentary</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 18,handle_categories_i())}>Drama</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 10751, handle_categories_i())}>Family</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 14, handle_categories_i())}>Fantasy</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 36, handle_categories_i())}>History</button>
                                </div>
                                <div className='flex flex-col gap-1 items-start'>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 27, handle_categories_i())}>Horror</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 10402, handle_categories_i())}>Music</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 9648, handle_categories_i())}>Mystery</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 10749, handle_categories_i())}>Romance</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 878, handle_categories_i())}>Sci-Fi</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 10770, handle_categories_i())}>TV Movie</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 53, handle_categories_i())}>Thriller</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 10752, handle_categories_i())}>War</button>
                                  <button className='cate-menu-item' onClick={()=> handle_categorie_nav("/categorie", 37, handle_categories_i())}>Western</button>
                                </div>
                              </div>
    </>
  )
}

export default CategorieMenu