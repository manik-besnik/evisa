import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import {Link} from "@inertiajs/react"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-primary text-white">

            <div className="flex items-center">
                <Link href={route('visa-apply.create')} className="relative flex items-center bg-warning text-white pl-20 py-3 pr-4">
                    <span className="text-sm font-medium">Apply Visa</span>

                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-warning z-[100]"></div>

                </Link>


                <Link className="relative flex items-center bg-primary text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Ticket</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]"></div>
                </Link>


                <Link href={route('visa-apply.index')} className="relative flex items-center bg-primary-dark text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Search Visa</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary-dark z-[1000000]"></div>
                </Link>

                <Link  href={route('visa-apply.index')} className="relative flex items-center text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Reports</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]"></div>
                </Link>
                <Link href={route('job-apply.list')} className="relative flex items-center bg-primary-dark text-white pl-10 pr-8 py-3">
                    <span className="text-sm font-medium">Job Apply List</span>
                    <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary-dark z-[1000000]"></div>
                </Link>
            </div>
            <div className="pr-32">
                <Link href={route('home')} className="block bg-primary-dark p-1 rounded-full border border-white">
                    <RiHome2Fill />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
