import {Link} from '@inertiajs/react';
import CloseIcon from '@/Components/SvgIcons/Close';
import SideNavLinks from '@/Components/SideNavLinks';
import React from "react";

export default function SideNav({toggleSideNav, useToggleSideNav}) {

    return (
        <div className='flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10'>
            <div className='h-full'>
                <div className="flex justify-between items-center p-[10px] mb-5 lg:mb-3">
                    <Link href={route('google.redirect')}>

                        <p className="font-semibold text-[40px] text-text-primary">E-Visa</p>
                    </Link>
                    {toggleSideNav}

                    <span onClick={() => useToggleSideNav(false)} className='lg:hidden'>
                        <CloseIcon/>
                    </span>
                </div>

                <div className='mb-5 lg:hidden'>
                    <Link href={route('google.redirect')}
                          className={`${route().current('google.redirect') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        Admins
                    </Link>
                    <Link href={route('google.redirect')}
                          className={`${route().current('google.redirect') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                        Agency
                    </Link>
                    <Link
                        className='flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover'>
                        General Users
                    </Link>
                </div>

                <div>

                    <SideNavLinks/>

                </div>
            </div>

        </div>
    );
}
