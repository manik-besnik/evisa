import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import {
    assetUrl,
} from "@/Components/Constant/index.js";

const Job = () => {
    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer />
                    <div className="w-1/2 h-[80vh]">
                        <div className="bg-[#6b7377c8] h-full relative p-5">
                            {/* Job Directory Card 1 */}
                            <Link href={route('job.directory')} className="block mb-8">
                            <div className="flex flex-col items-center mb-8">
                                <div className="bg-white p-4 w-32 h-30 flex justify-center items-center">
                                    <img
                                        src={`${assetUrl + 'images/jobdirectory.png'}`}
                                        alt="Job Directory"
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div className="bg-red-600 text-white py-2 px-4 w-30 text-center">
                                    <span className="font-bold text-[16.5px]">Job Directory</span>
                                </div>
                            </div>
                          </Link>
                            {/* Job Directory Card 2 */}
                            <Link href={route('job-demand.create')} className="block mb-8">
                            <div className="flex flex-col items-center mb-8">
                                <div className="bg-white p-4 w-32 h-30 flex justify-center items-center">
                                    <img
                                        src={`${assetUrl + 'images/jodemand.png'}`}
                                        alt="Job Directory"
                                        className="w-24 h-24"
                                    />
                                </div>
                                <div className="bg-red-600 text-white py-2 px-4 w-30 text-center">
                                    <span className="font-bold ">Job Demand</span>
                                </div>
                            </div>
                        </Link>
                            {/* General Apply Card */}
                            <Link href={route('job-demand.create')} className="block mb-8">
                            <div className="flex flex-col items-center">
                                <div className="bg-white p-4 w-32 h-30 flex justify-center items-center">
                                    <img
                                        src={`${assetUrl + 'images/generalapply.png'}`}
                                        alt="General Apply"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div className="bg-green-600 text-white py-2 px-4 w-30 text-center">
                                    <span className="font-bold text-[15.5px]">General Apply</span>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Job;