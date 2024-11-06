import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (<>
        
        <div className='text-center mt-8 text-white font-sans space-y-7 h-full'>
            <h2 className='text-3xl'>Unexpected Application Error!</h2>
            <h5 className='text-2xl font-bold'><span className='text-red-700'>404</span> Page Not Found</h5>
            <Link className='btn btn-success' to='/'>{"<"} Go back to home?</Link>
            <div className='m-auto'>
                <p className="text-2xl font-bold">
                Elysian Estates
                
                </p>
            </div>
        </div>
    </>
    );
};

export default ErrorPage;