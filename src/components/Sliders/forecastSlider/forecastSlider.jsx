import { Swiper,SwiperSlide } from "swiper/react";
import {Scrollbar} from "swiper/modules";
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/scrollbar';


const ForecastSlider = ({forecast}) => {

    
    const getDayName= (index) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if(forecast){
            let date= new Date(forecast[index].date);
            let dayName = days[date.getDay()];
            console.log(date.getDay())
            return dayName.slice(0,3)
        }
    }

    return (
        <div className="w-[95%] md:w-[80%] lg:w-[60%] h-48">
            <Swiper
                speed={500}
                slidesPerView={3}
                modules={[Scrollbar]}
                scrollbar={{
                    hide: true,
                  }}
                className="h-full cursor-grab active:cursor-grabbing"
            >
               {
                forecast?.map((info,index) => (
                    <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-between h-full rounded-md bg-sky-950 text-white text-base py-2 mx-1 md:mx-0 md:w-48 ">

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
