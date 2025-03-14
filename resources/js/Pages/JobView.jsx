import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import { assetUrl } from "@/Components/Constant/index.js";
import { useState, useEffect } from "react";

const JobView = () => {
    const allJobs = [
        {
            id: 1,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Ready Job"
        },
        {
            id: 2,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Ready Job"
        },
        {
            id: 3,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Ready Job"
        },
        {
            id: 7,
            title: "Cleaner",
            salary: "AED 1800",
            code: "0000004",
            location: "Dubai",
            image: "/images/secu.png",
            category: "Ready Job"
        },
        {
            id: 8,
            title: "Driver",
            salary: "AED 2500",
            code: "0000005",
            location: "Dubai",
            image: "images/secu.png",
            category: "Ready Job"
        },
        // Dubai category
        {
            id: 4,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Dubai"
        },
        {
            id: 5,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Dubai"
        },
        {
            id: 6,
            title: "Security",
            salary: "AED 2200",
            code: "0000003",
            location: "Dubai",
            image: "images/secu.png",
            category: "Dubai"
        },
        {
            id: 9,
            title: "Receptionist",
            salary: "AED 3000",
            code: "0000006",
            location: "Dubai",
            image: "images/secu.png",
            category: "Dubai"
        }
    ];

    // Get unique categories
    const categories = [...new Set(allJobs.map(job => job.category))];

    // Group jobs by category and prepare for display
    const [groupedJobs, setGroupedJobs] = useState({});
    const [visibleJobs, setVisibleJobs] = useState({});

    // Initialize grouped jobs and visible jobs on component mount
    useEffect(() => {
        const grouped = {};
        const visible = {};

        categories.forEach(category => {
            grouped[category] = allJobs.filter(job => job.category === category);

            // For each category, start with the first 3 jobs or however many are available
            const initialCount = Math.min(3, grouped[category].length);
            visible[category] = grouped[category].slice(0, initialCount);
        });

        setGroupedJobs(grouped);
        setVisibleJobs(visible);
    }, []);

    // Function to navigate to next job in a category
    const showNextJob = (category) => {
        setVisibleJobs(prev => {
            const categoryJobs = groupedJobs[category];
            const currentVisibleJobs = prev[category];

            if (currentVisibleJobs.length < 3) {
                // If we have less than 3 jobs showing, we need to add one
                const lastVisibleJobIndex = categoryJobs.findIndex(
                    job => job.id === currentVisibleJobs[currentVisibleJobs.length - 1]?.id
                );

                if (lastVisibleJobIndex < categoryJobs.length - 1) {
                    // Add the next job to the visible set
                    return {
                        ...prev,
                        [category]: [...currentVisibleJobs, categoryJobs[lastVisibleJobIndex + 1]]
                    };
                }
            } else {
                // If we already have 3 jobs showing, we need to rotate them
                const firstVisibleJobIndex = categoryJobs.findIndex(
                    job => job.id === currentVisibleJobs[0].id
                );

                if (firstVisibleJobIndex < categoryJobs.length - 3) {
                    // Remove the first job and add the next job after the current last one
                    const newVisibleJobs = [...currentVisibleJobs.slice(1),
                    categoryJobs[firstVisibleJobIndex + 3]];
                    return { ...prev, [category]: newVisibleJobs };
                }
            }

            return prev;
        });
    };

    // Function to navigate to previous job in a category
    const showPrevJob = (category) => {
        setVisibleJobs(prev => {
            const categoryJobs = groupedJobs[category];
            const currentVisibleJobs = prev[category];

            const firstVisibleJobIndex = categoryJobs.findIndex(
                job => job.id === currentVisibleJobs[0].id
            );

            if (firstVisibleJobIndex > 0) {
                // We can show a previous job
                const prevJob = categoryJobs[firstVisibleJobIndex - 1];

                if (currentVisibleJobs.length < 3) {
                    // If we're showing less than 3 jobs, just prepend the previous job
                    return {
                        ...prev,
                        [category]: [prevJob, ...currentVisibleJobs.slice(0, 2)]
                    };
                } else {
                    // If we're showing 3 jobs, drop the last one and prepend the previous job
                    return {
                        ...prev,
                        [category]: [prevJob, ...currentVisibleJobs.slice(0, 2)]
                    };
                }
            }

            return prev;
        });
    };

    // Check if we can navigate forward or backward
    const canShowNext = (category) => {
        if (!groupedJobs[category] || !visibleJobs[category]) return false;

        const categoryJobs = groupedJobs[category];
        const currentVisibleJobs = visibleJobs[category];

        if (currentVisibleJobs.length < 3) {
            // If showing less than 3 jobs, check if there are more jobs available
            const lastVisibleJobIndex = categoryJobs.findIndex(
                job => job.id === currentVisibleJobs[currentVisibleJobs.length - 1]?.id
            );

            return lastVisibleJobIndex < categoryJobs.length - 1;
        } else {
            // If showing 3 jobs, check if there are more jobs after the last visible one
            const firstVisibleJobIndex = categoryJobs.findIndex(
                job => job.id === currentVisibleJobs[0].id
            );

            return firstVisibleJobIndex < categoryJobs.length - 3;
        }
    };

    const canShowPrev = (category) => {
        if (!groupedJobs[category] || !visibleJobs[category]) return false;

        const categoryJobs = groupedJobs[category];
        const currentVisibleJobs = visibleJobs[category];

        const firstVisibleJobIndex = categoryJobs.findIndex(
            job => job.id === currentVisibleJobs[0].id
        );

        return firstVisibleJobIndex > 0;
    };

    // Render the component only when jobs are grouped
    if (Object.keys(visibleJobs).length === 0) {
        return <WebLayout showBgImage={true} showServiceImage={false}><div>Loading...</div></WebLayout>;
    }

    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job View | Dubai E-Visa" />
            <div className="container mx-auto px-4 py-8">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        {/* Category Header */}
                        <div className="relative mb-6">
                            <div className="bg-red-600 text-white font-bold py-2 px-8 inline-block rounded-r-full">
                                {category}
                            </div>
                        </div>

                        {/* Job Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                            {visibleJobs[category]?.map((job, index) => (
                                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Job Image with Title Overlay */}
                                    <div className="relative h-56">
                                        <img
                                            src={`${assetUrl + job.image}`}
                                            alt={job.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 text-xl font-bold">
                                            {job.title}
                                        </div>
                                        
                                    </div>

                                    {/* Job Details */}
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-green-700 font-bold text-lg">{job.title}</div>
                                            <div className="text-sm text-gray-500">Code No.</div>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-gray-700 text-sm">Salary {job.salary}</div>
                                            <div className="text-red-600 font-bold">{job.code}</div>
                                        </div>


                                        {/* Read More Link */}
                                        <Link href={route('job.details', { id: job.id })} className="text-blue-600 hover:underline flex items-center justify-end">
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            {/* Category-specific Navigation Arrows */}
                            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                                <button
                                    className={`bg-red-600 text-white p-2 rounded-full ${!canShowPrev(category) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => showPrevJob(category)}
                                    disabled={!canShowPrev(category)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                                <button
                                    className={`bg-red-600 text-white p-2 rounded-full ${!canShowNext(category) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => showNextJob(category)}
                                    disabled={!canShowNext(category)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </WebLayout>
    );
}

export default JobView;