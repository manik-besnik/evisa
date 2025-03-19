import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import {Link} from "@inertiajs/react"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-[#C19125] text-white">

            <div className="flex items-center">
                <button type="button" onClick={() => window.history.back()}
                        className={`nav-item group hover:bg-warning pl-20 py-2 pr-4 ${route().current('home') ? 'bg-warning' : 'bg-primary'}`}>
                    <span className={`p-1 rounded-full border group-hover:bg-warning border-white ${route().current('home') ? 'bg-warning' : 'bg-primary'}`}>
                        <RiHome2Fill />
                    </span>

                    <div className={`navbar-triangle z-10 ${route().current('home') ? 'border-warning' : 'border-primary'}`}></div>

                </button>
                <Link href={route('visa.create')}
                    className={`nav-item group hover:bg-warning pl-10 py-3 pr-4 ${route().current('visa.create') ? 'bg-warning' : 'bg-[#AC8230]'}`}>
                    <span className="text-sm font-medium">Visa</span>

                    <div className={`navbar-triangle z-10 ${route().current('visa.create') ? 'border-warning' : 'border-[#AC8230]'}`}></div>

                </Link>
                <Link href={route('job.create')}
                    className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('job.create') ? 'bg-warning' : 'bg-[#C19125]'}`}>
                    <span className="text-sm font-medium">Job</span>
                    <div className={`navbar-triangle z-10 ${route().current('job.create') ? 'border-warning' : 'border-[#C19125]'}`}></div>
                </Link>

                <Link
                    className="nav-item bg-[#AC8230] group hover:bg-warning text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Ticket</span>
                    <div className="navbar-triangle z-[10] border-[#AC8230]"></div>
                </Link>

                <Link href={route('visa-apply.index')}
                    className={`nav-item hover:bg-warning group pl-10 pr-8 py-3 ${route().current('visa-apply.index') ? 'bg-warning' : 'bg-[#C19125]'}`}>
                    <span className="text-sm font-medium">Reports</span>
                    <div className={`navbar-triangle z-10 ${route().current('visa-apply.index') ? 'border-warning' : 'border-[#C19125]'}`}></div>
                </Link>

                <Link href={route('job-apply.list')}
                    className={`nav-item group hover:bg-warning pl-10 pr-8 py-3 ${route().current('job-apply.list') ? 'bg-warning' : 'bg-[#AC8230]'}`}>
                    <span className="text-sm font-medium">Apply List</span>
                    <div className={`navbar-triangle z-10 ${route().current('job-apply.list') ? 'border-warning' : 'border-[#AC8230]'}`}></div>
                </Link>
               {/*
                <Link href={route('visa-apply.index')} className="relative flex items-center bg-primary text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Search Visa</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]"></div>
                </Link> */}



            </div>
            <div className="flex items-center pr-32">
                <Link href="#"
                    className="nav-item bg-[#AC8230] group hover:bg-warning text-white pl-10 pr-8 py-3">
                    <div className="navbar-triangle-left"></div>
                    <span className="text-sm font-medium">Update News</span>
                    <div className="navbar-triangle z-[10] border-[#AC8230]"></div>
                </Link>

                <Link href="#"
                    className="nav-item bg-[#C19125] group hover:bg-warning text-white pl-10 pr-8 py-2">
                    <IoPersonCircleOutline size={28} />
                    <div className="navbar-triangle z-[10] border-[#C19125]"></div>
                </Link>
                <Link href={route('cv.create')}
                      className={`nav-item group hover:bg-warning pl-10 pr-8 py-3 ${route().current('cv.create') ? 'bg-warning' : 'bg-primary-dark'}`}>
                    <span className="text-sm font-medium">CV Create</span>
                    <div className={`navbar-triangle z-10 ${route().current('cv.create') ? 'border-warning' : 'border-primary-dark'}`}></div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
