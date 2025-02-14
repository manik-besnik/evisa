import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {FiEdit, FiPlus} from "react-icons/fi";
import Table from "@/Components/Table.jsx";
import {getFormattedDate, isPermitted} from "@/Components/Helper/index.js";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";
import {permissionEnums} from "@/Components/Constant/index.js";

export const Index = ({job_posts}) => {

    const [jobPost, setJobPost] = useState(null);
    const [show, setShow] = useState(false);

    const handleDelete = (jobPost) => {
        setJobPost(jobPost)
        setShow(true)
    }

    const handleConfirmDelete = () => {
        router.delete(route('admin.job-posts.destroy', jobPost.id), {
            onSuccess: () => {
                setShow(false)
            }
        })
    }

    return (
        <Authenticated>

            <Head title="Add New Job | Dubai E-Visa"/>

            <TopSection title='Job Post List'>
                {isPermitted(permissionEnums.CREATE_JOB_POST) &&
                    <Link href={route('admin.job-posts.create')} className='btn-primary'><FiPlus/> Add New Job
                    </Link>}
            </TopSection>

            <Table heading={['SL', 'Title', 'Post Date', 'Company', 'Action']}>
                {job_posts.data.length > 0 && job_posts.data.map((jobPost, index) => (
                    <tr key={index}>
                        <td>{(job_posts.current_page > 1 ? job_posts.current_page * job_posts.per_page : 0) + index + 1}</td>
                        <td>{jobPost.title}</td>
                        <td>{getFormattedDate(jobPost.created_at)}</td>
                        <td>{jobPost.company}</td>
                        <td className="flex gap-x-2">
                            {isPermitted(permissionEnums.EDIT_JOB_POST) &&
                                <Link href={route('admin.job-posts.edit', jobPost.id)} className='btn-primary'>
                                    <FiEdit/>
                                </Link>}
                            {isPermitted(permissionEnums.DELETE_JOB_POST) &&
                                <DangerButton onClick={() => handleDelete(jobPost)}>
                                    <FaTrashAlt/>
                                </DangerButton>}
                        </td>
                    </tr>
                ))}
            </Table>

            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={handleConfirmDelete}/>
        </Authenticated>
    )
}

export default Index;
