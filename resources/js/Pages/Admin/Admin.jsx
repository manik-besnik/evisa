import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router} from "@inertiajs/react";
import CreateAdminModal from "@/Components/Admin/Admin/CreateAdminModal.jsx";
import EditAdminModal from "@/Components/Admin/Admin/EditAdminModal.jsx";
import {useState} from "react";
import {FiEdit, FiPlus} from "react-icons/fi";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import {toast} from "react-toastify";
import {FaTrashAlt} from "react-icons/fa";
import DangerButton from "@/Components/DangerButton.jsx";

const Admin = ({admins}) => {

    const [show, setShow] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [editShow, setEditShow] = useState(false);

    const handleEdit = (admin) => {
        setAdmin(admin)
        setEditShow(true)
    }
    const handleDelete = (admin) => {
        setAdmin(admin)
        setShowDelete(true)
    }

    const confirmDelete = () => {
        router.delete(route('admin.admins.delete', admin?.id), {
            onSuccess: () => {
                setShowDelete(false)
                toast.success('Admin Delete Successfully')
            },
            onError: () => {
                setShowDelete(false)
                toast.error('Admin Delete Failed')
            }
        })

        setShow(false)
    }

    return <Authenticated>

        <Head title="Admins | Admin Dashboard"/>

        <div className="flex justify-between items-center mb-3">
            <h3 className=''>Admins</h3>
            <button className='btn-primary' onClick={() => setShow(true)}><FiPlus/> Add Admin
            </button>
        </div>

        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {admins.length > 0 && admins.map((admin, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{admin.name}</td>
                        <td>{admin.admin_role?.name}</td>
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
        <CreateAdminModal show={show} setShow={setShow}/>
        <EditAdminModal admin={admin} show={editShow} setShow={setEditShow}/>
        <DeleteConfirmModal show={showDelete} setShow={setShowDelete} handleConfirmDelete={confirmDelete}/>
    </Authenticated>

}

export default Admin;
