import {router, usePage} from "@inertiajs/react";
import {getValue, isPermitted, visaDocuments} from "@/Components/Helper/index.js";
import {
    genders,
    groups,
    maritalStatuses,
    permissionEnums,
    visaProcessingTypes,
    visaStatuses,
    visaTypes
} from "@/Components/Constant/index.js";
import {FaRegEye} from "react-icons/fa6";
import InfoSection from "@/Components/InfoSection.jsx";
import InfoItem from "@/Components/Web/InfoItem.jsx";
import {useState} from "react";
import Select from "@/Components/Select.jsx";
import {MdFileDownload} from "react-icons/md";
import DangerButton from "@/Components/DangerButton.jsx";
import {FaTrashAlt} from "react-icons/fa";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal.jsx";
import ImagePreviewModal from "@/Components/ImagePreviewModal.jsx";

export const VisaDetails = ({isAdmin}) => {

    const {visa_apply} = usePage().props;

    const [status, setStatus] = useState(visaStatuses.find(item => item.id === visa_apply.status))
    const [document, setDocument] = useState(null);
    const [show, setShow] = useState(false);
    const [previewDocument, setPreviewDocument] = useState(null)
    const [showPreview, setShowPreview] = useState(false)

    const changeStatus = (value) => {

        router.put(route('admin.visa-applies.change-status', visa_apply.id), {status: value.id})
    }

    const deleteDocument = (url) => {
        setDocument(url)
        setShow(true)
    }
    const confirmDeleteDocument = () => {
        router.delete(route('admin.visa-applies.delete.document', {visa_apply: visa_apply.id, url: document}), {
            onSuccess: () => {
                setShow(false)
            }
        })
    }

    const previewImageDocument = (imageURL) => {
        setPreviewDocument(imageURL)
        setShowPreview(true)
    }

    return (
        <div className="min-h-screen">

            <div className="flex gap-8">

                <div className="w-full md:w-1/2">
                    <InfoSection title="General Info">
                        <InfoItem label="Name" value={visa_apply.personal_info.name}/>
                        <InfoItem label="Name (Arabic)" value={visa_apply.personal_info.name_arabic}/>
                        <InfoItem label="Current Nationality"
                                  value={visa_apply.personal_info.current_nationality.nationality}/>
                        <InfoItem label="Previous Nationality"
                                  value={visa_apply.personal_info.prev_nationality.nationality}/>
                        <InfoItem label="Gender" value={getValue(genders, visa_apply.personal_info.gender)}/>
                        <InfoItem label="Date of Birth" value={visa_apply.personal_info.date_of_birth}/>
                        <InfoItem label="Birth Country" value={visa_apply.personal_info.birth_country.name}/>
                        <InfoItem label="Marital Status"
                                  value={getValue(maritalStatuses, visa_apply.personal_info.marital_status)}/>
                        <InfoItem label="Birth Place" value={visa_apply.personal_info.birth_place}/>
                        <InfoItem label="Birth Place (Arabic)" value={visa_apply.personal_info.birth_place_arabic}/>
                        <InfoItem label="Mother's Name" value={visa_apply.personal_info.mother_name}/>
                        <InfoItem label="Mother's Name (Arabic)" value={visa_apply.personal_info.mother_name_arabic}/>
                        <InfoItem label="Religion" value={visa_apply.personal_info.religion}/>
                        <InfoItem label="Faith" value={visa_apply.personal_info.faith}/>
                        <InfoItem label="Qualification" value={visa_apply.personal_info.qualification}/>
                        <InfoItem label="Profession" value={visa_apply.personal_info.profession}/>
                    </InfoSection>

                    <InfoSection title="Documents">
                        {JSON.parse(visa_apply.documents) && JSON.parse(visa_apply.documents.length) > 0 ? (
                            <ul className="list-disc list-inside text-gray-800 text-sm">
                                {JSON.parse(visa_apply.documents).map((doc, index) => (
                                    <li key={index} className="mb-2 flex justify-between items-center">
                                        <span>
                                            {doc.name}
                                        </span>
                                        {doc.url.endsWith('.pdf') ? (
                                            <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                                <FaRegEye />
                                            </a>
                                        ) : (
                                            <button onClick={() => previewImageDocument(doc.url)}>
                                                <FaRegEye />
                                            </button>
                                        )}
                                    </li>
                                ))}

                            </ul>

                        ) : (
                            <p className="text-gray-600">No documents available</p>
                        )}
                    </InfoSection>


                    {visa_apply.visa_document &&
                        <InfoSection title="Downloads">

                            <ul className="list-disc list-inside text-gray-800 text-sm">

                                {visaDocuments(visa_apply.visa_document).map((doc, index) => (
                                    <li key={index} className="mb-2 flex justify-between items-center">
                                    <span>
                                        {doc.name}
                                    </span>
                                        <p className="flex gap-x-4 items-center">
                                            <a href={doc.url} download={doc.url} target="_blank">
                                                <MdFileDownload className="text-lg"/>
                                            </a>
                                            {doc.url.endsWith('.pdf') ? (
                                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                                    <FaRegEye />
                                                </a>
                                            ) : (
                                                <button onClick={() => previewImageDocument(doc.url)}>
                                                    <FaRegEye />
                                                </button>
                                            )}
                                            {(isPermitted(permissionEnums.DELETE_DOCUMENT_VISA) && isAdmin) &&
                                                <DangerButton onClick={() => deleteDocument(doc.url)}>
                                                    <FaTrashAlt/>
                                                </DangerButton>
                                            }
                                        </p>
                                    </li>
                                ))}
                            </ul>

                        </InfoSection>
                    }
                </div>

                <div className="w-full lg:w-1/2">
                    <InfoSection title="Visa Info">
                        <InfoItem label="App ID" value={visa_apply.app_id}/>
                        <InfoItem label="Personal Name | Company Name" value={visa_apply.name}/>
                        <InfoItem label="Processing Type"
                                  value={getValue(visaProcessingTypes, visa_apply.processing_type)}/>
                        <InfoItem label="Visa Type" value={getValue(visaTypes, visa_apply.visa_type)}/>
                        <InfoItem label="Group" value={getValue(groups, visa_apply.group)}/>
                        {isAdmin ?
                            <Select
                                items={visaStatuses}
                                selected={status}
                                label="Visa Status"
                                setSelected={setStatus}
                                handleValueChange={changeStatus}
                                placeholder="Select Status"
                            /> : <InfoItem label="Status" value={getValue(visaStatuses, visa_apply.status)}/>
                        }
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
                        <InfoItem label="Guarantor Nationality"
                                  value={visa_apply.guarantor.guarantor_nationality.nationality}/>
                        <InfoItem label="Guarantor Phone" value={visa_apply.guarantor.phone}/>
                        <InfoItem label="Guarantor Relation" value={visa_apply.guarantor.relation}/>
                    </InfoSection>
                </div>


            </div>

            <DeleteConfirmModal show={show} setShow={setShow} handleConfirmDelete={confirmDeleteDocument}/>

            <ImagePreviewModal show={showPreview} setShow={setShowPreview} imageURL={previewDocument} />
        </div>
    )
}

export default VisaDetails
