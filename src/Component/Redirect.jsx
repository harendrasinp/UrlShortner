import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Redirect = () => {
    const {shorturl}=useParams();
    
    useEffect(()=>{
        const localdata=JSON.parse(localStorage.getItem("userUrl"))||[]
        console.log(localdata)
        const originalUrl=localdata.find((url)=>url.shorturl===shorturl)
        console.log(originalUrl.longurl)
        if(originalUrl){
            window.location.href=originalUrl.longurl;
        }
        else{
            console.log("No url found")
        }
    },[shorturl])
}
