import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "./src/reducer/Urlreducer";
const store=configureStore({
    reducer:{
        url:urlReducer
    }
})

export default store;