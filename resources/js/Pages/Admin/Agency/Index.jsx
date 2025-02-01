import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import Table from "@/Components/Table.jsx";

const StatusNotComplete = () => {
    return (
        <span className="bg-warning text-xs px-4 py-2 rounded-full">Incomplete SignUp</span>
    )
}

const StatusPending = () => {
    return (
        <span className="bg-primary text-xs px-4 py-2 rounded-full">Approval Pending</span>
    )
}

const StatusApproved = () => {
    return (
        <span className="bg-success text-xs px-4 py-2 rounded-full">Approved</span>
    )
}

const Index = ({agencies}) => {

    const getStatusBadge = (agency) => {
        if (!agency?.is_signup_complete) {
            return <StatusNotComplete/>
        }
        if (agency?.agency?.is_account_approved) {
            return <StatusApproved/>
        }

        return <StatusPending/>
    }

    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Agencies'/>
            <Table heading={[
                'SL', 'Company Name', 'Contact Person', 'Username', 'Phone', 'Status', 'Action'
            ]}>
                {agencies.data.map((agency, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{agency?.agency?.company_name}</td>
                        <td>{agency.name}</td>
                        <td>{agency.username}</td>
                        <td>{agency.phone}</td>
                        <td className="text-white">{getStatusBadge(agency)}</td>
                        <td>
                            <div className="flex gap-x-2">
                                {!agency?.agency?.is_account_approved &&
                                    <Link href={route('admin.agencies.approve', agency.id)} className="btn-primary">
                                        Approve Now
                                    </Link>}
                                <Link href={route('admin.agencies.show', agency.id)} className="btn-primary">
                                    View
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}

            </Table>
        </Authenticated>
    )
}

export default Index;
