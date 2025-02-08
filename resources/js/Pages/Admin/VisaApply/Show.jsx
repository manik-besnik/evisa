import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Link, usePage, router, Head} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import TopSection from "@/Components/Admin/TopSection.jsx";
import VisaDetails from "@/Components/VisaDetails.jsx";
import InputFile from "@/Components/Admin/InputFile.jsx";

const Show = () => {
    const {visa_apply} = usePage().props;
    const handleUploadDocument = (fileType, file) => {
        router.post(route('admin.visa-applies.add-document', visa_apply.id), {visa_document: file})
    }
    return (
        <Authenticated>
            <Head title="Visa Details" />
            <TopSection title="Visa Details">
                <div className="flex gap-x-2">

                    {visa_apply.visa_document ? "" : <InputFile
                        placeholder="Add Visa"
                        fileType="visa-document"
                        onChange={handleUploadDocument}

                    />}
                    <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Application List
                    </Link>
                </div>
            </TopSection>

            <VisaDetails isAdmin={true}/>
        </Authenticated>
    )
}

export default Show;
