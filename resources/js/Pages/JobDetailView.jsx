import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import {assetUrl} from "@/Components/Constant/index.js";
import {toast} from "react-toastify";

const JobDetailView = ({job}) => {

    const shareUrl = route('job.details', job.id)
    const handleFacebookShare = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleWhatsAppShare = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            toast('Link copied to clipboard!');
        });
    };


    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title={`${job.type_of_work} Job Details | Dubai E-Visa`}/>
            <div className="container mx-auto px-4 py-8">
                {/* Job Header Section with Image */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 p-12">
                    <div className="relative h-64 bg-gray-300">
                        <img
                            src={job.thumbnail}
                            alt={job.type_of_work}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-0 left-0 p-4">
                            <h1 className="text-white text-4xl font-bold">{job.type_of_work}</h1>
                        </div>

                    </div>

                    {/* Job Title and Code Section */}
                    <div className="p-4 bg-white border-b">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-green-700">{job.type_of_work}</h2>
                                <p className="text-xl font-bold">Salary {job.salary}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Code No.</p>
                                <p className="text-xl font-bold text-red-600">{job.job_code}</p>
                            </div>
                        </div>
                    </div>

                    {/* Job Details Table */}
                    <div className="overflow-hidden">
                        <div className="grid mt-5">
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-2 p-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Job Location
                                </div>
                                <div
                                    className="w-full border-2 p-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white">
                                    {job.location.name ?? job.job_location}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Visa validity
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.visa_validity}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Accommodation
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.accommodation}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Transport
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.transport}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Food
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.food}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Medical Insurance
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.medical_insurance}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Daily working hours
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.duty_hours}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Salary
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.salary}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Vacation benefits
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.vacation_benefits}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Age limits
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.age_limit}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    In-demand workers
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.worker_quantity} People
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Education
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.education}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div
                                    className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                    Company activities
                                </div>
                                <div
                                    className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                    {job.company_activities}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-[#5D5E5E] text-white p-4 text-center">
                        <div className="text-2xl font-bold mb-2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            {job.company.phone_no}
                        </div>
                        <div>{job.company.whatsapp_no}</div>
                    </div>

                    {/* Application Requirements */}
                    <div className="p-4 bg-white flex">
                        <div className="w-10/12">
                            <h3 className="text-lg font-bold mb-2">Application Requirements:</h3>
                            <p>{job.requirements}</p>
                            <p className="mt-2 mb-4 font-semibold">Apply today, interview required.</p>

                        </div>
                        <div className="mt-2 w-2/12">
                            <button onClick={() => window.location.href = `/job-apply`}
                                    className="bg-red-600 text-white px-8 py-2 rounded-md font-bold w-8/12 mb-3 ml-3">Apply
                            </button>

                            <button
                                onClick={() => window.location.href = `/job-pdf/${job.id}`}
                                className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                </svg>
                                DOWNLOAD
                            </button>
                        </div>
                    </div>

                    {/* Footer Logo Section */}
                    <div className="bg-[#3C4344] text-white p-4 flex justify-between items-center">
                        <div className="flex flex-col items-start">
                            <img
                                src={`${assetUrl + 'images/logowhite.png'}`}
                                alt="Job Directory"
                                className="w-full h-24"
                            />
                        </div>
                        <div className="text-2xl font-bold">
                            <img
                                src={`${assetUrl + 'images/localservice.png'}`}
                                alt="Job Directory"
                                className="w-full h-24"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                onClick={handleFacebookShare}
                                className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white"
                            >
                                f
                            </button>
                            <button
                                type="button"
                                onClick={handleWhatsAppShare}
                                className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white"
                            >
                                w
                            </button>
                            <button
                                type="button"
                                onClick={handleCopyLink}
                                className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-white"
                            >
                                s
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default JobDetailView;
