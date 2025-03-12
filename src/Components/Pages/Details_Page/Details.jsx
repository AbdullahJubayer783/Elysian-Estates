
import React from 'react';
import Navbar from '../../Shered/Navbar';
import Footer from '../../Shered/Footer/Footer';
import Details_Img_slider from './Details_img_slider';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const estate = useLoaderData();
    const {area , description , estate_title , facilities , location , price , segment_name , status , images } = estate;

    return (
        <>
                        
        
            <div className='m-auto text-[#333333] bg-white'>
                <Navbar></Navbar>
                <div className='flex flex-wrap gap-6 pt-10'>
                    <div className='w-[55%]'>
                        <Details_Img_slider images={images}></Details_Img_slider>
                    </div>
                    
                    <div className='w-[40%] text-left space-y-4'>
                        <h3 className='text-3xl'>{estate_title}</h3>
                        <h4 className='text-xl'>Segment Name: {segment_name}</h4>
                        <p className='text-xs'>{description}</p>
                        <p className='font-serif text-lg'>Area: {area}</p>
                        <p className='font-serif text-lg'>Status: {status}</p>
                        <p className='font-serif text-lg'>Location: {location} </p>
                        <p className='font-serif text-lg'>Facilities: {facilities.map(facilitie => <span className='font-bold'>{facilitie},</span>)}</p>
                        <p className=''>Price: <span className='font-bold'>{price}</span> </p>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Details;