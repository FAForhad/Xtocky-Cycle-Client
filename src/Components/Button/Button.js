import React from 'react';

const Button = ({ children }) => {
    return (
        <button
            class="group relative inline-block overflow-hidden border border-yellow-400 px-8 py-3 focus:outline-none focus:ring"
        >
            <span
                class="absolute inset-y-0 left-0 w-[2px] bg-yellow-400 transition-all group-hover:w-full group-active:bg-yellow-400"
            ></span>

            <span
                class="relative text-sm font-medium text-yellow-400 transition-colors group-hover:text-white"
            >
                {children}
            </span>
        </button>
    );
};

export default Button;