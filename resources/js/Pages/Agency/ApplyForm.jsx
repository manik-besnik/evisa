import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import VisaApplyForm from "@/Components/VisaApplyForm.jsx";

const ApplyForm = () => {

    return (
        <Authenticated>
            <Head title="Agency Visa Apply | Dubai E-Visa" />
            <div className="flex justify-between items-center">
                <h3>Apply Form</h3>
                <Link href={route('agency.visa-applies.index')} className="btn-primary">
                    Visa Apply List
                </Link>
            </div>

            <VisaApplyForm submitUrl={route('agency.visa-applies.store')}/>
        </Authenticated>
    )
}

export default ApplyForm;
