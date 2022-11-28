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
import Categories from '../Pages/Categories/Categories/Categories';
import Products from '../Pages/Products/Products/Products';
import PrivateRoute from './PrivateRoute';
import SingleCategories from '../Pages/Categories/SingleCategories/SingleCategories';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import MyOrders from '../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../Pages/Dashboard/MyProducts/MyProducts';
import AddAProduct from '../Pages/Dashboard/AddAProduct/AddAProduct';
import Feature from '../Pages/Home/Feature/Feature';
import DashboardFeautre from '../Pages/Dashboard/DashboardFeautre/DashboardFeautre';
import AllSellers from '../Pages/Dashboard/AllSellers/AllSellers';
import AllBuyers from '../Pages/Dashboard/AllBuyers/AllBuyers';
import AdminRoute from './AdminRoute/AdminRoute';
import SellersRoute from './SellersRoute/SellersRoute';
import Blogs from '../Pages/Blogs/Blogs';
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
                    loader: ({ params }) => fetch(`https://xtocky-cycle-server.vercel.app/allcategories/${params.id}`)
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
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <DashboardFeautre></DashboardFeautre>
                },
                {
                    path: '/dashboard/myorders',
                    element: <MyOrders></MyOrders>
                },
                {
                    path: '/dashboard/addaproduct',
                    element: <SellersRoute> <AddAProduct></AddAProduct></SellersRoute>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <SellersRoute> <MyProducts></MyProducts></SellersRoute>
                },
                {
                    path: '/dashboard/allsellers',
                    element: <AdminRoute> <AllSellers></AllSellers></AdminRoute>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>
                }
            ]
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