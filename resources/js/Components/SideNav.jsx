import {Link, usePage} from '@inertiajs/react';
import CloseIcon from '@/Components/SvgIcons/Close';
import SideNavLinks from '@/Components/Admin/SideNavLinks.jsx';
import AgencySideNavLinks from '@/Components/Agency/AgencySideNavLinks.jsx';
import React from "react";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

export default function SideNav({toggleSideNav, useToggleSideNav}) {
    const user = usePage().props.auth.user;

    return (
        <div className='flex justify-between flex-col w-full p-4 lg:p-5 min-h-full gap-10'>
            <div className='h-full'>
                <div className="flex justify-between items-center p-[10px] mb-5 lg:mb-3">
                    <Link href={route('home')}>

                        <p className="font-semibold text-[40px] text-text-primary">E-Visa</p>
                    </Link>
                    {toggleSideNav}

                    <span onClick={() => useToggleSideNav(false)} className='lg:hidden'>
                        <CloseIcon/>
                    </span>
                </div>

                <div className='mb-5 lg:hidden'>
                    {isPermitted(permissionEnums.VIEW_ADMIN) &&
                        <Link href={route('admin.admins.index')}
                              className={`${route().current('admin.admins.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                            Admins
                        </Link>}
                    {isPermitted(permissionEnums.VIEW_ROLE) &&
                        <Link href={route('admin.roles.index')}
                              className={`${route().current('admin.roles.index') && 'bg-card-and-hover'} flex items-center gap-[10px] rounded px-2.5 py-2 text-sm text-text-primary font-medium hover:bg-card-and-hover`}>
                            Roles
                        </Link>}
                </div>

                <div>

                    {user.role === 1 && <SideNavLinks/>}
                    {user.role === 2 && <AgencySideNavLinks/>}

                </div>
            </div>

        </div>
    );
}
