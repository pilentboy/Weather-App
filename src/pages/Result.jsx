
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

            <div className="flex items-center justify-center">
            <WeatherCard currentWeather={currentLocationWeather.state.current} locationInfo={currentLocationWeather.state.location} localTime={localTime}/>

            {/* <span>
                {forecast && forecast[0]['astro']['sunrise']}    
                {forecast && forecast[0]['astro']['sunset']}    
            </span>	 */}

            </div>
			<BiSolidArrowToBottom className="text-[40px]  text-yellow-500 absolute bottom-[10%] md:bottom-[5%] md:hidden lg:block"/>
		</div>	

		{/* forecast  */}
		<div className="w-full h-fit pb-6 px-2  flex flex-col justify-center items-center ">
            <ForecastSlider forecast={forecast}/>
            <ForecastChart forecast={forecast}/>
		</div>


        
	</>

    )

        
    
    
}

export default Result;
