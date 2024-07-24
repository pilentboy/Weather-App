
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";

const Result = () => {


    const location =useLocation()
    const [localTime,setLocalTime]=useState();

    async function setLocalTimeLocation(){
        const res=await  getLocalTimeLocation(location.state.coord)
        setLocalTime(res)
    }

    

    useEffect(()=>{
        if(!localTime){
            setLocalTimeLocation()
        }
    },[])

    return <>
    <div className="w-screen h-dvh flex justify-center items-center ">

    <h1 className="text-white text-2xl mx-4">{location.state.name}</h1>
    <h1 className="text-white text-2xl">{localTime ? localTime : <span>loading time</span>}</h1>

    </div>
        
    </>
    
}

export default Result;
