import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import CreateRoleModal from "@/Components/Admin/Role/CreateRoleModal.jsx";
import {useState} from "react";
import {FiEdit} from "react-icons/fi";
import EditRoleModal from "@/Components/Admin/Role/EditRoleModal.jsx";
import {Head} from "@inertiajs/react";

const Role = ({roles}) => {

    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [role, setRole] = useState({});

    const handleEdit = (role) => {
        setRole(role)
        setEditShow(true)
    }

    return <Authenticated>
        <Head title="Role | Admin Dashboard" />

        <div className="flex justify-between items-center mb-3">
            <h3 className=''>Roles</h3>
            <button className='btn-primary' onClick={() => setShow(true)}>Add New Role</button>
        </div>

        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    {/*<th>Permissions</th>*/}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {roles.length > 0 && roles.map((role, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{role.name}</td>
                        {/*<td></td>*/}
                        <td>
                            <button className='btn-primary' onClick={() => handleEdit(role)}>
                                <FiEdit/>
                            </button>

                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
        <CreateRoleModal show={show} setShow={setShow}/>
        <EditRoleModal role={role} show={editShow} setShow={setEditShow}/>
    </Authenticated>

}

export default Role;
