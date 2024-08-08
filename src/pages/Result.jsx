
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import getWeatherForecast from "../utils/getWeatherForecast";
import ForecastSlider from "../components/Sliders/forecastSlider/forecastSlider";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { RotatingLines } from "react-loader-spinner"; 


const Result = () => {


    const currentLocationWeather =useLocation()
    const [localTime,setLocalTime]=useState()
	const [forecast,setForecast]=useState()
	
  

    useEffect(()=>{
        setLocalTime()
        setForecast()
        getLocalTimeLocation(currentLocationWeather.state.location.lat,currentLocationWeather.state.location.lon,setLocalTime)
        getWeatherForecast(currentLocationWeather.state.location.name,setForecast)
        
    },[currentLocationWeather.state])

    return (
		<>

		{/* current weather  */}
        <div className="w-full h-screen md:max-h-[800px] flex  justify-center items-center relative ">

            <WeatherCard currentWeather={currentLocationWeather.state.current} locationInfo={currentLocationWeather.state.location} localTime={localTime}/>	
			<BiSolidArrowToBottom className="text-[40px] text-yellow-500 absolute bottom-[10%] md:bottom-[5%] md:hidden lg:block"/>
		</div>	

		{/* forecast data */}
		<div className="w-full h-fit pb-14  flex justify-center items-center ">
			{
                forecast ? <ForecastSlider forecast={forecast}/> : 
                    <RotatingLines
                    visible={true}
                    height="40"
                    width="40"
                    color="#9ca3af"
                    strokeColor="#9ca3af"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
            }
		</div>

        {/* forecast chart */}
        <div className="w-full h-screen ">

        </div>
        
		</>

    )

        
    
    
}

export default Result;
