import {Head} from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";
import SearchContainer from "@/Components/Web/SearchContainer.jsx";
import AgencyRegister from "@/Components/Agency/AgencyRegister.jsx";


export default function Register() {

    return (
        <WebLayout showBgImage={true}>
            <Head title="Agency Register | Dubai E-Visa"/>
            <div className="container">
                <div className="grid grid-cols-2 gap-x-20">
                    <SearchContainer/>
                    <AgencyRegister/>
                </div>
            </div>
        </WebLayout>
    );
}
