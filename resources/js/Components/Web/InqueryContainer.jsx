import {assetUrl} from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";

const InqueryContainer = () => {
    return (
        <div className="flex flex-col justify-center">
            
            <div className="relative">
                <div className="flex gap-2">
                    <div className="w-[38%] h-full">
                        <img src={`${assetUrl + 'images/inquery.png'}`} alt="hero" className="w-full "/>
                    </div>
                    <div className="w-[57%] place-content-end">
                        <a href={route('inquery.create')} className="bg-green-600 text-white p-2 rounded-lg text-[30px] font-bold w-full block">
                            Inquiry
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
