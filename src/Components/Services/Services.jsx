// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = ({ data }) => {
    useEffect(() => {
        Aos.init({duration: 1000, easing: 'linear'});
    }, [])

    const { id, title, image_url, price, desc } = data;

    return (
        <div className='overflow-x-hidden'>
            <div data-aos="fade-up"
                className="card bg-base-100 shadow-xl">
                <figure><img
                    className='ease-in-out transition duration-500 hover:scale-110'
                    src={image_url} alt={title} /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    {
                        desc.length > 100 ? <p>{desc.slice(0, 100)}<span>.......</span></p> :
                            <p>{desc}</p>
                    }
                    <div className="card-actions justify-end items-center">
                        <p className='text-lg font-extrabold'> ${price}</p>
                        <Link to={`/service/${id}`}><button className="btn btn-warning hover:bg-green-500">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;