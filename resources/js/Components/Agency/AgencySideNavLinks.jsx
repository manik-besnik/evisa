import {Link} from '@inertiajs/react';
import ArrowUp from '@/Components/SvgIcons/ArrowUp.jsx';
import ArrowRight from '@/Components/SvgIcons/ArrowRight.jsx';

import {useState} from 'react';
import {GrVisa} from "react-icons/gr";
import {FaPeopleGroup} from "react-icons/fa6";

export default function AgencySideNavLinks() {

    const [products, setProducts] = useState([
        {
            name: 'Visa',
            icon: <GrVisa/>,
            isOpen: route().current('agency.visa-applies.*'),
            links: [
                {
                    name: 'Visa Apply List',
                    route: route('agency.visa-applies.index')
                },
                {
                    name: 'Add New Application',
                    route: route('agency.visa-applies.create')
                },
            ]
        },
        {
            name: 'User',
            icon: <FaPeopleGroup/>,
            isOpen: false,
            links: [
                {
                    name: 'User List',
                    route: route('agency.users.index')
                },
                {
                    name: 'Add User',
                    route: route('agency.users.create')
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

            {products.map((product, i) =>
                <div key={i}
                     className={`${(product.isOpen) && 'bg-card-and-hover border-main-outline'} rounded-[10px] mb-1.5 hover:bg-card-and-hover border hover:border-main-outline`}>
                    <div onClick={() => handleToggle(i)}
                         className='flex justify-between items-center gap-2 cursor-pointer p-[10px]'>
                        <div className='flex items-center gap-[10px]'>
                            {product.icon}
                            <span
                                className={`${product.isOpen || product.accountType === route().params.account_type && 'font-semibold'} font-medium text-sm text-text-primary`}>{product.name}</span>
                        </div>

                        <ArrowUp class={`${product.isOpen ? 'rotate-0' : 'rotate-180'} transition-all duration-500`}/>
                    </div>

                    <div className={`overflow-hidden`}
                         style={{maxHeight: product.isOpen ? '500px' : '0', transition: 'max-height 0.5s ease-in-out'}}>
                        <div className='px-2.5 pb-2.5'>
                            <hr className='border-t border-t-main-outline pb-2.5'/>
                            {product.links.map((link, i) =>
                                <Link key={i} href={link.route}
                                      className={`flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`}>

                                    <div className='flex items-center gap-[10px]'>
                                        <ArrowRight></ArrowRight>
                                        {link.name}
                                    </div>


                                </Link>)}
                        </div>
                    </div>

                </div>)}
        </>

    );
}
