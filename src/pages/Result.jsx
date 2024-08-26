
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import getWeatherForecast from "../utils/getWeatherForecast";
import ForecastSlider from "../components/Sliders/forecastSlider/forecastSlider";
import { BiSolidArrowToBottom } from "react-icons/bi";
import ForecastChart from "../components/forecastChart";



const Result = () => {


    const currentLocationWeather =useLocation()
    const [localTime,setLocalTime]=useState()
	const [forecast,setForecast]=useState()
 
	
    console.log(currentLocationWeather.state)
    useEffect(()=>{
        setForecast()
        getLocalTimeLocation(currentLocationWeather.state.location.lat,currentLocationWeather.state.location.lon,setLocalTime)
        getWeatherForecast(currentLocationWeather.state.location.name,setForecast)
    },[currentLocationWeather.state])
   
    return (
		<>

		{/* current weather  */}
        <div className="w-full h-screen md:max-h-[800px] flex justify-center items-center relative">

        
            <WeatherCard currentWeather={currentLocationWeather.state.current} forecast={forecast} locationInfo={currentLocationWeather.state.location} localTime={localTime}/>


        
			<BiSolidArrowToBottom className="text-[40px]  text-yellow-500 absolute bottom-[5%] md:bottom-[3%] md:hidden lg:block lg:text-[30px]"/>
		</div>	

		{/* forecast chart & slider */}
		<div className="w-full h-fit pb-6 px-1 mt-0 lg:mt-10 flex flex-col justify-center items-center ">
            <ForecastSlider forecast={forecast}/>
            <ForecastChart forecast={forecast}/>
		</div>


        
	</>

    )

        
    
    
}

export default Result;
