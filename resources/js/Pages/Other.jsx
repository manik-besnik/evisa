import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import UserRegister from "@/Components/Web/UserRegister.jsx";
import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";

const Other = () => {

    return (
        <WebLayout showBgImage={true}>
            <Head title="Other | Dubai E-Visa"/>
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer/>
                    <div className="w-1/2 h-[72vh]">
                        <div className="bg-gray-700 h-full relative">
                            <img className="w-full h-auto" src={`${assetUrl + 'images/agent_dashboard.png'}`} alt=""/>
                            <div className="absolute top-[60%] w-full p-5 flex flex-col gap-y-2">
                                <PrimaryBtn btnClasses="uppercase" text="Referral Partner" />
                                <PrimaryBtn btnClasses="uppercase" text="Channel Partner" />
                                <PrimaryBtn btnClasses="uppercase" text="Official Partner" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Other
