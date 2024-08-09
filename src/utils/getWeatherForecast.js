import axios from 'axios'



async function getWeatherForecast(locationName,setforecast,setForecastDate){
	
    try{
        const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=bb5501c8849043b0878200739242707&q=${locationName}&days=7`)
        
        const forecastDay=res['data']['forecast']['forecastday']
        console.log(forecastDay)
        setForecastDate(forecastDay.map(date => Object.values(date)[0]))
        setforecast(forecastDay.map(data => Object.values(data)[2]['maxtemp_c']))
    }
    catch(e){
        console.log(e)
    }
}

export default getWeatherForecast