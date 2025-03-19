import {Link} from '@inertiajs/react';
import ArrowUp from '@/Components/SvgIcons/ArrowUp.jsx';
import ArrowRight from '@/Components/SvgIcons/ArrowRight.jsx';

import {useState} from 'react';
import {GrVisa} from "react-icons/gr";
import {PiNetworkXBold} from "react-icons/pi";
import {FaPeopleGroup, FaPeopleRoof, FaDesktop} from "react-icons/fa6";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

export default function SideNavLinks() {

    const [products, setProducts] = useState([


        {
            name: 'Visa',
            icon: <GrVisa/>,
            isOpen: route().current('admin.visa-applies.*'),
            isPermitted: isPermitted(permissionEnums.VIEW_VISA),
            links: [
                {
                    name: 'Visa Apply List',
                    route: route('admin.visa-applies.index'),
                    isPermitted: isPermitted(permissionEnums.VIEW_VISA),
                },
                {
                    name: 'Add New Application',
                    route: route('admin.visa-applies.create'),
                    isPermitted: isPermitted(permissionEnums.CREATE_VISA),
                },
            ]
        },
        {
            name: 'Jobs',
            icon: <PiNetworkXBold/>,
            isOpen: false,
            isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
            links: [
                {
                    name: 'Applications',
                    route: route('admin.job-demand.applications'),
                    isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
                }
            ]
        },
        {
            name: 'Job Demand',
            icon: <PiNetworkXBold/>,
            isOpen: false,
            isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
            links: [
                {
                    name: 'Job Demand List',
                    route: route('admin.job-demands.index'),
                    isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
                },
                {
                    name: 'Add Job Demand',
                    route: route('admin.job-demands.create'),
                    isPermitted: isPermitted(permissionEnums.CREATE_JOB_POST),
                },
            ]
        },
        {
            name: 'CV',
            icon: <PiNetworkXBold />,
            isOpen: false,
            isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
            links: [
                {
                    name: 'CV List',
                    route: route('admin.cv-list.index'),
                    isPermitted: isPermitted(permissionEnums.VIEW_JOB_POST),
                },

            ]
        },
        {
            name: 'Agency',
            icon: <FaPeopleRoof/>,
            isOpen: false,
            isPermitted: isPermitted(permissionEnums.VIEW_AGENCY),
            links: [
                {
                    name: 'Agency List',
                    route: route('admin.agencies.index'),
                    isPermitted: isPermitted(permissionEnums.VIEW_AGENCY),
                }
            ]
        },
        {
            name: 'User',
            icon: <FaPeopleGroup/>,
            isOpen: false,
            isPermitted: isPermitted(permissionEnums.VIEW_USER),
            links: [
                {
                    name: 'User List',
                    route: route('admin.users.index'),
                    isPermitted: isPermitted(permissionEnums.VIEW_USER),
                },
                {
                    name: 'Add User',
                    route: route('admin.users.create'),
                    isPermitted: isPermitted(permissionEnums.CREATE_USER),
                }
            ]
        }
    ])

    const handleToggle = (index) => {
        setProducts(prevProducts => {

            return prevProducts.map((product, idx) => {
                if (idx !== index) {
                    return {
                        ...product,
                        isOpen: false
                    };

                } else {
                    return {
                        ...product,
                        isOpen: !product.isOpen
                    };
                }
            });
        });
    };

    return (

        <>

            <div className='flex justify-between items-center gap-2 cursor-pointer p-[10px]'>
                <Link href={route('admin.dashboard.index')}>
                    <div className='flex items-center gap-[10px]'>
                        <FaDesktop/>
                        <span
                            className="font-semibold"> Dashboard</span>
                    </div>
                </Link>
            </div>

            {products.map((product, i) =>
                <div key={i}
                     className={`${(product.isOpen) && 'bg-card-and-hover border-main-outline'} rounded-[10px] mb-1.5 hover:bg-card-and-hover border hover:border-main-outline`}>

                    <div onClick={() => handleToggle(i)}
                         className='flex justify-between items-center gap-2 cursor-pointer p-[10px]'>
                        <div className='flex items-center gap-[10px]'>
                            {product.icon}
                            <span
                                className={`${product.isOpen && 'font-semibold'} font-medium text-sm text-text-primary`}>{product.name}</span>
                        </div>

                        <ArrowUp
                            class={`${product.isOpen ? 'rotate-0' : 'rotate-180'} transition-all duration-500`}/>
                    </div>

                    {product.isPermitted &&
                        <div className={`overflow-hidden`}
                             style={{
                                 maxHeight: product.isOpen ? '500px' : '0',
                                 transition: 'max-height 0.5s ease-in-out'
                             }}>
                            <div className='px-2.5 pb-2.5'>
                                <hr className='border-t border-t-main-outline pb-2.5'/>
                                {product.links.filter(item => item.isPermitted).map((link, i) =>
                                    <Link key={i} href={link.route}
                                          className={`flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`}>

                                        <div className='flex items-center gap-[10px]'>
                                            <ArrowRight></ArrowRight>
                                            {link.name}
                                        </div>

                                    </Link>
                                )}
                            </div>
                        </div>
                    }

                </div>
            )}
        </>

    );
}
