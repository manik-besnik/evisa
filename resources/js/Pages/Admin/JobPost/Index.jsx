import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Link} from "@inertiajs/react";
import {FiPlus} from "react-icons/fi";
import Table from "@/Components/Table.jsx";

export const Index = ({job_posts}) => {
    return (
        <Authenticated>
            <div className="flex justify-between items-center mb-3">
                <h3 className=''>Job Post List</h3>
                <Link href={route('admin.job-posts.create')} className='btn-primary'><FiPlus/> Add New Job
                </Link>
            </div>
            <Table heading={['SL', 'Title', 'Post Date', 'Status', 'Action']}>
                {job_posts.data.length > 0 && job_posts.data.map((jobPost,index) =>(
                    <tr key={index}>
                        <td>{jobPost.title}</td>
                        <td>{jobPost.created_at}</td>
                        <td>{jobPost.status}</td>
                        <td>

                        </td>
                    </tr>
                ))}
            </Table>
        </Authenticated>
    )
}

export default Index;
