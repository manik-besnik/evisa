import {FaWhatsapp,FaSearch} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {BsFillChatDotsFill} from "react-icons/bs";
import {useState} from "react";
import {assetUrl} from "@/Components/Constant/index.js";

const Search = () => {

    const [passportNo, setPassportNo] = useState('')
    const [country, setCountry] = useState('')

    const handleSearch = () => {

    }

    return (
        <>
            <div className="flex gap-x-1 items-center">
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <img className="w-6 h-6" src={`${assetUrl}images/livechat.svg`} alt="Live chat"/>

                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <img className="w-6 h-6" src={`${assetUrl}images/whatsapp.svg`} alt="Live chat"/>
                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <img className="w-6 h-6" src={`${assetUrl}images/call.svg`} alt="Live chat"/>
                </div>
                <div className="flex gap-x-2 bg-[#767A7C] p-1.5">
                    <input
                        value={passportNo}
                        onChange={(e) => setPassportNo(e.target.value)}
                        className="w-28 p-1 text-sm rounded-md placeholder:text-sm border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300"
                        placeholder="Passport No"
                        type="text"
                    />
                    <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-28 p-1 text-sm rounded-md placeholder:text-sm border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300"
                        placeholder="Country Name"
                        type="text"
                    />
                    <button onClick={handleSearch} className='text-2xl text-white'>
                        <FaSearch />
                    </button>

                </div>
            </div>
        </>
    )
}

export default Search;
