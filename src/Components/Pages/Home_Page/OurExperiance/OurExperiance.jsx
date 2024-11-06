import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
const OurExperiance = () => {
    const [counteron , setcounteron] = useState(false);
    return (
        
    <div className='mb-16 text-white'>
        <h4 className=' text-3xl font-bold text-center mb-16'>Our <span className='text-goldx'>Experiences</span> </h4>
        <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
            <div className='flex justify-around'>
                <div>
                    <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={20} duration={3}></CountUp>} +</h5>
                    <h6 className='font-serif text-xl font-semibold'>Years of Experience</h6>
                </div>
                <div>
                    <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={1500} duration={3}></CountUp>} +</h5>
                    <h6 className='font-serif text-xl font-semibold'>Projects Completed</h6>
                </div>
                <div>
                    <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp end={1800} duration={3}></CountUp>} +</h5>
                    <h6 className='font-serif text-xl font-semibold'>Units Delivered</h6>
                </div>
                <div>
                    <h5 className='text-goldx text-3xl font-extrabold text-center mb-3'>{counteron && <CountUp start={0} end={1200} duration={3}></CountUp>} +</h5>
                    <h6 className='font-serif text-xl font-semibold'>Plots Handed Over</h6>
                </div>
            </div>
        </ScrollTrigger>
    </div>

    );
};

export default OurExperiance;