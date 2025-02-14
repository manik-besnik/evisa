import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import VisaApplyForm from "@/Components/VisaApplyForm.jsx";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

const ApplyForm = () => {

    return (
        <Authenticated>
            <Head title="Admin Visa Apply | Dubai E-Visa"/>
            <div className="flex justify-between items-center">
                <h3>Apply Form</h3>
                {isPermitted(permissionEnums.ADD_DOCUMENT_TO_VISA) &&
                    <Link href={route('admin.visa-applies.index')} className="btn-primary">
                        Visa Apply List
                    </Link>
                }
            </div>
            <VisaApplyForm submitUrl={route('admin.visa-applies.store')}/>
        </Authenticated>
    )
}

export default ApplyForm;
