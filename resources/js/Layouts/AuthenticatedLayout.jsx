import {useEffect, useState} from 'react';
import {usePage} from '@inertiajs/react';
import SideNav from '@/Components/SideNav';
import NavBar from '@/Components/NavBar';
import {toast, ToastContainer} from 'react-toastify';

export default function Authenticated({children}) {

    const [toggleSideNav, useToggleSideNav] = useState(false)
    const {flash, errors} = usePage().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
        if (errors?.message) {
            toast.error(errors.message);
        }
    }, [flash, errors]);

    return (
        <div className='flex min-h-screen'>
            <div
                className={`${toggleSideNav ? 'translate-x-[0]' : '-translate-x-full lg:translate-x-[0]'} nav-container bg-side-and-button max-w-[268px] min-w-[268px] absolute lg:relative lg:block border-r border-r-[#C7BDA8] transition-all duration-900 h-screen overflow-auto`}>

                <SideNav
                    toggleSideNav={toggleSideNav}
                    useToggleSideNav={useToggleSideNav}
                ></SideNav>
            </div>

            <div
                className='w-full bg-main-and-focus h-screen overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-300 scrollbar-track-transparent'>
                <div className='lg:px-6 lg:pt-6 mb-6'>
                    <NavBar useToggleSideNav={useToggleSideNav}></NavBar>
                </div>

                <div className='pb-4 px-4 sm:pb-6 sm:px-6'>
                    {children}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
