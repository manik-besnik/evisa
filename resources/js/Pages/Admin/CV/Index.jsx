import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";
import {toast} from "react-toastify";

export const JobDemandApplications = () => {
    const [show, setShow] = useState(false)
    const [selectCV, setSelectCV] = useState(null)

    const {cvs} = usePage().props

    const handleDelete = (cv) => {
        setSelectCV(cv)
        setShow(true)
    }

    const handleConfirmDelete = () => {

        return router.delete(route('admin.cv-list.destroy', selectCV.id), {
            onSuccess: () => {
                toast('Cv Deleted Successfully')
                setShow(false)
            }
        })
    }


    return (
        <Authenticated>

            <Head title="CV List | Dubai E-Visa"/>

            <TopSection title='CV List'>

            </TopSection>

            <Table heading={['SL', 'Name', 'Mobile No', 'Location', 'Apply Date', "Action"]}>
                {cvs.data.length > 0 && cvs.data.map((cv, index) => (
                    <tr key={index}>
                        <td>{(cvs.current_page > 1 ? cvs.current_page * cvs.per_page : 0) + index + 1}</td>
                        <td>{cv.name}</td>
                        <td>{cv.phone}</td>
                        <td>{cv.location}</td>
                        <td>{getFormattedDate(cv.created_at)}</td>
                        <td className="flex gap-x-2">
                            <button type="button" onClick={() => handleDelete(cv)} className='btn-primary'>
                                <FaTrashAlt/>
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={cvs.links}/>

            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={handleConfirmDelete}/>

        </Authenticated>
    )
}

export default JobDemandApplications;
