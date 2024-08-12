import {Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { RotatingLines } from "react-loader-spinner"; 
import { useEffect, useState } from 'react';

const ForecastChart = ({forecast}) => {

    const [forecastDate,setForecastDate]=useState()
    const [forecastTemp,setForecastTemp]=useState()

    console.log(forecast)
    

        useEffect(()=>{
            
            if(forecast){
                setForecastDate(forecast.map(date => Object.values(date)[0]))
                setForecastTemp(forecast.map(data => Object.values(data)[2]['maxtemp_c']))
            }

        },[forecast])
    
    return (

        <div className="md:w-3/5 md:h-1/2 py-5 mt-10 flex justify-center items-center ">

        {
            forecast ?  <Line
                            data={{
                                labels:forecastDate,
                                datasets:[
                                    {
                                        label:"Max Temp",
                                        data:forecastTemp
                                    }
                                ]
                            }} /> : 
                <RotatingLines
                visible={true}
                height="40"
                width="40"
                color="#9ca3af"
                strokeColor="#9ca3af"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        }

      
    </div>
    
    );
}

export default ForecastChart;
