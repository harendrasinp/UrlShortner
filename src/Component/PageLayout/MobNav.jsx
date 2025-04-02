import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../../reducer/mobileReducer'
export const MobNav = () => {
  const { menu } = useSelector((state) => state.mobile)
  const dispatch = useDispatch()
  return (
    <div className='lg:hidden flex flex-col absolute h-full w-full bg-white/90 '>
      <div className='flex justify-end w-full h-[3rem] items-center'>
        {menu ? <img className='lg:hidden w-[2rem] h-[2rem]' onClick={() => dispatch(setMenu(false))} src="https://cdn-icons-png.flaticon.com/128/18513/18513166.png" alt="three line" />
          : null}
      </div>
      <div className='flex justify-around items-center flex-col w-full text-blue-950 font-semibold'>
        <div className=''onClick={()=>dispatch(setMenu(false))}><Link to={"/"}>Home</Link></div>
        <div className=''onClick={()=>dispatch(setMenu(false))}><Link to={"/weather"}>Weather</Link></div>
        <div className=''onClick={()=>dispatch(setMenu(false))}><Link to={"/ulrShortner"}>Url Shortner</Link></div>
      </div>
    </div>
  )
}
