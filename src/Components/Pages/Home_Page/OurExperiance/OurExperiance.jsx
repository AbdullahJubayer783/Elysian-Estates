import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import constraction from "../../../../assets/social-proof-bg.webp"
import constraction2 from "../../../../assets/const2.jpg"
const OurExperiance = () => {
    const [counteron , setcounteron] = useState(false);
    return (
        
    <div className='mb-16 text-[#333333]'>
        <h4 className=' text-3xl font-bold text-center mb-16 text-goldx'>Our <span className='text-[#333333]'>Experiences</span> </h4>
        <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
            <div className='flex justify-around relative'>
            <div className='w-2/5 flex justify-around'>
                <div>
                    <div>
                        <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={20} duration={3}></CountUp>} +</h5>
                        <h6 className='font-serif text-xl font-semibold'>Years of Experience</h6>
                    </div>
                    <div className='mt-10'>
                        <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={1500} duration={3}></CountUp>} +</h5>
                        <h6 className='font-serif text-xl font-semibold'>Projects Completed</h6>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={1800} duration={3}></CountUp>} +</h5>
                        <h6 className='font-serif text-xl font-semibold'>Units Delivered</h6>
                    </div>
                    <div className='mt-10'>
                        <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp start={0} end={1200} duration={3}></CountUp>} +</h5>
                        <h6 className='font-serif text-xl font-semibold'>Plots Handed Over</h6>
                    </div>
                </div>
            </div>
            <div className='w-3/5'>
                <img className='w-full' src={constraction} alt="" srcset="" />
            </div>
            <div className='absolute w-2/5 -bottom-8 left-20'>
                <img className='w-full' src={constraction2} alt="" srcset="" />
            </div>
            </div>
        </ScrollTrigger>
    </div>

    );
};

export default OurExperiance;