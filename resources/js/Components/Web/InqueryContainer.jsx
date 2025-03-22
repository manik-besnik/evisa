import {assetUrl} from "@/Components/Constant/index.js";
import Search from "@/Components/Web/Search.jsx";

const SearchContainer = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="relative">
                <img src={`${assetUrl + 'images/hero1.png'}`} alt="hero"/>
                <div className="absolute w-full flex justify-center bottom-0 left-0">
                    <div className="flex justify-center mx-auto">
                        <Search/>
                    </div>
                </div>
                {/* <div className="ml-20 w-56 absolute left-1 top-1/2">
                    <img className="w-[240px]"
                        src={`${assetUrl + 'images/hero-welcome.png'}`}
                        alt="welcome to dubai e-visa" />
                </div> */}
            </div>

        </div>
    )
}

export default SearchContainer;
