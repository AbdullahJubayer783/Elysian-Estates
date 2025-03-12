import React, { useContext } from 'react';
import { PiBuildingsDuotone } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import userLogo from '../../assets/user_Image.jpg'
const NavItms = () =>{
    return <> <li className='pe-3'><NavLink to='/'>Home</NavLink></li>
            <li className='pe-3'><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li></>
        
    
}
const Navbar = () => {
    const {user , logout } = useContext(AuthContext);

    const hendelLogout = () =>{
        logout().then(() => {
            console.log("Logout Success");
            toast.success("Logout Success..!!")
          }).catch((error) => {
            console.log("Logout unsuccessfull");
          });
    }
    return (
        <div className="navbar bg-base-100 text-[#333333]x py-6">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavItms></NavItms>
                </ul>
                </div>
                <a className="text-2xl font-bold">
                    <PiBuildingsDuotone></PiBuildingsDuotone>
                    <p>Elysian Estates</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItms></NavItms>
                </ul>
            </div>
            
            <div className="navbar-end gap-3">
                <div className='flex items-center gap-3 justify-end'>
                {
                    // user?.photoURL?user.photoURL:
                    user!==null? <div className='flex justify-center items-center '><img className='w-10 rounded-full me-4' src={userLogo} alt="" srcSet="" title={user.displayName}/> <button onClick={hendelLogout} className='btn btn-active text-[#333333]'>Logout</button></div> :
                    <div className='gap-5'><NavLink className='me-3' to='/signin'><button className='rounded-full text-sm font-bold py-3 px-5 hover:ring-1'>Sing In</button></NavLink>
                    <NavLink to='/signup'><button className='bg-whitex rounded-full text-blackx text-sm font-bold  py-3 px-5 hover:bg-gray-200'>Sign Up</button></NavLink></div>
                }
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;




