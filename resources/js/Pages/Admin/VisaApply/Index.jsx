import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import VisaApplicationTable from "@/Components/VisaApplicationTable.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

const Index = () => {

    return <Authenticated>

        <Head title="Visa Application List | E-Visa Dubai"/>
        <TopSection title="Visa Apply List">
            {isPermitted(permissionEnums.CREATE_VISA) &&
                <Link href={route('admin.visa-applies.create')} className='btn-primary'><FiPlus/> Add New Application
                </Link>}
        </TopSection>

        <VisaApplicationTable isAdmin={true}/>

    </Authenticated>

}

export default Index;
