import React from 'react'

export const Urlbox = () => {
  return (
    <div className='w-full flex justify-center items-center h-[18rem]'>
        <input type="text" placeholder='Past Your Url to Short' className='bg-blue-200/35 w-[15rem] h-[2.5rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[38rem]'/>
        <button className='bg-cyan-700 text-amber-50 h-[2.5rem] px-[1rem] cursor-pointer transition active:scale-x-110 active:bg-blue-400 rounded-e-md'>Formate</button>
    </div>
    
  )
}
