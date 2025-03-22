import {assetUrl} from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";

const InqueryContainer = () => {
    return (
        <div className="flex flex-col justify-center">
            
            <div className="relative">
                <div className="flex">
                    <div className="w-[38%] h-full">
                        <img src={`${assetUrl + 'images/inquery.png'}`} alt="hero" />
                    </div>
                    <div className="w-[57%] h-full">
                        <a href={route('inquery.create')}>
                        <div className="bg-green-600 relative text-white p-2 rounded-lg text-2xl font-bold mt-[50%] mr-5">
                            Inquiry
                        </div>
                        </a>
                        <div className="navbar-triangle-2 border-warning"></div>
                    </div>
                </div>

                <div className="absolute w-full flex justify-center bottom-[-25%] left-0">
                    <div className="flex justify-center mx-auto">
                        <Search/>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default InqueryContainer;
