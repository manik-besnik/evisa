import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import { Head, Link } from "@inertiajs/react";
import { FiPlus } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import VisaApplicationTable from "@/Components/VisaApplicationTable.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";
import { isPermitted } from "@/Components/Helper/index.js";
import { permissionEnums } from "@/Components/Constant/index.js";
import { useState } from "react";

const Index = () => {
    const [selectedApplications, setSelectedApplications] = useState([]);

    const handleDownloadPdf = () => {
        if (selectedApplications.length === 0) {
            alert("Please select at least one application to download");
            return;
        }

        const applicationIds = selectedApplications.map(app => app.id);
       
        window.location.href = route('admin.visa-applies.download-pdf', {
            ids: applicationIds
        });

    };

    return <Authenticated>
        <Head title="Visa Application List | E-Visa Dubai" />
        <TopSection title="Visa Apply List">
            <div className="flex gap-2">
                {isPermitted(permissionEnums.CREATE_VISA) &&
                    <Link href={route('admin.visa-applies.create')} className='btn-primary'>
                        <FiPlus /> Add New Application
                    </Link>
                }
                {/* <button
                    onClick={handleDownloadPdf}
                    className='btn-primary'
                    disabled={selectedApplications.length === 0}
                >
                    <FiDownload /> Download Excel
                </button> */}
            </div>
        </TopSection>

        <VisaApplicationTable
            isAdmin={true}
            selectedApplications={selectedApplications}
            setSelectedApplications={setSelectedApplications}
        />
    </Authenticated>
}

export default Index;