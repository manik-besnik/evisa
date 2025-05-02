import {
    assetUrl, bloodGroups, genders, languageProficiency, maritalStatuses, religions,
} from "@/Components/Constant/index.js";
import {drivingLicenses} from "@/Components/Constant/index.js";
import {usePage} from "@inertiajs/react";
import {getValue} from "@/Components/Helper/index.js";

const ShowJobApply = ({data,experiences}) => {

    const getDrivingLicense = (id) => {

        if (!id) {
            return id;
        }

        const drivingLicense = drivingLicenses.find(item => item.id === Number(id));

        return drivingLicense?.name ?? id
    }

    return (
        <div className="bg-white w-full overflow-y-auto rounded-lg shadow-lg relative p-4">

            <div id="job-application-preview" className="border-8 border-[#5D5D5D] p-4 relative">
                {/* Header with Job Application and Photo */}
                <div className="flex mb-4">
                    <div className="w-1/3">
                        <img src={`${assetUrl}images/job-apply-form.png`} alt="Live chat"/>
                    </div>
                    <div className="w-1/3">
                        {data.avatar ? (
                            <img
                                src={data.avatar}
                                alt="Profile"
                                className="w-32 h-40 object-cover mx-auto border-2 border-gray-300"
                            />
                        ) : (
                            <div
                                className="w-32 h-40 bg-gray-200 mx-auto border-2 border-gray-300 flex items-center justify-center">
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
                            {data.job_posts.length > 0 ? (
                                data.job_posts.map((job, index) => (
                                    <p key={index} className="font-semibold">{index + 1}. {job.name}</p>
                                ))
                            ) : (

                                <p>{data.job_demand.type_of_work ? data.job_demand.type_of_work : "1. No positions selected"}</p>

                            )}
                        </div>
                    </div>
                </div>

                {/* Personal Details Section */}
                <div className="mb-4">
                    <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">PERSONAL DETAILS</h3>
                    <div
                        className="grid grid-cols-2 gap-4 after:absolute after:content-[''] after:w-[5px] after:h-[78px] after:bg-[#817F7F] after:left-[46%] after:-translate-x-1/2">
                        <div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Date Of Birth</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{data.date_of_birth || "-"}</p>
                            </div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Gender</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{getValue(genders,data.gender) || "-"}</p>
                            </div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Nationality</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{data.country.nationality || "-"}</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Religion</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{getValue(religions,data.religion) || "-"}</p>
                            </div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Blood Group</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{data.blood_group || "-"}</p>
                            </div>
                            <div className="flex">
                                <p className="w-1/3 font-semibold">Marital Status</p>
                                <p className="w-1/12 text-center">:</p>
                                <p className="flex-1">{getValue(maritalStatuses,data.marital_status) || "-"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-[#848585] mb-3"/>
                {/* Current and Permanent Address */}
                <div className="mb-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex">
                            <p className="font-semibold">Current Address <span className="ml-7">: </span></p>
                            <p className="ml-2">{data.current_state || "-"}</p>
                        </div>
                        <div>
                            <p>{data.current_city || "-"}</p>
                        </div>
                        <div>
                            <p>{data.current_area || "-"}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="flex">
                            <p className="font-semibold">Permanent Address <span className="ml-1">: </span></p>
                            <p className="ml-2">{data.permanent_district || "-"}</p>
                        </div>
                        <div>
                            <p>{data.permanent_thana || "-"}</p>
                        </div>
                        <div>
                            <p>{data.permanent_village || "-"}</p>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-[#848585] mb-3"/>
                {/* Passport & Visa Information */}


                <div className="mb-4">
                    <div
                        className="grid grid-cols-2 gap-4 after:absolute after:content-[''] after:w-[5px] after:h-[78px] after:bg-[#817F7F] after:left-[46%] after:-translate-x-1/2">
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
                        <div className="border-r border-gray-300 p-1">{data.education?.exam_name || "-"}</div>
                        <div className="border-r border-gray-300 p-1">{data.education?.passing_year || "-"}</div>
                        <div className="p-1">{data.education?.institute || "-"}</div>
                    </div>

                    {/* Computer Skills */}
                    <div className="grid grid-cols-4 gap-2 mt-2">
                        <div className="border border-gray-300 p-1 font-semibold">Computer Skilled</div>
                        <div className="border border-gray-300 p-1 col-span-3">{data.education?.computer_skill || "-"}</div>
                    </div>

                    {/* Language Proficiency */}
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">Driving License</div>
                                <div
                                    className="border border-gray-300 p-1">{getDrivingLicense(data.education?.driving_license)}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">English</div>
                                <div
                                    className="border border-gray-300 p-1">{getValue(languageProficiency,data.education?.english_proficiency) }</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">Arabic</div>
                                <div
                                    className="border border-gray-300 p-1">{getValue(languageProficiency,data.education?.arabic_proficiency) || "Select"}</div>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">Issue Date</div>
                                <div
                                    className="border border-gray-300 p-1">{data.education?.driving_license_issue_date || "-"}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">Urdu/Hindi</div>
                                <div className="border border-gray-300 p-1">{getValue(languageProficiency,data.education?.urdu_proficiency) || "-"}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-1">
                                <div className="border border-gray-300 p-1">Mother Language</div>
                                <div
                                    className="border border-gray-300 p-1">{data?.education?.language?.name || "-"}</div>
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

                    {experiences.length > 0 && experiences.map((exp, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2 border border-gray-300 border-t-0">
                            <div className="border-r border-gray-300 p-1">{exp.position || "-"}</div>
                            <div className="border-r border-gray-300 p-1">{exp.duration || "-"}</div>
                            <div className="border-r border-gray-300 p-1">{exp.company || "-"}</div>
                            <div className="p-1">{exp.country?.name || "-"}</div>
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
                        <p>: {data.shirt_size || " "}</p>
                        <p className="font-semibold">Pant Size (Waist)</p>
                        <p>: {data.pant_size || " "}</p>
                        <p className="font-semibold">Shoes Size</p>
                        <p>: {data.show_size || " "}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="font-semibold">Weight (In Kgs)</p>
                        <p>: {data.weight || " "}</p>
                        <p className="font-semibold">Height (In Centimeters)</p>
                        <p>: {data.height || " "}</p>
                        <p className="font-semibold">Nearest Airport</p>
                        <p>: {data.nearest_airport || " "}</p>
                    </div>
                </div>

                {/* Remarks */}
                <div className="mb-4">
                    <div className="flex">
                        <p className="text-red-600 font-bold ">REMARKS: </p>
                        <p>_____________________________________________________________________________________________</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div className="flex items-center mr-5">
                            <div className="w-6 h-6 border border-gray-500"></div>
                            <span className="ml-2">SELECTED</span>
                        </div>
                        <div className="flex items-center mr-5">
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
                <div
                    className="text-right text-xs text-gray-600 mt-2 absolute right-[-189px] bottom-[222px] rotate-[-90deg] bg-white p-[7px]">
                    Copy Right: www.dubai-visa.com - Application No. {data.id}
                </div>
            </div>
        </div>
    );
};

export default ShowJobApply;
