import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head} from '@inertiajs/react';

export default function Dashboard({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Account Not Approved</h2>}
        >
            <Head title="Account Not Approved | Dubai E-Visa"/>

            <div>
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're account not approved! Contact with Authority for
                            Approved your account
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
