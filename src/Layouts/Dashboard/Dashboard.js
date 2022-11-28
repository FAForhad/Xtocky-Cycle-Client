import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoardButton from '../../Components/DashBoardButton/DashBoardButton';
import Navber from '../../Pages/Shared/Navber/Navber';
import { Authcontext } from '../../UserContext/UserContext';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState([])
    const { user } = useContext(Authcontext)
    console.log(user, currentUser)

    useEffect(() => {
        fetch(`https://xtocky-cycle-server.vercel.app/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            })
    }, [user.email])


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
                        <img className=" w-48 h-48  mx-auto mask mask-circle" src={user.photoURL} alt='' />
                        <h2 className='text-2xl pb-3 uppercase font-bold text-orange-600'>{user.displayName}</h2>
                        {
                            currentUser.role === 'Buyer' && <> <Link to='/dashboard/myorders' ><DashBoardButton> <span className='text-black px-3'>My orders</span></DashBoardButton></Link></>
                        }
                        {
                            currentUser.role === 'Seller' && <>
                                <Link to='/dashboard/addaproduct'><DashBoardButton><span className='text-black'>Add A product</span></DashBoardButton> </Link>
                                <Link to='/dashboard/myproducts'><DashBoardButton><span className='text-black px-1'>My products</span></DashBoardButton> </Link>
                                <Link to='/dashboard'><DashBoardButton><span className='text-black px-3'>My buyers</span></DashBoardButton> </Link>
                            </>
                        }
                        {
                            currentUser.role === 'Admin' && <>
                                <Link to='/dashboard/allsellers'><DashBoardButton><span className='text-black px-3'>All Sellers</span></DashBoardButton> </Link>
                                <Link to='/dashboard/allbuyers'><DashBoardButton><span className='text-black px-3'>All Buyers</span></DashBoardButton> </Link>
                                <Link to='/dashboard'><DashBoardButton><span className='text-black'>Reported Items</span></DashBoardButton> </Link>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;