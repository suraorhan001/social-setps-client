import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
              <Toaster position="top-center" />
        </div>
    );
};

export default Root;