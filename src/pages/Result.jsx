
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";

const Result = () => {


    const location =useLocation()
    const [localTime,setLocalTime]=useState();

    async function setLocalTimeLocation(){
        const res=await  getLocalTimeLocation(location.state.location.lat,location.state.location.lon)
        setLocalTime(res)
    }

    useEffect(()=>{
       console.log(location.state)
        setLocalTimeLocation()
        
    },[location.state])

    return (
        <div className="w-screen h-dvh flex justify-center items-center ">
            <WeatherCard currentWeather={location.state.current} locationInfo={location.state.location} localTime={localTime}/>
        
        </div>

    )

        
    
    
}

export default Result;
