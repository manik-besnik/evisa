import React, { useRef, useEffect, useState } from 'react';
import Modal from "@/Components/Modal.jsx";
import { assetUrl } from "@/Components/Constant/index.js";

const SectionHeader = ({ icon, text }) => {
    return (
        <div className="section-header flex items-center relative mb-5">
            <div className='bg-[#DD9227] rounded-l-full'>
                <div
                    className="icon-circle w-10 h-10  flex items-center justify-center border-2 border-white rounded-full bg-[#111827]  relative z-10">
                    <span className="icon text-base">{icon}</span>
                </div>
            </div>
            <div
                className="flex items-center bg-[#DD9227] text-white h-10 min-w-max px-4 text-xl font-bold rounded-r-full">
                {text}
            </div>
        </div>
    );
};

const Timeline = ({ title, subTitle, description, startDate, endDate = null, isPresent = false }) => {
    const contentRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setLineHeight(contentRef.current.clientHeight);
        }
    }, []);

    const getYear = (date) => {

        if (!date){
            return date
        }
        const parseData = new Date(date);
        return parseData.getFullYear();
    }

    return (
        <div className="flex items-start relative mb-4">
            {/* Date */}
            <div className="w-1/4 flex text-right pr-6 font-bold text-sm text-gray-800">
                {getYear(startDate)} - {isPresent ? "PRESENT" : getYear(endDate)}
            </div>

            {/* Timeline vertical line & dot */}
            <div className="relative flex flex-col">
                <div
                    className="w-3 h-3 rounded-full bg-[#1a222e] absolute top-1.5 left-1/2 transform -translate-x-1/2 z-10" />
                <div
                    className="w-[1.5px] bg-[#1a222e] absolute left-1/2 top-4 transform -translate-x-1/2"
                    style={{ height: lineHeight }}
                />
            </div>

            {/* Content */}
            <div ref={contentRef} className="w-3/4 pl-6">
                <div className="flex justify-between items-start">
                    <div className="font-bold text-lg text-gray-900">
                        {title}
                    </div>
                    {subTitle ? <div className="font-semibold text-lg text-[#1a222e]">
                        {subTitle}
                    </div> : ''}
                </div>
                <ul className="list-disc pl-5 mt-2 text-md text-gray-700 space-y-1">
                    <li>
                        {description}
                    </li>
                </ul>
            </div>
        </div>
    );
};


const ResumePreview = ({ show, setShow, cvData, confirmSubmit }) => {

    if (!show) return;

    return (

        <Modal show={show} maxWidth='5xl' onClose={() => setShow(false)}>
            <div className="flex justify-center bg-gray-100 p-5">
                <div className="w-full max-w-5xl bg-white flex shadow-lg overflow-hidden">
                    {/* Left Section */}
                    <div className="w-1/3 bg-gray-900 text-white p-6">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <div
                                className="w-44 h-44 rounded-full bg-primary border-4 border-white flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
                                    {cvData.avatar && <img
                                        src={URL.createObjectURL(cvData.avatar)}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />}
                                </div>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div className="text-center mb-6">
                            <h1 className="text-4xl font-bold text-primary leading-tight text-uppercase">{cvData.name}</h1>
                            <h2 className="text-lg font-semibold mt-2">{cvData.designation}</h2>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-6">
                            <SectionHeader icon={<img src={`${assetUrl}images/cv/contact.png`} alt="contact" className='w-5 h-5' />} text="Contact Me" />
                            <ul className="space-y-2 ml-10">
                                <li className="flex items-center">
                                    <img className="mr-2" src={`${assetUrl + 'images/cv/call.png'}`} alt="hero" /> {cvData.phone}
                                </li>
                                <li className="flex items-center">
                                    <img className="mr-2" src={`${assetUrl + 'images/cv/message.png'}`} alt="email" /> {cvData.email}
                                </li>
                                {/*<li className="flex items-center">*/}
                                {/*    <span className="mr-2">📍</span> 123 Anywhere St., Any City*/}
                                {/*</li>*/}
                                <li className="flex items-center">
                                    <img className="mr-2" src={`${assetUrl + 'images/cv/link.png'}`} alt="link" />{cvData.website}
                                </li>
                            </ul>
                        </div>

                        {/* Personal Skills */}
                        <div className="mb-6">

                            <SectionHeader icon={<img src={`${assetUrl}images/cv/tik.png`} alt="contact" className='w-5 h-5' />} text="Personal Skills" />
                            <ul className="list-disc list-inside space-y-1 ml-10">

                                {cvData.personal_skills.split(',').map((item, index) => (
                                    <li key={index}>{item.trim()}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Interests */}
                        <div>
                            <SectionHeader icon={<img src={`${assetUrl}images/cv/love.png`} alt="contact" className='w-5 h-5' />} text="Interests" />
                            <ul className="list-disc list-inside space-y-1 ml-10">
                                {cvData.interests.split(',').map((item, index) => (
                                    <li key={index}>{item.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-2/3 p-6">
                        {/* About Me */}
                        <div className="mb-6">

                            <SectionHeader icon={<img src={`${assetUrl}images/cv/user.png`} alt="contact" className='w-5 h-5' />} text="About Me" />
                            <p className="text-justify">
                                {cvData.summary}
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="mb-10">

                            <SectionHeader icon={<img src={`${assetUrl}images/cv/officebag.png`} alt="contact" className='w-5 h-5' />} text="Experience" />

                            {cvData.job_experiences.map((item) => (
                                <Timeline
                                    title={item.company}
                                    subTitle={item.position}
                                    startDate={item.start_date}
                                    endDate={item.end_date}
                                    isPresent={item.is_present}
                                    description={item.description}
                                />
                            ))}

                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <SectionHeader icon={<img src={`${assetUrl}images/cv/book.png`} alt="contact" className='w-5 h-5' />} text="Education" />

                            {cvData.educations.map((item) => (
                                <Timeline
                                    title={item.institute}
                                    startDate={item.start_date}
                                    endDate={item.end_date}
                                    description={item.result}
                                />
                            ))}
                        </div>

                        {/* Languages */}
                        <div className="mb-6">
                            <SectionHeader icon={<img src={`${assetUrl}images/cv/flug.png`} alt="contact" className='w-5 h-5' />} text="Languages" />
                            <ul className="list-disc font-bold list-inside space-y-1 ml-10">
                                {cvData.languages.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                ))}
                            </ul>
                        </div>

                        {/* References */}
                        <div>
                            <SectionHeader icon={<img src={`${assetUrl}images/cv/useryellow.png`} alt="contact" className='w-5 h-5' />} text="References" />

                            {cvData.references.map((item, index) => (
                                <div key={index} className="mb-4 ml-10">
                                    <div className="font-bold">{item.name}</div>
                                    <div>{item.designation} / {item.designation}</div>
                                    <div>Phone: {item.phone}</div>
                                    <div>Email: {item.email}</div>
                                </div>
                            ))}

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
