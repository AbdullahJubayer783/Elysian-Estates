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
  const empty = [1,2,3];
  const estates = useLoaderData();
  console.log("mashitjf==",estates);
  console.log(typeof(empty));
  if(typeof(estates) != typeof(empty)){
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    )
  }
    return (
        <>
        <div className='m-auto'>
        <Navbar></Navbar>
        
        <Banner></Banner>
        {/* <OurLocation></OurLocation> */}
        <div className='mt-16'>
        <OurExperiance></OurExperiance>
        </div>
        <div className='mt-24 text-[#333333]x'>
          <Horizion></Horizion>
        </div>
        <h4 className='text-goldx text-center text-3xl font-bold my-16'>Innovating Beyond  <span className='text-[#333333]'>Distinctions</span> </h4>
        <div className="mt-20 text-[#333333]x flex flex-wrap justify-center gap-9">
          {
            estates.map(estate => <NavLink className='w-[45%]' to={`/estates/${estate.id}`}><Estate key={estate.id} estate={estate}></Estate></NavLink>)
          }
          
        </div>

        <h4 className='text-goldx text-center text-3xl font-bold mt-16 mb-6'>Transforming The  <span className='text-[#333333]'>Cityscape</span> </h4>
        <p className=' text-xs text-center mb-16 w-5/6 m-auto'>In the last 28 years, Navana Real Estate has completed over 235 projects all over Dhaka and Chittagong. With expertise in architecture, construction, engineering, and interior design, we are revolutionizing the cityscape from all angles.</p>
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