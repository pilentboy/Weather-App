import axios from 'axios'



async function getWeatherForecast(locationName,setforecast){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=7ca6734b8e2f416ebe6120136241911&q=${locationName}&days=7`)
        setforecast(res['data']['forecast']['forecastday'])
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast