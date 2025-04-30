import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";
import {toast} from "react-toastify";

export const JobDemandApplications = () => {
    const [show, setShow] = useState(false)
    const [selectCV, setSelectCV] = useState(null)

    const { inquery } = usePage().props

    


    return (
        <Authenticated>

            <Head title="Inquery List | Dubai E-Visa"/>

            <TopSection title='Inquery List'>

            </TopSection>

            <Table heading={['SL', 'Name', 'Mobile No', 'Location', 'Inquery Date', "Action"]}>
                {inquery.data.length > 0 && inquery.data.map((inquerys, index) => (
                    <tr key={index}>
                        <td>{(inquery.current_page > 1 ? inquery.current_page * inquery.per_page : 0) + index + 1}</td>
                        <td>{inquerys.name}</td>
                        <td>{inquerys.phone}</td>
                        <td>{inquerys.location}</td>
                        <td>{getFormattedDate(inquerys.created_at)}</td>
                        <td className="flex gap-x-2">
                            <a
                                href={route('admin.inquery.pdf', inquerys.id)}
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pdf
                            </a>
                        </td>
                    </tr>
                ))}
            </Table>

            <Pagination links={inquery.links}/>

            

        </Authenticated>
    )
}

export default JobDemandApplications;
