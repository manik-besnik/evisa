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

export const JobDemandApplications = ({job_applies}) => {

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

            <Head title="Job Demand List | Dubai E-Visa" />

            <TopSection title='Job Demand List'>
                
            </TopSection>

            <Table heading={['SL', 'Name', 'Mobile No', 'Apply Date']}>
                {job_applies.data.length > 0 && job_applies.data.map((item, index) => (
                    <tr key={index}>
                        <td>{(job_applies.current_page > 1 ? job_applies.current_page * job_applies.per_page : 0) + index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{getFormattedDate(item.created_at)}</td>
                        {/*<td className="flex gap-x-2">*/}
                        {/*    <Link href={route('admin.job-posts.edit', jobPost.id)} className='btn-primary'>*/}
                        {/*        <FiEdit/>*/}
                        {/*    </Link>*/}
                        {/*    <DangerButton onClick={() => handleDelete(jobPost)}>*/}
                        {/*        <FaTrashAlt/>*/}
                        {/*    </DangerButton>*/}
                        {/*</td>*/}
                    </tr>
                ))}
            </Table>

            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={handleConfirmDelete}/>
        </Authenticated>
    )
}

export default JobDemandApplications;
