import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center bg-primary text-white">

            <div className="relative flex items-center bg-warning text-white pl-20 py-3 pr-4">
                <span className="text-sm font-medium">Apply Visa</span>

                <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-warning z-[100]"></div>

            </div>


            <div className="relative flex items-center bg-primary text-white pl-10 pr-8 py-3">
                <span className="text-sm font-medium">Ticket</span>
                <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary z-[1000000]"></div>
            </div>


            <div className="relative flex items-center bg-primary-dark text-white pl-10 pr-8 py-3">
                <span className="text-sm font-medium">Search Visa</span>
                <div className="absolute left-full w-0 h-0 border-t-[22px] border-b-[22px] border-l-[20px] border-t-transparent border-b-transparent border-primary-dark z-[1000000]"></div>
            </div>

            {/* Reports */}
            <div className="flex items-center text-white pl-10 pr-8 py-3">
                <span className="text-sm font-medium">Reports</span>
            </div>
        </div>
    );
};

export default Navbar;
