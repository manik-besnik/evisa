import { FaWhatsapp } from "react-icons/fa";
import { Link, router, usePage } from "@inertiajs/react";
import { assetUrl } from "@/Components/Constant/index.js";

const RightNoneAuthPart = () => {
    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-center items-center">
                <img className="w-20" src={`${assetUrl + 'images/logo2.png'}`} alt="logo" />
                <p className="flex items-center ml-6">
                    <FaWhatsapp className="text-success" />
                    <span className="text-[#748A96]">+971 567 040 050</span>
                </p>
            </div>
            <div className="hidden md:flex justify-between items-center">
                <div className='flex gap-x-2 text-primary'>
                    <span className="border-r border-primary pr-2">عربي</span>
                    <span>English</span>
                </div>
                <div className="flex items-center bg-[#FECB05]" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', }}>
                    <Link
                        href={route('agency.register')}
                        className="text-black font-medium px-4 py-1 text-[15px]"
                    >
                        Agency Register
                    </Link>
                    <Link
                        href={route('login')}
                        className="bg-[#C29224] text-white font-medium text-xl px-6 py-2"
                        style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                    >
                        LOGIN
                    </Link>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col space-y-3">
                {/* Top row: Logo and Phone */}
                <div className="flex justify-between items-center">
                    <img className="w-16" src={`${assetUrl + 'images/logo2.png'}`} alt="logo" />
                    <p className="flex items-center">
                        <FaWhatsapp className="text-success mr-1" />
                        <span className="text-[#748A96] text-sm">+971 567 040 050</span>
                    </p>
                </div>

                {/* Bottom row: Language and Auth buttons */}
                <div className="flex justify-center items-center">
                   
                    <div className="flex items-center bg-[#FECB05] rounded-lg">
                        <Link
                            href={route('agency.register')}
                            className="text-black font-medium px-3 py-1 text-sm"
                        >
                            Agency Register
                        </Link>
                        <Link
                            href={route('login')}
                            className="bg-[#C29224] text-white font-medium text-sm px-4 py-2 rounded-r-lg"
                        >
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const RightAuthPart = ({ user }) => {
    const logOut = () => {
        router.post(route('logout'))
    }

    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden md:block"></div>
            <div className='hidden md:flex justify-end items-center gap-x-2 text-text-primary'>
                <div>
                    <p>{user?.name} | {user?.profession}</p>
                    <p>Address: {user?.city}, {user?.living_country?.name}</p>
                </div>
                <button
                    onClick={logOut}
                    className='bg-red-600 px-4 py-1 text-2xl rounded font-semibold text-white'
                >
                    Logout
                </button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-600">{user?.profession}</p>
                        <p className="text-xs text-gray-600">{user?.city}, {user?.living_country?.name}</p>
                    </div>
                    <button
                        onClick={logOut}
                        className='bg-red-600 px-3 py-1 text-sm rounded font-semibold text-white ml-2'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

const Topbar = () => {
    const { auth } = usePage().props

    return (
        <>
            <div className="container mx-auto px-2 md:px-4 py-1 md:py-2">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-3 justify-center items-center">
                    <Link href={route('home')}>
                        <img className="w-4/6" src={`${assetUrl + 'images/logo.png'}`} alt="logo" />
                    </Link>
                    {auth?.user ? <RightAuthPart user={auth?.user} /> : <RightNoneAuthPart />}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="flex justify-center items-center mb-3 mt[-5px]">
                        <Link href={route('home')}>
                            <img className="w-[200px]" src={`${assetUrl + 'images/logo.png'}`} alt="logo" />
                        </Link>
                    </div>
                    {auth?.user ? <RightAuthPart user={auth?.user} /> : <RightNoneAuthPart />}
                </div>
            </div>
        </>
    )
}

export default Topbar