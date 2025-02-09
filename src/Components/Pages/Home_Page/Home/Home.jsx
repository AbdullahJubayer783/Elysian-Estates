import React from 'react';
import Navbar from "../../../Shered/Navbar";
import Banner from "../Banner/Banner";
import Estate from "../Estates/Estate"
import OurExperiance from "../OurExperiance/OurExperiance";
import OurLocation_F from "../OurLocation/OurLocation_F"
import Horizion from "../Horizion/Horizion";
import { NavLink, useLoaderData } from 'react-router-dom';
import Footer from '../../../Shered/Footer/Footer';

const Home = () => {
  const estates = useLoaderData();
    return (
        <>
        <div className='max-w-6xl m-auto'>
        <Navbar></Navbar>
        
        <Banner></Banner>
        {/* <OurLocation></OurLocation> */}
        <div className='mt-16'>
        <OurExperiance></OurExperiance>
        </div>
        <div className='mt-24 text-whitex'>
          <Horizion></Horizion>
        </div>
        <h4 className='text-white text-center text-3xl font-bold my-16'>Innovating Beyond  <span className='text-goldx'>Distinctions</span> </h4>
        <div className="mt-20 text-whitex flex flex-wrap justify-center gap-9">
          {
            estates.map(estate => <NavLink className='w-[45%]' to={`/estates/${estate.id}`}><Estate key={estate.id} estate={estate}></Estate></NavLink>)
          }
          
        </div>

        <h4 className='text-white text-center text-3xl font-bold mt-16 mb-6'>Transforming The  <span className='text-goldx'>Cityscape</span> </h4>
        <p className='text-gray-200 text-xs text-center mb-16'>In the last 28 years, Navana Real Estate has completed over 235 projects all over Dhaka and Chittagong. With expertise in architecture, construction, engineering, and interior design, we are revolutionizing the cityscape from all angles.</p>
        <div>
          <OurLocation_F></OurLocation_F>
        </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
        </>
    );
};

export default Home;