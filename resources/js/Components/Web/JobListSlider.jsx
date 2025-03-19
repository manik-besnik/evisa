import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const JobListSlider = ({ jobs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3);
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow >= jobs.length ? 0 : prevIndex + slidesToShow
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow < 0 ? jobs.length - slidesToShow : prevIndex - slidesToShow
        );
    };

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
                >
                    {jobs.map((job, index) => (
                        <div
                            key={job.id}
                            className="flex-shrink-0 px-2"
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative h-56">
                                    <img
                                        src={job.thumbnail}
                                        alt={job.type_of_work}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 text-xl font-bold">
                                        {job.type_of_work}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-green-700 font-bold text-lg">{job.type_of_work}</div>
                                        <div className="text-sm text-gray-500">Code No.</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-gray-700 text-sm">Salary {job.salary}</div>
                                        <div className="text-red-600 font-bold">{job.job_code}</div>
                                    </div>
                                    <Link href={route('job.details', { id: job.id })}
                                          className="text-blue-600 hover:underline flex items-center justify-end">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <button
                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700"
                onClick={prevSlide}
                style={{ left: '-20px' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700"
                onClick={nextSlide}
                style={{ right: '-20px' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default JobListSlider;
