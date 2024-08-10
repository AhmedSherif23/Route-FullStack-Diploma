import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation} from 'react-router-dom'

function Layout() {
    const [pathname, setPathname] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname);
    });

    return (
        <>
            <Navbar />
            <div className={(pathname === '/' || pathname === '/about') ? 'bg-accent' : ''}>
                <div className='container text-center'>
                    <div className='flex flex-col justify-center items-center min-h-3/5 pb-6'>
                        <Outlet /> {/* This will render the specific component based on the route */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout