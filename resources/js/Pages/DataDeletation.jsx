import React from 'react';
import { Head } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";

const DataDeletation = () => {
    return (
        <WebLayout>
            <Head title="Privacy Policy - Dubai Evisa" />
            <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Data Deletion Instructions</h1>

                    <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">
                            If you want to delete your data from our app, please contact us at <strong>info@dubaievisaservice.com</strong> with your Facebook User ID.
                        </p>
                        

                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default DataDeletation;