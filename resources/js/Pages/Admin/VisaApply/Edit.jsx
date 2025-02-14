import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaUpdateForm from "@/Components/VisaUpdateForm.jsx";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

const Edit = () => {

    return (
        <Authenticated>
            <Head title="Visa Edit | Dubai E-Visa"/>
            <TopSection title="Visa Application Edit">
                <div className="flex gap-x-2">
                    {isPermitted(permissionEnums.VIEW_VISA) &&
                        <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Application List
                        </Link>}
                </div>
            </TopSection>

            <VisaUpdateForm isAdmin={true}/>
        </Authenticated>
    )
}

export default Edit;
