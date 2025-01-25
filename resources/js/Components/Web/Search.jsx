import {FaWhatsapp,FaSearch} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {BsFillChatDotsFill} from "react-icons/bs";
import {useState} from "react";

const Search = () => {

    const [passportNo, setPassportNo] = useState('')
    const [country, setCountry] = useState('')

    const handleSearch = () => {

    }

    return (
        <>
            <div className="flex gap-x-1 items-center">
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <BsFillChatDotsFill/>
                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <FaWhatsapp/>
                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <FaPhone/>
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
