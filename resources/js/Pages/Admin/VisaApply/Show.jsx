import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaDetails from "@/Components/VisaDetails.jsx";

const Show = () => {
    return (
        <Authenticated>
            <TopSection title="Visa Details">
                <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Application List
                </Link>
            </TopSection>

            <VisaDetails />
        </Authenticated>
    )
}

export default Show;
