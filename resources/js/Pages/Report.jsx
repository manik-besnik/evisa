import WebLayout from "@/Layouts/WebLayout.jsx";
import SearchForm from "@/Components/Web/SearchForm.jsx";
import SearchResult from "@/Components/Web/SearchResult.jsx";
import { Link, usePage, Head } from "@inertiajs/react";
import { getFormattedDate } from "@/Components/Helper/index.js";
import { FaDownload } from "react-icons/fa6";

const Report = () => {
    const { job_apply_list } = usePage().props;
    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <Head title="Search Result | Dubai E-Visa"/>
            <div className="container">
                <SearchForm/>
                <SearchResult/>

                <div>
                    <h3 className="my-2 text-xl">Job Apply List</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white text-sm mb-4">
                            <thead>
                                <tr className="bg-[#B8860B] text-white">
                                    <th className="px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]">ID</th>
                                    <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Job Title</th>
                                    <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Region</th>
                                    <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Location</th>
                                    <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Apply Date</th>
                                    <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Download</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {job_apply_list && job_apply_list.length > 0 ? (
                                    job_apply_list.map((row, index) => (
                                        <tr
                                            key={row.id}
                                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`}
                                        >
                                            <td className="px-3 py-2 text-sm border-l border-r border-b border-gray-200">{row.id}</td>
                                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">
                                                {row.job_demand?.type_of_work ? row.job_demand?.type_of_work : row.job_posts?.map(item => item.name).join(', ')}
                                            </td>
                                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.region}</td>
                                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row?.location}</td>
                                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{getFormattedDate(row.created_at)}</td>
                                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200 text-center">
                                                <Link href={route('job-apply.download', row.id)}>
                                                    <FaDownload />
                                                </Link>
                                            </td>
                                        </tr>
        ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-3 py-2 text-sm text-center border border-gray-200">
                                            Data Not Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </WebLayout>
    )
}

export default Report
