import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {assetUrl} from "@/Components/Constant/index.js";
import {usePage} from "@inertiajs/react";
import Select from "@/Components/Web/Select.jsx";
import {toast} from "react-toastify";
import axios from "axios";
import Loading from "@/Components/Loading.jsx";
import VisaApplyListModal from "@/Components/Web/VisaApplyListModal.jsx";

const Search = () => {

    const {countries} = usePage().props

    const [passportNo, setPassportNo] = useState('')
    const [country, setCountry] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [visaApplies, setVisaApplies] = useState([])
    const handleValueChange = () => {

    }

    const handleSearch = async () => {

        if (!passportNo && !country){
            return;
        }
        
        setLoading(true);

        try {
            const response = await axios.get(route('search', {
                passport_no: passportNo,
                current_nationality: country?.id
            }));

            setLoading(false);

            if (response.status === 200) {
                setVisaApplies(response.data.visa_applies || []); // Ensure it's always an array
                setShow(true); // Open the modal when results are found
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error("Something Went Wrong. Please Try Again");
        }
    };


    return (
        <>
            <div className="flex gap-x-1 items-center">
                <div className="bg-primary p-2.5 text-2xl text-white hidden md:block">
                    <a href="https://m.me/339940379192870" target="_blank">
                        <img className="w-7 h-7" src={`${assetUrl}images/livechat.svg`} alt="Live chat"/>
                    </a>

                </div>
                <div className="bg-primary p-2.5 text-2xl text-white hidden md:block">
                    <img className="w-7 h-7" src={`${assetUrl}images/whatsapp.svg`} alt="Live chat"/>
                </div>
                <div className="bg-primary p-2.5 text-2xl text-white hidden md:block">
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
                        handleValueChange={handleValueChange}
                        placeholder="Select Country"
                        defaultClasses="rounded-md placeholder:text-sm border border-transparent bg-white"
                    />
                    <button onClick={handleSearch} className='text-2xl text-white'>
                        <FaSearch/>
                    </button>

                </div>
            </div>

            {loading && <Loading stage="Searching data" />}

            <VisaApplyListModal show={show} setShow={setShow} visaApplies={visaApplies} />

        </>
    )
}

export default Search;
