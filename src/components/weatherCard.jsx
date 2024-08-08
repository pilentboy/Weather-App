import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { Watch } from "react-loader-spinner";

const WeatherCard = ({currentWeather,locationInfo,localTime}) => {
    

    return (
        <div className=" w-80 h-96 rounded-md flex flex-col justify-between p-5 border border-gray-700 bg-sky-950  ">

            {/* local time & location name */}
            <div className={` justify-between items-center flex`}>
                <span 
                className="text-white text-2xl relative"
                >
                    {locationInfo.name}
                    <span 
                    className={`absolute -top-4 left-0 text-[10px] text-gray-400 w-64`}>
                        {locationInfo.country}
                    </span>
                </span>
                {/* local time */}
                <span 
                className="text-lg text-gray-400"
                title='local time'
                >
              
                    {localTime ? localTime : 
                        <Watch
                            visible={true}
                            height="20"
                            width="20"
                            radius="48"
                            color="#9ca3af"
                            ariaLabel="watch-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            /> }
                </span>
            </div>

            {/* weather description & image */}
            <div className="flex flex-col justify-center items-center">
                <img
                 src={`${currentWeather.condition.icon}`}
                 className="w-[110px]"
                />

                <span className="text-gray-400">
                    {currentWeather.condition.text}
                </span>
            </div>

            {/* details */}
            <div className="flex justify-between items-center">

                <div className="flex flex-col  space-y-1">
                    <div 
                    className="flex items-center space-x-1 min-w-7 "
                    title="Wind speed"
                    >
                        <RiWindyFill className="text-gray-400 "/>
                            <span className="text-gray-200 text-xs">
                                {currentWeather.wind_kph}
                                
                                <span className="text-[8px]">
                                    kph
                                </span>
                            </span>
                     
                  
                    </div>
                    <div 
                    className="flex items-center space-x-1 m-w-12  "          
                    title="Humidiy"
                    >
                        <WiHumidity className="text-gray-400 text-xl "/>
                        <span className="text-gray-200 text-xs">
                            {currentWeather.humidity}
                                     
                            <span className="text-[8px]">
                                    %
                             </span>
                        </span>
                    </div>
                </div>

                <div 
                className="flex text-white"
                title="Temperature"
                >
                    <span className="text-2xl">
                        {currentWeather.temp_c}
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
