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
                                    <div className="bg-white w-36 h-36 relative rounded-[6px] border-2 border-[#5A5B5A]">
                                    <img
                                        src={`${assetUrl + 'images/jobdirectory.png'}`}
                                        alt="Job Directory"
                                        className="m-auto mt-2"
                                    />

                                        <div className="bg-red-600 p-2 text-white w-full text-center absolute bottom-0 rounded-bl-[4px] rounded-br-[4px]">
                                            <span className="font-bold text-[18px]">Job Directory</span>
                                    </div>
                                </div>
                                
                            </div>
                          </Link>
                            {/* Job Directory Card 2 */}
                            <Link href={route('job-demand.create')} className="block mb-8">
                            <div className="flex flex-col items-center mb-8">
                                    <div className="bg-white w-36 h-36 relative rounded-[6px] border-2 border-[#5A5B5A]">
                                    <img
                                        src={`${assetUrl + 'images/jodemand.png'}`}
                                        alt="Job Directory"
                                        className="m-auto mt-2"
                                    />
                                        <div className="bg-red-600 p-2 text-white w-full text-center  absolute bottom-0 rounded-bl-[4px] rounded-br-[4px]">
                                            <span className="font-bold text-[18px]">Job Demand</span>
                                        </div>
                                </div>
                                
                            </div>
                        </Link>
                            {/* General Apply Card */}
                            <Link href={route('job-posts.create')} className="block mb-8">
                            <div className="flex flex-col items-center">
                                    <div className="bg-white w-36 h-32 relative rounded-[6px] border-2 border-[#5A5B5A]">
                                    <img
                                        src={`${assetUrl + 'images/generalapply.png'}`}
                                        alt="General Apply"
                                        className="m-auto mt-4"
                                    />
                                        <div className="bg-green-600 p-2 text-white w-full text-center absolute bottom-0 rounded-bl-[4px] rounded-br-[4px]">
                                            <span className="font-bold text-[18px]">General Apply</span>
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

export default Job;