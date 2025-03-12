import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const Estate = ({estate}) => {
    const [counteron , setcounteron] = useState(false);
    const {area , description , estate_title , facilities , location , price , segment_name , status , images } = estate;
    const image_url = images[0].image;
    console.log(images[0].image);
    return (
        <>
            
            <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
            <div className={`animate__animated ${counteron&&'animate__fadeInDown'}`}>
                    <div className='relative overflow-hidden '>
                        <img src={image_url} className='w-full hover:scale-110 duration-500 transition-transform' alt="" srcset="" />
                        <div className='absolute bottom-1.5 left-3 font-extrabold text-sm'>
                            <p className='text-white'>{location}</p>
                        </div>
                    </div>
                    <h2 className='text-3xl mt-4 text-black'>{estate_title}</h2>
                    <p className='text-sm'>{description.split("", 200)}...</p>
                </div>
         </ScrollTrigger>
        </>
    );
};

export default Estate;