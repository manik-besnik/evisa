import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head} from "@inertiajs/react";
import JobCard from "@/Components/Web/JobCard.jsx";

const JobPost = () => {
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Job Demand | Dubai E-Visa"/>
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </WebLayout>
    )
}

export default JobPost;
