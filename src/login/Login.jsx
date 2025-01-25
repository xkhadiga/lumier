
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { rdx_setForm } from '../Redux/formSlice'
import { useDispatch } from 'react-redux'

function Login() {

const dispatch = useDispatch();

  return (

  <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">

      <div className="w-full bg-gray-700 rounded-xl shadow flex flex-col md:mt-0 sm:max-w-md xl:p-0 p-2 ">
        <button className='text-white text-2xl flex items-center justify-end mt-2 me-2 hover:text-yellow-500 '
                onClick={()=> dispatch(rdx_setForm(null))}      
        >
        <IoClose />
        </button>
          <div className="p-10  sm:p-10">
              <h1 className="text-xl mb-10 font-bold leading-tight tracking-tight text-white md:text-2xl text-center ">
                  Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                  <div>

                      <input  type='text' className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 " placeholder="Email address" required=""/>
                  </div>
                  <div>

                      <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 " required=""/>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                          </div>
                          <div className="ml-1 text-sm">
                            <label htmlFor="remember" className="text-gray-100  ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-yellow-300 hover:underline ">Forgot password?</a>
                  </div>
                  <button type="button" className="w-full text-white hover:text-yellow-300 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">LOGIN</button>
                  <div className='flex gap-2 items-center justify-center'>
                        <p className="text-sm font-light text-gray-100 text-center ">
                        Don’t have an account yet?                    
                        </p>
                        <button type='button' className="font-medium text-primary-600 hover:underline text-white"
                        onClick={()=> dispatch(rdx_setForm('signup'))}
                        >Sign up

                        </button>
                  </div>                  

              </form>
          </div>
      </div>
  </div>

  )
}

export default Login