import React from 'react';
import Navbar from '../../Shered/Navbar';
import OurExperiance from '../Home_Page/OurExperiance/OurExperiance';
import OurLocation_F from '../Home_Page/OurLocation/OurLocation_F';
import Horizion from '../Home_Page/Horizion/Horizion';
import Footer from '../../Shered/Footer/Footer';

const About = () => {
    return (
        <>
            <div className='text-white max-w-6xl m-auto'>
            <Navbar></Navbar>
            <OurExperiance></OurExperiance>
            <Horizion></Horizion>
            <h4 className='text-white text-center text-3xl font-bold mt-16 mb-6'>Transforming The  <span className='text-goldx'>Cityscape</span> </h4>
            <p className='text-gray-200 text-xs text-center mb-16'>In the last 28 years, Navana Real Estate has completed over 235 projects all over Dhaka and Chittagong. With expertise in architecture, construction, engineering, and interior design, we are revolutionizing the cityscape from all angles.</p>
            <div>
            <OurLocation_F></OurLocation_F>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default About;