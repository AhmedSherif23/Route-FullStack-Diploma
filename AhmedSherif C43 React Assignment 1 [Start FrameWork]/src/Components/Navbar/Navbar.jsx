import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // const debounce = (func, delay) => {  //for event bubbling problem
    //     let timeout;
    //     return (...args) => {
    //         clearTimeout(timeout);
    //         timeout = setTimeout(() => func.apply(this, args), delay);
    //     };
    // };

    const shrinkNavHeight = () => {
        if(window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    // const shrinkNavHeightDebounced = debounce(shrinkNavHeight, 1000);  //for event bubbling problem
    // window.addEventListener('scroll', shrinkNavHeightDebounced);  //for event bubbling problem

    window.addEventListener('scroll', shrinkNavHeight);

    return (
        <>
            <header className="bg-main sticky left-0 top-0 right-0 z-40">
                <div className="container">
                    <nav className={`flex flex-wrap items-center justify-between text-white font-bold uppercase transition-all duration-500 ${navbar ? 'py-4' : 'py-8'}`}>
                        <div className="flex lg:flex lg:items-cente">
                            <Link className="block" to="">
                                <h1 className="font-bold">START FRAMEWORK</h1>
                            </Link>
                        </div>

                        <div className={`flex lg:items-center lg:w-1/3 ms-auto ${isMenuOpen && 'flex-col order-last w-full'}`}>
                            <nav aria-label="Global" className={`lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                                <ul className={`flex lg:flex-row gap-4 lg:items-center ${isMenuOpen && 'flex-col self-start'}`}>
                                    <li>
                                        <NavLink className="p-2 rounded-lg transition hover:bg-accent" to="about"> About </NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="p-2 rounded-lg transition hover:bg-accent" to="portfolio"> PORTFOLIO </NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="p-2 rounded-lg transition hover:bg-accent" to="contact"> CONTACT </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="block lg:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl rounded p-2 text-gray-800 ring-gray-800 transition focus:ring">
                                <i className="fa fa-bars px-2"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
