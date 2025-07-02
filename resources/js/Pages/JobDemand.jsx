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
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-20">
                    <SearchContainer />

                    <div className="w-full lg:w-1/2 h-auto lg:h-[80vh]">
                        <div className="bg-[#6b7377c8] h-full relative p-5">
                            {/* Job Directory Card 1 */}
                            <Link href={route('single-job-demand.create')} className="block mb-8">
                                <div className="flex flex-col items-center mb-8">
                                    <div className="bg-white w-36 h-40 relative rounded-[6px] border-2 border-[#5A5B5A]">
                                        <img
                                            src={`${assetUrl + 'images/signaldemand.png'}`}
                                            alt="Job Directory"
                                            className="m-auto my-2"
                                        />
                                        <div className="bg-red-600 mt-1 p-2 text-white w-full text-center absolute bottom-0 rounded-bl-[4px] rounded-br-[4px]">
                                            <span className="font-bold text-[16px]">Single Demand</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href={route('more-job-demand.create')} className="block mb-8">
                                <div className="flex flex-col items-center mb-8">
                                    <div className="bg-white w-36 h-40 relative rounded-[6px] border-2 border-[#5A5B5A]">
                                        <img
                                            src={`${assetUrl + 'images/moredemand.png'}`}
                                            alt="Job Directory"
                                            className="m-auto my-2"
                                        />
                                        <div className="bg-red-600 mt-1 p-2 text-white w-full text-center absolute bottom-0 rounded-bl-[4px] rounded-br-[4px]">
                                            <span className="font-bold text-[16px]">More Demand</span>
                                        </div>
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

export default JobDemand;