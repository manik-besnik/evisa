import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Link, router} from "@inertiajs/react";
import {FiEdit, FiPlus} from "react-icons/fi";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";

export const Index = ({job_posts}) => {

    const [jobPost, setJobPost] = useState(null);
    const [show, setShow] = useState(false);

    const handleDelete = (jobPost) => {
        setJobPost(jobPost)
        setShow(true)
    }

    const handleConfirmDelete = () => {
        router.delete(route('admin.job-posts.destroy', jobPost.id))
    }
    
    return (
        <Authenticated>
            <div className="flex justify-between items-center mb-3">
                <h3 className=''>Job Post List</h3>
                <Link href={route('admin.job-posts.create')} className='btn-primary'><FiPlus/> Add New Job
                </Link>
            </div>
            <Table heading={['SL', 'Title', 'Post Date', 'Company', 'Action']}>
                {job_posts.data.length > 0 && job_posts.data.map((jobPost, index) => (
                    <tr key={index}>
                        <td>{(job_posts.current_page > 1 ? job_posts.current_page * job_posts.per_page : 0) + index + 1}</td>
                        <td>{jobPost.title}</td>
                        <td>{getFormattedDate(jobPost.created_at)}</td>
                        <td>{jobPost.company}</td>
                        <td className="flex gap-x-2">
                            <Link href={route('admin.job-posts.edit', jobPost.id)} className='btn-primary'>
                                <FiEdit/>
                            </Link>
                            <DangerButton onClick={() => handleDelete(jobPost)}>
                                <FaTrashAlt/>
                            </DangerButton>
                        </td>
                    </tr>
                ))}
            </Table>

            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={handleConfirmDelete}/>
        </Authenticated>
    )
}

export default Index;
