import React from 'react';
import { Head, useForm, usePage } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";
import { assetUrl } from "@/Components/Constant/index.js";
import {router} from "@inertiajs/react";

const CvCreateFormate = () => {
    const handleCreateCV = (formatType) => {
    //    router.visit(`/cv-create/${formatType}`)
    };

    return (
         <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="CV Create Form | Dubai E-Visa"/>
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4 py-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Choose Your CV Format
                    </h1>
                    <p className="text-gray-600">
                        Select a professional template that best suits your career
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Classic Format */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <img
                                        src={`${assetUrl + 'images/cv/cvformate-job.png'}`}
                                    alt="Classic CV Format Preview"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>

                        <div className="p-6 absolute bottom-0 right-0">
                           
                            <button
                                onClick={() => handleCreateCV('jobFormat')}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-11 rounded-lg transition-colors duration-200"
                            >
                                CREATE
                            </button>
                        </div>
                    </div>

                    {/* Modern Format */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <img
                                        src={`${assetUrl + 'images/cv/cvformate-cv.png'}`}
                                    alt="Modern CV Format Preview"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>

                            <div className="p-6 absolute bottom-0 right-0">
                          
                            <button
                                onClick={() => handleCreateCV('cvFormat')}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-11 rounded-lg transition-colors duration-200"
                            >
                                CREATE
                            </button>
                        </div>
                    </div>

                    {/* Professional Format */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <img
                                        src={`${assetUrl + 'images/cv/cvformate-resume.png'}`}
                                    alt="Professional CV Format Preview"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                        </div>

                            <div className="p-6 absolute bottom-0 right-0">
                            
                            <button
                                onClick={() => handleCreateCV('resumeFormat')}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-11 rounded-lg transition-colors duration-200"
                            >
                                CREATE
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </WebLayout>
    );
};

export default CvCreateFormate;