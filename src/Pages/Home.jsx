// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import Services from '../Components/Services/Services';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Review from '../Components/ReviewSection/Review';
import Events from '../Components/RecentEvents/Events';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1000, easing: 'linear'});
    }, [])
    const data = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='border-b-2 w-1/2 my-20 mx-auto border-gray-600'>
            </div>
            <div>
                <div data-aos="fade-down" className='w-1/2 mx-auto text-center my-10 space-y-4'>
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="text-lg">We are always treat our customer with love and in a sweet way.... <br /> Hope you also like it!</p>
                </div>
                <div className='px-4 grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        data.map(details => <Services
                            data={details}
                            key={details.id}></Services>)
                    }
                </div>
            </div>
            <div className='border-b-2 w-1/2 mx-auto border-gray-500 my-20'>
            </div>
            <Events></Events>
            <div className='border-b-2 w-1/2 mx-auto border-gray-500 my-20'>
            </div>
            <Review></Review>
            <div className='border-b-2 w-1/2 mx-auto border-gray-500 my-20'>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;