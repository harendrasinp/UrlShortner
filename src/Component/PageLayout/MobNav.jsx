import React from 'react'
import { Link } from 'react-router-dom'
export const MobNav = () => {

  return (
    <div className='lg:hidden flex justify-center flex-col items-center mt-5'>
      <div className='flex justify-around w-[25rem] text-amber-50'>
        <div className='bg-cyan-700 w-fit p-2 rounded-md text-[1.2rem] transition active:scale-105'><Link to={"/"}>Home</Link></div>
        <div className='bg-cyan-700 w-fit p-2 rounded-md text-[1.2rem] transition active:scale-105'><Link to={"/ulrShortner"}>Url Shortner</Link></div>
        <div className='bg-cyan-700 w-fit p-2 rounded-md transition active:scale-105 text-[1.2rem]'><Link to={"/weather"}>Weather</Link></div>
      </div>
      <div className='w-[8rem] h-[8rem]'>
        <img src="./appimage.png" alt="appImage" />
      </div>
    </div>
  )
}
