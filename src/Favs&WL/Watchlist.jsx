import EmptyWL from './EmptyWL';
import { useSelector } from 'react-redux';
import Card from '../components/Card'


function Watchlist() {
  const watchlist = useSelector(state => state.watchlist);        
  
 return (
      watchlist.length === 0 ?  <EmptyWL /> :
    <div className='min-h-screen flex flex-col pt-10 '>
      <div className='animate-in slide-in-from-bottom-48 duration-500 flex flex-wrap items-center justify-center'> 
        { watchlist.map(movie => (
            <Card key={movie.id} movie={movie} />
        )) }
      </div>
    </div>
  ) 

}

export default Watchlist