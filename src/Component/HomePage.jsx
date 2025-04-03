import React from 'react'
import { motion } from 'framer-motion'
export const HomePage = () => {
  return (
    <div className='w-full h-full lg:-mb-0  gap-5 flex items-center flex-col'>
      <h5 className='text-amber-50 font-bold text-2xl'>Welcome to SmartTool</h5>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-amber-100 font-semibold'>UrlShortner</div>
        <motion.p className='text-amber-300 text-justify w-[20rem] lg:w-[35rem]'
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}
        >
          Tired of long and complicated URLs? With our powerful URL shortener, you can quickly convert lengthy web addresses into short, easy-to-share links. Simply paste your long URL, generate a short link, and start sharing instantly!
        </motion.p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-amber-100 font-semibold'> Weather</div>
        <motion.p className='text-amber-300 text-justify w-[20rem] lg:w-[35rem]'
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
        >
          Stay updated with real-time weather reports! Whether you're planning a trip or just need to check the forecast, our application provides accurate weather information based on your location or any city worldwide.

          Start using our web app today and enjoy the convenience of fast link sharing and up-to-date weather details in one place!
        </motion.p>
      </div>
    </div>
  )
}
