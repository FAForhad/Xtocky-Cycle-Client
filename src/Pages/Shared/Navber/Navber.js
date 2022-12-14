import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../UserContext/UserContext';
import toast from 'react-hot-toast';


const Navber = () => {

    const { user, logout } = useContext(Authcontext);

    const handleLogOut = () => {
        logout()
            .then(() => {
                toast.success('SuccessFully Logout')
            })
            .then(error => console.error(error))
    }


    const menu = <React.Fragment>
        <li>
            <Link
                to='/'
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to='/category'
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
            >
                Category
            </Link>
        </li>
        <li>
            <Link
                to="/blogs"
                aria-label="blogs"
                title="blogs"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
            >
                Blogs
            </Link>
        </li>
        {user?.uid

            ?


            <>
                <li>
                    <Link
                        to="/dashboard"
                        aria-label="dashboard"
                        title="dashboard"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <button
                        onClick={handleLogOut}
                        title="Log Out"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                    >
                        Logout
                    </button>
                </li>
            </>

            :


            <>
                <li>
                    <Link
                        to="/signin"
                        aria-label="signin"
                        title="signin"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                    >
                        Sign in
                    </Link>
                </li>
                <li>
                    <Link
                        to="/signup"
                        aria-label="signup"
                        title="signup"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                    >
                        Sign up
                    </Link>
                </li>
            </>
        }

    </React.Fragment>



    return (
        <div className='bg-transparent '>
            <div className="navbar px-10 lg:px-56">
                <div className="navbar ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        <span className='text-4xl text-orange-500'> X</span>tocky Cycle
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};




export default Navber;