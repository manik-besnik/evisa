import {getFormattedDate} from "@/Components/Helper/index.js";
import {Link} from "@inertiajs/react";

export default function JobCard({job}) {
    return (
        <div className="bg-[#F5E1B9] p-4 rounded-2xl shadow-lg border w-full">

            <div className="flex justify-between items-center text-gray-600 text-sm">
                <span>{getFormattedDate(job.last_apply_date)}</span>
            </div>

            <div className="mt-2">
                <p className="text-gray-700 text-sm">{job.company}</p>
                <h3 className="text-xl font-semibold">{job.title}</h3>
            </div>


            <div className="mt-4 flex justify-between items-center font-medum">
                <p>{job.salary_range}</p>
                <p className="text-text-primary text-sm">{job.location}</p>
            </div>

            <Link className="block w-full mt-3 bg-black text-center px-2 text-white py-2 rounded-lg"
                  href={route('job-demand.show', job.id)}>
                Details
            </Link>
        </div>
    );
}
