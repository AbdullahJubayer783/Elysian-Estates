import React, { useContext, useEffect } from 'react';
import Navbar from '../../Shered/Navbar';
import Footer from '../../Shered/Footer/Footer';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';




const Signin = () => {
    const {user , createUser , loading , setLoading , googlePopup , facebookPopup} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const {register,handleSubmit , formState: { errors , isSubmitting} } = useForm();
    async function OnSubmit(data) {
        try {
            const userCredential = await createUser(data.userEmail, data.userPass);
            const userCre = userCredential.user;
    
            if (userCre) {
                toast.success("User created successfully.");
                
    
                if (data.userImage && data.userImage[0] && data.userName) {
                    const file = data.userImage[0];
                    console.log(file);
                    await updateProfile(userCre, {
                        displayName: data.userName,
                        photoURL: "dfs"
                    });
                    
                } else if (data.userName) {
                    // Update only displayName if there's no image file
                    await updateProfile(userCre, {
                        displayName: data.userName
                    });
                } else {
                    console.warn("No file selected for upload.");
                }
                navigate(location?.state? location.state : '/')
            } else {
                console.error("User creation failed.");
            }
        } catch (error) {
            console.error('Error creating user or updating profile:', error);
            toast.error("Something went wrong. Please try again.");
            setLoading(false);
        }
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
        <div className='bg-white m-auto'>
            <Navbar></Navbar>
            <h3 className='text-[#333333] text-3xl font-bold text-center my-9'>Sign Up</h3>
            <form className='w-[40%] m-auto space-y-4 text-[#333333]' onSubmit={handleSubmit(OnSubmit)}>
                <label className='font-sans font-bold'>Photo(optional)*</label>
                <input type="file" {...register("userImage")} className="file-input file-input-bordered w-full  " placeholder='Photo(optional)' />
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" 
                {...register("userName", { required:{value:true,message:"Name field was required."},minLength:{value:3,message:"Name field minumum 3 char required"}})}
                placeholder="Full Name: abcd efgh" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                
                <input type="text" 
                {...register("userEmail",{required:{value:true,message:"Email field was required"},pattern:{value:/[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/,message:"@ , . was required to create an email."}})} 
                className="grow" placeholder="Email: daisy@site.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <input type="password" className="grow"
                {...register("userPass",{ required: {value:true,message:"Password field was required"},minLength:{value:6,message:"Minumum 6 charecter required."}})}  placeholder="Password: *@$%^12ab..." />
                </label>   
                <input type='submit' className="btn btn-outline w-full" disabled={isSubmitting} value={isSubmitting?"Submitting":"Sign Up"}/>
                {errors?.userName && <p className='text-red-700 text-sm font-bold'>{errors?.userName?.message}</p>}
                {errors?.userEmail && <p className='text-red-700 text-sm font-bold'>{errors?.userEmail?.message}</p>}
                {errors?.userPass && <p className='text-red-700 text-sm font-bold'>{errors?.userPass?.message}</p>}
            </form>
            <div className='my-6 flex justify-center gap-3 text-[#333333] w-[40%] m-auto'>
                <div class="relative w-full">
                    <div class="absolute bottom-1/2 w-full border-t border-gray-600"></div>
                </div>
                <div><p>or</p></div>
                <div class="relative w-full">
                    <div class="absolute bottom-1/2 w-full border-t border-gray-600"></div>
                </div>
            </div>
            {/* google btn */}
            <div>
                <div onClick={handelGooglePopupLogin} className='flex justify-center items-center gap-2 text-black bg-white w-[40%] m-auto p-3 rounded-md hover:bg-slate-200'>
                    <FaGoogle className='text-xl'></FaGoogle>
                    <p className='text-sm font-sans font-bold'>Sign Up With Google</p>
                </div>
                <div onClick={handelFacebookPopupLogin}
                className='flex justify-center items-center gap-2 text-[#333333] btn btn-outline w-[40%] m-auto p-3 rounded-md mt-4 hover:bg-slate-200'>
                    <FaFacebook className='text-xl'></FaFacebook>
                    <p className='text-sm font-sans font-bold'>Sign Up With Facebook</p>
                </div>
            </div>
            <p className='text-[#333333] font-sans text-sm text-center mt-4 pb-4'>Already have an account? <NavLink to='/signin' className='text-blue-700 font-bold'>Signin</NavLink></p>
        </div>
            <Footer></Footer>
       </>
    );
};

export default Signin;