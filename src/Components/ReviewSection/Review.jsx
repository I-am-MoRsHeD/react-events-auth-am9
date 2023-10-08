// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    useEffect(() => {
        Aos.init({duration: 1000, easing: 'linear'});
    }, [])
    return (
        <div className='bg-[url("https://i.ibb.co/TPs2VQb/bg-image.jpg")] bg-cover bg-no-repeat h-[100vh]'>
            <div className='backdrop-brightness-50 h-[100vh]'>
                <h2 data-aos="fade-down" className='text-center text-black py-5 text-5xl font-bold'>What Our Clients are said</h2>
                <hr className='w-40 mb-14 mx-auto'></hr>
                <div data-aos="fade-up" className='grid grid-cols-3 ml-16 gap-5 px-10'>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-44 text-2xl text-lime-500 font-semibold'>`I am so much happy to say that i am going to be a big fan of this event management system.This is such a rediculous and happy to meet this org.`</p>
                        <div className='text-yellow-400'>
                            <h4>-Mrs. Anika Tabassum</h4>
                            <p>Wedding ceremony</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-44 text-2xl text-lime-500 font-semibold'>`I can not imagine a package that they give me and was a outstanding management.That is unbelieveable`</p>
                        <div className='text-yellow-400'>
                            <h4>-Mr. Ali Akber Hossain</h4>
                            <p>Birthday Party</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img className='ml-14 mb-3' src="https://i.ibb.co/QQghJ1R/icons8-customer.gif" alt="" />
                        <p className='w-44 text-2xl text-lime-500 font-semibold'>`I have lost my words to say something about their management system.They are just out of my mind.`</p>
                        <div className='text-yellow-500'>
                            <h4>-Mr. Rahmanul Kabir</h4>
                            <p>Engagement Ceremony</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;