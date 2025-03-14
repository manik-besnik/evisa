import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import {
    assetUrl,
} from "@/Components/Constant/index.js";

const JobDemand = () => {
    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer />
                    <div className="w-1/2 h-[80vh]">
                        <div className="bg-[#6b7377c8] h-full relative p-5">
                            {/* Job Directory Card 1 */}
                            <Link href={route('single-job-demand.create')} className="block mb-8">
                                <div className="flex flex-col items-center mb-8">
                                    <div className="bg-white p-4 w-32 h-30 flex justify-center items-center">
                                        <img
                                            src={`${assetUrl + 'images/signaldemand.png'}`}
                                            alt="Job Directory"
                                            className="w-15 h-20"
                                        />
                                    </div>
                                    <div className="bg-red-600 text-white py-2 px-4 w-30 text-center">
                                        <span className="font-bold text-[15px]">Single Demand </span>
                                    </div>
                                </div>
                            </Link>
                            {/* Job Directory Card 2 */}
                            <Link href={route('more-job-demand.create')} className="block mb-8">
                                <div className="flex flex-col items-center mb-8">
                                    <div className="bg-white p-4 w-32 h-30 flex justify-center items-center">
                                        <img
                                            src={`${assetUrl + 'images/moredemand.png'}`}
                                            alt="Job Directory"
                                            className="w-24 h-24"
                                        />
                                    </div>
                                    <div className="bg-red-600 text-white py-2 px-4 w-30 text-center">
                                        <span className="font-bold text-[15.7px]">More Demand</span>
                                    </div>
                                </div>
                            </Link>
                            {/* General Apply Card */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default JobDemand;