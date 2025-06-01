import React, { useRef, useEffect, useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import { assetUrl } from "@/Components/Constant/index.js";

const SectionHeader = ({ text, className = "" }) => {
    return (
        <div className={`bg-blue-800 text-white px-4 py-2 mb-3 font-bold text-sm uppercase ${className}`}>
            {text}
        </div>
    );
};

const PersonalDetailRow = ({ icon, label, value }) => {
    return (
        <div className="flex items-center mb-2">
            <span className="text-blue-800 mr-2">{icon}</span>
            <span className="font-semibold mr-2">{label}:</span>
            <span>{value}</span>
        </div>
    );
};

const Timeline = ({ title, qualification, subTitle, description, startDate, endDate = null, isPresent = false }) => {
    const getYear = (date) => {
        if (!date) return date;
        const parseData = new Date(date);
        return parseData.getFullYear();
    }

    return (
        <div className="mb-4">
            <div className="flex items-center mb-1">
                <span className="text-blue-800 mr-2">◆</span>
                <div>
                    {qualification && (
                        <div className="font-semibold text-sm">
                            {qualification}
                        </div>
                    )}
                    <div className="font-bold">
                        {title}
                    </div>
                    {subTitle && (
                        <div className="text-sm text-gray-600">
                            {subTitle}
                        </div>
                    )}
                    <div className="text-sm text-gray-600">
                        {getYear(startDate)} - {isPresent ? "Present" : getYear(endDate)}
                    </div>
                </div>
            </div>
            {description && (
                <div className="ml-4 text-sm">
                    {description}
                </div>
            )}
        </div>
    );
};

const CvPreview = ({ show, setShow, cvData, confirmSubmit, oldAvatar }) => {

    if (!show) return;

    return (
        <Modal show={show} maxWidth='5xl' onClose={() => setShow(false)}>
            <div className="flex justify-center bg-gray-100 p-5">
                <div className="w-full max-w-4xl bg-white shadow-lg">
                    {/* Header Section */}
                    <div className="bg-blue-900 text-white p-6 text-center relative">
                        <div className="absolute top-4 right-4">
                            <div className="w-24 h-32 border-2 border-white bg-white overflow-hidden">
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
                                        <span className="text-4xl">👤</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold mb-2 uppercase tracking-wide">
                            Curriculum Vitae
                        </h1>

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold uppercase">{cvData.name}</h2>
                            <div className="text-lg mt-1">
                                Mobile: No. {cvData.phone}
                            </div>
                            <div className="text-lg">
                                Email: {cvData.email}
                            </div>
                            <div className="text-lg">
                                {cvData.website}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                        {/* Post Applied For */}
                        <div className="mb-6">
                            <SectionHeader text="POST APPLIED FOR ANY SUITABLE JOB" />
                        </div>

                        {/* Profile */}
                        <div className="mb-6">
                            <SectionHeader text="PROFILE" />
                            <p className="text-sm leading-relaxed text-justify">
                                {cvData.summary}
                            </p>
                        </div>

                        {/* Personal Skills */}
                        <div className="mb-6">
                            <SectionHeader text="PERSONAL SKILLS" />
                            <div className="text-sm">
                                {cvData.personal_skills.split(',').map((skill, index) => (
                                    <div key={index} className="mb-1">
                                        {skill.trim()}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="mb-6">
                            <SectionHeader text="PERSONAL DETAILS" />
                            <div className="grid grid-cols-2 gap-x-8 text-sm">
                                <div>
                                    <PersonalDetailRow icon="◆" label="Name" value={cvData.name} />
                                    <PersonalDetailRow icon="◆" label="Nationality" value={cvData.nationality || "Not specified"} />
                                    <PersonalDetailRow icon="◆" label="Date of Birth" value={cvData.date_of_birth} />
                                    <PersonalDetailRow icon="◆" label="Gender" value={cvData.gender || "Not specified"} />
                                </div>
                                <div>
                                    <PersonalDetailRow icon="◆" label="Marital Status" value={cvData.marital_status || "Not specified"} />
                                    <PersonalDetailRow icon="◆" label="Religion" value={cvData.religion || "Not specified"} />
                                    <PersonalDetailRow icon="◆" label="Language Known" value={cvData.languages.map(lang => lang.name).join(', ') || "Not specified"} />
                                </div>
                            </div>
                        </div>

                        {/* Educational Qualification */}
                        <div className="mb-6">
                            <SectionHeader text="EDUCATIONAL QUALIFICATION" />
                            {cvData.educations.map((edu, index) => (
                                <div key={index} className="mb-3">
                                    <div className="flex items-center text-sm">
                                        <span className="text-blue-800 mr-2">◆</span>
                                        <div>
                                            <span className="font-semibold mr-4">Academic:</span>
                                            <span>{edu.qualification || edu.institute} - {edu.result}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {cvData.computer_skill && (
                                <div className="mb-3">
                                    <div className="flex items-center text-sm">
                                        <span className="text-blue-800 mr-2">◆</span>
                                        <div>
                                            <span className="font-semibold mr-4">Computer:</span>
                                            <span>{cvData.computer_skill}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Work Experience */}
                        <div className="mb-6">
                            <SectionHeader text="WORK EXPERIENCE" />
                            {cvData.job_experiences.map((exp, index) => (
                                <div key={index} className="mb-3">
                                    <div className="flex items-start text-sm">
                                        <span className="text-blue-800 mr-2 mt-1">✧</span>
                                        <div>
                                            <div className="font-semibold">
                                                {exp.company} from {new Date(exp.start_date).getFullYear()} to {exp.is_present ? 'Present' : new Date(exp.end_date).getFullYear()}
                                            </div>
                                            <div className="text-gray-600">
                                                {exp.position} - {exp.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Passport Details */}
                        <div className="mb-6">
                            <SectionHeader text="PASSPORT DETAIL" />
                            <div className="text-sm space-y-1">
                                <div className="flex">
                                    <span className="w-32 font-semibold">Passport No:</span>
                                    <span>{cvData.passport_no}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 font-semibold">Date of expiry:</span>
                                    <span>{cvData.passport_expiry}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 font-semibold">Visa Status:</span>
                                    <span>{cvData.visa_status}</span>
                                </div>
                            </div>
                        </div>

                        {/* Declaration */}
                        <div className="mb-6">
                            <SectionHeader text="DECLARATION" />
                            <p className="text-sm leading-relaxed">
                                I hereby certify that the above information are true and correct according to the best of my knowledge & My Experience. If selected I assure that I would perform to the best of my abilities, early awaiting for a Positive response
                            </p>
                        </div>

                        {/* References */}
                        {cvData.references.length > 0 && (
                            <div className="mb-6">
                                <SectionHeader text="REFERENCES" />
                                {cvData.references.map((ref, index) => (
                                    <div key={index} className="text-sm mb-3">
                                        <div className="font-semibold">{ref.name}</div>
                                        <div>{ref.designation} / {ref.company}</div>
                                        <div>Phone: {ref.phone}</div>
                                        <div>Email: {ref.email}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Signature */}
                        <div className="text-right mt-8">
                            <div className="font-bold text-lg">
                                {cvData.name.toUpperCase()}
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