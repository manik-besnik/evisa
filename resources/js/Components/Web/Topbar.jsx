import {FaWhatsapp} from "react-icons/fa";
import {Link, usePage, router} from "@inertiajs/react";
import {assetUrl} from "@/Components/Constant/index.js";

const RightNoneAuthPart = () => {
    return (<>
        <div className="flex justify-center items-center">
            <img className="w-20" src={`${assetUrl + 'images/logo2.png'}`} alt="logo"/>
            <p className="flex items-center ml-6">
                <FaWhatsapp className="text-success"/>
                <span className="text-primary">600555555</span>
            </p>
        </div>
        <div className="flex justify-between items-center">
            <div className='flex gap-x-2 text-primary'>
                <span className="border-r border-primary pr-2">عربي</span>
                <span>English</span>
            </div>
            <div>
                <Link href={route('register')} className="pr-2">Register</Link>
                <Link href={route('login')}
                      className='bg-primary px-4 py-1 text-2xl rounded font-semibold text-white '>
                    Login</Link>
            </div>
        </div>
    </>)
}

const RightAuthPart = ({name}) => {
    const logOut = () => {
        router.post(route('logout'))
    }

    return (
        <>
            <div></div>
            <div className='flex justify-end items-center gap-x-2 text-primary'>
                <span>{name}</span>

                <button
                    onClick={logOut}
                    className='bg-primary px-4 py-1 text-2xl rounded font-semibold text-white '
                >Logout
                </button>
            </div>
        </>
    )
}
const Topbar = () => {

    const {auth} = usePage().props

    return (
        <>

            <div className="container grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center py-2">
                <Link href={route('home')}>
                    <img className="w-4/6" src={`${assetUrl + 'images/logo.png'}`} alt="logo"/>
                </Link>

                {auth?.user ? <RightAuthPart name={auth?.user?.name}/> : <RightNoneAuthPart/>}

            </div>
        </>

    )
}

export default Topbar
