import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menu = <>
        <li>
            <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Category
            </a>
        </li>
        <li>
            <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Products
            </a>
        </li>
        <li>
            <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Dashboard
            </a>
        </li>

        <li>
            <Link
                to="/signin"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Sign in
            </Link>
        </li>
        <li>
            <Link
                to="/signup"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Sign up
            </Link>
        </li>
    </>



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
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        <span className='text-4xl text-orange-500'> X</span>tocky Cycle
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};




export default Navber;