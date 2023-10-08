// eslint-disable-next-line no-unused-vars
import React from 'react';
import Marquee from "react-fast-marquee";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center py-20 px-10 bg-base-200 text-base-content rounded">
                <Marquee speed={100}>
                    <div>
                        <h1 className="text-2xl font-extrabold">Thank you for staying with us <br /> And <br />make our days joyful!</h1>
                    </div>
                </Marquee>
                <div className='mt-10'>
                    <h2 className='text-3xl font-extrabold'>Our Event Partners</h2>
                    <div className='flex gap-10 font-bold'>
                        <div className='space-y-3'>
                            <h2 className="text-lg">Hyper Flowers Ltd.</h2>
                            <h2 className="text-lg">Bangla Tigers Co Ltd.</h2>
                        </div>
                        <div className='space-y-3'>
                            <h2 className="text-lg">Barcode Ceramics Ltd.</h2>
                            <h2 className="text-lg"> Bhai-Bhai Shopping Cart Ltd.</h2>
                        </div>

                    </div>
                </div>
                <aside className='-mb-20 mt-10'>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;