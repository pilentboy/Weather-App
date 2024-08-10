import axios from 'axios'



async function getWeatherForecast(locationName,setforecast){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=46bcde85a7f74ae2938205451241008&q=${locationName}&days=7`)
        setforecast(res['data']['forecast']['forecastday'])
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast