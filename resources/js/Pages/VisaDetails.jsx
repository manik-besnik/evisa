import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import VisaDetails from "@/Components/VisaDetails.jsx";

const Report = () => {
    return (
        <WebLayout showServiceImage={false} showBgImage={true}>
            <Head title="Search Result | Dubai E-Visa"/>
            <div className="pt-3">

                <div className="container">
                    <h3 className="text-text-primary text-lg font-semibold">Visa Details</h3>

                    <VisaDetails/>
                </div>
            </div>
        </WebLayout>
    )
}

export default Report
