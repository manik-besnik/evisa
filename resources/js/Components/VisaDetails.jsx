import {usePage} from "@inertiajs/react";

const InfoSection = ({title, children}) => (
    <div className="mb-8">
        <h2 className="text-xl text-gray-700 mb-4">{title}</h2>
        <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
    </div>
)

const InfoItem = ({label, value}) => (
    <div className="mb-4 last:mb-0">
        <span className="text-sm text-gray-500">{label}</span>
        <p className="text-gray-800">{value ?? "N/A"}</p>
    </div>
)

export const VisaDetails = () => {

    const {visa_details} = usePage().props;

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl text-gray-800 mb-8 text-center">Visa Information</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoSection title="Visa Info">
                    <InfoItem label="User ID" value={userId}/>
                    <InfoItem label="Personal Name" value={personalName}/>
                    <InfoItem label="Processing Type" value={processingType}/>
                    <InfoItem label="Visa Type" value={visaType}/>
                    <InfoItem label="Group" value={group}/>
                </InfoSection>

                <InfoSection title="Passport Info">
                    <InfoItem label="Passport Type" value={passportType}/>
                    <InfoItem label="Passport Number" value={passportNO}/>
                    <InfoItem label="Issue Date" value={passportIssueDate}/>
                    <InfoItem label="Expiry Date" value={passportExpireDate}/>
                    <InfoItem label="Issue Place" value={passportIssuePlace}/>
                    <InfoItem label="Issue Place (Arabic)" value={passportIssuePlaceArabic}/>
                    <InfoItem label="Issue Country" value={passportIssueCountry}/>
                </InfoSection>

                <InfoSection title="Guarantor Info">
                    <InfoItem label="Guarantor Name" value={guarantorName}/>
                    <InfoItem label="Guarantor Passport Number" value={guarantorPassportNO}/>
                    <InfoItem label="Guarantor Nationality" value={guarantorNationality}/>
                    <InfoItem label="Guarantor Phone" value={guarantorPhone}/>
                    <InfoItem label="Guarantor Relation" value={guarantorRelation}/>
                </InfoSection>

                <InfoSection title="General Info">
                    <InfoItem label="Name" value={name}/>
                    <InfoItem label="Name (Arabic)" value={nameArabic}/>
                    <InfoItem label="Current Nationality" value={currentNationality}/>
                    <InfoItem label="Previous Nationality" value={prevNationality}/>
                    <InfoItem label="Gender" value={gender}/>
                    <InfoItem label="Date of Birth" value={dateOfBirth}/>
                    <InfoItem label="Birth Country" value={birthCountry}/>
                    <InfoItem label="Marital Status" value={maritalStatus}/>
                    <InfoItem label="Birth Place" value={birthPlace}/>
                    <InfoItem label="Birth Place (Arabic)" value={birthPlaceArabic}/>
                    <InfoItem label="Mother's Name" value={motherName}/>
                    <InfoItem label="Mother's Name (Arabic)" value={motherNameArabic}/>
                    <InfoItem label="Father's Name" value={fatherName}/>
                    <InfoItem label="Father's Name (Arabic)" value={fatherNameArabic}/>
                    <InfoItem label="Religion" value={religion}/>
                    <InfoItem label="Faith" value={faith}/>
                    <InfoItem label="Qualification" value={qualification}/>
                    <InfoItem label="Profession" value={profession}/>
                </InfoSection>


            </div>

            <InfoSection title="Documents">
                {visa_details.documents && visa_details.documents.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-800">
                        {visa_details.documents.map((doc, index) => (
                            <li key={index} className="mb-2">
                                {doc.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No documents available</p>
                )}
            </InfoSection>
        </div>
    )
}

export default VisaDetails
