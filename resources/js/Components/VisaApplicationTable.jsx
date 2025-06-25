import DangerButton from "@/Components/DangerButton.jsx";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { router, usePage } from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import { permissionEnums, VisaApplyTableHeading, visaStatuses } from "@/Components/Constant/index.js";
import { getFormattedDate, getValue, isPermitted } from "@/Components/Helper/index.js";
import { FaRegEye } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

const VisaApplicationTable = ({
    isAdmin = false,
    selectedApplications = [],
    setSelectedApplications = () => { }
}) => {
    const {visa_applies, auth} = usePage().props;
    const [visaApply, setVisaApply] = useState(null);
    const [show, setShow] = useState(false);
    const [selectAll, setSelectAll] = useState(false);

    // Update headings to include checkbox
    const tableHeadings = ["Select", ...VisaApplyTableHeading];

    // Handle single application selection
    const handleSelectApplication = (application, isChecked) => {
        if (isChecked) {
            setSelectedApplications([...selectedApplications, application]);
        } else {
            setSelectedApplications(selectedApplications.filter(app => app.id !== application.id));
        }
    };

    // Handle select all applications
    const handleSelectAll = (isChecked) => {
        setSelectAll(isChecked);
        if (isChecked) {
            setSelectedApplications([...visa_applies.data]);
        } else {
            setSelectedApplications([]);
        }
    };

    // Check if an application is selected
    const isApplicationSelected = (application) => {
        return selectedApplications.some(app => app.id === application.id);
    };

    // Reset selection when data changes
    useEffect(() => {
        setSelectedApplications([]);
        setSelectAll(false);
    }, [visa_applies.data]);

    const handleEdit = (application) => {
        if (isAdmin) {
            return router.get(route('admin.visa-applies.edit', application.id));
        }
        return router.get(route('agency.visa-applies.edit', application.id));
    };

    const handleDelete = (visaApply) => {
        setVisaApply(visaApply);
        setShow(true);
    };

    const handleConfirmDelete = () => {
        router.delete(route('admin.visa-applies.destroy', visaApply), {
            onSuccess: () => {
                setShow(false);
            }
        });
    };

    const handleView = (application) => {
        if (isAdmin) {
            return router.get(route('admin.visa-applies.show', application.id));
        }
        return router.get(route('agency.visa-applies.show', application.id));
    };

    const handleDownloadSinglePdf = (application) => {
        window.location.href = route('admin.visa-applies.show', {
            visa_apply: application.id,
            action: 'download'
        });
    };

    return (
        <>
            <Table heading={tableHeadings}>

                {visa_applies.data.length > 0 && visa_applies.data.map((application, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                checked={isApplicationSelected(application)}
                                onChange={(e) => handleSelectApplication(application, e.target.checked)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                        </td>
                        <td>{index + 1}</td>
                        <td>{application.name}</td>
                        <td>{application?.passport?.passport_no}</td>
                        <td>{getValue(visaStatuses, application.status)}</td>
                        <td>{getFormattedDate(application.created_at)}</td>
                        <td className="flex gap-x-2">
                            {(isPermitted(permissionEnums.VIEW_SINGLE_VISA) || Number(auth.user.role) === 2) &&
                                <button type="button" className='btn-primary' onClick={() => handleView(application)}>
                                    <FaRegEye />
                                </button>
                            }
                            {isPermitted(permissionEnums.EDIT_VISA) &&
                                <button type="button" className='btn-primary' onClick={() => handleEdit(application)}>
                                    <FaRegEdit />
                                </button>
                            }
                            {isPermitted(permissionEnums.DELETE_VISA) &&
                                <DangerButton onClick={() => handleDelete(application)}>
                                    <FaTrashAlt />
                                </DangerButton>
                            }
                            {isAdmin && <button type="button"
                                    className='btn-primary'
                                    onClick={() => handleDownloadSinglePdf(application)} target="_blank">
                                <FiDownload />
                            </button> }
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={visa_applies.links} />

            <DeleteConfirmModal
                show={show}
                setShow={setShow}
                handleConfirmDelete={handleConfirmDelete}
                title="Delete Visa Application"
            />
        </>
    );
};

export default VisaApplicationTable;
