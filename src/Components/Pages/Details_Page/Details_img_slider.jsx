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

const Details_Img_slider = ({images}) => {
  console.log(images[0].id);
    return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full w-full rounded-lg" >
      {
        images.map(img => <SwiperSlide key={img.id}>
          <div><img src={img.image} className='h-[440px] w-full' /></div>
      </SwiperSlide>)
      }
    </Swiper>
    );
};

export default Details_Img_slider;