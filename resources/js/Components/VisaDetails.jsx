import {usePage} from "@inertiajs/react";
import {getEnumValue} from "@/Components/Helper/index.js";
import {genders, groups, maritalStatuses, visaProcessingTypes, visaTypes} from "@/Components/Constant/index.js";

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

    const {visa_apply} = usePage().props;

    return (
        <div className="min-h-screen">

            <div className="flex gap-8">

                <div className="w-full md:w-1/2">
                    <InfoSection title="General Info">
                        <InfoItem label="Name" value={visa_apply.person_info.name}/>
                        <InfoItem label="Name (Arabic)" value={visa_apply.person_info.name_arabic}/>
                        <InfoItem label="Current Nationality"
                                  value={visa_apply.person_info.current_nationality.nationality}/>
                        <InfoItem label="Previous Nationality"
                                  value={visa_apply.person_info.prev_nationality.nationality}/>
                        <InfoItem label="Gender" value={getEnumValue(genders,visa_apply.person_info.gender)}/>
                        <InfoItem label="Date of Birth" value={visa_apply.person_info.date_of_birth}/>
                        <InfoItem label="Birth Country" value={visa_apply.person_info.birth_country.name}/>
                        <InfoItem label="Marital Status" value={getEnumValue(maritalStatuses,visa_apply.person_info.marital_status)}/>
                        <InfoItem label="Birth Place" value={visa_apply.person_info.birth_place}/>
                        <InfoItem label="Birth Place (Arabic)" value={visa_apply.person_info.birth_place_arabic}/>
                        <InfoItem label="Mother's Name" value={visa_apply.person_info.mother_name}/>
                        <InfoItem label="Mother's Name (Arabic)" value={visa_apply.person_info.mother_name_arabic}/>
                        <InfoItem label="Religion" value={visa_apply.person_info.religion}/>
                        <InfoItem label="Faith" value={visa_apply.person_info.faith}/>
                        <InfoItem label="Qualification" value={visa_apply.person_info.qualification}/>
                        <InfoItem label="Profession" value={visa_apply.person_info.profession}/>
                    </InfoSection>
                </div>

                <div className="w-full lg:w-1/2">
                    <InfoSection title="Visa Info">
                        <InfoItem label="App ID" value={visa_apply.app_id}/>
                        <InfoItem label="Personal Name | Company Name" value={visa_apply.name}/>
                        <InfoItem label="Processing Type" value={getEnumValue(visaProcessingTypes,visa_apply.processing_type)}/>
                        <InfoItem label="Visa Type" value={getEnumValue(visaTypes,visa_apply.visa_type)}/>
                        <InfoItem label="Group" value={getEnumValue(groups, visa_apply.group)}/>
                    </InfoSection>

                    <InfoSection title="Passport Info">
                        <InfoItem label="Passport Type" value={visa_apply.passport.passport_type}/>
                        <InfoItem label="Passport Number" value={visa_apply.passport.passport_no}/>
                        <InfoItem label="Issue Date" value={visa_apply.passport.passport_issue_date}/>
                        <InfoItem label="Expiry Date" value={visa_apply.passport.passport_expire_date}/>
                        <InfoItem label="Issue Place" value={visa_apply.passport.passport_issue_place}/>
                        <InfoItem label="Issue Place (Arabic)" value={visa_apply.passport.passport_issue_place_arabic}/>
                        <InfoItem label="Issue Country" value={visa_apply.passport.issue_country.name}/>
                    </InfoSection>
                    <InfoSection title="Guarantor Info">
                        <InfoItem label="Guarantor Name" value={visa_apply.guarantor.name}/>
                        <InfoItem label="Guarantor Passport Number" value={visa_apply.guarantor.passport_no}/>
                        <InfoItem label="Guarantor Nationality" value={visa_apply.guarantor.guarantor_nationality.nationality}/>
                        <InfoItem label="Guarantor Phone" value={visa_apply.guarantor.phone}/>
                        <InfoItem label="Guarantor Relation" value={visa_apply.guarantor.relation}/>
                    </InfoSection>
                </div>


            </div>

            <InfoSection title="Documents">
                {JSON.parse(visa_apply.documents) && JSON.parse(visa_apply.documents.length) > 0 ? (
                    <ul className="list-disc list-inside text-gray-800">
                        {JSON.parse(visa_apply.documents).map((doc, index) => (
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
