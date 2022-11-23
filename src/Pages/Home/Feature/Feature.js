import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div className='feature lg:flex my-5 lg:my-12 '>
            <div className='text-start w-full relative lg:left-32 pt-20 ml-32 mr-56 pl-12 '>
                <h3 className='text-4xl  text-white'>Best to <br /> <span className='text-6xl font-bold text-orange-500' > Check condition's first</span></h3>
                <p className='py-12'>BEST SELL</p>
            </div>
            <div className='w-full'>
            </div>
        </div >
    );
};

export default Feature;