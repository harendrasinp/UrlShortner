import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full h-[4rem] bg-slate-950/80  lg:flex lg:justify-between">
        <div className="text-amber-50 font-semibold text-[1.4rem] lg:ml-[5rem]">Formate URL</div>
        <div className='hidden lg:w-[18rem] lg:flex justify-between mr-[5rem]'>
          <div className='text-amber-50'><Link to={"/"}>Home</Link></div>
          <div className='text-amber-50'><Link to={"/urls-collection"}>Url Collections</Link></div>
        </div>
    </div>
  )
}

