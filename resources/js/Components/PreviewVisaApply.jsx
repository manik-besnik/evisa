import {usePage} from "@inertiajs/react";
import {getValue} from "@/Components/Helper/index.js";
import {
    genders,
    groups,
    maritalStatuses,
    visaProcessingTypes,
    visaTypes
} from "@/Components/Constant/index.js";
import InfoSection from "@/Components/InfoSection.jsx";
import InfoItem from "@/Components/Web/InfoItem.jsx";
import Close from "@/Components/SvgIcons/Close.jsx";
import Modal from "@/Components/Modal.jsx";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";


export const PreviewVisaApply = ({show, setShow, confirmSubmit, visa_apply,isPassportRequired,isPhotoRequired}) => {
    const {countries} = usePage().props;

    const getNationality = (itemId) => {
        return countries.find(item => item.id === itemId).nationality
    }
    const getCountry = (itemId) => {
        return countries.find(item => item.id === itemId).name
    }

    return (
        <Modal show={show} maxWidth='admin-size' onClose={() => setShow(false)}>
            <div className="p-[30px] relative">
                <button className="absolute right-5 top-5 md:right-[30px] md:top-[30px]" onClick={() => setShow(false)}>
                    <Close className="h-6 w-6"/>
                </button>
                <div className="mb-6">
                    <p>View Apply Preview</p>
                    
                    {isPassportRequired &&
                        <p className="text-warning text-sm my-2">
                            Passport Document is required
                        </p>
                    }

                    {isPhotoRequired && <p className="text-warning text-sm">Photo Document is required</p>}


                </div>
                <div className="flex gap-8">


                    <div className="w-full md:w-1/2">
                        <InfoSection title="General Info">
                            <InfoItem label="Name" value={visa_apply.name}/>
                            <InfoItem label="Name (Arabic)" value={visa_apply.name_arabic}/>
                            <InfoItem label="Current Nationality"
                                      value={getNationality(visa_apply.current_nationality)}/>
                            <InfoItem label="Previous Nationality"
                                      value={getNationality(visa_apply.prev_nationality)}/>
                            <InfoItem label="Gender" value={getValue(genders, visa_apply.gender)}/>
                            <InfoItem label="Date of Birth" value={visa_apply.date_of_birth}/>
                            <InfoItem label="Birth Country" value={getCountry(visa_apply.birth_country)}/>
                            <InfoItem label="Marital Status"
                                      value={getValue(maritalStatuses, visa_apply.marital_status)}/>
                            <InfoItem label="Birth Place" value={visa_apply.birth_place}/>
                            <InfoItem label="Birth Place (Arabic)" value={visa_apply.birth_place_arabic}/>
                            <InfoItem label="Mother's Name" value={visa_apply.mother_name}/>
                            <InfoItem label="Mother's Name (Arabic)" value={visa_apply.mother_name_arabic}/>
                            <InfoItem label="Religion" value={visa_apply.religion}/>
                            <InfoItem label="Faith" value={visa_apply.faith}/>
                            <InfoItem label="Qualification" value={visa_apply.qualification}/>
                            <InfoItem label="Profession" value={visa_apply.profession}/>
                        </InfoSection>


                    </div>

                    <div className="w-full lg:w-1/2">
                        <InfoSection title="Visa Info">

                            <InfoItem label="Personal Name | Company Name" value={visa_apply.personal_name}/>
                            <InfoItem label="Processing Type"
                                      value={getValue(visaProcessingTypes, visa_apply.processing_type)}/>
                            <InfoItem label="Visa Type" value={getValue(visaTypes, visa_apply.visa_type)}/>
                            <InfoItem label="Group" value={getValue(groups, visa_apply.group)}/>

                        </InfoSection>

                        <InfoSection title="Passport Info">
                            <InfoItem label="Passport Type" value={visa_apply.passport_type}/>
                            <InfoItem label="Passport Number" value={visa_apply.passport_no}/>
                            <InfoItem label="Issue Date" value={visa_apply.passport_issue_date}/>
                            <InfoItem label="Expiry Date" value={visa_apply.passport_expire_date}/>
                            <InfoItem label="Issue Place" value={visa_apply.passport_issue_place}/>
                            <InfoItem label="Issue Place (Arabic)" value={visa_apply.passport_issue_place_arabic}/>
                            <InfoItem label="Issue Country" value={getCountry(visa_apply.passport_issue_country)}/>
                        </InfoSection>
                        <InfoSection title="Guarantor Info">
                            <InfoItem label="Guarantor Name" value={visa_apply.guarantor_name}/>
                            <InfoItem label="Guarantor Passport Number" value={visa_apply.guarantor_passport_no}/>
                            <InfoItem label="Guarantor Nationality"
                                      value={getNationality(visa_apply.guarantor_nationality)}/>
                            <InfoItem label="Guarantor Phone" value={visa_apply.guarantor_phone}/>
                            <InfoItem label="Guarantor Relation" value={visa_apply.guarantor_relation}/>
                        </InfoSection>
                    </div>

                </div>
            </div>
            <div className="flex justify-center my-2">
                <PrimaryBtn text="Save" type="button" classes="w-[200px]"
                            onClick={confirmSubmit}/>
            </div>

        </Modal>
    )
}

export default PreviewVisaApply
