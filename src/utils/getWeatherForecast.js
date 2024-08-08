import axios from 'axios'



async function getWeatherForecast(locationName,setforecast){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=bb5501c8849043b0878200739242707&q=${locationName}&days=3`)
        console.log(res['data']['forecast']['forecastday'])
        setforecast(res['data']['forecast']['forecastday'])
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast