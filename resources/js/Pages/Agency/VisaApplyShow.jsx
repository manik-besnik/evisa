import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaDetails from "@/Components/VisaDetails.jsx";
import {useState} from "react";
import AddDocumentsModal from "@/Components/Admin/AddDocumentsModal.jsx";

const VisaApplyShow = () => {
    const [show, setShow] = useState(false)

    return (
        <Authenticated>
            <Head title="Visa Details"/>
            <TopSection title="Visa Details">
                <div className="flex gap-x-2">
                    <Link href={route('agency.visa-applies.index')} className='btn-primary'>View Application List
                    </Link>
                </div>
            </TopSection>

            <VisaDetails isAdmin={false}/>
            <AddDocumentsModal show={show} setShow={setShow} />
        </Authenticated>
    )
}

export default VisaApplyShow;
