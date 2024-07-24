

const WeatherCard = ({locationInfo,localTime}) => {
    console.log(locationInfo)
    return (
        <div className=" w-80 h-96 rounded-md flex flex-col justify-between p-5 bg-sky-950">

            {/* local time & location name */}
            <div className="flex justify-between items-center">
                <span className="text-white text-2xl">
                    {locationInfo.name}
                </span>
                <span 
                className="text-lg text-gray-400"
                title='local time'
                >
                    {localTime}
                </span>
            </div>




        </div>
    );
}

export default WeatherCard;
