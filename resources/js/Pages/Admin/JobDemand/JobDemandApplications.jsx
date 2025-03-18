import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import {FaRegEye} from "react-icons/fa6";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

export const JobDemandApplications = () => {

    const {job_applies} = usePage().props


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
                            <Link href={route('admin.job-demands.edit', jobApply.id)} className='btn-primary'>
                                <FaRegEye/>
                            </Link>
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={job_applies.links}/>
        </Authenticated>
    )
}

export default JobDemandApplications;
