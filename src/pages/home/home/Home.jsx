import React from 'react';
import Banner from '../banner/Banner';
import Working from '../working/Working';
import Services from '../services/Services';
import Brands from '../brands/Brands';
import Review from '../review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Working></Working>
            <Services></Services>
            <Brands></Brands>
            <Review></Review>
        </div>
    );
};

export default Home;