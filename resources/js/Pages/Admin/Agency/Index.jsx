import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Table from "@/Components/Table.jsx";

const Index = ({agencies}) => {
    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Agencies'/>
            <Table heading={['SL', 'Name', 'Username', 'Phone', 'Action']}>
                {agencies.data.map((agency, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{agency.name}</td>
                        <td>{agency.username}</td>
                        <td>{agency.phone}</td>
                        <td></td>
                    </tr>
                ))}

            </Table>
        </Authenticated>
    )
}

export default Index;
