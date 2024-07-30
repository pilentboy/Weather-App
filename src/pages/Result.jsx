
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import getWeatherForecast from "../utils/getWeatherForecast";
import ForecastSlider from "../components/Sliders/forecastSlider/forecastSlider";

const Result = () => {


    const currentLocationWeather =useLocation()
    const [localTime,setLocalTime]=useState()
	const [forecast,setForecast]=useState()
	
    async function setLocalTimeLocation(){
        const res=await  getLocalTimeLocation(currentLocationWeather.state.location.lat,currentLocationWeather.state.location.lon)
        setLocalTime(res)
    }
	

    useEffect(()=>{
	   setLocalTimeLocation()
	   getWeatherForecast(currentLocationWeather.state.location.name,setForecast)
        
    },[currentLocationWeather.state])

    return (
		<>

		{/* current weather  */}
        <div className="w-full h-dvh md:max-h-[800px] flex  justify-center items-center ">

            <WeatherCard currentWeather={currentLocationWeather.state.current} locationInfo={currentLocationWeather.state.location} localTime={localTime}/>	

		</div>	

		{/* forecast data */}
		<div className="w-full h-fit pb-14 flex justify-center items-center">
			<ForecastSlider forecast={forecast}/>
		</div>
		
        
		</>

    )

        
    
    
}

export default Result;
