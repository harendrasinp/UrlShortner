import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center w-full h-[4rem] bg-slate-950/80  lg:flex lg:justify-between">
        <div className="text-amber-50 font-semibold text-[1.4rem] lg:ml-[5rem]">SmartTools</div>
        <div className='hidden lg:w-[18rem] lg:flex justify-between mr-[5rem]'>
          <div className='text-amber-50'><Link to={"/"}>Home</Link></div>
          <div className='text-amber-50'><Link to={"/ulrShortner"}>Url Shortner</Link></div>
          <div className='text-amber-50'><Link to={"/weather"}>Weather</Link></div>
        </div>
      </div>
      <div className='w-[8rem] h-[8rem] -mt-5'>
        <img src="./appimage.png" alt="appImage" />
      </div>
    </div>
  )
}

