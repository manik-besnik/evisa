
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "@inertiajs/react";
const Topbar = () => {
    return (
        <>

            <div className="container grid grid-cols-3 justify-center items-center py-2">
                <div>
                    <img src="https://local.evisa.com/assets/images/logo.png" alt="logo"/>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-20" src="https://local.evisa.com/assets/images/logo2.png" alt="logo"/>
                    <p className="flex items-center ml-6">
                        <FaWhatsapp className="text-success" />
                        <span className="text-primary">600555555</span>
                    </p>
                </div>
                <div className="flex">
                    <div className='flex gap-x-2 text-primary'>
                        <span className="border-r border-primary pr-2">عربي</span>
                        <span>English</span>
                    </div>
                    <div className='ml-6'>
                        <Link className="pr-2">Register</Link>
                        <Link className='bg-primary px-4 py-1 text-2xl rounded font-semibold text-white '>Login</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Topbar
