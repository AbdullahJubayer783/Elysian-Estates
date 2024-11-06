
import React from 'react';
import Navbar from '../../Shered/Navbar';
import Footer from '../../Shered/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const estates_xb = useLoaderData();
    // console.log(estates_xb);
    // console.log(estates_xb.forEach(es=>console.log(typeof )));
    let estate = estates_xb.find((es) => es.id === parseInt(id));
    console.log(estate);
    const {area , description , estate_title , facilities , image_url , location , price , segment_name , status , view_property} = estate;
    return (
        <>
            <div className='max-w-6xl m-auto text-white'>
                <Navbar></Navbar>
                <div className='flex flex-wrap gap-6 text-center items-center justify-center mt-4'>
                    <div className='w-[48%] overflow-hidden'>
                        <img src={`${image_url}`} className='w-full hover:scale-125 transition-transform duration-500' alt="" srcset="" />
                    </div>
                    <div className='w-[48%] text-left space-y-4'>
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