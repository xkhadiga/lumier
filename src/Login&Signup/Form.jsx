import React, { useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'

import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectFormType } from '../Redux/formSlice'

function Form() {
  const modal = useSelector(selectFormType);
  const [modalx, setModalx] = useState(null )
  useEffect(()=>{
    if (modal === 'login')  { setModalx (<Login />) }
    else if (modal === 'signup')  { setModalx (<Signup />) }
    else setModalx(null)
  
  },[modal])
  
  return (
    <div className='bg-gray-900/50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center fixed'>
        <div className='flex items-center justify-center'>
          {modalx}
        </div>
    </div>
  )
}

export default Form 