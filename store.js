import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "./src/reducer/Urlreducer";
import { weatherStore } from "./src/reducer/Weather";
const store=configureStore({
    reducer:{
        url:urlReducer,
        weather:weatherStore,
    }
})

export default store;