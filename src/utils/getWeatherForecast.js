import axios from 'axios'



async function getWeatherForecast(locationName,setforecast){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=2e958c1c97b14af999e124649242812&q=${locationName}&days=7`)
        setforecast(res['data']['forecast']['forecastday'])
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast
