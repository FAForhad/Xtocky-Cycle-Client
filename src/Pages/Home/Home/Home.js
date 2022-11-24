import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import HomeCategories from '../HomeCategories/HomeCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <HomeCategories></HomeCategories>
            <Link to='/category'> <Button> <span className='text-black'>View All Categories</span> </Button></Link>
            <Feature></Feature>
        </div>
    );
};

export default Home;