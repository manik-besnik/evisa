import {Head} from "@inertiajs/react";
import JobCard from "@/Components/Web/JobCard.jsx";
import WebLayout from "@/Layouts/WebLayout.jsx";

export default function JobDetails() {
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Job Demand | Dubai E-Visa"/>
            <div className="container gap-4 my-4">
                <div className="p-6 bg-white rounded-lg shadow">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-semibold">UI/UX Designer</h1>
                        <div className="flex items-center gap-3">
                            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Apply Now</button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                    />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold">P</div>
                        <div>
                            <h2 className="font-medium mb-1">Pixelz Studio</h2>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    Yogyakarta, Indonesia
                                </div>
                                <span>•</span>
                                <span>Fulltime</span>
                                <span>•</span>
                                <span>Remote</span>
                                <span>•</span>
                                <span>2-4 Years</span>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">About this role</h3>
                        <p className="text-gray-600">
                            As an UI/UX Designer on Pixelz Studio, you'll focus on design user-friendly on several platform (web, mobile,
                            dashboard, etc) to our users needs. Your innovative solution will enhance the user experience on several
                            platforms. Join us and let's making impact on user engagement at Pixelz Studio.
                        </p>
                    </div>

                    {/* Qualification Section */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Qualification</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>At least 2-4 years of relevant experience in product design or related roles.</li>
                            <li>Knowledge of design validation, either through quantitative or qualitative research.</li>
                            <li>Have good knowledge using Figma and Figjam</li>
                            <li>Experience with analytics tools to gather data from users.</li>
                        </ul>
                    </div>

                    {/* Responsibility Section */}
                    <div>
                        <h3 className="font-semibold mb-2">Responsibility</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>
                                Create design and user journey on every features and product/business units across multiples devices
                                (Web/App)
                            </li>
                            <li>Identifying design problems through user journey and devising elegant solutions</li>
                            <li>
                                Develop low and hi fidelity designs, user experience flow, & prototype, translate it into highly-polished
                                designs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </WebLayout>

    )
}

