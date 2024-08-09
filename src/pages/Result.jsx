
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import getWeatherForecast from "../utils/getWeatherForecast";
import ForecastSlider from "../components/Sliders/forecastSlider/forecastSlider";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { RotatingLines } from "react-loader-spinner"; 
import {Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line } from "react-chartjs-2";


const Result = () => {


    const currentLocationWeather =useLocation()
    const [localTime,setLocalTime]=useState()
	const [forecast,setForecast]=useState()
    const [forecastDate,setForecastDate]=useState()
	
    const getDates=()=>{
        
    }

    useEffect(()=>{
        setForecast()
        getLocalTimeLocation(currentLocationWeather.state.location.lat,currentLocationWeather.state.location.lon,setLocalTime)
        getWeatherForecast(currentLocationWeather.state.location.name,setForecast,setForecastDate)
    },[currentLocationWeather.state])
   
    return (
		<>

		{/* current weather  */}
        <div className="w-full h-screen md:max-h-[800px] flex  justify-center items-center relative ">

            <WeatherCard currentWeather={currentLocationWeather.state.current} locationInfo={currentLocationWeather.state.location} localTime={localTime}/>	
			<BiSolidArrowToBottom className="text-[40px] text-yellow-500 absolute bottom-[10%] md:bottom-[5%] md:hidden lg:block"/>
		</div>	

		{/* forecast data */}
		{/* <div className="w-full h-fit pb-14  flex justify-center items-center ">
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
		</div> */}

        {/* forecast chart */}

        <div className="md:w-3/4 md:h-1/2 mx-auto p-5 flex justify-center items-center ">

			{
                forecast ?  <Line
                                data={{
                                    labels:forecastDate,
                                    datasets:[
                                        {
                                            label:"Forecast",
                                            data:forecast
                                        }
                                    ]
                                }} /> : 
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
        
		</>

    )

        
    
    
}

export default Result;
