import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const UrlSlice=createSlice({
    name:"url",
    initialState:{urlData:[]},
    reducers:{}
})

export const urlReducer=UrlSlice.reducer


