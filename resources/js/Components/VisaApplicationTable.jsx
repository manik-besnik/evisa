import {FiEdit} from "react-icons/fi";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {usePage} from "@inertiajs/react";

const VisaApplicationTable = () => {

    const visa_applies = usePage().props.visa_applies

    const handleEdit = (application) => {

    }
    const handleDelete = (application) => {

    }
    const handleView = (application) => {

    }

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Passport No</th>
                    <th>Status</th>
                    <th>Apply Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
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

                </tbody>
            </table>
        </div>
    )
}

export default VisaApplicationTable;
