import React from "react";
import { usePage, Link } from "@inertiajs/react";
import { RiHome2Fill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import {assetUrl} from "@/Components/Constant/index.js";

const Navbar = () => {
    const { auth } = usePage().props;
    const isLoggedIn = !!auth.user;

    return (
        <div className="flex justify-between items-center bg-[#748A96] text-white">

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

                <Link
                    className="nav-item bg-[#647882] group hover:bg-warning text-white pl-10 pr-8 py-3">
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

                {/* <Link href={route('job-apply.list')}
                    className={`nav-item group hover:bg-warning pl-10 pr-8 py-3 ${route().current('job-apply.list') ? 'bg-warning' : 'bg-[#647882]'}`}>
                    <span className="text-sm font-medium">Apply List</span>
                    <div className={`navbar-triangle z-10 ${route().current('job-apply.list') ? 'border-warning' : 'border-[#647882]'}`}></div>
                </Link> */}
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
               {/*
                <Link href={route('visa-apply.index')} className="relative flex items-center bg-primary text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Search Visa</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]"></div>
                </Link> */}



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
    );
};

export default Navbar;
