import { useState } from "react";
import { FaWhatsapp, FaDownload, FaShare, FaFacebook } from "react-icons/fa";
import { assetUrl } from "@/Components/Constant/index.js";

const PreviewPopup = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg  shadow-lg relative p-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black rounded-lg text-white "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header with Security and Camera Icon */}
                <div className="bg-gray-500 text-white p-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">Security</div>
                </div>

                {/* Camera Space */}
                <div className="h-32 bg-gray-500 relative">
                    <div className="absolute bottom-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>

                {/* Job Title and Salary */}
                <div className="border-b border-gray-300 p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-green-800">{data.typeOfWork || "Security"}</h1>
                            <p className="text-lg">Salary <span className="font-bold">AED {data.salary || "2200"}</span></p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Code No.</p>
                            <p className="text-xl text-red-700 font-bold">00000003</p>
                        </div>
                    </div>
                </div>

                {/* Job Details Table */}
                <div className="px-4 py-2">
                    <div className="grid mt-5">
                        <div className="flex gap-4">
                            <div className="p2 border-2 p-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Job Location
                            </div>
                            <div className="w-full border-2 p-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white">
                                {data.jobLocation || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Visa validity
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.visaValidity || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Accommodation
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.accommodation || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Transport
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.transport || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Food
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.food || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Medical Insurance
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.medicalInsurance || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Daily working hours
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.workingHours || " "} (As per Company Policy)
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Salary
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.salary || " "} AED
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Vacation benefits
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.vacationBenefits || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Age limits
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.ageLimits || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                In-demand workers
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.inDemandWorkers || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Education
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.education || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p2 border-t-0 p-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Company activities
                            </div>
                            <div className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 p-2">
                                {data.companyActivities || " "}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-200 p-3 font-bold text-center text-lg">
                    +971 {data.contactNo || " "} <FaWhatsapp className="inline text-green-600 ml-2" /> {data.whatsappNo || "0508074795, 0501289360"}
                </div>

                {/* Application Requirements */}
                <div className="p-4">
                    <h3 className="font-bold text-lg">Application Requirements:</h3>
                    <p className="my-2">{data.applicationRequirements || " "}</p>
                </div>

                

                {/* Footer */}
                <div className="bg-[#3C4344] text-white p-4 flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <img
                            src={`${assetUrl + 'images/logowhite.png'}`}
                            alt="Job Directory"
                            className="w-full h-16"
                        />
                    </div>
                    <div className="text-2xl font-bold">
                        <img
                            src={`${assetUrl + 'images/localservice.png'}`}
                            alt="Job Directory"
                            className="w-full h-16"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">f</div>
                        <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center">w</div>
                        <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center">s</div>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-center my-4">
                    <button className="bg-red-600 text-white font-bold py-2 px-8 rounded">
                        Submit
                    </button>
                    <button className="ml-2 bg-green-600 text-white flex items-center px-4 py-2 rounded">
                        <FaDownload className="mr-1" /> DOWNLOAD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreviewPopup;