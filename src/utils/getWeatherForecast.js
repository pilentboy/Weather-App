import axios from 'axios'



async function getWeatherForecast(locationName,setforecast){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=dd68b1b8c31b41a1aa4201043252004&q=${locationName}&days=7`)
        setforecast(res['data']['forecast']['forecastday'])
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast
