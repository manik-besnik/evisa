import { assetUrl } from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";

const InqueryContainer = () => {
    return (
        <div className="flex flex-col justify-center order-2 lg:order-1">

            <div className="relative">
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="w-full sm:w-[38%] h-full">
                        <img
                            src={`${assetUrl + 'images/inquery.png'}`}
                            alt="hero"
                            className="w-full mx-auto max-w-xs sm:max-w-none"
                        />
                    </div>
                    <div className="w-full sm:w-[57%] place-content-end">
                        <a
                            href={route('inquery.create')}
                            className="bg-green-600 text-white p-3 sm:p-2 rounded-lg text-2xl sm:text-[30px] font-bold w-full block text-center hover:bg-green-700 transition-colors"
                        >
                            Inquiry
                        </a>
                        <div className="navbar-triangle-2 border-warning hidden sm:block"></div>
                    </div>
                </div>

                <div className="hidden sm:flex sm:absolute w-full justify-center sm:bottom-[-25%] sm:left-0 mt-4 sm:mt-0">
                    <div className="flex justify-center mx-auto w-full">
                        <Search />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default InqueryContainer;