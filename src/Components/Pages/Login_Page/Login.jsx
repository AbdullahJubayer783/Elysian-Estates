import React, { useContext } from 'react';
import Navbar from '../../Shered/Navbar';
import Footer from '../../Shered/Footer/Footer';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, formState: { errors , isSubmitting}  } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const {user , signInUser , loading  , googlePopup , facebookPopup} = useContext(AuthContext);
    async function OnSubmit(data) {
        await signInUser(data.userEmail,data.userPass).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate(location?.state? location.state : '/')
            toast.success("Login Successfull..!!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            toast.error("Invalid Credential..!!")
          });

    }
    const handelGooglePopupLogin = () =>{
        googlePopup()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(location?.state? location.state : '/')
            toast.success("Sign Up Successfull.")
          }).catch((error) => {
            toast.error("Some Error occerd.")
          });
    }
    const handelFacebookPopupLogin = () =>{
        facebookPopup()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(location?.state? location.state : '/')
            toast.success("Sign Up Successfull.")
          }).catch((error) => {
            toast.error("Some Error occerd.")
          });
    }
    return (
        <>
        <div className='max-w-6xl m-auto'>
            <Navbar></Navbar>
            <h3 className='text-white text-3xl font-bold text-center my-9'>Welcome Back</h3>
            <form className='w-[40%] m-auto space-y-4 text-white' onSubmit={handleSubmit(OnSubmit)}>
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" {...register("userEmail",{required:{value:true,message:"Email field was required"},pattern:{value:/[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/,message:"@ , . was required to create an email."}})} placeholder="Email: daisy@site.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" {...register("userPass",{ required: {value:true,message:"Password field was required"},minLength:{value:6,message:"Minumum 6 charecter required."}})} placeholder="Password:  *@$%^12ab..." />
                </label>
                <input type='submit' disabled={isSubmitting} value={isSubmitting?"Submitting":"Sign Up"} className="btn btn-outline w-full"/>
                {errors?.userEmail && <p className='text-red-700 text-sm font-bold'>{errors?.userEmail?.message}</p>}
                {errors?.userPass && <p className='text-red-700 text-sm font-bold'>{errors?.userPass?.message}</p>}
            </form>
            <div className='my-6 flex justify-center gap-3 text-white w-[40%] m-auto'>
                <div className="relative w-full">
                    <div className="absolute bottom-1/2 w-full border-t border-gray-600"></div>
                </div>
                <div><p>or</p></div>
                <div className="relative w-full">
                    <div className="absolute bottom-1/2 w-full border-t border-gray-600"></div>
                </div>
            </div>
             
            <div>
                <div onClick={handelGooglePopupLogin} className='flex justify-center items-center gap-2 text-black bg-white w-[40%] m-auto p-3 rounded-md hover:bg-slate-200'>
                    <FaGoogle className='text-xl'></FaGoogle>
                    <p className='text-sm font-sans font-bold'>Sign In With Google</p>
                </div>
                <div onClick={handelFacebookPopupLogin} className='flex justify-center items-center gap-2 text-white btn btn-outline w-[40%] m-auto p-3 rounded-md mt-4 hover:bg-slate-200'>
                    <FaFacebook className='text-xl'></FaFacebook>
                    <p className='text-sm font-sans font-bold'>Sign In With Facebook</p>
                </div>
            </div>
            <p className='text-white font-sans text-sm text-center mt-4'>New to here? <NavLink state={location?.state? location.state : '/'} to='/signup' className='text-blue-700 font-bold'>Signup</NavLink></p>
        </div>
            <Footer></Footer>
       </>
    );
};

export default Login;
