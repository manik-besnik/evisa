import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import JobDirectory from "@/Components/Web/JobDirectory.jsx";
import {
    assetUrl,
    jobDirectory
} from "@/Components/Constant/index.js";
import { usePage, router } from "@inertiajs/react";
const Job = () => {
    const handleVisaClick = (visa) => {
        router.get(route('job.view'));
        };

    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <JobDirectory />
                    <div className="w-1/2 h-[72vh]">
                        <div className="bg-[#6b7377c8] h-full relative p-5 pr-0">
                            {/* Header Section */}
                            <div className="text-center flex">
                                <img alt="Visa Icon" className="w-20 h-20" src={`${assetUrl + 'images/jobapplysearch.png'}`} />
                                <h2 className="bg-red-600 text-white ml-4 w-full h-10 mt-7 text-[32px]">Job Apply</h2>
                            </div>

                            {/* Visa Types Buttons */}
                            <div className="mt-4 flex flex-col gap-y-3 place-items-center">
                                {jobDirectory.map((visa) => (
                                    <button
                                        key={visa.id}
                                        onClick={() => handleVisaClick(visa)}
                                        className={`${visa.name === "READY JOB" || visa.name === "NEW JOB"
                                            ? "bg-[#C29E25] text-white"
                                                : "bg-white text-black"
                                            } font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200`}
                                    >
                                        {visa.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Job;