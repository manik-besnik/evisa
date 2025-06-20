import React, { useRef, useEffect, useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import { assetUrl } from "@/Components/Constant/index.js";
import { genders, religions, bloodGroups, maritalStatuses, drivingLicenses, languageProficiency } from "@/Components/Constant/index.js";


const ResumePreview = ({ show, setShow, cvData, countries, confirmSubmit, oldAvatar, languages }) => {

const getMotherLanguage =  (id) => {

    if (!id){
        return id;
    }

    const language =languages.find( item => item.id === id);

    return language.name ?? id
}

const getDrivingLicense =  (id) => {

    if (!id){
        return id;
    }

    const drivingLicense =drivingLicenses.find( item => item.id === id);

    return drivingLicense.name ?? id
}

    const getLanguageProficiency = (id) => {

        if (!id) {
            return id;
        }

        const getlanguageProficiency = languageProficiency.find(item => item.id === id);

        return getlanguageProficiency.name ?? id
    }


    
    if (!show) return;

    return (

        <Modal show={show} maxWidth='5xl' onClose={() => setShow(false)}>
            <div className="flex justify-center bg-gray-100 p-5">
                <div className="w-full max-w-5xl bg-white shadow-lg overflow-hidden">

                    <div id="job-application-preview" className="border-8 border-[#5D5D5D] p-4 relative">
                        {/* Header with Job Application and Photo */}
                        <div className="flex mb-4">
                            <div className="w-1/3">
                                <img src={`${assetUrl}images/job-apply-form.png`} alt="Live chat" />
                            </div>
                            <div className="w-1/3">
                                {cvData.avatar ? (
                                    <img
                                        src={URL.createObjectURL(cvData.avatar)}
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
                                <h2 className="font-bold text-lg uppercase">{cvData.name || "APPLICANT NAME"}</h2>
                                <h5 className="font-bold uppercase">{cvData.designation || " "}</h5>
                                <p>Mob: {cvData.phone || "-"}</p>
                                <p>{cvData.email || "email@example.com"}</p>
                                <p>{cvData.website || ""}</p>
                            </div>
                        </div>

                        {/* Personal Details Section */}
                        <div className="mb-4">
                            <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">PERSONAL DETAILS</h3>
                            <div className="grid grid-cols-2 gap-4 after:absolute after:content-[''] after:w-[5px] after:h-[78px] after:bg-[#817F7F] after:left-[46%] after:-translate-x-1/2">
                                <div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Date Of Birth</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{cvData.date_of_birth || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Gender</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{genders.find(g => g.id === cvData.gender)?.name || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Nationality</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{countries?.find(c => c.id === cvData.nationality)?.name || "-"}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Religion</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{religions.find(r => r.id === cvData.religion)?.name || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Blood Group</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{bloodGroups.find(b => b.id === cvData.blood_group)?.name || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Marital Status</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{maritalStatuses.find(b => b.id === cvData.marital_status)?.name || "-"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-[#848585] mb-3" />
                        {/* Current and Permanent Address */}
                        <div className="mb-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex">
                                    <p className="font-semibold">Current Address <span className="ml-7">: </span></p>
                                    <p className="ml-2">{cvData.current_state || "-"}</p>
                                </div>
                                <div>
                                    <p>{cvData.current_city || "-"}</p>
                                </div>
                                <div>
                                    <p>{cvData.current_area || "-"}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="flex">
                                    <p className="font-semibold">Permanent Address <span className="ml-1">: </span> </p>
                                    <p className="ml-2">{cvData.permanent_district || "-"}</p>
                                </div>
                                <div>
                                    <p>{cvData.permanent_thana || "-"}</p>
                                </div>
                                <div>
                                    <p>{cvData.permanent_village || "-"}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-[#848585] mb-3" />
                        {/* Passport & Visa Information */}


                        <div className="mb-4">
                            <div className="grid grid-cols-2 gap-4 after:absolute after:content-[''] after:w-[5px] after:h-[78px] after:bg-[#817F7F] after:left-[46%] after:-translate-x-1/2">
                                <div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Passport No</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{cvData.passport_no || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Expiry Date</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{cvData.passport_expiry || "-"}</p>
                                    </div>
                                    
                                </div>

                                <div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Visa Status</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{cvData.visa_status || "-"}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="w-1/3 font-semibold">Visa Expiry</p>
                                        <p className="w-1/12 text-center">:</p>
                                        <p className="flex-1">{cvData.visa_expiry || "-"}</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                        {/* Education Details */}
                        {/* Education Details */}
                        <div className="mb-4">
                            <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">EDUCATION DETAILS</h3>
                            <div className="grid grid-cols-4 gap-2 border border-gray-300">
                                <div className="border-r border-gray-300 p-1 font-semibold">Certificate</div>
                                <div className="border-r border-gray-300 p-1 font-semibold">Year</div>
                                <div className="border-r border-gray-300 p-1 font-semibold">Board | University</div>
                                <div className="p-1 font-semibold">Result</div>
                            </div>

                            {cvData.educations && cvData.educations.map((edu, index) => (
                                <div key={index} className="grid grid-cols-4 gap-2 border border-gray-300 border-t-0">
                                    <div className="border-r border-gray-300 p-1">{edu.qualification || "-"}</div>
                                    <div className="border-r border-gray-300 p-1">
                                        {edu.start_date} {edu.end_date && !edu.is_present ? `- ${edu.end_date}` : edu.is_present ? '- Present' : ''}
                                    </div>
                                    <div className="border-r border-gray-300 p-1">{edu.institute || "-"}</div>
                                    <div className="p-1">{edu.result || "-"}</div>
                                </div>
                            ))}

                            {/* Computer Skills */}
                            <div className="grid grid-cols-4 gap-2 mt-2">
                                <div className="border border-gray-300 p-1 font-semibold">Computer Skilled</div>
                                <div className="border border-gray-300 p-1 col-span-3">{cvData.computer_skill || "-"}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">Driving License</div>
                                    <div className="border border-gray-300 p-1">{getDrivingLicense(cvData.driving_license) || "Select"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">English</div>
                                    <div className="border border-gray-300 p-1">{getLanguageProficiency(cvData.english_proficiency) || "Select"} </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">Arabic</div>
                                    <div className="border border-gray-300 p-1">{getLanguageProficiency(cvData.arabic_proficiency) || "Select"}</div>
                                </div>
                            </div>

                            <div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">Issue Date</div>
                                    <div className="border border-gray-300 p-1">{cvData.driving_license_issue_date || "-"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">Urdu/Hindi</div>
                                    <div className="border border-gray-300 p-1">{getLanguageProficiency(cvData.urdu_proficiency) || "Select"}</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-1">
                                    <div className="border border-gray-300 p-1">Mother Language</div>
                                    <div className="border border-gray-300 p-1">{getMotherLanguage(cvData.mother_language) || "-"}</div>
                                </div>
                            </div>
                        </div>


                        {/* Job Experience */}
                        <div className="mb-4">
                            <h3 className="font-bold border-l-4 border-red-600 pl-2 mb-2">JOB EXPERIENCE</h3>
                            <div className="grid grid-cols-3 gap-2 border border-gray-300">
                                <div className="border-r border-gray-300 p-1 font-semibold">Position</div>
                                <div className="border-r border-gray-300 p-1 font-semibold">Duration</div>
                                <div className="p-1 font-semibold">Company Name</div>
                            </div>

                            {cvData.job_experiences && cvData.job_experiences.map((exp, index) => (
                                <div key={index} className="grid grid-cols-3 gap-2 border border-gray-300 border-t-0">
                                    <div className="border-r border-gray-300 p-1">{exp.position || "-"}</div>
                                    <div className="border-r border-gray-300 p-1">
                                        {exp.start_date} {exp.end_date && !exp.is_present ? `- ${exp.end_date}` : exp.is_present ? '- Present' : ''}
                                    </div>
                                    <div className="border-r border-gray-300 p-1">{exp.company || "-"}</div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="mb-4">
                            <div className="bg-yellow-200 p-2">
                                <p className="font-bold mb-1">Summary for application | _</p>
                                <div className="bg-yellow-100 p-2 min-h-24">
                                    {cvData.summary || "No summary provided"}
                                </div>
                            </div>
                        </div>

                        {/* Copyright Footer */}
                        <div className="text-right text-xs text-gray-600 mt-2 absolute right-[-189px] bottom-[222px] rotate-[-90deg] bg-white p-[7px]">
                            Copy Right: www.dubai-visa.com - Application No. 1000
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-4">
                <button onClick={confirmSubmit}
                    type={"button"}
                    className="bg-red-600 text-white font-bold py-2 px-8 rounded">
                    Confirm Submit
                </button>
            </div>
        </Modal>
    );
};

export default ResumePreview;
