import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link
} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaDetails from "@/Components/VisaDetails.jsx";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";
import {useState} from "react";
import AddDocumentsModal from "@/Components/Admin/AddDocumentsModal.jsx";

const Show = () => {
    const [show, setShow] = useState(false)

    return (
        <Authenticated>
            <Head title="Visa Details"/>
            <TopSection title="Visa Details">
                <div className="flex gap-x-2">

                    {isPermitted(permissionEnums.ADD_DOCUMENT_TO_VISA) && (
                        <button onClick={()=>setShow(true)} type="button" className='btn-primary'>
                            Add Documents
                        </button>
                    )}

                    <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Application List
                    </Link>
                </div>
            </TopSection>

            <VisaDetails isAdmin={true}/>
            <AddDocumentsModal show={show} setShow={setShow} />
        </Authenticated>
    )
}

export default Show;
