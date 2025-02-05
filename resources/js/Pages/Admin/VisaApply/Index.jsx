import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import VisaApplicationTable from "@/Components/VisaApplicationTable.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";

const Index = () => {

    return <Authenticated>

        <Head title="Visa Application List | E-Visa Dubai"/>
        <TopSection title="Visa Apply List">
            <Link href={route('admin.visa-applies.create')} className='btn-primary'><FiPlus/> Add New Application
            </Link>
        </TopSection>

        <VisaApplicationTable isAdmin={true}/>

    </Authenticated>

}

export default Index;
