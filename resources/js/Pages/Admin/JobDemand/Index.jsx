import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {FiEdit, FiPlus} from "react-icons/fi";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

export const Index = ({job_demands}) => {

    const [jobPost, setJobPost] = useState(null);
    const [show, setShow] = useState(false);

    const handleDelete = (jobPost) => {
        setJobPost(jobPost)
        setShow(true)
    }

    const handleConfirmDelete = () => {
        router.delete(route('admin.job-demands.destroy', jobPost.id), {
            onSuccess: () => {
                setShow(false)
            }
        })
    }

    return (
        <Authenticated>

            <Head title="Job Demand List | Dubai E-Visa"/>

            <TopSection title='Job Demand List'>
                <Link href={route('admin.job-demands.create')} className='btn-primary'><FiPlus/> Add New Job Demand
                </Link>
            </TopSection>

            <Table heading={['SL', 'Category', 'Company Name', 'Worker Quantity', 'Post Date', 'Action']}>
                {job_demands.data.length > 0 && job_demands.data.map((jobPost, index) => (
                    <tr key={index}>
                        <td>{(job_demands.current_page > 1 ? job_demands.current_page * job_demands.per_page : 0) + index + 1}</td>
                        <td>{jobPost.type_of_work}</td>
                        <td>{jobPost.company.name}</td>
                        <td>{jobPost.worker_quantity}</td>
                        <td>{getFormattedDate(jobPost.created_at)}</td>
                        <td className="flex gap-x-2">
                            <Link href={route('admin.job-demands.edit', jobPost.id)} className='btn-primary'>
                                <FiEdit/>
                            </Link>
                            <DangerButton onClick={() => handleDelete(jobPost)}>
                                <FaTrashAlt/>
                            </DangerButton>
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={job_demands.links}/>
            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={handleConfirmDelete}/>
        </Authenticated>
    )
}

export default Index;
