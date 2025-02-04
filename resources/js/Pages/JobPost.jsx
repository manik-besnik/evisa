import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import JobCard from "@/Components/Web/JobCard.jsx";

const JobPost = ({job_posts}) => {

    console.log(job_posts)
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Job Demand | Dubai E-Visa"/>
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {job_posts.data.length > 0 && job_posts.data.map((job, i) => (
                        <JobCard key={i} job={job}/>
                    ))}
                </div>
                {job_posts.data.length === 0 &&
                    <div className="w-full flex min-h-[72vh] justify-center items-center text-center">No Available Jobs Found</div>}

            </div>
        </WebLayout>
    )
}

export default JobPost;
