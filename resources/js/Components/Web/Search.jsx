import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {assetUrl} from "@/Components/Constant/index.js";
import {router, usePage} from "@inertiajs/react";
import Select from "@/Components/Web/Select.jsx";

const Search = () => {

    const {countries} = usePage().props

    const [passportNo, setPassportNo] = useState('')
    const [country, setCountry] = useState('')

    const handleSearch = () => {

        router.get(route('visa-apply.index'), {passport_no: passportNo, current_nationality: country?.id});
    };

    return (
        <>
            <div className="flex gap-x-1 items-center">
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <a href="https://m.me/339940379192870" target="_blank">
                        <img className="w-7 h-7" src={`${assetUrl}images/livechat.svg`} alt="Live chat"/>
                    </a>

                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <img className="w-7 h-7" src={`${assetUrl}images/whatsapp.svg`} alt="Live chat"/>
                </div>
                <div className="bg-primary p-2.5 text-2xl text-white">
                    <img className="w-7 h-7" src={`${assetUrl}images/call.svg`} alt="Live chat"/>
                </div>
                <div className="flex gap-x-2 bg-[#767A7C] p-1.5">
                    <input
                        value={passportNo}
                        onChange={(e) => setPassportNo(e.target.value)}
                        className="w-28 p-1 text-sm rounded-md placeholder:text-sm border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300"
                        placeholder="Passport No"
                        type="text"
                    />
                    <Select
                        items={countries}
                        selected={country}
                        setSelected={setCountry}
                        placeholder="Select Country"
                        defaultClasses="rounded-md placeholder:text-sm border border-transparent bg-white"
                    />
                    <button onClick={handleSearch} className='text-2xl text-white'>
                        <FaSearch/>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Search;
