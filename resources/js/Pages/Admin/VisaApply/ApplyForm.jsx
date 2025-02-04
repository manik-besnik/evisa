import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import VisaApplyForm from "@/Components/VisaApplyForm.jsx";

const ApplyForm = () => {

    return (
        <Authenticated>
            <Head title="Admin Visa Apply | Dubai E-Visa" />
            <div className="flex justify-between items-center">
                <h3>Apply Form</h3>
                <Link href={route('admin.visa-applies.index')} className="btn-primary">
                    Visa Apply List
                </Link>
            </div>
            <VisaApplyForm submitUrl={route('admin.visa-applies.store')}/>
        </Authenticated>
    )
}

export default ApplyForm;
