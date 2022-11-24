import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import './Feature.css'

const Feature = () => {
    return (
        <div className='feature lg:flex my-5 lg:my-12 '>
            <div className='text-start w-full relative lg:left-32 py-6 lg:pt-20 lg:ml-32 mr-24 lg:mr-56 pl-6 lg:pl-12 bg-slate-900'>
                <h3 className='text-4xl  text-white'>Best to <br /> <span className='text-6xl font-bold text-orange-500' > Check condition's first</span></h3>
                <p className='my-6 text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br /> nibh euismod tincidunt ut laoreet dolore magna aliquam
                    erat volutpat.<br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation <br /> ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea </p>
                <div className='lg:flex  items-center  text-orange-500'  >
                    <div className='mr-12 my-10'>
                        <h2 className='py-6 text-3xl'>FEATURED PRODUCTS</h2>
                        <Link to='/products'>
                            <Button> Check Products</Button></Link>
                    </div>
                    <div>
                        <p className='py-6 text-3xl'>BEST SELL</p>
                        <Link to='/products'>
                            <Button> Check Products</Button></Link>
                    </div>
                </div>
            </div>
            <div className='w-full'>
            </div>
        </div >
    );
};

export default Feature;