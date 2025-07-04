import {MdOutlineRemoveRedEye} from "react-icons/md";
import { IoCloudDownload } from "react-icons/io5";
import {getValue} from "@/Components/Helper/index.js";
import {visaStatuses, visaTypes} from "@/Components/Constant/index.js";
import {Link, usePage} from "@inertiajs/react";

const SearchResult = () => {

    const visa_applies = usePage().props.visa_applies

    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm mb-4">
                    <thead>
                    <tr className="bg-[#B8860B] text-white">
                        <th className="px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]">App ID</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Name</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Passport No</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Nationality</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Visa Type</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Status</th>
                        <th className="px-3 py-2 text-center border-r border-t border-[#D4AF37]">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {visa_applies.length > 0 ? visa_applies.map((row, index) => (
                        <tr
                            key={row.id}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`}
                        >
                            <td className="px-3 py-2 text-sm border-l border-r border-b border-gray-200">{row.app_id}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.name}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.passport.passport_no}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.personal_info.current_nationality.nationality}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{getValue(visaTypes, row.visa_type)}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{getValue(visaStatuses, row.status)}</td>
                            <td className="px-3 py-2 text-center border-r border-b border-gray-200">
                                <div className="flex items-center justify-center space-x-2">
                                    <Link href={route('visa-apply.show', row.id)}
                                          className="text-gray-600 hover:text-gray-800">
                                        <MdOutlineRemoveRedEye size={18}/>
                                    </Link>
                                    <a href={route('visa-apply.download',row.id)}
                                          className="text-gray-600 hover:text-gray-800">
                                        <IoCloudDownload/>
                                    </a>

                                </div>
                            </td>
                        </tr>
                    )) : "Data Not Found"}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default SearchResult;
