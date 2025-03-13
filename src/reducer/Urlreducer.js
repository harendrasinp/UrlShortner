import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDataFromLocalStorage=createAsyncThunk("url/fetch",async(_,thunkApi)=>{
    try{
        const locatStorageData=JSON.parse(localStorage.getItem("userUrl"))||[];
        if(locatStorageData.length>0){
            return locatStorageData
        }
        return[]
    }catch(err){
        console.log(err)
        return thunkApi.rejectWithValue(err.message);
    }
})

export const localStorageThunk = createAsyncThunk("url/saveLocal", async (longUrl, thunkApi) => {
    try {
        const short = Math.random().toString(36).substring(2, 2 + 8);
        const urlData = {
            shorturl: short,
            longurl: longUrl
        }
        let localStorageData = JSON.parse(localStorage.getItem("userUrl")) || [];
        const data = localStorageData.filter((url) => url.longurl===longUrl)
        if (!data.length > 0) {
            localStorageData.push(urlData)
            localStorage.setItem("userUrl", JSON.stringify(localStorageData));
            return urlData;
        }else{
            return thunkApi.rejectWithValue("Already Formated")
          
        }
    }
    catch (err) {
        console.log(err)
    }
})

export const deletThunk=createAsyncThunk("url/delete",async(urldata,thunkApi)=>{
    try{
        const localStorageData=JSON.parse(localStorage.getItem("userUrl"))||[];
        if(localStorageData){
            const updatedUrl=localStorageData.filter((urls)=>urls.shorturl!==urldata.shorturl);
            localStorage.setItem("userUrl",JSON.stringify(updatedUrl));
        }
    }catch(err){
        console.log(err)
    }
})

const UrlSlice = createSlice({
    name: "url",
    initialState: { urlData:[],message:"" },
    reducers: {
        setMessage:(state,action)=>{
            state.message=action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(localStorageThunk.fulfilled, (state, action) => {
            state.urlData.push(action.payload)
        }),
        builder.addCase(localStorageThunk.rejected, (state, action) => {
            state.message = action.payload
        }),
        builder.addCase(fetchDataFromLocalStorage.fulfilled, (state, action) => {
            state.urlData =Array.isArray(action.payload) ? action.payload : [];
        })
        
    }
})

export const urlReducer = UrlSlice.reducer
export const {setMessage}=UrlSlice.actions


