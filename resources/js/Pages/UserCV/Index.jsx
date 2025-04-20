import {Link, usePage} from "@inertiajs/react";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {FiRefreshCw} from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import WebLayout from "@/Layouts/WebLayout.jsx";

const Index = () => {

    const {cv} = usePage().props;

    return (
        <WebLayout showServiceImage={false} showBgImage={false}>
            <div className="container">
                <div className="overflow-x-auto mt-5">
                    <table className="min-w-full bg-white text-sm mb-4">
                        <thead>
                        <tr className="bg-[#B8860B] text-white">
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Name</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Email Address</th>
                            <th className="px-3 py-2 text-left border-r border-t border-[#D4AF37]">Phone</th>
                            <th className="px-3 py-2 text-center border-r border-t border-[#D4AF37]">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr
                                key={cv.id}
                                className= "bg-gray-50 hover:bg-yellow-50 transition-colors duration-150"
                            >
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{cv.name}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{cv.email}</td>
                                <td className="px-3 py-2 text-sm border-r border-b border-gray-200">{cv.phone}</td>
                                <td className="px-3 py-2 text-center border-r border-b border-gray-200">
                                    <div className="flex items-center justify-center space-x-2">
                                        <Link href={route('visa-apply.show', cv.id)}
                                              className="text-gray-600 hover:text-gray-800">
                                            <MdOutlineRemoveRedEye size={18}/>
                                        </Link>
                                        <Link href={route('visa-apply.index')}
                                              className="text-gray-600 hover:text-gray-800">
                                            <FiRefreshCw/>
                                        </Link>
                                        <Link href={route('cv.create')}
                                              className="text-gray-600 hover:text-gray-800">
                                            <FaRegEdit />
                                        </Link>

                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </WebLayout>
    )
}

export default Index;
