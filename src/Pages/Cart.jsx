// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredItems } from '../Components/LocalStorage/localStorage';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Navbar from '../Components/Navbar/Navbar';

const Cart = () => {
    const { loading } = useContext(AuthContext);
    const data = useLoaderData();
    const [carts, setCarts] = useState('');

    useEffect(() => {
        const storedCarts = getStoredItems();
        if (data.length > 0) {
            const findCart = data.filter(item => storedCarts.includes(item.id))
            setCarts(findCart)
        }
    }, [data])

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-2'>
                {
                    carts.map(cart =>
                        <div className='w-5/6 my-10 mx-auto shadow-xl rounded-lg' key={cart.id}>

                            <img className='w-full' src={cart.image_url} alt="" />
                            <div className='space-y-5 p-5'>
                                <h2 className='text-4xl font-bold'>{cart.title}</h2>
                                <p className='text-lg'>
                                    {
                                        cart.desc.length > 130 ? <p>{cart.desc.slice(0, 130)}<span>.......</span></p> :
                                            <p>{cart.desc}</p>

                                    }
                                </p>
                            </div>


                        </div>)
                }
            </div>
        </div>
    );
};

export default Cart;