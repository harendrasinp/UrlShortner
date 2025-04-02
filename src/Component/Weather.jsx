import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherThunk, setErrorMsg } from '../reducer/Weather'
import { Error } from './Error'

export const Weather = () => {
  const [city, setCity] = useState("")
  const dispatch = useDispatch()
  const { data, errorWeather } = useSelector((state) => state.weather)
// ------------------------------UseEffect------------------------------------------
useEffect(()=>{
  const timer=setTimeout(()=>{
    dispatch(setErrorMsg(""))
  },2000)
  return ()=>clearTimeout(timer)
},[errorWeather])

// -------------------------------functions-----------------------------------------
  const weatherData = (e) => {
    e.preventDefault()
    if (!city) {
      dispatch(setErrorMsg("Please Enter City Name"))
      return
    }
    dispatch(fetchWeatherThunk(city));
    setCity("")
  }
// ----------------------------------------------------------------------------------

  return (
    <div className='flex justify-center mb-2'>
      <div className="h-[20rem] w-[23rem] bg-[url('/weather.jpg')] bg-cover rounded-2xl shadow-amber-50  lg:w-[55rem]">
        <div className='text-amber-100 font-bold text-[1.9rem] flex justify-center items-center'>Weather</div>
        <div className='flex justify-center items-center flex-col'>
          <form onSubmit={weatherData} className='flex justify-center items-center'>
            <input onChange={(e) => setCity(e.target.value)} value={city} className='bg-blue-200/35 lg:w-[30rem] p-1 text-[1rem] text-blue-950 font-semibold focus:outline-none rounded-s-sm' type="text" placeholder='Enter City' />
            <button type='submit' className='bg-cyan-700 p-1 px-2 rounded-r-[0.2rem] cursor-pointer text-amber-50'>Get Weather</button>
          </form>
          <div className=''>
          <div className=' mt-2 flex justify-center items-center h-[3rem]'>{errorWeather?<Error/>:null}</div>
            {data?
              <div className=''>
                <div className='text-amber-600 font-bold flex justify-center items-center text-[1.5rem]'>{data.name}</div>
                <div className='w-[20rem] bg-amber-50/35 flex justify-between'>
                  <div className='flex justify-center items-center px-5 text-blue-950 font-semibold'>Temp</div>
                  <div className='flex justify-center items-center font-sans text-blue-950 font-semibold'>{data.main.temp} {"\u00B0C"}
                    <img className='w-[2rem] h-[2rem]' src='https://cdn-icons-png.flaticon.com/128/12500/12500169.png' alt='sun' />
                  </div>
                </div>
              </div>
              :null}
          </div>
        </div>
      </div>
    </div>

  )
}


