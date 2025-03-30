import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherThunk } from '../reducer/Weather'

export const Weather = () => {
  const [city, setCity] = useState("")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.weather)
  const weatherData = () => {
    dispatch(fetchWeatherThunk(city));
  }

  return (
    <div className='flex justify-center'>
      <div className="h-[20rem] w-[23rem] bg-[url('/weather.jpg')] bg-cover rounded-2xl shadow-amber-50  lg:w-[55rem]">
        <div className='text-amber-100 font-bold text-[1.9rem] flex justify-center items-center'>Weather</div>
        <div className='flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center'>
            <input onChange={(e) => setCity(e.target.value)} className='bg-blue-200/35 lg:w-[30rem] p-1 text-[1rem] text-amber-50 focus:outline-none' type="text" placeholder='Enter City' />


            <button className='bg-cyan-700 p-1 px-2 rounded-r-[0.2rem] cursor-pointer text-amber-50' onClick={weatherData}>Get Weather</button>
          </div>
          <div className=''>
            {data ?
              <div className='mt-4'>
                <div className='text-amber-600 font-bold flex justify-center items-center text-[1.5rem]'>{data.name}</div>
                {/* <div className='text-amber-100'>Temperature:{data.main.temp}</div> */}
                <div className='w-[20rem] bg-amber-50/35 flex justify-between'>
                    <div className='flex justify-center items-center px-5 text-blue-950 font-semibold'>Temp</div>
                    <div className='flex justify-center items-center text-blue-950 font-semibold'>{data.main.temp} {"\u00B0C"}
                      <img className='w-[2rem] h-[2rem]'src='https://cdn-icons-png.flaticon.com/128/12500/12500169.png'alt='sun'/>
                    </div>
                </div>
                <div></div>
              </div>
              : null}
          </div>
        </div>
      </div>
    </div>

  )
}
