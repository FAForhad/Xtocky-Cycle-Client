import React from 'react';

const Button = ({ children }) => {
    return (
        <div className='my-2'>
            <button
                className="group relative inline-block overflow-hidden border border-orange-400 px-8 py-3 focus:outline-none focus:ring"
            >
                <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-orange-500 transition-all group-hover:w-full group-active:bg-orange-400"
                ></span>

                <span
                    className="relative text-sm font-medium text-yellow-400 transition-colors group-hover:text-black"
                >
                    {children}
                </span>
            </button>
        </div>
    );
};

export default Button;