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
                  <h1 className='text-6xl font-extrabold text-white text-center pt-24'>Experience Unparalleled <br></br> Luxury Living</h1>
                      <p className='text-sm text-center text-gray-200 font-mono  pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                     
                        <button class="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Browse More</span>
                        <span class="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        </button>

                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="min-h-screen h-[70vh] bg-center bg-cover" 
        style={{ backgroundImage: `url('${banner_img_3}')` }}>
                  <div className='w-full h-[70vh] animate__animated animate__fadeIn' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <h1 className='text-6xl font-extrabold text-white text-center pt-24 '>Your Gateway to <br></br>Exquisite Estates</h1>
                      <p className='text-sm text-center font-mono text-gray-200 pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                      <button class="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Browse More</span>
                        <span class="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="min-h-screen h-[70vh] bg-cover bg-center" 
        style={{ backgroundImage: `url('${banner_img_1}')` }}>
                  <div className='w-full h-[70vh] animate__animated animate__fadeIn' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <h1 className='text-6xl font-extrabold text-white text-center pt-24 '>Your Gateway to <br></br>Exquisite Estates</h1>
                      <p className='text-sm text-center font-mono text-gray-200 pt-4'>Step into a world of elegance and sophistication with our curated selection of luxury homes.</p>
                      <div className='flex justify-center mt-8'>
                      <button class="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Browse More</span>
                        <span class="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          
        </Swiper>
        </div>
  
    );
};

export default Banner;