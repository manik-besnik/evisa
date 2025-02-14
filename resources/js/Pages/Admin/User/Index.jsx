import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Table from "@/Components/Table.jsx";
import {FiPlus} from "react-icons/fi";
import {isPermitted} from "@/Components/Helper/index.js";
import {permissionEnums} from "@/Components/Constant/index.js";

const Index = ({users}) => {
    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Users'>
                {isPermitted(permissionEnums.CREATE_USER) &&
                    <Link href={route('admin.users.create')} className='btn-primary'><FiPlus/> Add New User
                </Link>}
            </TopSection>

            <Table heading={['SL', 'Name', 'Username', 'Phone', 'Email Address']}>
                {users.data.map((user, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}

            </Table>
        </Authenticated>
    )
}

export default Index;
