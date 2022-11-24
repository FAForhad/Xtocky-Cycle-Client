import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import Signup from '../Pages/Signup/Signup';
import Error from './Error/Error';
const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: < Home></Home>
                },
            ]
        },
        {
            path: '/signup',
            element: < Signup></Signup>
        },
        {
            path: '/signin',
            element: < SignIn></SignIn>
        },
        {
            path: '*',
            element: <Error></Error>
        }
    ]);
    return (
        <RouterProvider router={router} >
        </RouterProvider>
    );
};

export default Routes;