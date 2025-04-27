import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, usePage, router} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import {FaRegEye} from "react-icons/fa6";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";

export const JobDemandApplications = () => {

    const {job_applies} = usePage().props

    const [jobApply, setJobApply] = useState(null);
    const [show, setShow] = useState(false);

    const handleDelete = (jobApply) => {
        setJobApply(jobApply);
        setShow(true);
    }

    const confirmDelete = () => {
        setShow(false);

        router.delete(route('admin.job-demand.applications.delete', {id: jobApply.id}))
    }


    return (
        <Authenticated>

            <Head title="Job Apply List | Dubai E-Visa"/>

            <TopSection title='Job Apply List'>

            </TopSection>

            <Table heading={['SL', 'Name', 'Mobile No', 'Categories', 'Location', 'Apply Date', "Action"]}>
                {job_applies.data.length > 0 && job_applies.data.map((jobApply, index) => (
                    <tr key={index}>
                        <td>{(job_applies.current_page > 1 ? job_applies.current_page * job_applies.per_page : 0) + index + 1}</td>
                        <td>{jobApply.name}</td>
                        <td>{jobApply.phone}</td>
                        <td>{jobApply.job_demand?.type_of_work ? jobApply.job_demand?.type_of_work : jobApply.job_posts?.map(item => item.name).join(', ')}</td>
                        <td>{jobApply.location}</td>
                        <td>{getFormattedDate(jobApply.created_at)}</td>
                        <td className="flex gap-x-2">
                            <Link href={route('admin.job-demand.applications.show', jobApply.id)} className='btn-primary'>
                                <FaRegEye/>
                            </Link>
                            <button
                                className="bg-warning px-4 py-1 rounded text-white"
                                type={'button'}
                                onClick={() => handleDelete(jobApply)}>
                                <FaTrashAlt/>
                            </button>
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={job_applies.links}/>

            <DeleteConfirmModal
                show={show}
                setShow={setShow}
                handleConfirmDelete={confirmDelete}
            />

        </Authenticated>
    )
}

export default JobDemandApplications;
