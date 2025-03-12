import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger'
// import intr_1 from "../../assets/interiror.jpg"
import intr_1 from "../../../../assets/interiror.jpg"
// import intr_2 from "../../assets/pexels-fotoaibe-1571460.jpg"
import intr_2 from "../../../../assets/pexels-fotoaibe-1571460.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import './ImageHoverZoom.css'
import { TypeAnimation } from 'react-type-animation';
// import './ImageHoverZoom.css';
const Horizion = () => {
    const [counteron , setcounteron] = useState(false);
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div>
            <h4 className='text-goldx text-3xl font-bold text-center mb-16'>Expanding The <span className='text-[#333333]'>Horizon</span> </h4>
            
                <div className='flex items-center justify-center  gap-[2%] mt-12'>
                    <div className='w-[48%]'>
                    
                        <div className={`text-goldx pt-5 text-2xl font-extrabold`}>Best Interirror <span className='text-[#333333]'>Design</span></div>
                        <div className=''>
                            <ol className='text-sm my-3 text-left ps-9 list-disc space-y-3 mb-3'>
                                <li><span className='font-bold'>Health & Well-being </span>- healthcare, clean air, safe drinking water</li>
                                <li><span className='font-bold'>Economic Stability & Opportunities</span>- A good standard of living includes stable</li>
                                <li><span className='font-bold'>Environment & Infrastructure</span>- Clean and safe surroundings</li>
                            </ol>
                        </div>

                        <div data-aos="fade-up" className='overflow-hidden rounded-lg'>
                            <img className='w-full m-auto rounded-lg hover:scale-110 transition-transform duration-500' src={intr_1} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-[48%]'>
                        <div data-aos="fade-down border border-1" className='text-right rounded-lg overflow-hidden'>
                            <img className='w-full m-auto rounded-lg hover:scale-110 transition-transform duration-500' src={intr_2} alt="" srcset="" />
                        </div>
                        <div className={` text-[#333333] pt-5 text-2xl font-extrabold  `}><span className='text-goldx'>Quality </span> Of Leaving</div>
                        <div className='text-center'>
                            <ol className='text-sm my-3 text-left ps-12 list-disc space-y-3 mt-3'>

                                <li><span className='font-bold'>Functionality & Space Planning </span>- healthcare, clean air, safe drinking water</li>
                                <li><span className='font-bold'>Aesthetic & Style Coordination</span>- A good standard of living includes stable</li>
                                <li><span className='font-bold'>Lighting & Atmosphere</span>- Clean and safe surroundings</li>
                            </ol>
                        </div>
                    </div>
                </div>
            
            
        </div>
    );
};

export default Horizion;