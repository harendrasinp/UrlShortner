import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Error } from './Error'
import { localStorageThunk, fetchDataFromLocalStorage, setMessage, deletThunk } from '../reducer/Urlreducer'
export const Urlbox = () => {
  const [url, setUrl] = useState("");
  const [urltitle, setTitle] = useState("");

  const { urlData, message } = useSelector((state) => state.url)
  const dispatch = useDispatch();
  console.log(message)
  // ----------------------------------useEffect-----------------------------------
  useEffect(() => {
    dispatch(fetchDataFromLocalStorage())
  }, [dispatch]);

  useEffect(()=>{
    setTimeout(() => {
      dispatch(setMessage(""))
    },3000)
  },[message]);
  // -----------------------------------function-----------------------------------
  const handleForm = (e) => {
    e.preventDefault()
    if (url && urltitle ) {
      dispatch(localStorageThunk({url,urltitle}));
      setUrl("");
      setTitle("");
      return 
    }
    dispatch(setMessage("All field are required."))
  }
  const deleteurl = (urls) => {
    dispatch(deletThunk(urls))
    dispatch(fetchDataFromLocalStorage())
  }
  // ------------------------------------Return-------------------------------------
  return (
    <div>
      {/* -----------------------------------------Input Box and Error message---------------------------------- */}
      <div className='w-full mt-[8rem] flex justify-around items-center flex-col'>
        <form onSubmit={handleForm}>
          <input type="text" maxLength={8} value={urltitle} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='bg-blue-200/35 w-[3rem] h-[2.5rem] mr-[0.2rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[8rem]' />

          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Past Your Url to Short' className='bg-blue-200/35 w-[12rem] h-[2.5rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[28rem]' />

          <button type='submit' className='bg-cyan-700 text-amber-50 h-[2.5rem] px-[1rem] cursor-pointer transition active:scale-x-110 active:bg-blue-400 rounded-e-md'>Formate</button>
        </form>
        {/* ---------------------------------Error------------------------------------------ */}
        <div className='flex justify-center items-center h-[5rem]'>{message ? <Error /> : null}</div>
      </div>
      {/* ----------------------------------------------Short URL Part------------------------------------------- */}
      {urlData.length > 0 ? urlData.map((urls, index) => (
        <div key={index} className='flex justify-center items-center mb-2 '>
          <div className='text-amber-100 text-[1.2rem] rounded-[0.2rem]  bg-blue-200/35 mr-0.5  w-auto px-2 flex justify-center items-center '>
            {urls.title}
          </div>
          <div className='text-amber-100 text-[1.2rem] rounded-[0.2rem]  bg-blue-200/35  w-[12rem] flex justify-center items-center lg:w-[25rem] '>
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
