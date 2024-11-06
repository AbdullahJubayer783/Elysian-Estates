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
            <h4 className=' text-3xl font-bold text-center mb-16'>Expanding The <span className='text-goldx'>Horizon</span> </h4>
            <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
                <div className='flex items-center justify-center  gap-20 mt-12'>
                    <div className='text-center'>
                    
                        <div className={`animate__animated py-12 text-2xl font-bold  hover:font-extrabold transition ${counteron && 'animate__backInDown'}`}>Best Interirror <span className='text-goldx'>Design</span></div>


                        <div data-aos="fade-up" className='overflow-hidden rounded-lg'>
                            <img className='w-96 m-auto rounded-lg hover:scale-110 transition-transform duration-500' src={intr_1} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <div data-aos="fade-down border border-1" className='text-right rounded-lg overflow-hidden'>
                            <img className='w-96 m-auto rounded-lg hover:scale-110 transition-transform duration-500' src={intr_2} alt="" srcset="" />
                        </div>
                        <div className={`animate__animated py-12 text-2xl font-bold  hover:font-extrabold transition ${counteron && 'animate__backInUp'}`}><span className='text-goldx'>Quality </span> Of Leaving</div>
                    </div>
                </div>
            </ScrollTrigger>
            
        </div>
    );
};

export default Horizion;