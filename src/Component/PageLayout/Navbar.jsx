import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobNav } from './MobNav';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../../reducer/mobileReducer';
export const Navbar = () => {
  const { menu } = useSelector((state) => state.mobile)
  const dispatch = useDispatch();
  console.log(menu)
  return (
    <div className='flex flex-col justify-center'>
      <div className="flex justify-center items-center w-full h-[4rem] bg-slate-950/80 lg:flex lg:justify-between">

        <div className="text-amber-50 font-semibold w-[4rem] text-[1.4rem] ml-auto lg:ml-[5rem]">SmartTools</div>

        <div className='ml-auto w-[3rem]'>
          {menu ? null : <img className='lg:hidden w-[3rem] h-[2.5rem]' onClick={() => dispatch(setMenu(true))} src="https://cdn-icons-png.flaticon.com/128/10233/10233705.png" alt="three line" />
          }
        </div>
        <div className='hidden lg:w-[18rem] lg:flex justify-between mr-[5rem]'>
          <div className='text-amber-50'><Link to={"/"}>Home</Link></div>
          <div className='text-amber-50'><Link to={"/ulrShortner"}>Url Shortner</Link></div>
          <div className='text-amber-50'><Link to={"/weather"}>Weather</Link></div>
        </div>
      </div>
      <div className='w-[8rem] h-[8rem] lg:flex lg:w-[8rem] lg:h-[8rem] lg:-mt-5'>
        <img src="./appimage.png" alt="appImage" />
      </div>
    </div>
  )
}

