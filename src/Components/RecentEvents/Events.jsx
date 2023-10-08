// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import EventsCss from './Events.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className=''>
            <div data-aos="fade-down" className='border-2 border-blue-400 my-10 w-2/6 mx-auto rounded-lg'>
                <h2 className='text-4xl mb-5 text-center font-bold'>Our Recent Events</h2>
            </div>
            <div className='grid grid-cols-3 gap-5 px-16 ml-5'>
                <div data-aos="fade-right" className='main'>
                    <img className='w-80' src="https://i.ibb.co/kSQR7D9/wedding-ceremony.jpg" alt="" />
                    <div className='overlay'>
                        <div className=''>
                            <h2 className="text-2xl text-white">Rakibul</h2>
                            <h2 className="text-2xl ml-10 text-white">&</h2>
                            <h2 className="text-2xl ml-16 text-white">Kaira</h2>
                            <p className='text-white'>~Wedding Ceremony~</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className='main'>
                    <img className='w-80' src="https://i.ibb.co/5R3p6zq/reception-ceremony.jpg" alt="" />
                    <div className='overlay'>
                        <div className=''>
                            <h2 className="text-2xl text-white">Siam</h2>
                            <h2 className="text-2xl ml-10 text-white">&</h2>
                            <h2 className="text-2xl ml-16 text-white">Naima</h2>
                            <p className='text-white'>~Reception Ceremony~</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='main'>
                    <img className='w-80' src="https://i.ibb.co/9h2QzfP/engagement-ceremony.jpg" alt="" />
                    <div className='overlay'>
                        <div className=''>
                            <h2 className="text-2xl text-white">Arham</h2>
                            <h2 className="text-2xl ml-10 text-white">&</h2>
                            <h2 className="text-2xl ml-16 text-white">Sokina</h2>
                            <p className='text-white'>~Engagement Ceremony~</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;