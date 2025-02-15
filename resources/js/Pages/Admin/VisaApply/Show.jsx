import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, router, usePage} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaDetails from "@/Components/VisaDetails.jsx";
import InputFile from "@/Components/Admin/InputFile.jsx";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

const Show = () => {
    const {visa_apply} = usePage().props;
    const handleUploadDocument = (fileType, file) => {
        router.post(route('admin.visa-applies.add-document', visa_apply.id), {visa_document: file})
    }
    return (
        <Authenticated>
            <Head title="Visa Details"/>
            <TopSection title="Visa Details">
                <div className="flex gap-x-2">

                    {!visa_apply.visa_document && isPermitted(permissionEnums.ADD_DOCUMENT_TO_VISA) && (
                        <InputFile
                            placeholder="Add Visa Document"
                            fileType="visa-document"
                            onChange={handleUploadDocument}
                        />
                    )}

                    <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Application List
                    </Link>
                </div>
            </TopSection>

            <VisaDetails isAdmin={true}/>
        </Authenticated>
    )
}

export default Show;
