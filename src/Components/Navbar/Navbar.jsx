// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(()=>{
        Aos.init({duration: 1000, easing: 'linear'});
    },[])
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () =>{
        logoutUser()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <>
        <li><NavLink to='/p1'>p1</NavLink></li>
        <li><NavLink to='/p2'>p2</NavLink></li>
        </>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div data-aos="fade-down" className="navbar bg-stone-200 shadow-xl rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">M&H Events</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p>{user.displayName}</p>
                            <img className='w-10 h-8 rounded-full' src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className='btn btn-error'>Logout</button>
                        </> :
                            <NavLink to='/login' className="btn btn-accent">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;