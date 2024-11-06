import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
// import required modules
import { Navigation } from 'swiper/modules';
import banner_img_1 from "../../../../assets/ee-banner-img-4.avif"
import banner_img_2 from "../../../../assets/ee-bg-1f.jpg"
import banner_img_3 from "../../../../assets/ee-banner-img.jpg"

const Banner = () => {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[420px] rounded-lg" >
          <SwiperSlide>
              <div className="min-h-screen h-[70vh] bg-cover bg-bottom" 
        style={{ backgroundImage: `url('${banner_img_2}')`}} >
                  <div className='w-full h-[70vh] animate__animated animate__fadeIn' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                  <h1 className='text-6xl font-extrabold text-whitex text-center pt-24'>Experience Unparalleled <br></br> Luxury Living</h1>
                      <p className='text-sm text-center font-mono  pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                      <button className='bg-whitex py-3 px-5 rounded-full hover:bg-transparent hover:ring-1 hover:text-whitex transition flex items-center gap-3'><p className='text-blackx font-bold text-sm'>Go To Browes</p> <FaArrowRightLong></FaArrowRightLong> </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="min-h-screen h-[70vh] bg-center bg-cover" 
        style={{ backgroundImage: `url('${banner_img_3}')` }}>
                  <div className='w-full h-[70vh] animate__animated animate__fadeIn' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <h1 className='text-6xl font-extrabold text-whitex text-center pt-24 '>Your Gateway to <br></br>Exquisite Estates</h1>
                      <p className='text-sm text-center font-mono  pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                      <button className='bg-whitex py-3 px-5 rounded-full hover:bg-transparent hover:ring-1 hover:text-whitex transition flex items-center gap-3'><p className='text-blackx font-bold text-sm'>Go To Browes</p> <FaArrowRightLong></FaArrowRightLong> </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="min-h-screen h-[70vh] bg-cover bg-center" 
        style={{ backgroundImage: `url('${banner_img_1}')` }}>
                  <div className='w-full h-[70vh] animate__animated animate__fadeIn' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <h1 className='text-6xl font-extrabold text-whitex text-center pt-24 '>Your Gateway to <br></br>Exquisite Estates</h1>
                      <p className='text-sm text-center font-mono  pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                      <button className='bg-whitex py-3 px-5 rounded-full hover:bg-transparent hover:ring-1 hover:text-whitex transition flex items-center gap-3'><p className='text-blackx font-bold text-sm'>Go To Browes</p> <FaArrowRightLong></FaArrowRightLong> </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          
        </Swiper>
        </div>
  
    );
};

export default Banner;