import React, { useRef, useEffect, useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import { assetUrl } from "@/Components/Constant/index.js";

const SectionHeader = ({ text, className = "" }) => {
    return (
        <div className={`border-b-2 border-black mb-2 pb-[2px] ${className}`}>
            <span className="bg-blue-900 text-white px-2 py-1 font-bold text-xs">
                {text}
            </span>
        </div>
    );
};

const PersonalDetailRow = ({ label, value }) => {
    return (
        <div className="flex text-xs mb-1">
            <span className="text-blue-900 mr-2">◆</span>
            <span className="font-semibold mr-2 w-24">{label}</span>
            <span className="mr-1">:</span>
            <span className="flex-1">{value}</span>
        </div>
    );
};

const CvPreview = ({ show, setShow, cvData, confirmSubmit, oldAvatar }) => {

    if (!show) return;

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`;
    };

    const getYear = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.getFullYear();
    };

    return (
        <Modal show={show} maxWidth='5xl' onClose={() => setShow(false)}>
            <div className="flex justify-center bg-gray-100 p-5">
                <div className="w-full max-w-4xl bg-white shadow-lg">
                    {/* Header Section */}
                    <div className="relative">
                        {/* Profile Photo */}
                        <div className="absolute top-4 right-4 z-10">
                            <div className="w-24 h-32 border-2 border-black bg-white overflow-hidden">
                                {cvData.avatar ? (
                                    <img
                                        src={URL.createObjectURL(cvData.avatar)}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : oldAvatar ? (
                                    <img
                                        src={oldAvatar}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-2xl">👤</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CV Title */}
                        <div className="text-center py-3">
                            <div className="inline-block bg-blue-600 text-white px-8 py-2 rounded-full">
                                <h1 className="text-lg font-bold tracking-wide">Curriculum Vitae</h1>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="px-6 pb-4">
                            <h2 className="text-xl font-bold uppercase mb-2">{cvData.name}</h2>
                            <div className="text-sm space-y-1">
                                <div>Mobile: No. {cvData.phone}</div>
                                <div>Email: <span className="text-blue-600">{cvData.email}</span></div>
                                <div>
                                    {(cvData.current_state && cvData.current_city)
                                        ? `${cvData.current_state}, ${cvData.current_city}`
                                        : ' '}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="px-6 pb-6">
                        {/* Post Applied For */}
                        <div className="mb-4">
                            <SectionHeader text="POST APPLIED FOR ANY SUITABLE JOB" />
                        </div>

                        {/* Profile */}
                        <div className="mb-4">
                            <SectionHeader text="PROFILE" />
                            <p className="text-xs leading-relaxed text-justify px-1">
                                {cvData.summary || "A suitable position with an organization where I can utilize the best of my skills and abilities that fit to my education, skills and experience a place where an encourage and permitted to be an active participant as well vital contribute on development of the company."}
                            </p>
                        </div>

                        {/* Personal Skills */}
                        <div className="mb-4">
                            <SectionHeader text="PERSONAL SKILLS" />
                            <div className="px-1">
                                {cvData.personal_skills ? (
                                    cvData.personal_skills.split(',').map((skill, index) => (
                                        <div key={index} className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">✓</span>
                                            {skill.trim()}
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">✓</span>
                                            Very energetic oriented
                                        </div>
                                        <div className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">✓</span>
                                            Physical mobility and stamina to do all tasks environment under supervision
                                        </div>
                                        <div className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">✓</span>
                                            Extremely hardworking self motivated and able to work independently in a team environment under supervision
                                        </div>
                                        <div className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">✓</span>
                                            Keep excellent inter personal relation with colleagues and ready to help them
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="mb-4">
                            <SectionHeader text="PERSONAL DETAILS" />
                            <div className="grid grid-cols-2 gap-x-4 px-1">
                                <div>
                                    <PersonalDetailRow label="Name" value={cvData.name} />
                                    <PersonalDetailRow label="Nationality" value={cvData.nationality || "Bangladeshi"} />
                                    <PersonalDetailRow label="Date of Birth" value={formatDate(cvData.date_of_birth) || "28/10/10"} />
                                    <PersonalDetailRow label="Gender" value={cvData.gender || "Male"} />
                                </div>
                                <div>
                                    <PersonalDetailRow label="Marital Status" value={cvData.marital_status || "Married"} />
                                    <PersonalDetailRow label="Religion" value={cvData.religion || "Muslim"} />
                                    <PersonalDetailRow label="Language Known" value={cvData.languages?.map(lang => lang.name).join(', ') || "Arabic, English, Hindi, Bengali"} />
                                </div>
                            </div>
                        </div>

                        {/* Educational Qualification */}
                        <div className="mb-4">
                            <SectionHeader text="EDUCATIONAL QUALIFICATION" />
                            <div className="px-1">
                                {cvData.educations?.map((edu, index) => (
                                    <div key={index} className="text-xs mb-1">
                                        <span className="text-blue-900 mr-2">◆</span>
                                        <span className="font-semibold mr-2">Academic:</span>
                                        <span>{edu.qualification || edu.institute} - {edu.result} passed</span>
                                    </div>
                                )) || (
                                        <div className="text-xs mb-1">
                                            <span className="text-blue-900 mr-2">◆</span>
                                            <span className="font-semibold mr-2">Academic:</span>
                                            <span>BBA (Accounting) - 2011-2007 passed</span>
                                        </div>
                                    )}

                                {cvData.computer_skill && (
                                    <div className="text-xs mb-1">
                                        <span className="text-blue-900 mr-2">◆</span>
                                        <span className="font-semibold mr-2">Computer:</span>
                                        <span>{cvData.computer_skill}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div className="mb-4">
                            <SectionHeader text="WORK EXPERIENCE" />
                            <div className="px-1">
                                {cvData.job_experiences?.map((exp, index) => (
                                    <div key={index} className="text-xs mb-2">
                                        <span className="text-blue-900 mr-2">✧</span>
                                        <span className="font-semibold">
                                            {exp.company} from {getYear(exp.start_date)} to {exp.is_present ? 'Present' : getYear(exp.end_date)}
                                        </span>
                                        <div className="ml-4 mt-1">
                                            <span className="font-semibold">Position:</span> {exp.position}
                                        </div>
                                        {exp.description && (
                                            <div className="ml-4">
                                                <span className="font-semibold">Description:</span> {exp.description}
                                            </div>
                                        )}
                                    </div>
                                )) || (
                                        <>
                                            <div className="text-xs mb-2">
                                                <span className="text-blue-900 mr-2">✧</span>
                                                <span className="font-semibold">Bell Boy with WestinHotel Dhaka, Bangladesh from March 2019 to January 2022</span>
                                            </div>
                                            <div className="text-xs mb-2">
                                                <span className="text-blue-900 mr-2">✧</span>
                                                <span className="font-semibold">Worked as a Marketing Executive in Bangladesh (4 years)</span>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>

                        {/* Passport Details */}
                        <div className="mb-4">
                            <SectionHeader text="PASSPORT DETAIL" />
                            <div className="px-1">
                                <div className="grid grid-cols-2 gap-x-4 text-xs">
                                    <div>
                                        <div className="mb-1">
                                            <span className="font-semibold">Passport No</span>
                                            <span className="mx-2">:</span>
                                            <span>{cvData.passport_no || "A 03570809"}</span>
                                        </div>
                                        <div className="mb-1">
                                            <span className="font-semibold">Place of Issue</span>
                                            <span className="mx-2">:</span>
                                            <span>Bangladesh</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <span className="font-semibold">Date of issue</span>
                                            <span className="mx-2">:</span>
                                            <span>2022/04/28</span>
                                        </div>
                                        <div className="mb-1">
                                            <span className="font-semibold">Date of expiry</span>
                                            <span className="mx-2">:</span>
                                            <span>{formatDate(cvData.passport_expiry) || "27/04/2032"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs mt-1">
                                    <span className="font-semibold">Visa Status</span>
                                    <span className="mx-2">:</span>
                                    <span>{cvData.visa_status || "Visit Visa"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Declaration */}
                        <div className="mb-4">
                            <SectionHeader text="DECLARATION" />
                            <p className="text-xs leading-relaxed px-1">
                                I hereby certify that the above information are true and correct according to the best of my knowledge & My Experience. If selected I assure that I would perform to the best of my abilities, early awaiting for a Positive response
                            </p>
                        </div>

                        {/* References */}
                        {cvData.references?.length > 0 && (
                            <div className="mb-4">
                                <SectionHeader text="REFERENCES" />
                                <div className="px-1">
                                    {cvData.references.map((ref, index) => (
                                        <div key={index} className="text-xs mb-3">
                                            <div className="font-semibold">{ref.name}</div>
                                            <div>{ref.designation} / {ref.company}</div>
                                            <div>Phone: {ref.phone}</div>
                                            <div>Email: {ref.email}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Signature */}
                        <div className="text-right mt-6">
                            <div className="font-bold text-sm">
                                {cvData.name?.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-4">
                <button
                    onClick={confirmSubmit}
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition-colors"
                >
                    Confirm Submit CV
                </button>
            </div>
        </Modal>
    );
};

export default CvPreview;