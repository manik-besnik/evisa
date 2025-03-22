import {FaDownload} from "react-icons/fa";
import {assetUrl} from "@/Components/Constant/index.js";
import {useEffect, useState} from "react";

const PreviewPopup = ({isOpen, onClose, data, confirmSubmit}) => {

    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (data.thumbnail instanceof File) {
            const url = URL.createObjectURL(data.thumbnail);
            setPreviewUrl(url);

            // Cleanup URL when component unmounts or data.thumbnail changes
            return () => URL.revokeObjectURL(url);
        } else {
            setPreviewUrl(null);
        }
    }, [data.thumbnail]);

    if (!isOpen) return null;


    const handleFormSubmit = () => {
        onClose()
        confirmSubmit()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg  shadow-lg relative p-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black rounded-lg text-white "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                {/*/!* Header with Security and Camera Icon *!/*/}
                {/*<div className="bg-gray-500 text-white p-4 flex justify-between items-center">*/}
                {/*    <div className="text-2xl font-bold">{data.type_of_work}</div>*/}
                {/*</div>*/}

                {/*/!* Camera Space *!/*/}
                {/*<div className="h-44 bg-gray-500 relative">*/}
                {/*    <div className="absolute bottom-4 right-4">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"*/}
                {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                {/*                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                {/*                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="h-52 flex items-center justify-center bg-gray-500">
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="h-full w-auto object-contain"/>
                    ) : (
                        <span className="text-gray-500">No Image Uploaded</span>
                    )}
                </div>
                {/* Job Title and Salary */}
                <div className="border-gray-300 p-4" style={{backgroundImage: `url(${assetUrl}images/viewbg.png)`}}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-green-800">{data.type_of_work || " "}</h1>
                            <p className="text-lg">Salary <span className="font-bold">AED {data.salary || " "}</span>
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Code No.</p>
                            <p className="text-xl text-red-700 font-bold">------</p>
                        </div>
                    </div>
                </div>

                {/* Job Details Table */}
                <div className="py-2">
                    <div className="grid mt-5">
                        <div className="flex gap-4">
                            <div
                                className="border-2 border-l-0 pr-2 text-[16px] border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Job Location
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-r-0 text-[16px] pl-2">
                                {data.location ? data.location.name : data.job_location}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Visa validity
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.visa_validity}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Accommodation
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.accommodation}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Transport
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.transport}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Food
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.food}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Medical Insurance
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.medical_insurance}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Daily working hours
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.working_hours}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Salary
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.salary || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Vacation benefits
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.vacation_benefits || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Age limits
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.age_limits || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                In-demand workers
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.worker_quantity || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Education
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.education || " "}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="border-t-0 border-l-0 pr-2 text-[16px] border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                Company activities
                            </div>
                            <div
                                className="w-full border-2 border-[#8A9298] border-l-4 border-l-red-500 bg-white border-t-0 border-r-0 text-[16px] pl-2">
                                {data.company_activities || " "}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-[#5D5E5E] text-white p-1 text-center">
                    <div className="text-2xl font-bold mb-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        +971 528260909, 0508074795, 0501289360
                    </div>
                </div>

                {/* Application Requirements */}
                <div className="p-4" style={{backgroundImage: `url(${assetUrl}images/viewbg.png)`}}>
                    <h3 className="font-bold text-lg">Application Requirements:</h3>
                    <p className="my-2">{data.note}</p>
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
                        <div className="w-[53px] h-[53px] mt-[-5px] rounded-full flex items-center justify-center">
                            <img src={`${assetUrl + 'images/facebook-circled.svg'}`} className="w-full h-full" alt=""/>
                        </div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={`${assetUrl + 'images/whatsapp.svg'}`} className="w-full h-full" alt=""/>
                        </div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={`${assetUrl + 'images/share.svg'}`} className="w-full h-full" alt=""/>
                        </div>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-end my-4">
                    <button onClick={handleFormSubmit} className="bg-red-600 text-white font-bold py-2 px-8 rounded">
                        Submit
                    </button>
                    <button className="ml-2 bg-green-600 text-white flex items-center px-4 py-2 rounded">
                        <FaDownload className="mr-1"/> DOWNLOAD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreviewPopup;
