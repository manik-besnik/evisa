import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Table from "@/Components/Table.jsx";

const Index = ({users}) => {
    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Agencies'/>
            <Table heading={['SL', 'Name', 'Username', 'Phone', 'Action']}>
                {users.data.map((user, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td></td>
                    </tr>
                ))}

            </Table>
        </Authenticated>
    )
}

export default Index;
