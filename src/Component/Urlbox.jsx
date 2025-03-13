import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Error } from './Error'
import { localStorageThunk, fetchDataFromLocalStorage, setMessage, deletThunk } from '../reducer/Urlreducer'
export const Urlbox = () => {
  const [url, setUrl] = useState("");

  const { urlData, message } = useSelector((state) => state.url)
  const dispatch = useDispatch();
  console.log(message)
  // ----------------------------------useEffect-----------------------------------
  useEffect(() => {
    dispatch(fetchDataFromLocalStorage())
  }, [dispatch]);
  // -----------------------------------function-----------------------------------
  const handleForm = () => {
    if (url) {
      dispatch(localStorageThunk(url))
      setUrl("")
      return 
    }
    dispatch(setMessage("Please Enter Long Url"))
    setTimeout(() => {
      dispatch(setMessage(""))
    }, 3000)
  }
  const deleteurl = (urls) => {
    dispatch(deletThunk(urls))
    dispatch(fetchDataFromLocalStorage())
  }
  // ------------------------------------Return-------------------------------------
  return (
    <div>
      {/* -----------------------------------------INput Box and Error message---------------------------------- */}
      <div className='w-full mt-[8rem] flex justify-around items-center flex-col'>
        <div>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Past Your Url to Short' className='bg-blue-200/35 w-[15rem] h-[2.5rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[38rem]' />
          <button onClick={handleForm} className='bg-cyan-700 text-amber-50 h-[2.5rem] px-[1rem] cursor-pointer transition active:scale-x-110 active:bg-blue-400 rounded-e-md'>Formate</button>
        </div>
        {/* ---------------------------------Error------------------------------------------ */}
        <div className='flex justify-center items-center h-[5rem]'>{message ? <Error /> : null}</div>
      </div>
      {/* ----------------------------------------------Short URL Part------------------------------------------- */}
      {urlData.length > 0 ? urlData.map((urls, index) => (
        <div key={index} className='flex justify-center items-center mb-2 '>
          <div className='text-amber-100 text-[1.2rem] rounded-[0.2rem] bg-blue-200/35  w-[20rem] flex justify-center items-center '>
            <a href={urls.shorturl} target='_blank'>{urls.shorturl}</a>
          </div>
          <div className='flex justify-center items-center'>
            <img onClick={() => deleteurl(urls)} className='w-[1.5rem] h-[1.5rem] cursor-pointer ' src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" alt="delete" />
          </div>
        </div>
      )) : null}
    </div>

  )
}
