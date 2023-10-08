// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'linear' });
    }, [])
    return (
        <div
            data-aos="fade-up"
            style={{ height: '100vh' }}
            className="bg-[url('https://i.ibb.co/pK7dnNy/Screenshot-11.png')] bg-cover my-10">
            <div className='h-full w-full backdrop-brightness-50 flex justify-center items-center '>
                <Marquee speed={100} pauseOnHover={true}>
                    <div data-aos="fade-right" className='text-6xl font-bold text-orange-400'>
                        <h2>~ Keep us in </h2>
                        <h2 className='ml-24 mt-2'>Your Thoughts ~</h2>
                    </div>
                </Marquee>
            </div>

        </div >
    );
};

export default Banner;