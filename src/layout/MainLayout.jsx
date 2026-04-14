import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='container mx-auto py-8'>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;