// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    useEffect(() => {
        Aos.init({duration: 1000, easing: 'linear'});
    }, [])
    return (
        <div className='bg-[url("https://i.ibb.co/TPs2VQb/bg-image.jpg")] bg-cover bg-no-repeat overflow-x-hidden h-[100vh]'>
            <div className='backdrop-brightness-50 h-[100vh]'>
                <h2 data-aos="fade-down" className='text-center text-black lg:py-5 py-1 text-3xl lg:text-5xl font-bold'>What Our Clients are said</h2>
                <hr className='w-40 mb-3 lg:mb-14 mx-auto'></hr>
                <div data-aos="fade-up" className='grid grid-cols-3 lg:ml-16 gap-0 lg:gap-5 px-2 lg:px-10'>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-32 lg:w-44 text-lg lg:text-2xl text-lime-500 font-semibold'>`This is such a rediculous and happy to meet this org.`</p>
                        <div className='text-yellow-400'>
                            <h4>-Mrs Anika Tabassum</h4>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-32 lg:w-44 text-lg lg:text-2xl text-lime-500 font-semibold'>`They are just outstanding management,cannot imagine.`</p>
                        <div className='text-yellow-400'>
                            <h4>-Mr. Ali Akber Hossain</h4>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-32 lg:w-44 text-lg lg:text-2xl text-lime-500 font-semibold'>`They are just out of my mind.I have lost my words.`</p>
                        <div className='text-yellow-500'>
                            <h4>-Mr. Rahmanul Kabir</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;