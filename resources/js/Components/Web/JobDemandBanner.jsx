import {FaCameraRetro} from "react-icons/fa";

const JobDemandBanner = () => {
    return (<>
        <div className="w-full bg-gray-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="flex">
                    <div className="h-6 w-3 bg-yellow-500 mr-0.5"></div>
                    <div className="h-6 w-3 bg-yellow-500 mr-0.5"></div>
                    <div className="h-6 w-3 bg-yellow-500"></div>
                </div>
            </div>
        </div>

        {/* Camera Icon Space */}
        <div className="relative h-full bg-gray-500">
            <div className="absolute bottom-4 right-4 text-white">
                <FaCameraRetro size={30} className="text-white"/>
            </div>
        </div>
    </>)
}

export default JobDemandBanner
