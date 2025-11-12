import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
              <Toaster position="top-center" />
        </div>
    );
};

export default Root;