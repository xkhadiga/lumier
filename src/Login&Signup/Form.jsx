import  { useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectFormType } from '../Redux/formSlice'

function Form() {
  const modal = useSelector((selectFormType));
  const [modalx, setModalx] = useState(null )
  useEffect(()=>{
    if (modal === 'login')  { setModalx (<Login />) }
    else if (modal === 'signup')  { setModalx (<Signup />) }
    else setModalx(null)
    window.setTimeout(()=> setLoaded(true), 200)
  },[modal]);
  const [loaded, setLoaded]=useState(false);
  
return (
    <div className='animate-in fade-in duration-700 bg-gray-900/50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center fixed'>
        <div className='flex items-center justify-center'>
          {modalx}
        </div>
    </div>
  )

}

export default Form 