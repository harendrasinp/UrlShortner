import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherThunk=createAsyncThunk("weather/temp",async(city,thunkApi)=>{
        try{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`);
            const apidata = await data.json();
            console.log(apidata)
            return apidata
        }
        catch(err){
            console.log(err)
        }
})


const WeatherSlice=createSlice({
    name:"weather",
    initialState:{data:""},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchWeatherThunk.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
});

export const weatherStore=WeatherSlice.reducer;
