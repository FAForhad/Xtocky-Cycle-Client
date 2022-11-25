import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../Pages/Home/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import Signup from '../Pages/Signup/Signup';
import Error from './Error/Error';
import Categories from '../Pages/Categories/Categories/Categories';
import Products from '../Pages/Products/Products/Products';
import PrivateRoute from './PrivateRoute';
import SingleCategories from '../Pages/Categories/SingleCategories/SingleCategories';
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
                {
                    path: '/category',
                    element: <Categories></Categories>
                },
                {
                    path: '/signleCategory/:id',
                    element: <PrivateRoute><SingleCategories></SingleCategories></PrivateRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/allcategories/${params.id}`)
                },
                {
                    path: '/products',
                    element: <PrivateRoute> <Products></Products></PrivateRoute>
                },
                {
                    path: '/signup',
                    element: < Signup></Signup>
                },
                {
                    path: '/signin',
                    element: < SignIn></SignIn>
                },
            ]
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
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