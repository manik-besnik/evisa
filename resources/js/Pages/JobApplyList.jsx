import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head, usePage} from "@inertiajs/react";
import {getFormattedDate} from "@/Components/Helper/index.js";

const JobApplyList = () => {

    const {job_apply_list} = usePage().props

    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Job Apply List | Dubai E-Visa"/>
            <div className="container">
                <h3 className="my-2 text-xl">Job Apply List</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-sm mb-4">
                        <thead>
                        <tr className="bg-[#B8860B] text-white">
                            <th className="px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]">ID</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Job Title</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Company</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Location</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Apply Date</th>

                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {job_apply_list.length > 0 ? job_apply_list.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`}
                            >
                                <td className="px-3 py-2 text-sm border-l border-r border-b border-gray-200">{row.id}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.job_post?.title}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.job_post?.company}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.job_post?.location}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{getFormattedDate(row.created_at)}</td>
                            </tr>
                        )) : <p>Data Not Found</p>}
                        </tbody>
                    </table>
                </div>
            </div>
        </WebLayout>
    )
}

export default JobApplyList
