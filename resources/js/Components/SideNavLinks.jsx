import {Link} from '@inertiajs/react';
import ArrowUp from '@/Components/SvgIcons/ArrowUp';
import ArrowRight from '@/Components/SvgIcons/ArrowRight';

import {useState} from 'react';
import {GrVisa} from "react-icons/gr";
import {PiNetworkXBold} from "react-icons/pi";

export default function SideNavLinks() {

    const [products, setProducts] = useState([
        {
            name: 'Visa',
            icon: <GrVisa/>,
            isOpen: false,
            links: [
                {
                    name: 'Visa List',
                },
                {
                    name: 'Add Visa',
                },
                {
                    name: 'Applications',
                },
            ]
        },
        {
            name: 'Jobs',
            icon: <PiNetworkXBold/>,
            isOpen: false,
            links: [
                {
                    name: 'Job List',
                },
                {
                    name: 'Add Job',
                },
                {
                    name: 'Applications',
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

                    {/* className={`transition-height border-t border-main-outline pt-[10px] mt-[10px] overflow-hidden ${product.isOpen ? 'max-h-screen duration-1000 ease-in-out' : 'max-h-0'}`}> */}

                    <div className={`overflow-hidden`}
                         style={{maxHeight: product.isOpen ? '500px' : '0', transition: 'max-height 0.5s ease-in-out'}}>
                        <div className='px-2.5 pb-2.5'>
                            <hr className='border-t border-t-main-outline pb-2.5'/>
                            {product.links.map((link, i) =>
                                <Link key={i} href={route('task.create',
                                    {account_type: product.accountType, task_type: link.type})}
                                      className={`${link.isComing ? 'pointer-events-none' : ''} flex items-center justify-between mb-[10px] last:mb-0 text-medium text-sm text-font-medium text-text-primary`}>

                                    <div className='flex items-center gap-[10px]'>
                                        <ArrowRight></ArrowRight>
                                        {link.name}
                                    </div>

                                    {link.isComing ?
                                        <div
                                            className='border border-main-outline bg-main-and-focus rounded py-1 px-1.5 text-[10px] leading-3 text-text-primary'>
                                            Coming Soon
                                        </div> : null
                                    }

                                </Link>)}
                        </div>
                    </div>

                </div>)}
        </>

    );
}
