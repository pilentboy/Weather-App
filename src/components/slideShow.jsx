import { Swiper,SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';
import SlideShowImg from "./slideShowImg";

function SlideShow() {
    const gifSrc=['sunny.gif','rainSun.gif','wind.gif','snow.gif']
  return (
    <div className=" w-40  absolute bottom-10 left-[50%] translate-x-[-50%] block md:hidden">
        <Swiper
        
        modules={[Autoplay]}

            autoplay={{ delay: 3000, disableOnInteraction: false }}
            
            loop
            speed={1000}
            slidesPerView={1}
            className=" text-white text-3xl rounded-md text-center bg-white  "
        >

            
            {
                gifSrc.map((src,index) => <SwiperSlide key={index} className="swiper-no-swiping"><SlideShowImg src={src}/></SwiperSlide>)
            }
   
        </Swiper>
    </div>
  
  );
}

export default SlideShow;
