// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const ServiceDetails = () => {
    const [info, setInfo] = useState('');
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const findData = data.find(details => details.id == id)
        setInfo(findData)
    }, [id, data])
    const { title, image_url, desc, price } = info;
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-teal-500 p-10'>
                <div className='flex justify-between h-screen border-2 border-dotted border-amber-200 p-2 items-center'>
                    <div className='flex-1 text-center space-y-10'>
                        <h2 className="text-4xl font-bold">{title}</h2>
                        <p>{desc}</p>
                        <button className='bg-gray-300 w-1/2 p-2 rounded-lg hover:bg-red-500'>Price: ${price}</button>
                    </div>
                    <div className='w-1/2 '>
                        <img src={image_url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;