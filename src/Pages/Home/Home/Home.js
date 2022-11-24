import React from 'react';
import Button from '../../../Components/Button/Button';
import Categories from '../../Categories/Categories';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Categories></Categories>
            <Button> <span className='text-black'>View All Categories</span> </Button>
            <Feature></Feature>
        </div>
    );
};

export default Home;