
import { useLocation } from "react-router-dom";
import getLocalTimeLocation from "../utils/getLocalTimeLocation";
import { useEffect, useState } from "react";
import axios from "axios"
import WeatherCard from "../components/weatherCard";

const Result = () => {


    const location =useLocation()
    const [localTime,setLocalTime]=useState()
	const [forecast,setForecast]=useState()
	
    async function setLocalTimeLocation(){
        const res=await  getLocalTimeLocation(location.state.location.lat,location.state.location.lon)
        setLocalTime(res)
    }
	
	async function getForecast(){
	
		try{
			const res=await axios.get('https://api.weatherapi.com/v1/forecast.json?key=bb5501c8849043b0878200739242707&q=rasht&days=14')
			console.log(res['data']['forecast']['forecastday'])
			setForecast(res['data']['forecast']['forecastday'])
		}
		catch(e){
			console.log(e)
		}
	}

    useEffect(()=>{
       console.log(location.state)
        setLocalTimeLocation()
		getForecast()
        
    },[location.state])

    return (
		<>
		
        <div className="w-full h-dvh flex justify-center items-center ">
            <WeatherCard currentWeather={location.state.current} locationInfo={location.state.location} localTime={localTime}/>
		</div>	
		
		<div className='bg-gray-800 min-h-screen text-gray-300 flex flex-col justify-center items-center'> 
				
				{
					forecast && forecast.map(data => (
						<div className='flex items-center space-x-2'>
						<h1> {data.date} </h1>
						<h1>MaxTemp: {data.day.maxtemp_c} </h1> 
						<h1>Condition: {data.day.condition.text} </h1> 
						<img src={data.day.condition.icon} className='' />
						</div>
						
					))
				}
			
		</div>
        
		</>

    )

        
    
    
}

export default Result;
