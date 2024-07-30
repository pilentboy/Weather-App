import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';


const ForecastSlider = ({forecast}) => {

    
    const getDayName= (index) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if(forecast){
            let date= new Date(forecast[index].date);
            let dayName = days[date.getDay()];
            return dayName.slice(0,3)
        }
    }

    return (
        <div className="w-[95%] md:w-[80%] lg:w-[60%] h-48">
            <Swiper
                speed={1000}
                slidesPerView={3}
                className="h-full cursor-grab active:cursor-grabbing"
            >
               {
                forecast?.map((info,index) => (
                    <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-between h-full w-48 rounded-md bg-sky-950 text-white text-base py-2">

                       <div className="flex flex-col items-center">
                        <span>
                                {getDayName(index)}
                        </span>
                        <span className="text-[11px] text-gray-400">
                            {info.date}
                        </span>
                       </div>

                        <img src={info.day.condition.icon} title={info.day.condition.text} alt="condition image"/>
                        <span title="max temperature">
                            {info.day.maxtemp_c}
                            °
                        </span>
                    </div>
                    </SwiperSlide>
    
                ))
               }
   
            </Swiper>
        </div>
    );
}

export default ForecastSlider;
