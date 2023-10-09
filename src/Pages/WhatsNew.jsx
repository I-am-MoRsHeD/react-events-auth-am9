// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhatsNew = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'linear' });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            {/* banner part */}
            <div
                data-aos="fade-up"
                style={{ height: '100vh' }}
                className="bg-[url('https://i.ibb.co/ZWmcQFD/background2.jpg')] bg-cover mb-10">
                <div className='h-full w-full backdrop-brightness-50 flex justify-center items-center '>
                    <div data-aos="fade-right" className='text-6xl font-bold text-slate-300'>
                        <h1 className="text-5xl font-serif font-bold">~We Never Disappoint <br /> <br /> <span className='ml-36'>Our Clients~</span></h1>
                    </div>
                </div>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* Hunting section */}
            <div>
                <div className='mb-16'>
                    <h2 className="text-5xl font-semibold font-serif text-center">Let us do something special!!!</h2>
                </div>
                <div>
                    <h1 className="text-3xl text-center font-semibold">We are arranging a Talent Challenge.Join our Talent Challenge and <br /> Win lots of valuable award.</h1>
                    <div className='border-b-2 w-3/4 mb-10 mt-3 mx-auto border-gray-600'>
                    </div>
                    <div className='w-1/2 space-y-5 mx-auto'>
                        <h3 className="text-2xl font-bold text-center">Just you need to follow some rules</h3>
                        <ul className='list-decimal space-y-3'>
                            <li className=''>First you need to share your code link of project or you can give us about project concept via video.</li>
                            <li>Then you have to give your Email,Phone number and your Address also</li>
                            <li>Then you have to send us through this submit form</li>
                            <li>After doing this,you have to share our website link to your friends...</li>
                        </ul>
                    </div>
                </div>
                <form className='text-center mt-5'>
                    <textarea name="comment" id="comment" cols="100" rows="10">Enter your code or repository link here.....</textarea> <br />
                    <input className='btn bg-gray-600 text-white' type="submit" value="Submit" />
                </form>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* Our upcoming features */}
            <div className='bg-slate-100'>
                <div className='text-center'>
                    <h1 className="text-4xl font-bold py-10 font-serif">Our Upcoming Deeds!!!</h1>
                </div>
                <div
                    data-aos="fade-up"
                    style={{ height: '100vh' }}
                    className="bg-[url('https://i.ibb.co/rdYm7BQ/background3.jpg')] bg-cover mb-10">
                    <div className='h-full w-full backdrop-brightness-50 flex justify-center items-center '>
                        <div data-aos="fade-right" className=' text-center font-bold text-slate-300'>
                            <h2 className='text-2xl'>We are going to surprise you!Only for our registered users!</h2>
                            <h1 className='text-5xl'>Combo Pack!</h1>
                            <h1 className='text-5xl'>Stay Tuned!</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            {/* send feedback */}
            <div className='py-10'>
                <div>
                    <h2 className="text-5xl font-serif text-center font-bold">Give us your Thoughts about our site!!</h2>
                </div>
                <div className='flex justify-center gap-5 items-center'>
                    <div
                        data-aos="fade-up"
                        style={{ height: '100vh' }}
                        className="mt-20 w-1/2 bg-[url('https://i.ibb.co/6X5m29Q/background4.jpg')] bg-cover">
                        <div className='h-full w-full backdrop-brightness-50 flex justify-center items-center '>
                            <h2 data-aos="fade-down" className="text-center text-white text-4xl font-semibold">~Feedback is a gift for owner from their customer!Obiously this will be benifited for us!~</h2>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl text-center font-semibold mb-2">Send Feedback</h2>
                        <form>
                            <textarea name="comment" id="" cols="70" rows="20">Write your experince!</textarea> <br />
                            <input className='btn btn-neutral' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatsNew;