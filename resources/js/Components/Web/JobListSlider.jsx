import {Link} from "@inertiajs/react";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const JobListSlider = ({jobs}) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={3}
                navigation={{
                    nextEl: `.next-btn`,
                    prevEl: `.prev-btn`,
                }}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                    0: { slidesPerView: 1 }
                }}
            >
                {jobs.map((job) => (
                    <SwiperSlide key={job.id}>
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
                                <Link href={route('job.details', {id: job.id})}
                                      className="text-blue-600 hover:underline flex items-center justify-end">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="prev-btn absolute z-10 -left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <button className="next-btn absolute z-10 -right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    );
};

export default JobListSlider;
