import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageThunk, fetchDataFromLocalStorage } from '../reducer/Urlreducer'
export const Urlbox = () => {
  const [url, setUrl] = useState("");

  const { urlData, message } = useSelector((state) => state.url)
  const dispatch = useDispatch();
  // ----------------------------------useEffect-----------------------------------
  useEffect(() => {
    dispatch(fetchDataFromLocalStorage())
  }, [dispatch, localStorageThunk])
  // -----------------------------------function-----------------------------------
  const handleForm = () => {
    dispatch(localStorageThunk(url))
    setUrl("")
  }
  // ------------------------------------Return-------------------------------------
  return (
    <div>
      <div className='w-full flex justify-center items-center h-[18rem]'>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Past Your Url to Short' className='bg-blue-200/35 w-[15rem] h-[2.5rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[38rem]' />
        <button onClick={handleForm} className='bg-cyan-700 text-amber-50 h-[2.5rem] px-[1rem] cursor-pointer transition active:scale-x-110 active:bg-blue-400 rounded-e-md'>Formate</button>
      </div>
      {urlData.length > 0 ? urlData.map((urls, index) => (
        <div key={index} className='flex justify-around items-center flex-col'>
          <div className='text-amber-100 text-[1.2rem] rounded-[0.2rem] bg-blue-200/35  w-[20rem] mb-3 flex justify-center items-center'><a href={urls.shorturl}>http://localhost:3000/{urls.shorturl}</a></div>
        </div>
      )) : null}
    </div>

  )
}
