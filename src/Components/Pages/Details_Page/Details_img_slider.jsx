import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
// import required modules
import { Navigation } from 'swiper/modules';
import banner_img_1 from "../../../assets/ee-banner-img-4.avif"
import banner_img_2 from "../../../assets/ee-bg-1f.jpg"
import banner_img_3 from "../../../assets/ee-banner-img.jpg"

const Details_Img_slider = () => {
    return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full w-full rounded-lg" >
       <SwiperSlide>
           <div><img src={banner_img_1} className='h-[380px] w-full' /></div>
       </SwiperSlide>
      <SwiperSlide>
        <div><img src={banner_img_1} className='h-[380px] w-full' /></div>
       </SwiperSlide>
        <SwiperSlide>
       <div><img src={banner_img_1} className='h-[380px] w-full' /></div>
       </SwiperSlide>
    </Swiper>
    //     <div data-aos="fade-up"
    //  data-aos-anchor-placement="top-bottom">
    //       
    //     </div>
  
    );
};

export default Details_Img_slider;