// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { BsArrowRightCircle, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar/Navbar';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'linear' });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div
                style={{ height: '100vh' }}
                className="bg-[url('https://i.ibb.co/VtH76sR/wedding-background.jpg')] bg-cover my-10">
                <div className='h-full w-full backdrop-brightness-50 flex justify-center items-center '>
                    <div data-aos="fade-right" className='text-6xl font-bold text-cyan-400'>
                        <h2>~ We Work For Client </h2>
                        <h2 className='ml-24 mt-2'>Not For Money ~</h2>
                    </div>
                </div>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* about our events */}
            <div className='py-10 bg-zinc-100'>
                <h1 className="text-5xl font-bold font-serif text-center pt-10 mb-20">Why Choose M&H Events?</h1>
                <div className='flex items-center justify-between mx-10 gap-5'>
                    <div data-aos="fade-right">
                        <img className='w-[600px]' src="https://i.ibb.co/30MYrSp/event-background.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left" className='grid grid-cols-2 gap-20'>
                        <div className='text-center w-44'>
                            <div className='flex'>
                                <span className='mt-2 mr-2 text-3xl'><BsArrowRightCircle></BsArrowRightCircle></span>
                                <div>
                                    <h3 className="text-3xl">Experience & Know-How</h3>
                                    <p>We have more than fifteen years of event management experience, tons of ideas and know exactly which industry contacts will be the best fit for your event.</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center w-44'>
                            <div className='flex'>
                                <span className='mt-2 mr-2 text-3xl'><BsArrowRightCircle></BsArrowRightCircle></span>
                                <div>
                                    <h3 className="text-3xl">Experience & Know-How</h3>
                                    <p>We have more than fifteen years of event management experience, tons of ideas and know exactly which industry contacts will be the best fit for your event.</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center w-44'>
                            <div className='flex'>
                                <span className='mt-2 mr-2 text-3xl'><BsArrowRightCircle></BsArrowRightCircle></span>
                                <div>
                                    <h3 className="text-3xl">Experience & Know-How</h3>
                                    <p>We have more than fifteen years of event management experience, tons of ideas and know exactly which industry contacts will be the best fit for your event.</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center w-44'>
                            <div className='flex'>
                                <span className='mt-2 mr-2 text-3xl'><BsArrowRightCircle></BsArrowRightCircle></span>
                                <div>
                                    <h3 className="text-3xl">Experience & Know-How</h3>
                                    <p>We have more than fifteen years of event management experience, tons of ideas and know exactly which industry contacts will be the best fit for your event.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* about our team */}
            <div>
                <h2 className="text-5xl font-bold text-center my-24">Meet Our Team</h2>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex justify-between pb-10  gap-10 mx-5'>
                    <div>
                        <img className='w-[96] rounded-lg' src="https://i.ibb.co/5s5bFwT/profile2.jpg" alt="" />
                        <h3 className="text-xl text-center mt-4">Harry Broke</h3>
                        <h4 className="text-xl text-center font-bold">Owner & Creative Director</h4>
                    </div>
                    <div>
                        <img className='w-[96]' src="https://i.ibb.co/TRbMyht/profile.jpg" alt="" />
                        <h3 className="text-xl text-center mt-4">Ashley Masson</h3>
                        <h4 className="text-xl text-center font-bold">Assistant Event Planner</h4>
                    </div>
                </div>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* contact with use */}
            <div className='bg-zinc-100 py-10'>
                <h2 className="text-4xl text-center font-bold font-serif">Contact With Us</h2>
                <div className='flex justify-center gap-32 py-10 '>
                    <div>
                        <h2 className='text-xl font-semibold text-cyan-500'>Email Us</h2>
                        <p>m&hevents@yahoo.com</p>
                    </div>
                    <div className='mt-32'>
                        <h2 className='text-xl font-semibold text-cyan-500'>Give Message</h2>
                        <div className='flex mt-5 text-2xl justify-between'>
                            <BsInstagram></BsInstagram>
                            <BsFacebook></BsFacebook>
                            <BsTwitter></BsTwitter>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold text-cyan-500'>Call Us</h2>
                        <p>Via: 9689684683</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;