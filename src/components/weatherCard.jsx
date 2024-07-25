import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { Settings } from "../context/settings";
import { useContext } from "react";

const WeatherCard = ({locationInfo,localTime}) => {
    const {selectedLanIndex}=useContext(Settings)
    
    return (
        <div className=" w-80 h-96 rounded-md flex flex-col justify-between p-5 bg-sky-950">

            {/* local time & location name */}
            <div className={` justify-between items-center ${selectedLanIndex == 0 ? 'flex' : 'flex flex-row-reverse'}`}>
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

                <div className="flex flex-col items-center space-y-1">
                    <div 
                    className="flex items-center justify-between  w-10"
                    title="Wind speed"
                    >
                        <RiWindyFill className="text-gray-400 "/>
                            <span className="text-gray-200 text-xs">
                                {locationInfo.wind.speed}
                            </span>
                     
                  
                    </div>
                    <div 
                     className="flex items-center justify-between w-10"                    title="Humidiy"
                    >
                        <WiHumidity className="text-gray-400 text-xl "/>
                        <span className="text-gray-200 text-xs">
                            {locationInfo.main.humidity}%
                        </span>
                    </div>
                </div>

                <div 
                className="flex text-white"
                title="Temperature"
                >
                    <span className="text-2xl">
                        {locationInfo.main.temp}
                    </span>
                    <span className="text-4xl">
                    °
                    </span>
                </div>



         
            </div>

        </div>
    );
}

export default WeatherCard;
