// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import PrivateRoute from './PrivateRoute';
import ServiceDetails from '../Pages/ServiceDetails';
import Services from '../Components/Services/Services';
import ErrorPage from '../Pages/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/details.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/public/details.json')
            },
            
        ]
    }
])



export default router;