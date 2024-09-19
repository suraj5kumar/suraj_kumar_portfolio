import React, { useContext } from 'react'
import FollowMe from './FollowMe'
import Context from '../Context/ContextFile'

const Hire_me = () => {
  const { hire, sethire } = useContext(Context)
  return (
    <>
      <div className={` w-full h-[100vh] flex justify-center fixed top-0 -left-full z-50 ${hire ? 'left-[0px]' : '-left-full'} duration-500`}>
        <div className=' w-full flex'>
          <div className=' w-full flex flex-col gap-10 pt-16 text-white bg-gradient-to-r from-[#140814] via-[#0f0821] to-[#480938] px-5 lg:w-1/2 lg:px-0'>
            <div onClick={() => sethire(false)} className=' w-full flex justify-end text-4xl cursor-pointer hover:opacity-70 duration-300 sm:px-5'>
              X
            </div>
            <div className=' flex flex-col gap-5 sm:px-28 md:px-24'>
              <h1 className=' text-3xl font-bold text-center md:text-left'>Contact Details</h1>
              <div className=' text-lg flex gap-1'>
                <h3 className=' font-bold'>Email Id:</h3>
                <p className=' underline'>suraj6549kumar@gmail.com</p>
              </div>
              <div className=' flex text-lg gap-1'>
                <h3 className=' font-bold'>Phone No:</h3>
                <p>+918825231790</p>
              </div>
            </div>
            <div className=' w-full flex justify-center items-center sm:pl-24 md:px-20 lg:px-0'>
              <FollowMe />
            </div>
            <div className=' w-full flex items-center justify-center'>
              <button onClick={() => sethire(false)} className=' px-5 py-2 bg-pink-500 rounded-lg hover:opacity-70 duration-300' >Close</button>
            </div>
          </div>

          <div onClick={() => sethire(false)} className=' hidden lg:block w-1/2 bg-slate-400 opacity-5'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hire_me