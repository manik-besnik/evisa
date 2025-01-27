import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {genders, groups, maritalStatuses, visaProcessingTypes, visaTypes} from "@/Components/Constant/index.js";
import {useState} from "react";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";

const VisaApply = () => {

    const countries = usePage().props.countries

    const [processingType, setProcessingType] = useState('')
    const [visaType, setVisaType] = useState('')
    const [group, setGroup] = useState('')
    const [currentNationality, setCurrentNationality] = useState('')
    const [prevNationality, setPrevNationality] = useState('')
    const [gender, setGender] = useState('')
    const [birthCountry, setBirthCountry] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [passportIssueCountry, setPassportIssueCountry] = useState('')
    const [guarantorNationality, setGuarantorNationality] = useState('')

    const {data, setData, post, errors} = useForm({
        'personal_name': '',
        'processing_type': null,
        'visa_type': null,
        'group': null,
        'name': '',
        'name_arabic': '',
        'current_nationality': '',
        'prev_nationality': '',
        'gender': '',
        'date_of_birth': '',
        'birth_country': '',
        'marital_status': '',
        'birth_place': '',
        'birth_place_arabic': '',
        'mother_name': '',
        'mother_name_arabic': '',
        'religion': '',
        'faith': '',
        'qualification': '',
        'profession': '',
        'passport_type': '',
        'passport_no': '',
        'passport_issue_date': '',
        'passport_expire_date': '',
        'passport_issue_place': '',
        'passport_issue_place_arabic': '',
        'passport_issue_country': '',
        'guarantor_name': '',
        'guarantor_passport_no': '',
        'guarantor_nationality': '',
        'guarantor_phone': '',
        'guarantor_relation': '',
        'documents': {
            'passport': {
                "name": "Passport",
                "type": "passport",
                "file": null
            },
            'photo': {
                "name": "Photo",
                "type": "photo",
                "file": null
            }
        },
    })

    const updateVisaProcessingType = (value) => {
        setData('processing_type', value.id)
    }

    const updateVisaType = (value) => {
        setData('visa_type', value.id)
    }

    const updateGroup = (value) => {
        setData('group', value.id)
    }
    const updateCurrentNationality = (value) => {
        setData('current_nationality', value.id)
    }

    const updatePrevNationality = (value) => {
        setData('prev_nationality', value.id)
    }

    const updateGender = (value) => {
        setData('gender', value.id)
    }

    const updateBirthCountry = (value) => {
        setData('birth_country', value.id)
    }

    const updateMaritalStatus = (value) => {
        setData('marital_status', value.id)
    }


    const updatePassportIssueCountry = (value) => {
        setData('passport_issue_country', value.id)
    }


    const updateGuarantorNationality = (value) => {
        setData('guarantor_nationality', value.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (

        <WebLayout showBgImage={false} showServiceImage={false}>

            <Head title="Apply For New Visa | Dubai E-Visa"/>

            <div className="container">
                <h3 className="text-text-primary text-lg font-semibold mt-3">Apply Visa</h3>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            value={data.personal_name}
                            onChange={(e) => setData('personal_name', e.target.value)}
                            error={errors.personal_name}
                            id="personal-name"
                            placeholder="Personal Name | Company Name"
                            label="Personal Name | Company Name"
                            divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <Select
                            placeholder="Processing Type"
                            label="Processing Type*"
                            items={visaProcessingTypes}
                            selected={processingType}
                            setSelected={setProcessingType}
                            handleValueChange={updateVisaProcessingType}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            error={errors.processing_type}
                        />

                        <Select
                            placeholder="Visa Type"
                            label="Visa Type*"
                            items={visaTypes}
                            selected={visaType}
                            setSelected={setVisaType}
                            handleValueChange={updateVisaType}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            error={errors.visa_type}
                        />

                        <Select
                            placeholder="Select Group"
                            label="Group Membership(if any)"
                            items={groups}
                            selected={group}
                            setSelected={setGroup}
                            handleValueChange={updateGroup}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            error={errors.group}
                        />

                    </div>

                    <h4 className="text-success mt-2 text-md">Personal Information</h4>

                    <div className="flex gap-x-8 items-center">

                        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-x-4">

                            <TextInput
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                error={errors.name}
                                id="fullname-english"
                                placeholder="Full Name English"
                                label="Full Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                value={data.name_arabic}
                                onChange={(e) => setData('name_arabic', e.target.value)}
                                error={errors.name_arabic}
                                id="fullname-arabic"
                                placeholder="Full Name Arabic"
                                label="Full Name (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <Select
                                placeholder="Select Nationality"
                                label="Current Nationality*"
                                items={countries}
                                selected={currentNationality}
                                setSelected={setCurrentNationality}
                                handleValueChange={updateCurrentNationality}
                                error={errors.current_nationality}
                                field='nationality'
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />

                            <Select
                                placeholder="Select Nationality"
                                label="Prev Nationality"
                                items={countries}
                                selected={prevNationality}
                                setSelected={setPrevNationality}
                                handleValueChange={updatePrevNationality}
                                error={errors.prev_nationality}
                                field='nationality'
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />

                            <Select
                                placeholder="Select Gender"
                                label="Gender*"
                                items={genders}
                                selected={gender}
                                setSelected={setGender}
                                handleValueChange={updateGender}
                                error={errors.gender}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />


                            <TextInput
                                value={data.date_of_birth}
                                onChange={(e) => setData('date_of_birth', e.target.value)}
                                error={errors.date_of_birth}
                                id="date-of-birth"
                                placeholder="Date Of Birth"
                                label="Date Of Birth" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                                type="date"
                            />

                            <Select
                                placeholder="Select Country"
                                label="Birth Country*"
                                items={countries}
                                selected={birthCountry}
                                setSelected={setBirthCountry}
                                handleValueChange={updateBirthCountry}
                                error={errors.birth_country}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />


                            <Select
                                placeholder="Select Status"
                                label="Marital Status*"
                                items={maritalStatuses}
                                selected={maritalStatus}
                                setSelected={setMaritalStatus}
                                handleValueChange={updateMaritalStatus}
                                error={errors.marital_status}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />

                            <TextInput
                                value={data.birth_place}
                                onChange={(e) => setData('birth_place', e.target.value)}
                                error={errors.birth_place}
                                id="birth-place-english"
                                placeholder="Birth Place English"
                                label="Birth Place (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                value={data.birth_place_arabic}
                                onChange={(e) => setData('birth_place_arabic', e.target.value)}
                                error={errors.birth_place_arabic}
                                id="birth-place-arabic"
                                placeholder="Birth Place Arabic"
                                label="Birth Place (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                value={data.mother_name}
                                onChange={(e) => setData('mother_name', e.target.value)}
                                error={errors.mother_name}
                                id="mother-english"
                                placeholder="Mother Name English"
                                label="Mother Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                value={data.mother_name_arabic}
                                onChange={(e) => setData('mother_name_arabic', e.target.value)}
                                error={errors.mother_name_arabic}
                                id="mother-arabic"
                                placeholder="Mother Name Arabic"
                                label="Mother Name (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                value={data.religion}
                                onChange={(e) => setData('religion', e.target.value)}
                                error={errors.religion}
                                id="religion"
                                placeholder="Religion"
                                label="Religion" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                value={data.faith}
                                onChange={(e) => setData('faith', e.target.value)}
                                error={errors.faith}
                                id="faith"
                                placeholder="Faith"
                                label="Faith" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                value={data.qualification}
                                onChange={(e) => setData('qualification', e.target.value)}
                                error={errors.qualification}
                                id="qualification"
                                placeholder="Qualification"
                                label="Qualification" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                value={data.profession}
                                onChange={(e) => setData('profession', e.target.value)}
                                error={errors.profession}
                                id="profession"
                                placeholder="Profession"
                                label="Profession" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                        </div>
                        <div className="w-1/4"></div>


                    </div>

                    <h4 className="text-success mt-2 text-md">Passport Information</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            value={data.passport_type}
                            onChange={(e) => setData('passport_type', e.target.value)}
                            error={errors.passport_type}
                            id="passport-type"
                            placeholder="Ex: Ordinary"
                            label="Passport Type" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.passport_no}
                            onChange={(e) => setData('passport_no', e.target.value)}
                            error={errors.passport_no}
                            id="passport-no"
                            placeholder="Passport NO"
                            label="Passport NO*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />


                        <TextInput
                            value={data.passport_issue_date}
                            onChange={(e) => setData('passport_issue_date', e.target.value)}
                            error={errors.passport_issue_date}
                            id="passport-issue-date"
                            placeholder="Passport Issue Date"
                            label="Passport Issue Date" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />

                        <TextInput
                            value={data.passport_expire_date}
                            onChange={(e) => setData('passport_expire_date', e.target.value)}
                            error={errors.passport_expire_date}
                            id="passport-expire-date"
                            placeholder="Passport Expire Date"
                            label="Passport Expire Date" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />

                        <TextInput
                            value={data.passport_issue_place}
                            onChange={(e) => setData('passport_issue_place', e.target.value)}
                            error={errors.passport_issue_place}
                            id="passport-issue-place"
                            placeholder="Passport Issue Place"
                            label="Passport Issue Place*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.passport_issue_place_arabic}
                            onChange={(e) => setData('passport_issue_place_arabic', e.target.value)}
                            error={errors.passport_issue_place_arabic}
                            id="passport-issue-place-arabic"
                            placeholder="Passport Issue Place Arabic"
                            label="Passport Issue Place(Arabic)*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <Select
                            placeholder="Passport Issue Country"
                            label="Passport Issue Country*"
                            items={countries}
                            selected={passportIssueCountry}
                            setSelected={setPassportIssueCountry}
                            handleValueChange={updatePassportIssueCountry}
                            error={errors.passport_issue_country}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />

                    </div>

                    <h4 className="text-success mt-2 text-md">Guarantor Information</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            value={data.guarantor_name}
                            onChange={(e) => setData('guarantor_name', e.target.value)}
                            error={errors.guarantor_name}
                            id="guarntor-name"
                            placeholder="Ex: Jhon Deo"
                            label="Name*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.guarantor_passport_no}
                            onChange={(e) => setData('guarantor_passport_no', e.target.value)}
                            error={errors.guarantor_passport_no}
                            id="guarantor-passport-no"
                            placeholder="Passport NO"
                            label="Passport No" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <Select
                            placeholder="Select Nationality"
                            label="Nationality*"
                            items={countries}
                            selected={guarantorNationality}
                            setSelected={setGuarantorNationality}
                            handleValueChange={updateGuarantorNationality}
                            field="nationality"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />


                        <TextInput
                            value={data.guarantor_phone}
                            onChange={(e) => setData('guarantor_phone', e.target.value)}
                            error={errors.guarantor_phone}
                            id="guarantor-phone"
                            placeholder="Mobile"
                            label="Mobile" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.guarantor_relation}
                            onChange={(e) => setData('guarantor_relation', e.target.value)}
                            error={errors.guarantor_relation}
                            id="guarantor-relation"
                            placeholder="Relation"
                            label="Relation" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                    </div>
                    <PrimaryBtn text="Save" type="submit" onClick={handleSubmit}/>
                </form>
            </div>
        </WebLayout>
    )
}

export default VisaApply;
