import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head } from "@inertiajs/react";
import SearchContainer from "@/Components/Web/InqueryContainer.jsx";
import UserRegister from "@/Components/Web/UserRegister.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import {
    assetUrl,
    visaTypesApply
} from "@/Components/Constant/index.js";
import { usePage, router } from "@inertiajs/react"; // Import Inertia router

const Visa = () => {
    const handleVisaClick = (visa) => {
        router.get(route('visa-apply.create'), { visaType: visa.id });
    };


    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer />
                    <div className="w-1/2 h-[72vh]">
                        <div className="bg-[#6b7377c8] h-full relative p-5 pr-0">
                            {/* Header Section */}
                            <div className="text-center flex">
                                <img alt="Visa Icon" className="w-14 h-20" src={`${assetUrl + 'images/visa.png'}`} />
                                <h2 className="bg-red-600 text-white ml-4 w-full h-10 mt-7 text-[32px]">Visa Apply</h2>
                            </div>

                            {/* Visa Types Buttons */}
                            <div className="mt-4 flex flex-col gap-y-3 place-items-center">
                                {visaTypesApply.map((visa) => (
                                    <button
                                        key={visa.id}
                                        onClick={() => handleVisaClick(visa)}
                                        className="bg-white text-black font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200"
                                    >
                                        {visa.name}
                                    </button>
                                ))}

                                <button onClick={() => handleVisaClick({ id: "8", name: "GOLDEN VISA" })} className="bg-yellow-600 text-black font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200">
                                    GOLDEN VISA
                                </button>
                                <button onClick={() => handleVisaClick({ id: "9", name: "GREEN VISA" })} className="bg-white border-2 border-green-500 text-green-500 font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200">
                                    GREEN VISA
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </WebLayout>
    );
}

export default Visa
