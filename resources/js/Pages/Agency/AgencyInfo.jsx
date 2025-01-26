import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import AgencyRegisterInfo from "@/Components/Agency/AgencyRegisterInfo.jsx";

const AgencyInfo = () => {

    return (
        <WebLayout showBgImage={true}>
            <Head title="Agency Register | Dubai E-Visa"/>
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer/>
                    <AgencyRegisterInfo/>
                </div>
            </div>
        </WebLayout>
    );
}

export default AgencyInfo
