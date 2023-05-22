import React from 'react';
import Navbar from '../../shared/Navbar';
import Banner from './HomeComponent/Banner';
import BannerCard from './HomeComponent/BannerCard';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerCard></BannerCard>
        </div>
    );
};

export default Home;