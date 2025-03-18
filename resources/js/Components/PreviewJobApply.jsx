import { useState } from "react";
import { FaWhatsapp, FaDownload, FaShare, FaFacebook, FaPrint } from "react-icons/fa";

const PreviewJobApply = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        const printContent = document.getElementById('job-application-preview');
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContent.innerHTML;
        window.print();
        document.body.innerHTML = originalContents;

        // Re-add event listeners if needed
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative p-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black rounded-lg text-white p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex justify-end mb-2 gap-2">
                    <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
                        <FaPrint /> Print
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
                        <FaShare /> Share
                    </button>
                </div>

                <div id="job-application-preview" className="border-2 border-gray-700 p-2">
                    {/* Header with Job Application and Photo */}
                    <div className="flex mb-4">
                        <div className="w-1/3">
                            <div className="bg-red-600 text-white p-2 text-center font-bold">
                                JOB<br />APPLICATION
                            </div>
                            <div className="bg-gray-400 text-white p-2 text-center font-bold">
                                FORM
                            </div>
                        </div>
                        <div className="w-1/3">
                            {data.avatar ? (
                                <img
                                    src={URL.createObjectURL(data.avatar)}
                                    alt="Profile"
                                    className="w-32 h-40 object-cover mx-auto border-2 border-gray-300"
                                />
                            ) : (
                                <div className="w-32 h-40 bg-gray-200 mx-auto border-2 border-gray-300 flex items-center justify-center">
                                    <span className="text-gray-500">No Photo</span>
                                </div>
                            )}
                        </div>
                        <div className="w-1/3">
                            <h2 className="font-bold text-lg uppercase">{data.name || "APPLICANT NAME"}</h2>
                            <p>Mob: {data.phone || "-"}</p>
                            <p>{data.email || "email@example.com"}</p>

                            <div className="mt-4">
                                <h3 className="text-red-600 font-bold text-sm">POST FOR APPLY</h3>
                                {data.jobDemandsArray && data.jobDemandsArray.length > 0 ? (
                                    data.jobDemandsArray.map((job, index) => (
                                        <p key={index} className="font-semibold">{index + 1}. {job}</p>
                                    ))
                                ) : (
                                    <p>1. No positions selected</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Personal Details Section */}
                    <div className="mb-4">
                        <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">PERSONAL DETAILS</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Date Of Birth</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.date_of_birth || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Gender</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.genderName || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Nationality</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.nationalityName || "-"}</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Religion</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.religionName || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Blood Group</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.bloodGroupName || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Marital Status</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.maritalStatusName || "-"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Current and Permanent Address */}
                    <div className="mb-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="font-semibold">Current Address</p>
                                <p>{data.current_state || "-"}</p>
                            </div>
                            <div>
                                <p>{data.current_city || "-"}</p>
                            </div>
                            <div>
                                <p>{data.current_area || "-"}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div>
                                <p className="font-semibold">Permanent Address</p>
                                <p>{data.permanent_district || "-"}</p>
                            </div>
                            <div>
                                <p>{data.permanent_thana || "-"}</p>
                            </div>
                            <div>
                                <p>{data.permanent_village || "-"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Passport & Visa Information */}
                    <div className="mb-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Passport No</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.passport_no || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Expiry Date</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.passport_expiry || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Country Contact No</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.country_contact_no || "-"}</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Visa Status</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.visa_status || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Visa Expiry</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.visa_expiry || "-"}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-1/3 font-semibold">Whatsapp No.</p>
                                    <p className="w-1/12 text-center">:</p>
                                    <p className="flex-1">{data.whatsapp_no || "-"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Details */}
                    <div className="mb-4">
                        <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">EDUCATION DETAILS</h3>
                        <div className="grid grid-cols-3 gap-2 border border-gray-300">
                            <div className="border-r border-gray-300 p-1 font-semibold">Certificate</div>
                            <div className="border-r border-gray-300 p-1 font-semibold">Year</div>
                            <div className="p-1 font-semibold">Board | University</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 border border-gray-300 border-t-0">
                            <div className="border-r border-gray-300 p-1">{data.exam_name || "-"}</div>
                            <div className="border-r border-gray-300 p-1">{data.passing_year || "-"}</div>
                            <div className="p-1">{data.institute || "-"}</div>
                        </div>

                        {/* Computer Skills */}
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <div className="border border-gray-300 p-1 font-semibold">Computer Skilled</div>
                            <div className="border border-gray-300 p-1 col-span-3">{data.computer_skill || "-"}</div>
                        </div>

                        {/* Language Proficiency */}
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">Driving License</div>
                                    <div className="border border-gray-300 p-1">{data.driving_license || "Select"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">English</div>
                                    <div className="border border-gray-300 p-1">{data.englishProficiencyName || "Select"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">Arabic</div>
                                    <div className="border border-gray-300 p-1">{data.arabicProficiencyName || "Select"}</div>
                                </div>
                            </div>

                            <div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">Issue Date</div>
                                    <div className="border border-gray-300 p-1">{data.driving_license_issue_date || "-"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">Urdu/Hindi</div>
                                    <div className="border border-gray-300 p-1">{data.urduProficiencyName || "Select"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border border-gray-300 p-1">Mother Language</div>
                                    <div className="border border-gray-300 p-1">{data.mother_language || "-"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Experience */}
                    <div className="mb-4">
                        <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">JOB EXPERIENCE</h3>
                        <div className="grid grid-cols-4 gap-2 border border-gray-300">
                            <div className="border-r border-gray-300 p-1 font-semibold">Position</div>
                            <div className="border-r border-gray-300 p-1 font-semibold">Duration</div>
                            <div className="border-r border-gray-300 p-1 font-semibold">Company Name</div>
                            <div className="p-1 font-semibold">Country</div>
                        </div>

                        {data.job_experiences && data.job_experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-4 gap-2 border border-gray-300 border-t-0">
                                <div className="border-r border-gray-300 p-1">{exp.position || "-"}</div>
                                <div className="border-r border-gray-300 p-1">{exp.duration || "-"}</div>
                                <div className="border-r border-gray-300 p-1">{exp.company || "-"}</div>
                                <div className="p-1">{exp.country?.nationality || "-"}</div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="mb-4">
                        <div className="bg-yellow-200 p-2">
                            <p className="font-bold mb-1">Summary for application | _</p>
                            <div className="bg-yellow-100 p-2 min-h-24">
                                {data.summary || "No summary provided"}
                            </div>
                        </div>
                    </div>

                    {/* Physical Details */}
                    <div className="grid grid-cols-2 gap-8 mb-4">
                        <div className="grid grid-cols-2">
                            <p className="font-semibold">Shirt Size</p>
                            <p>: {data.shirt_size || "XL"}</p>
                            <p className="font-semibold">Pant Size (Waist)</p>
                            <p>: {data.pant_size || "28"}</p>
                            <p className="font-semibold">Shoes Size</p>
                            <p>: {data.show_size || "44"}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-semibold">Weight (In Kgs)</p>
                            <p>: {data.weight || "33"}</p>
                            <p className="font-semibold">Height (In Centimeters)</p>
                            <p>: {data.height || "165"}</p>
                            <p className="font-semibold">Nearest Airport</p>
                            <p>: {data.nearest_airport || "Dhaka Airport"}</p>
                        </div>
                    </div>

                    {/* Remarks */}
                    <div className="mb-4">
                        <p className="text-red-600 font-bold">REMARKS:</p>
                        <div className="flex gap-2 mt-2">
                            <div className="flex items-center">
                                <div className="w-6 h-6 border border-gray-500"></div>
                                <span className="ml-2">SELECTED</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 border border-gray-500"></div>
                                <span className="ml-2">STANDBY</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 border border-gray-500"></div>
                                <span className="ml-2">REJECTED</span>
                            </div>
                        </div>
                    </div>

                    {/* Signatures */}
                    <div className="grid grid-cols-2 gap-8 mb-4 mt-8">
                        <div>
                            <p className="font-semibold">Applicant Sign</p>
                            <div className="h-10 border-b border-gray-400"></div>
                        </div>
                        <div>
                            <p className="font-semibold text-right">Authorized Sign</p>
                            <div className="h-10 border-b border-gray-400"></div>
                        </div>
                    </div>

                    {/* Copyright Footer */}
                    <div className="text-right text-xs text-gray-600 mt-2">
                        Copy Right: www.dubai-visa.com - Application No. 1000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewJobApply;