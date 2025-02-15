import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import VisaUpdateForm from "@/Components/VisaUpdateForm.jsx";

const VisaEdit = () => {

    return (
        <Authenticated>
            <Head title="Agency Visa Apply | Dubai E-Visa"/>
            <div className="flex justify-between items-center">
                <h3>Visa Edit Form</h3>
                <Link href={route('agency.visa-applies.index')} className="btn-primary">
                    Visa Apply List
                </Link>
            </div>

            <VisaUpdateForm isAdmin={false}/>
        </Authenticated>
    )
}

export default VisaEdit;
