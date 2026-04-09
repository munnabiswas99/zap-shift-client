import React from 'react';
import Banner from '../banner/Banner';
import Working from '../working/Working';
import Services from '../services/Services';
import Brands from '../brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Working></Working>
            <Services></Services>
            <Brands></Brands>
        </div>
    );
};

export default Home;