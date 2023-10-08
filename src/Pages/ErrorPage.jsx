// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>;
    }
    return (
        <div className='flex justify-center mt-[20%]'>
            <div>
                <p>404 error!</p>
                <p>Page not found</p>
            </div>
        </div>
    );
};

export default ErrorPage;