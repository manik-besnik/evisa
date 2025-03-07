import DangerButton from "@/Components/DangerButton.jsx";
import {FaRegEdit, FaTrashAlt} from "react-icons/fa";
import {router, usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {permissionEnums, VisaApplyTableHeading, visaStatuses} from "@/Components/Constant/index.js";
import {getFormattedDate, getValue, isPermitted} from "@/Components/Helper/index.js";
import {FaRegEye} from "react-icons/fa6";
import {useState} from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

const VisaApplicationTable = ({isAdmin = false}) => {

    const visa_applies = usePage().props.visa_applies
    const [visaApply, setVisaApply] = useState(null)
    const [show, setShow] = useState(false);

    const handleEdit = (application) => {
        if (isAdmin) {
            return router.get(route('admin.visa-applies.edit', application.id))
        }
        return router.get(route('agency.visa-applies.edit', application.id))

    }
    const handleDelete = (visaApply) => {
        setVisaApply(visaApply)
        setShow(true)
    }

    const handleConfirmDelete = () => {
        router.delete(route('admin.visa-applies.destroy', visaApply), {
            onSuccess: () => {
                setShow(false)
            }
        })
    }
    const handleView = (application) => {

        if (isAdmin) {
            return router.get(route('admin.visa-applies.show', application.id))
        }

        return router.get(route('agency.visa-applies.show', application.id))
    }


    return (
        <>

            <Table heading={VisaApplyTableHeading}>
                {visa_applies.data.length > 0 && visa_applies.data.map((application, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{application.name}</td>
                        <td>{application?.passport?.passport_no}</td>

                        <td>{getValue(visaStatuses, application.status)}</td>

                        <td>{getFormattedDate(application.created_at)}</td>
                        <td className="flex gap-x-2">

                            {isPermitted(permissionEnums.VIEW_SINGLE_VISA) &&
                                <button type="button" className='btn-primary' onClick={() => handleView(application)}>
                                    <FaRegEye/>
                                </button>
                            }
                            {isPermitted(permissionEnums.EDIT_VISA) &&
                                <button type="button" className='btn-primary' onClick={() => handleEdit(application)}>
                                    <FaRegEdit/>
                                </button>
                            }
                            {isPermitted(permissionEnums.DELETE_VISA) &&
                                <DangerButton onClick={() => handleDelete(application)}>
                                    <FaTrashAlt/>
                                </DangerButton>
                            }

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

    )
}

export default VisaApplicationTable;
