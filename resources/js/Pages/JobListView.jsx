import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head, usePage} from "@inertiajs/react";
import JobListSlider from "@/Components/Web/JobListSlider.jsx";

const JobListView = () => {

    const {on_demand_jobs, new_job_demands, location_job_demands} = usePage().props

    if (on_demand_jobs.length === 0 && new_job_demands.length === 0) {
        return <WebLayout showBgImage={true} showServiceImage={false}>
            <div>Loading...</div>
        </WebLayout>;
    }


    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job View | Dubai E-Visa"/>
            <div className="container mx-auto px-4 py-8">

                <div className="mb-12">
                    <div className="relative mb-6">
                        <div className="bg-red-600 text-white font-bold py-2 px-8 inline-block rounded-r-full">
                            Ready Job
                        </div>
                    </div>
                    <JobListSlider jobs={on_demand_jobs} infinite={false}/>
                </div>

                {new_job_demands.length > 0 &&  <div className="mb-12">
                    <div className="relative mb-6">
                        <div className="bg-red-600 text-white font-bold py-2 px-8 inline-block rounded-r-full">
                            New Job
                        </div>
                    </div>
                    <JobListSlider jobs={new_job_demands}/>
                </div>}

                {location_job_demands.length > 0 && location_job_demands.map((item) => {
                    return (
                        item.jobs.length > 0 && (
                            <div key={item.id} className="mb-12">
                                <div className="relative mb-6">
                                    <div
                                        className="bg-red-600 text-white font-bold py-2 px-8 inline-block rounded-r-full">
                                        {item.name}
                                    </div>
                                </div>
                                <JobListSlider jobs={item.jobs}/>
                            </div>
                        )
                    )
                })}


            </div>
        </WebLayout>
    );
}

export default JobListView;
