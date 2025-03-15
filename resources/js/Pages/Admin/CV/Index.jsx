import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, router} from "@inertiajs/react";
import {FiEdit, FiPlus} from "react-icons/fi";
import Table from "@/Components/Table.jsx";
import {getFormattedDate} from "@/Components/Helper/index.js";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {useState} from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Pagination from "@/Components/Admin/Pagination.jsx";

export const Index = () => {

    const [jobPost, setJobPost] = useState(null);
    const [show, setShow] = useState(false);



    return (
        <Authenticated>

            <Head title="CV List | Dubai E-Visa"/>

            <TopSection title='CV List'>
                
            </TopSection>

            <Table heading={['SL', 'Name', 'Location', 'Post', 'Nationality', 'Action']}>
                
            </Table>

        </Authenticated>
    )
}

export default Index;
