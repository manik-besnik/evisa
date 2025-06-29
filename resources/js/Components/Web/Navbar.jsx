import React, { useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import { RiHome2Fill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { assetUrl } from "@/Components/Constant/index.js";

const Navbar = () => {
    const { auth } = usePage().props;
    const isLoggedIn = !!auth.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden lg:flex justify-between items-center bg-[#748A96] text-white">
                <div className="flex items-center">
                    <div className="absolute z-10 ml-[45px] mt-[5px]">
                        <button onClick={() => window.history.back()}>
                            <img src={`${assetUrl + 'images/back.png'}`} alt="Back" className="w-4 h-5" />
                        </button>
                    </div>
                    <Link href={route('home')}
                        className={`nav-item relative group hover:bg-warning pl-20 py-2 pr-4 ${route().current('home') ? 'bg-warning' : 'bg-[#748A96]'}`}>
                        <span className={`p-1 rounded-full border group-hover:bg-warning border-white ${route().current('home') ? 'bg-warning' : ' '}`}>
                            <RiHome2Fill />
                        </span>
                        <div className={`navbar-triangle z-10 ${route().current('home') ? 'border-warning' : 'border-[#748A96]'}`}></div>
                    </Link>
                    <Link href={route('visa.create')}
                        className={`nav-item group hover:bg-warning pl-10 py-3 pr-4 
                            ${route().current('visa.create') || route().current('visa-apply.create') ? 'bg-warning' : 'bg-[#647882]'}`}>
                        <span className="text-sm font-medium">Visa</span>
                        <div className={`navbar-triangle z-10 
                            ${route().current('visa.create') || route().current('visa-apply.create') ? 'border-warning' : 'border-[#647882]'}`}>
                        </div>
                    </Link>
                    <Link href={route('job.create')}
                        className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('job.create') ? 'bg-warning' : 'bg-[#748A96]'}`}>
                        <span className="text-sm font-medium">Job</span>
                        <div className={`navbar-triangle z-10 ${route().current('job.create') ? 'border-warning' : 'border-[#748A96]'}`}></div>
                    </Link>

                    <Link className="nav-item bg-[#647882] group hover:bg-warning text-white pl-10 pr-8 py-3">
                        <span className="text-sm font-medium">Ticket</span>
                        <div className="navbar-triangle z-[10] border-[#647882]"></div>
                    </Link>

                    {isLoggedIn && (
                        <>
                            <Link href={route('visa-apply.index')}
                                className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('visa-apply.index') ? 'bg-warning' : 'bg-[#748A96]'}`}>
                                <span className="text-sm font-medium">Reports</span>
                                <div className={`navbar-triangle z-10 ${route().current('visa-apply.index') ? 'border-warning' : 'border-[#748A96]'}`}></div>
                            </Link>

                            <Link href={route('contact.index')}
                                className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('contact.index') ? 'bg-warning' : 'bg-[#647882]'}`}>
                                <span className="text-sm font-medium">Contact</span>
                                <div className={`navbar-triangle z-10 ${route().current('contact.index') ? 'border-warning' : 'border-[#647882]'}`}></div>
                            </Link>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <Link href={route('contact.index')}
                                className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('contact.index') ? 'bg-warning' : 'bg-[#748A96]'}`}>
                                <span className="text-sm font-medium">Contact</span>
                                <div className={`navbar-triangle z-10 ${route().current('contact.index') ? 'border-warning' : 'border-[#748A96]'}`}></div>
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex items-center pr-32">
                    <Link href={route('update.news')}
                        className={`nav-item group hover:bg-warning pl-10 pr-8 py-3 ${route().current('update.news') ? 'bg-warning' : 'bg-[#647882]'}`}>
                        <div className="navbar-triangle-left"></div>
                        <span className="text-sm font-medium">Update News</span>
                        <div className={`navbar-triangle z-10 ${route().current('update.news') ? 'border-warning' : 'border-[#647882]'}`}></div>
                    </Link>
                    {isLoggedIn && (
                        <>
                            <Link href={route('visa-apply-cv.index')}
                                className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('visa-apply-cv.index') ? 'bg-warning' : 'bg-[#748A96]'}`}>
                                <IoPersonCircleOutline size={28} />
                                <div className={`navbar-triangle z-10 ${route().current('visa-apply-cv.index') ? 'border-warning' : 'border-[#748A96]'}`}></div>
                            </Link>
                            <Link href={route('cv.index')}
                                className={`nav-item group hover:bg-warning pl-10 pr-8 py-3 ${route().current('cv.index') || route().current('cv.create') ? 'bg-warning' : 'bg-[#647882]'}`}>
                                <span className="text-sm font-medium">CV Create</span>
                                <div className={`navbar-triangle z-10 ${route().current('cv.index') || route().current('cv.create') ? 'border-warning' : 'border-[#647882]'}`}></div>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden bg-[#748A96] text-white">
                {/* Mobile Header */}
                <div className="flex justify-between items-center px-4 py-3">
                    <div className="flex items-center">
                        {/* Back Button */}
                        <button onClick={() => window.history.back()} className="mr-5"> 
                            <img src={`${assetUrl + 'images/back.png'}`} alt="Back" className="w-4 h-5" />
                        </button>

                        {/* Home Button */}
                        <Link href={route('home')} className="flex items-center" onClick={closeMenu}>
                            <span className={`p-2 rounded-full border border-white ${route().current('home') ? 'bg-warning' : 'bg-transparent'}`}>
                                <RiHome2Fill size={20} />
                            </span>
                        </Link>
                    </div>
                    <div>
                        {/* Hamburger Menu Button */}
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
                )}

                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-[#748A96] transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {/* Menu Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-600">
                        <h3 className="text-lg font-semibold text-white">Menu</h3>
                        <button onClick={closeMenu} className="text-white">
                            <HiX size={24} />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col py-4">
                        <Link href={route('home')}
                            className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('home') ? 'bg-warning' : ''}`}
                            onClick={closeMenu}>
                            <div className="flex items-center">
                                <RiHome2Fill className="mr-3" />
                                <span>Home</span>
                            </div>
                        </Link>

                        <Link href={route('visa.create')}
                            className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('visa.create') || route().current('visa-apply.create') ? 'bg-warning' : ''
                                }`}
                            onClick={closeMenu}>
                            <span>Visa</span>
                        </Link>

                        <Link href={route('job.create')}
                            className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('job.create') ? 'bg-warning' : ''}`}
                            onClick={closeMenu}>
                            <span>Job</span>
                        </Link>

                        <div className="px-6 py-4 text-white hover:bg-warning transition-colors cursor-pointer">
                            <span>Ticket</span>
                        </div>

                        {isLoggedIn && (
                            <>
                                <Link href={route('visa-apply.index')}
                                    className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('visa-apply.index') ? 'bg-warning' : ''}`}
                                    onClick={closeMenu}>
                                    <span>Reports</span>
                                </Link>

                                <Link href={route('contact.index')}
                                    className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('contact.index') ? 'bg-warning' : ''}`}
                                    onClick={closeMenu}>
                                    <span>Contact</span>
                                </Link>

                                <Link href={route('visa-apply-cv.index')}
                                    className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('visa-apply-cv.index') ? 'bg-warning' : ''}`}
                                    onClick={closeMenu}>
                                    <div className="flex items-center">
                                        <IoPersonCircleOutline size={20} className="mr-3" />
                                        <span>Profile</span>
                                    </div>
                                </Link>

                                <Link href={route('cv.index')}
                                    className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('cv.index') || route().current('cv.create') ? 'bg-warning' : ''
                                        }`}
                                    onClick={closeMenu}>
                                    <span>CV Create</span>
                                </Link>
                            </>
                        )}

                        {!isLoggedIn && (
                            <Link href={route('contact.index')}
                                className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('contact.index') ? 'bg-warning' : ''}`}
                                onClick={closeMenu}>
                                <span>Contact</span>
                            </Link>
                        )}

                        <Link href={route('update.news')}
                            className={`px-6 py-4 text-white hover:bg-warning transition-colors ${route().current('update.news') ? 'bg-warning' : ''}`}
                            onClick={closeMenu}>
                            <span>Update News</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;