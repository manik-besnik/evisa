import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import JobDirectory from "@/Components/Web/JobDirectory.jsx";
import {
    assetUrl,
    jobDirectory
} from "@/Components/Constant/index.js";
import {usePage, router} from "@inertiajs/react";

const JobDirectoryPage = ({locations}) => {
    const handleVisaClick = (visa) => {
        router.get(route('job.view'));
    };

    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-20">
                    {/* Hide JobDirectory on mobile */}
                 
                        <JobDirectory />
                  

                    {/* Visa Buttons Section */}
                    <div className="w-full md:w-8/12 h-auto md:h-[93vh]">
                        <div className="bg-[#6b7377c8] h-full relative">
                            {/* Header Section */}
                            <div className="text-center flex relative pt-4">
                                <img alt="Visa Icon" className="w-20 h-20 ml-4"
                                    src={`${assetUrl + 'images/jobapplysearch.png'}`} />
                                <h2 className="bg-red-600 text-white ml-4 w-full h-12 mt-7 text-[24px] md:text-[32px] pb-6"
                                    style={{ position: 'absolute', right: '-1px', width: '68%', top: '5px' }}>
                                    Job Apply
                                </h2>
                            </div>

                            {/* Visa Types Buttons */}
                            <div className="mt-4 flex flex-col gap-y-3 place-items-center pb-4">
                                {jobDirectory.map((visa) => (
                                    <button
                                        key={visa.id}
                                        onClick={() => handleVisaClick(visa)}
                                        className={`${visa.name === "READY JOB" || visa.name === "NEW JOB"
                                            ? "bg-[#C29E25] text-black"
                                            : "bg-white text-black"
                                            } font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200`}
                                    >
                                        {visa.name}
                                    </button>
                                ))}
                                {locations.map((visa) => (
                                    <Link
                                        href={route('job.view')}
                                        key={visa.id}
                                        className="bg-white text-black font-semibold text-xs py-2 px-6 rounded-full shadow-md w-[80%] text-center hover:bg-gray-200"
                                    >
                                        {visa.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default JobDirectoryPage;
