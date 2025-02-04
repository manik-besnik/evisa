import {Head, router} from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";
import {getValue} from "@/Components/Helper/index.js";
import {jobTypes} from "@/Components/Constant/index.js";

export default function JobDetails({job_post}) {

    const jobApply = () => {
        return router.get(route('job-posts.create',{id:job_post.id}))
    }
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Job Demand | Dubai E-Visa"/>
            <div className="container gap-4 my-4">
                <div className="p-6 bg-white rounded-lg shadow">
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-semibold">{job_post.title}</h1>
                        <div className="flex items-center gap-3">
                            <button onClick={jobApply} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Apply
                                Now
                            </button>

                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex items-start gap-4 mb-6">
                        <div
                            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl font-bold uppercase">{job_post.company.charAt(0)}
                        </div>
                        <div>
                            <h2 className="font-medium mb-1">{job_post.company}</h2>
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
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    {job_post.location}
                                </div>
                                <span>•</span>
                                <span>{getValue(jobTypes,job_post.type)}</span>
                            </div>
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: job_post.description }} />

                </div>
            </div>
        </WebLayout>

    )
}

