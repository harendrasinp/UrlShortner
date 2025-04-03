import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { Error } from './Error';
import { DeleteUrl } from './DeleteUrl';
import { localStorageThunk, fetchDataFromLocalStorage, setMessage, setIsOpen, deletThunk } from '../reducer/Urlreducer'
export const Urlbox = () => {
  const [url, setUrl] = useState("");
  const [urltitle, setTitle] = useState("");

  const { urlData, message } = useSelector((state) => state.url)
  const dispatch = useDispatch();
  // ----------------------------------useEffect-----------------------------------
  useEffect(() => {
    dispatch(fetchDataFromLocalStorage())
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setMessage(""))
    }, 3000)
    return () => clearTimeout(timer);
  }, [message]);
  // -----------------------------------function-----------------------------------
  const handleForm = (e) => {
    e.preventDefault()
    if (url && urltitle) {
      dispatch(localStorageThunk({ url, urltitle }));
      setUrl("");
      setTitle("");
      return
    }
    dispatch(setMessage("All field are required."))
  }
  // ------------------------------------Return-------------------------------------
  return (
    <div className='justify-center flex-col items-center'>
      <DeleteUrl />
      {/* -----------------------------------------Input Box and Error message---------------------------------- */}
      <motion.div className='w-full flex justify-around items-center flex-col'
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1}}
        >
        <div className='text-3xl font-semibold text-slate-300/80'>Url Shortner</div>
        <form onSubmit={handleForm} className='flex mt-3'>
          <input type="text" maxLength={8} value={urltitle} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='bg-blue-400/35 w-[3rem] h-[2.5rem] mr-[0.2rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[8rem]' />

          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Past Your Url to Short' className='bg-blue-400/35 w-[12rem] h-[2.5rem] focus:outline-none text-amber-50 text-center font-bold  rounded-[2px] lg:w-[28rem]' />

          <button type='submit' className='bg-cyan-900 text-amber-50 h-[2.5rem] px-[1rem] cursor-pointer transition active:scale-x-110 active:bg-blue-400 rounded-e-md'>Formate</button>
        </form>
        {/* ---------------------------------Error------------------------------------------ */}
        <div className='flex justify-center items-center h-[5rem]'>{message ? <Error /> : null}</div>
      </motion.div>
      {/* ----------------------------------------------Short URL Part------------------------------------------- */}
      <div className="w-full overflow-y-auto ml-auto mr-auto">
        {urlData.length > 0 ? urlData.map((urls, index) => (
          <div key={index} className='flex justify-center items-center mb-2'>
            <motion.div className='text-amber-100 text-[1.2rem] rounded-[0.2rem]  bg-blue-400/35 mr-0.5  w-[5rem] px-2 flex justify-center items-center '
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            >
              {urls.title}
            </motion.div>
            <motion.div className='text-amber-100 text-[1.2rem] rounded-[0.2rem]  bg-blue-400/35  w-[12rem] flex justify-center items-center lg:w-[25rem] '
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            >
              <a href={urls.shorturl} target='_blank'>{urls.shorturl}</a>
              
            </motion.div>
            <motion.div className='flex justify-center items-center'
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            >
              <img onClick={() => dispatch(setIsOpen(urls))} className='w-[1.5rem] h-[1.5rem] cursor-pointer ' src="https://cdn-icons-png.flaticon.com/128/11480/11480470.png" alt="delete" />
            </motion.div>
          </div>
        )) : null}
      </div>
    </div>

  )
}
