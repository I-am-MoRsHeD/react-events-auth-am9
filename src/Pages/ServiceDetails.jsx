// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { setItems } from '../Components/LocalStorage/localStorage';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    Aos.init();
    const [info, setInfo] = useState('');
    const { id } = useParams();
    const idnt = parseInt(id);
    const data = useLoaderData();

    useEffect(() => {
        const findData = data.find(details => details.id == id)
        setInfo(findData)
    }, [id, data])
    const { title, image_url, desc, price } = info;

    const handleCart = () =>{
        setItems(idnt);
        Swal.fire(
            'Good job!',
            'Added to Cart!',
            'success'
          )
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-teal-500 overflow-x-hidden p-1 lg:p-10'>
                <div className='lg:flex justify-between h-screen border-2 border-dotted border-amber-200 p-2 items-center'>
                    <div data-aos="fade-right" className='flex-1 p-3 lg:p-1 text-center rounded-tl-lg rounded-bl-lg space-y-10 bg-pink-200'>
                        <h2 className="text-lg lg:text-4xl font-bold">{title}</h2>
                        <p className='text-md lg:text-xl'>{desc}</p>
                        <button
                        onClick={handleCart}
                        className='bg-gray-300 lg:w-1/2 p-2 rounded-lg hover:bg-red-500'>Add to cart: ${price}</button>
                    </div>
                    <div data-aos="fade-left" className='lg:w-1/2 '>
                        <img className='rounded-tr-lg  rounded-br-lg' src={image_url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;