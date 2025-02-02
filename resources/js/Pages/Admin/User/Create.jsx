import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import AddUserForm from "@/Components/AddUserForm.jsx";
import {FiPlus} from "react-icons/fi";

const Create = () => {
    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Add User'>
                <Link href={route('admin.users.index')} className='btn-primary'> User List
                </Link>
            </TopSection>
            <AddUserForm submitRoute={route('admin.users.store')}/>
        </Authenticated>
    )
}

export default Create;
