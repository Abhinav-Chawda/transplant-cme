import { useState, useEffect } from 'react';

import aiims_logo from '../assets/aiims_logo.png';
import bar_logo from '../assets/bar.svg';
import cross_logo from '../assets/cross.svg';
import home_logo from '../assets/home.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavItem = ({ href, children, isHome = false, onClick }) => (
        <div className="relative group">
            <a
                href={href}
                onClick={onClick}
                className={`flex items-center px-4 py-2 transition-all duration-300 ${
                    isHome ? 'text-gray-800' : 'text-gray-700 hover:text-blue-900'
                } font-medium`}
            >
                {isHome ? (
                    <img className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" src={home_logo} alt="Home" />
                ) : (
                    <>
                        {children}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </>
                )}
            </a>
        </div>
    );

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-white shadow-lg'
                : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                        <a href="#main" className="flex items-center">
                            <img
                                src={aiims_logo}
                                alt="AIIMS Logo"
                                className="h-12 w-auto"
                            />
                            <span className="ml-3 text-gray-900 font-bold text-lg hidden sm:block">
                                AIIMS Bhopal
                            </span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all duration-300"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <img
                            src={isMenuOpen ? cross_logo : bar_logo}
                            alt={isMenuOpen ? "Close menu" : "Open menu"}
                            className="w-6 h-6 transform transition-transform duration-300"
                        />
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <NavItem href="#main" isHome={true} />
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#speakers">Speakers</NavItem>
                        <NavItem href="#schedule">Schedule</NavItem>
                        <NavItem href="#contact">Contact</NavItem>
                        <a
                            href="https://forms.gle/cvZhaRDrYv3Rks9n7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-blue-900 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out ${
                    isMenuOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-full invisible'
                }`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    <NavItem href="#main" isHome={true} onClick={() => setIsMenuOpen(false)} />
                    <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
                    <NavItem href="#speakers" onClick={() => setIsMenuOpen(false)}>Speakers</NavItem>
                    <NavItem href="#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</NavItem>
                    <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
                    <div className="px-4 py-4">
                        <a
                            href="https://forms.gle/cvZhaRDrYv3Rks9n7"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-center px-4 py-3 bg-blue-900 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 active:scale-95 transform transition-all duration-300"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;