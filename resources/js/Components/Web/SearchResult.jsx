
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaDownload as FaDownloadSecond } from "react-icons/fa6";



const visaData = [
    {
        appId: "AGNT74574324022123161",
        name: "MD SHOHIDUL ISLAM",
        passportNo: "A00364091",
        nationality: "BANGLADESH",
        visaType: "SHORT_TERM",
        status: "READY TO PAID",
    },
    // Duplicate the same data for multiple rows
    {
        appId: "AGNT74574324022123162",
        name: "MD SHOHIDUL ISLAM",
        passportNo: "A00364091",
        nationality: "BANGLADESH",
        visaType: "SHORT_TERM",
        status: "READY TO PAID",
    },
]
const SearchResult = () => {
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                    <thead>
                    <tr className="bg-[#B8860B] text-white">
                        <th className="px-3 py-2 text-left border-r border-l border-t border-[#D4AF37]">App ID</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Name</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Passport No</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Nationality</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Visa Type</th>
                        <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Status</th>
                        <th className="px-3 py-2 text-center border-r border-t border-[#D4AF37]">Visa</th>
                        <th className="px-3 py-2 text-center border-r border-t border-[#D4AF37]">Insurance</th>
                        <th className="px-3 py-2 text-center border-r border-t border-[#D4AF37]">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {visaData.map((row, index) => (
                        <tr
                            key={row.appId}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors duration-150`}
                        >
                            <td className="px-3 py-2 text-sm border-l border-r border-b border-gray-200">{row.appId}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.name}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.passportNo}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.nationality}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.visaType}</td>
                            <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{row.status}</td>
                            <td className="px-3 py-2 text-center border-r border-b border-gray-200">
                                <div className="flex justify-center space-x-2">
                                    <button className="">
                                        <FaDownload />
                                    </button>

                                </div>
                            </td>
                            <td className="px-3 py-2 text-center border-r border-b border-gray-200">
                                <button className="">
                                    <FaDownloadSecond />
                                </button>

                            </td>
                            <td className="px-3 py-2 text-center border-r border-b border-gray-200">
                                <div className="flex justify-center space-x-2">
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <MdOutlineRemoveRedEye size={18} />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <FiRefreshCw />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <FaRegEdit />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchResult;
