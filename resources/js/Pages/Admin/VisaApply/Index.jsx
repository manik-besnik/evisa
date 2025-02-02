import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import VisaApplicationTable from "@/Components/VisaApplicationTable.jsx";

const Index = () => {

    return <Authenticated>

        <Head title="Visa Application List | E-Visa Dubai"/>

        <div className="flex justify-between items-center mb-3">
            <h3 className=''>Visa Apply List</h3>
            <Link href={route('admin.visa-applies.create')} className='btn-primary'><FiPlus/> Add New Application
            </Link>
        </div>

        <VisaApplicationTable/>

    </Authenticated>

}

export default Index;
