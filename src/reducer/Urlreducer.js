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

export const localStorageThunk = createAsyncThunk("url/saveLocal", async (payload, thunkApi) => {
    console.log(payload)
    const {urltitle,url}=payload
    console.log(urltitle)
    console.log(url)
    try {
        const short = Math.random().toString(36).substring(2, 2 + 8);

        const urlData = {
            title:urltitle,
            shorturl: short,
            longurl: url
        }

        let localStorageData = JSON.parse(localStorage.getItem("userUrl")) || [];
        const data = localStorageData.filter((data) => data.longurl===url)
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
    initialState: {urlData:[],message:"",isOpen:false,deleteItem:null },
    reducers: {
        setMessage:(state,action)=>{
            state.message=action.payload
        },
        setIsOpen:(state,action)=>{
            state.isOpen=true,
            state.deleteItem=action.payload
        },
        setClose:(state,action)=>{
            state.isOpen=false
        }   
    },
    extraReducers: (builder) => {
        builder.addCase(localStorageThunk.fulfilled, (state, action) => {
            state.urlData.push(action.payload);
        }),
        builder.addCase(localStorageThunk.rejected, (state, action) => {
            state.message = action.payload;
        }),
        builder.addCase(fetchDataFromLocalStorage.fulfilled, (state, action) => {
            state.urlData =Array.isArray(action.payload) ? action.payload : [];
        })
        
    }
})

export const urlReducer = UrlSlice.reducer
export const {setMessage,setIsOpen,setClose}=UrlSlice.actions


