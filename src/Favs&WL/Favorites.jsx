import EmptyFV from './EmptyFV';

import { useSelector } from 'react-redux';
import Card from '../Components/Card'


function Favorites() {

  const favorites = useSelector(state => state.favorites);
 
      
  if (favorites.length === 0)  { return <EmptyFV /> }
  else return ( 

    <div className='min-h-screen flex flex-col pt-10 '>
      <div className='animate-in slide-in-from-bottom-48 duration-500 flex flex-wrap items-center justify-center  '> 
        { favorites.map(movie => (
            <Card key={movie.id} movie={movie} />

        )) }
      </div>
    </div>
    ) 
  
}

export default Favorites