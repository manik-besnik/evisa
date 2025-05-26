import { FaWhatsapp } from "react-icons/fa";
import { Link, router, usePage } from "@inertiajs/react";
import { assetUrl } from "@/Components/Constant/index.js";

const RightNoneAuthPart = () => {
    return (<>
        <div className="flex justify-center items-center">
            <img className="w-20" src={`${assetUrl + 'images/logo2.png'}`} alt="logo" />
            <p className="flex items-center ml-6">
                <FaWhatsapp className="text-success" />
                <span className="text-[#748A96]">+971 567 040 050</span>
            </p>
        </div>
        <div className="flex justify-between items-center">
            <div className='flex gap-x-2 text-primary'>
                <span className="border-r border-primary pr-2">عربي</span>
                <span>English</span>
            </div>
            <div className="flex items-center bg-[#FECB05]" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', }}>
                <Link
                    href={route('agency.register')}
                    className="text-black font-medium text-xl px-6 py-2"
                >
                    Agency Register
                </Link>
                <Link
                    href={route('login')}
                    className="bg-[#C29224] text-white font-medium text-xl px-6 py-2" style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                >
                    LOGIN
                </Link>
                </div>

        </div>
    </>)
}

const RightAuthPart = ({ user }) => {
    const logOut = () => {
        router.post(route('logout'))
    }

    return (
        <>
            <div></div>
            <div className='flex justify-end items-center gap-x-2 text-text-primary'>
                <div>
                    <p>{user?.name} | {user?.profession}</p>
                    <p>Address: {user?.city}, {user?.living_country?.name}</p>
                </div>

                <button
                    onClick={logOut}
                    className='bg-red-600 px-4 py-1 text-2xl rounded font-semibold text-white '
                >Logout
                </button>
            </div>
        </>
    )
}
const Topbar = () => {

    const { auth } = usePage().props

    return (
        <>

            <div className="container grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center py-2">
                <Link href={route('home')}>
                    <img className="w-4/6" src={`${assetUrl + 'images/logo.png'}`} alt="logo" />
                </Link>

                {auth?.user ? <RightAuthPart user={auth?.user} /> : <RightNoneAuthPart />}

            </div>
        </>

    )
}

export default Topbar
