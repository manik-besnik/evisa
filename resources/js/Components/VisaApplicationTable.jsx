import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {router, usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {VisaApplyTableHeading, visaStatuses} from "@/Components/Constant/index.js";
import {getFormattedDate, getValue} from "@/Components/Helper/index.js";
import {FaRegEye} from "react-icons/fa6";
import {useState} from "react";
import { FaRegEdit } from "react-icons/fa";

const VisaApplicationTable = ({isAdmin = false}) => {

    const visa_applies = usePage().props.visa_applies

    const handleEdit = (application) => {
        if (isAdmin){
            return router.get(route('admin.visa-applies.edit', application.id))
        }
        return router.get(route('agency.visa-applies.edit', application.id))

    }
    const handleDelete = (application) => {

    }
    const handleView = (application) => {

        if (isAdmin) {
            return router.get(route('admin.visa-applies.show', application.id))
        }

        return router.get(route('agency.visa-applies.show', application.id))
    }


    return (
        <Table heading={VisaApplyTableHeading}>
            {visa_applies.data.length > 0 && visa_applies.data.map((application, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{application.name}</td>
                    <td>{application?.passport?.passport_no}</td>

                    <td>{getValue(visaStatuses, application.status)}</td>

                    <td>{getFormattedDate(application.created_at)}</td>
                    <td className="flex gap-x-2">

                        <button type="button" className='btn-primary' onClick={() => handleView(application)}>
                            <FaRegEye/>
                        </button>
                        <button type="button" className='btn-primary' onClick={() => handleEdit(application)}>
                            <FaRegEdit/>
                        </button>
                        <DangerButton onClick={() => handleDelete(application)}>
                            <FaTrashAlt/>
                        </DangerButton>

                    </td>
                </tr>
            ))}
        </Table>

    )
}

export default VisaApplicationTable;
