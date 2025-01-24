import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import {FiEdit, FiPlus} from "react-icons/fi";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";

const Index = ({visa_applies}) => {

    const handleEdit = (application) => {

    }
    const handleDelete = (application) => {

    }
    const handleView = (application) => {

    }

    return <Authenticated>

        <Head title="Admins | Admin Dashboard"/>

        <div className="flex justify-between items-center mb-3">
            <h3 className=''>Visa Apply List</h3>
            <button className='btn-primary'><FiPlus/> Add New Application
            </button>
        </div>

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
                            <button className='btn-primary' onClick={() => handleEdit(admin)}>
                                <FiEdit/>
                            </button>
                            <DangerButton onClick={() => handleDelete(admin)}>
                                <FaTrashAlt/>
                            </DangerButton>

                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

    </Authenticated>

}

export default Index;
