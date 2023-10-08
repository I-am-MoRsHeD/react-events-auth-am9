// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    return (
        <div className='bg-slate-200 rounded-lg'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;