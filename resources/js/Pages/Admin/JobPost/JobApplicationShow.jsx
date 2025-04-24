import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, usePage} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import ShowJobApply from "@/Components/Admin/ShowJobApply.jsx";


const JobApplicationShow = () => {

    const {job_apply, experiences} = usePage().props;

    return (
        <Authenticated>
            <Head title="Job Apply Details"/>
            <TopSection title="Job Apply Details">
                <div className="flex gap-x-2">

                    <Link href={route('admin.job-demand.applications')} className='btn-primary'>View Job Apply List
                    </Link>
                </div>
            </TopSection>

            <div className="min-h-screen">
                <ShowJobApply data={job_apply} experiences={experiences} />

            </div>
        </Authenticated>
    )
}

export default JobApplicationShow;
