import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoardButton from '../../Components/DashBoardButton/DashBoardButton';
import Navber from '../../Pages/Shared/Navber/Navber';

const Dashboard = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <div className="drawer drawer-mobile  bg-slate-200">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side sticky">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <Link to='/dashboard' ><DashBoardButton> <span className='text-black px-3'>My orders</span></DashBoardButton></Link>
                        <Link to='/dashboard/myproducts'><DashBoardButton><span className='text-black px-1'>My products</span></DashBoardButton> </Link>
                        <Link to='/dashboard'><DashBoardButton><span className='text-black px-3'>My buyers</span></DashBoardButton> </Link>
                        <Link to='/dashboard'><DashBoardButton><span className='text-black'>Add A product</span></DashBoardButton> </Link>
                        <Link to='/dashboard'><DashBoardButton><span className='text-black px-3'>All Sellers</span></DashBoardButton> </Link>
                        <Link to='/dashboard'><DashBoardButton><span className='text-black px-3'>All Buyers</span></DashBoardButton> </Link>
                        <Link to='/dashboard'><DashBoardButton><span className='text-black'>Reported Items</span></DashBoardButton> </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;