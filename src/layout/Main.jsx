import React from 'react';
import Navber from '../Page/Header/Navber';
import Footer from '../Page/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber />

            <Outlet />

            <Footer />
            
        </div>
    );
};

export default Main;