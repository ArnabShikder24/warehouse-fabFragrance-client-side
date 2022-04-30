import React from 'react';
import Banner from '../../components/Banner/Banner';
import Inventory from '../../components/Inventory/Inventory';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Inventory></Inventory>
            <Services></Services>
        </>
    );
};

export default Home;