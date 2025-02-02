import {FiEdit} from "react-icons/fi";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {VisaApplyTableHeading} from "@/Components/Constant/index.js";

const VisaApplicationTable = () => {

    const visa_applies = usePage().props.visa_applies

    const handleEdit = (application) => {

    }
    const handleDelete = (application) => {

    }
    const handleView = (application) => {

    }



    return (
        <Table heading={VisaApplyTableHeading}>
            {visa_applies.data.length > 0 && visa_applies.map((application, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{application.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="flex gap-x-2">
                        <button className='btn-primary' onClick={() => handleEdit(application)}>
                            <FiEdit/>
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
