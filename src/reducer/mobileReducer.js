import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice=createSlice({
    name:"mobile",
    initialState:{menu:false},
    reducers:{
        setMenu:(state,action)=>{
            state.menu=action.payload
        }
    }
})
export const mobileReducer=mobileSlice.reducer;
export const {setMenu}=mobileSlice.actions;