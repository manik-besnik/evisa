import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";

export const Show = ({agency}) => {
    return (
        <Authenticated>
            <Head title="Agencies | Dubai E-Visa"/>
            <TopSection title='Agency Details'/>
            <div className="grid grid-cols-2 gap-4 text-md">
                <div>
                    <strong>Contact Person:</strong> {agency.name}
                </div>
                <div>
                    <strong>Email:</strong> {agency.email}
                </div>
                <div>
                    <strong>Phone:</strong> {agency.phone}
                </div>
                <div>
                    <strong>Username:</strong> {agency.username}
                </div>
                <div>
                    <strong>Nationality:</strong> {agency.nationality_id}
                </div>
                <div>
                    <strong>Living Country:</strong> {agency.living_country_id}
                </div>
                <div>
                    <strong>Language:</strong> {agency.language_id}
                </div>

                <div>
                    <strong>Profession:</strong> {agency.profession}
                </div>
                <div>
                    <strong>City:</strong> {agency.city}
                </div>
                <div>
                    <strong>Signup Complete:</strong> {agency.is_signup_complete ? "Yes" : "No"}
                </div>
            </div>

            {/* Avatar Preview */}
            <div className="mt-6">
                <h3 className="text-md">Profile Picture</h3>
                {agency.avatar ? (
                    <img src={agency.avatar} alt="User Avatar" className="w-32 h-32 rounded-full shadow"/>
                ) : (
                    <p className="text-gray-500">No avatar uploaded</p>
                )}
            </div>

            {/* Agency Info */}
            {agency.agency && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-4">Company Details</h2>
                    <div className="grid grid-cols-2 gap-4 text-md">
                        <div>
                            <strong>Company Name:</strong> {agency.agency.company_name}
                        </div>
                        <div>
                            <strong>EID No:</strong> {agency.agency.eid_no || "N/A"}
                        </div>
                        <div>
                            <strong>Passport No:</strong> {agency.agency.passport_no || "N/A"}
                        </div>
                        <div>
                            <strong>UID No:</strong> {agency.agency.uid_no || "N/A"}
                        </div>
                        <div>
                            <strong>Bank Details:</strong> {agency.agency.bank_details || "N/A"}
                        </div>
                        <div>
                            <strong>Nominee Name:</strong> {agency.agency.nominee_name || "N/A"}
                        </div>
                        <div>
                            <strong>Nominee Passport:</strong> {agency.agency.nominee_passport_no || "N/A"}
                        </div>
                        <div>
                            <strong>Account
                                Approved:</strong> {agency.agency.is_account_approved ? "Approved" : "Not Approved"}
                        </div>
                    </div>
                </div>
            )}
        </Authenticated>
    )
}

export default Show
