import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "./src/reducer/Urlreducer";
import { weatherStore } from "./src/reducer/Weather";
import { mobileReducer } from "./src/reducer/mobileReducer";
const store=configureStore({
    reducer:{
        url:urlReducer,
        weather:weatherStore,
        mobile:mobileReducer,
    }
})

export default store;