import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import VisaApplicationTable from "@/Components/VisaApplicationTable.jsx";

const VisaApplyList = () => {
    return <Authenticated>

        <Head title="Visa Application List | Dubai E-Visa"/>

        <div className="flex justify-between items-center mb-3">
            <h3 className=''>Visa Apply List</h3>
            <Link href={route('agency.visa-applies.create')} className='btn-primary'><FiPlus/> Add New Application
            </Link>
        </div>

        <VisaApplicationTable/>

    </Authenticated>
}

export default VisaApplyList;
