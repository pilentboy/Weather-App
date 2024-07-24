

const WeatherCard = ({locationInfo,localTime}) => {
    console.log(locationInfo)
    
    return (
        <div className=" w-80 h-96 rounded-md flex flex-col justify-between p-5 bg-sky-950">

            {/* local time & location name */}
            <div className="flex justify-between items-center">
                <span 
                className="text-white text-2xl"
                title={locationInfo.sys.country}
                >
                    {locationInfo.name}
                </span>
                <span 
                className="text-lg text-gray-400"
                title='local time'
                >
                    {localTime}
                </span>
            </div>

            {/* weather description & image */}
            <div className="flex flex-col justify-center items-center">
                <img
                 src={`https://openweathermap.org/img/wn/${locationInfo.weather[0].icon}.png`}
                 className="w-[110px]"
                />

                <span className="text-gray-400">
                    {locationInfo.weather[0].description}
                </span>
            </div>

            {/* details */}
            <div className="flex justify-between items-center">


         
            </div>

        </div>
    );
}

export default WeatherCard;
