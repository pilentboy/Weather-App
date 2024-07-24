
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
       
        setLocalTimeLocation()
        
    },[location.state])

    return (
        <div className="w-screen h-dvh flex justify-center items-center ">


        </div>

    )

        
    
    
}

export default Result;
