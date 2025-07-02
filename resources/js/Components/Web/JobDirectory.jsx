import {assetUrl} from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";

const JobDirectory = () => {
    return (
        <div className="flex  justify-center hidden md:block">
            <div className="relative h-full">
                <img src={`${assetUrl + 'images/jobdirectry.png'}`} alt="hero"/>
                <div className="absolute w-full flex justify-center bottom-[20%] left-0">
                    <div className="flex justify-center mx-auto">
                        <Search/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JobDirectory;
