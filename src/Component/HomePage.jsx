import React from 'react'

export const HomePage = () => {
  return (
    <div className='w-full h-full lg:-mb-0  gap-5 flex items-center flex-col'>
      <h5 className='text-amber-50 font-bold text-2xl'>Welcome to SmartTool</h5>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-amber-100 font-semibold'>UrlShortner</div>
        <p className='text-amber-300 text-justify w-[20rem] lg:w-[35rem]'>
          Tired of long and complicated URLs? With our powerful URL shortener, you can quickly convert lengthy web addresses into short, easy-to-share links. Simply paste your long URL, generate a short link, and start sharing instantly!
        </p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-amber-100 font-semibold'> Weather</div>
        <p className='text-amber-300 text-justify w-[20rem] lg:w-[35rem]'>
          Stay updated with real-time weather reports! Whether you're planning a trip or just need to check the forecast, our application provides accurate weather information based on your location or any city worldwide.

          Start using our web app today and enjoy the convenience of fast link sharing and up-to-date weather details in one place!
        </p>
      </div>
    </div>
  )
}
