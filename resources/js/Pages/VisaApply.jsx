import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {
    documentTypes,
    genders,
    assetUrl,
    groups,
    maritalStatuses, religions,
    visaProcessingTypes,
    visaTypes
} from "@/Components/Constant/index.js";
import {useState} from "react";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import InputFile from "@/Components/Web/InputFile.jsx";
import {toast} from "react-toastify";
import PassportInputFile from "@/Components/Web/PassportInputFile.jsx";
import Loading from "@/Components/Loading.jsx";
import PassportScanData from "@/Components/PassportScanData.jsx";
import axios from "axios";
import PreviewVisaApply from "@/Components/PreviewVisaApply.jsx";


const VisaApply = () => {


    const {countries, personal_info, passport, guarantor} = usePage().props

    const params = new URLSearchParams(window.location.search);
    const urlVisaType = params.get('visaType');

    const selectedVisaTypeObj = urlVisaType ?
        visaTypes.find(type => type.id.toString() === urlVisaType) || '' :
        '';

    let prevCurrentNationality = "";
    if (personal_info?.current_nationality) {
        prevCurrentNationality = countries.find(item => item.id === personal_info.current_nationality)
    }

    let prevPrevNationality = '';
    if (personal_info?.prev_nationality) {
        prevPrevNationality = countries.find(item => item.id === personal_info.prev_nationality)
    }
    let prevGender = ""
    if (personal_info?.gender) {
        prevGender = genders.find(item => item.id === personal_info.gender)
    }
    let prevBirthCountry = ''
    if (personal_info?.birth_country) {
        prevBirthCountry = countries.find(item => item.id === personal_info.birth_country)
    }

    let prevMaritalStatus = ""
    if (personal_info?.marital_status) {
        prevMaritalStatus = maritalStatuses.find(item => item.id === personal_info.marital_status)
    }

    let prevPassportIssueCountry = ""
    if (passport?.passport_issue_country) {
        prevPassportIssueCountry = countries.find(item => item.id === passport.passport_issue_country)
    }

    let guarantorPrevNationality = ''

    if (guarantor?.nationality) {
        guarantorPrevNationality = countries.find(item => item.id === guarantor.nationality) ?? ''
    }


    const [isPassportRequired, setIsPassportRequired] = useState(false)
    const [isPhotoRequired, setIsPhotoRequired] = useState(false)


    const [processingType, setProcessingType] = useState('')
    const [visaType, setVisaType] = useState(selectedVisaTypeObj);
    const [group, setGroup] = useState('')
    const [currentNationality, setCurrentNationality] = useState(prevCurrentNationality)
    const [prevNationality, setPrevNationality] = useState(prevPrevNationality)
    const [gender, setGender] = useState(prevGender)
    const [birthCountry, setBirthCountry] = useState(prevBirthCountry)
    const [maritalStatus, setMaritalStatus] = useState(prevMaritalStatus)
    const [passportIssueCountry, setPassportIssueCountry] = useState(prevPassportIssueCountry)
    const [guarantorNationality, setGuarantorNationality] = useState(guarantorPrevNationality)
    const [personReligion, setPersonReligion] = useState(religions.find(item => item.name === personal_info?.religion) ?? '')

    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false)
    const [preview, setPreview] = useState(false)
    const [passportData, setPassportData] = useState({})

    const {data, setData, post, errors, processing} = useForm({
        personal_name: '',
        processing_type: null,
        visa_type: urlVisaType || null,
        group: null,
        name: personal_info?.name ? personal_info.name : '',
        name_arabic: personal_info?.name_arabic ? personal_info.name_arabic : '',
        current_nationality: personal_info?.current_nationality ? personal_info.current_nationality : '',
        prev_nationality: personal_info?.prev_nationality ? personal_info.prev_nationality : '',
        gender: personal_info?.gender ? personal_info.gender : '',
        date_of_birth: personal_info?.date_of_birth ? personal_info.date_of_birth : '',
        birth_country: personal_info?.birth_country ? personal_info.birth_country : '',
        marital_status: personal_info?.marital_status ? personal_info.marital_status : '',
        birth_place: personal_info?.birth_place ? personal_info.birth_place : '',
        birth_place_arabic: personal_info?.birth_place_arabic ? personal_info.birth_place_arabic : '',
        mother_name: personal_info?.mother_name ? personal_info.mother_name : '',
        mother_name_arabic: personal_info?.mother_name_arabic ? personal_info.mother_name_arabic : '',
        religion: personal_info?.religion ? personal_info.religion : '',
        faith: personal_info?.faith ? personal_info.faith : '',
        qualification: personal_info?.qualification ? personal_info.qualification : '',
        profession: personal_info?.profession ? personal_info.profession : '',

        passport_type: passport?.passport_type ? passport.passport_type : '',
        passport_no: passport?.passport_no ? passport.passport_no : '',
        passport_issue_date: passport?.passport_issue_date ? passport.passport_issue_date : '',
        passport_expire_date: passport?.passport_expire_date ? passport.passport_expire_date : '',
        passport_issue_place: passport?.passport_issue_place ? passport.passport_issue_place : '',
        passport_issue_place_arabic: passport?.passport_issue_place_arabic ? passport.passport_issue_place_arabic : '',
        passport_issue_country: passport?.passport_issue_country ? passport.passport_issue_country : '',
        guarantor_name: guarantor?.name ? guarantor.name : '',
        guarantor_passport_no: guarantor?.passport_no ? guarantor.passport_no : '',
        guarantor_nationality: guarantor?.nationality ? guarantor.nationality : '',
        guarantor_phone: guarantor?.phone ? guarantor.phone : '',
        guarantor_relation: guarantor?.relation ? guarantor.relation : '',
        documents: {
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

    const handleFileProcessing = async (file) => {
        setIsLoading(true)
        try {

            const formData = new FormData();

            formData.append('file', file);

            const response = await axios.post(route('extreact-text'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.data.status_code === 200) {
                setIsLoading(false)
                const passportData = response.data.passport_data
                if (!passportData || !passportData.passport_no) {
                    setIsLoading(false)
                    toast.error("Necessary Data not found");
                    return;
                }
                setShow(true)
                setPassportData(passportData)
                setIsLoading(false)
                return
            }

            setIsLoading(false)
            toast.error("Necessary Data not found");

        } catch (e) {
            setIsLoading(false)
            toast.error("Can't Read This passport.");
        }

    }

    const handleFileChange = async (fileType, file) => {

        if (fileType === 'passport') {
            await handleFileProcessing(file)
            setIsPassportRequired(false)
        }
        if (fileType === 'photo') {
            setIsPhotoRequired(false)
        }

        setData(prevData => ({
            ...prevData,
            documents: {
                ...prevData.documents,
                [fileType]: {
                    name: documentTypes[fileType].name,
                    type: fileType,
                    file: file,
                },
            },
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setPreview(true)
    }

    const handleConfirmSubmit = () => {

        setPreview(false)

        if (!data.documents['passport'].file && !data.documents['photo'].file) {
            setIsPhotoRequired(true)
            setIsPassportRequired(true)
            return
        }

        if (!data.documents['passport'].file) {
            setIsPassportRequired(true)
            return
        }
        if (!data.documents['photo'].file) {
            setIsPhotoRequired(true)
            return
        }

        post(route('visa-apply.store'), {
            onSuccess: () => {
                toast("your application submitted successfully")
            }
        })
    }

    return (

        <WebLayout showBgImage={false} showServiceImage={false}>

            <Head title="Apply For New Visa | Dubai E-Visa"/>

            <div className="w-full h-full" style={{backgroundImage: `url(${assetUrl}images/background-all.png)`, backgroundSize: 'cover'}}>
                <div className="container">
                    <h3 className="text-text-primary text-lg font-semibold mt-3">Apply Visa</h3>

                    <form onSubmit={handleSubmit} className="mb-6">

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
                                isRequired={true}
                            />

                            <Select
                                placeholder="Processing Type"
                                label="Processing Type"
                                items={visaProcessingTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                handleValueChange={updateVisaProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                error={errors.processing_type}
                                isRequired={true}
                            />

                            <Select
                                placeholder="Visa Type"
                                label="Visa Type"
                                items={visaTypes}
                                selected={visaType}
                                setSelected={setVisaType}
                                handleValueChange={updateVisaType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                error={errors.visa_type}
                                isRequired={true}
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-x-4">

                            <TextInput
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                error={errors.name}
                                id="fullname-english"
                                placeholder="Full Name English"
                                label="Full Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                                isRequired={true}
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
                                label="Current Nationality"
                                isRequired={true}
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
                                label="Gender"
                                isRequired={true}
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
                                label="Date Of Birth"
                                isRequired={true}
                                divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                                type="date"
                            />

                            <Select
                                placeholder="Select Country"
                                label="Birth Country"
                                items={countries}
                                selected={birthCountry}
                                setSelected={setBirthCountry}
                                handleValueChange={updateBirthCountry}
                                error={errors.birth_country}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />


                            <Select
                                placeholder="Select Status"
                                label="Marital Status"
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

                            <Select
                                placeholder="Select Religion"
                                label="Religion"
                                items={religions}
                                selected={personReligion}
                                setSelected={setPersonReligion}
                                handleValueChange={(value) => setData('religion', value.name)}
                                error={errors.religion}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                isRequired={true}
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
                                label="Qualification"
                                isRequired={true}
                                divClasses="my-3"
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
                                label="Passport NO"
                                isRequired={true} divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                value={data.passport_issue_date}
                                onChange={(e) => setData('passport_issue_date', e.target.value)}
                                error={errors.passport_issue_date}
                                id="passport-issue-date"
                                placeholder="Passport Issue Date"
                                label="Passport Issue Date"
                                isRequired={true}
                                divClasses="my-3"
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
                                label="Passport Expire Date"
                                isRequired={true}
                                divClasses="my-3"
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
                                label="Passport Issue Place"
                                divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                value={data.passport_issue_place_arabic}
                                onChange={(e) => setData('passport_issue_place_arabic', e.target.value)}
                                error={errors.passport_issue_place_arabic}
                                id="passport-issue-place-arabic"
                                placeholder="Passport Issue Place Arabic"
                                label="Passport Issue Place(Arabic)"
                                divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <Select
                                placeholder="Passport Issue Country"
                                label="Passport Issue Country"
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
                                label="Name" divClasses="my-3"
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
                                label="Nationality"
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

                        <div >
                            <h4 className="text-success mt-6 text-md mb-5">Documents</h4>
                            <div className="flex gap-2 flex-wrap">
                                <div className="flex gap-x-2">
                                    <div>
                                        <PassportInputFile
                                            defaultClasses="w-[240px] h-[240px]"
                                            placeholder="Passport Page 1*"
                                            onChange={handleFileChange}
                                            fileType="passport"
                                            labelClasses="text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-2 gap-2 flex-wrap">

                                        <InputFile
                                            placeholder="Photo*"
                                            onChange={handleFileChange}
                                            fileType="photo"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                        <InputFile
                                            placeholder="Deposit Paper"
                                            onChange={handleFileChange}
                                            fileType="deposit"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                        <InputFile
                                            placeholder="ID Card"
                                            onChange={handleFileChange}
                                            fileType="id"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                        <InputFile
                                            placeholder="Residence Letter"
                                            onChange={handleFileChange}
                                            fileType="residence"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                        <InputFile
                                            placeholder="Sponsor Letter"
                                            onChange={handleFileChange}
                                            fileType="sponsor"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />
                                        <InputFile
                                            placeholder="Health Insurance"
                                            onChange={handleFileChange}
                                            fileType="health"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                        <InputFile
                                            placeholder="Return Ticket"
                                            onChange={handleFileChange}
                                            fileType="return_ticker"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />


                                        <InputFile
                                            placeholder="Bank Statement"
                                            onChange={handleFileChange}
                                            fileType="bank"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />


                                        <InputFile
                                            placeholder="Proof of Employment"
                                            onChange={handleFileChange}
                                            fileType="proof"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />


                                        <InputFile
                                            placeholder="Additional Document 1"
                                            onChange={handleFileChange}
                                            fileType="additional1"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />


                                        <InputFile
                                            placeholder="Additional Document 2"
                                            onChange={handleFileChange}
                                            fileType="additional1"
                                            defaultClasses="w-40 h-28"
                                            labelClasses="text-sm"
                                        />

                                    </div>
                                </div>

                            </div>

                            {isPassportRequired &&
                                <p className="text-warning text-sm my-2">Passport Document is required</p>}

                            {isPhotoRequired && <p className="text-warning text-sm">Photo Document is required</p>}

                        </div>
                        <div className="flex justify-center gap-x-2 mt-2 ">
                            <PrimaryBtn text="Submit" disabled={processing} type="submit" classes="w-[200px] bg-green-600"
                                onClick={handleSubmit} />
                            {/* <PrimaryBtn text="Save" disabled={processing} type="button" classes="w-[200px]"
                                    onClick={handleConfirmSubmit}/> */}
                        </div>
                    </form>
                </div>
        </div>
           

            {isLoading && <Loading/>}
            <PassportScanData
                show={show}
                setShow={setShow}
                setData={setData}
                passportInfo={passportData}
            />
            <PreviewVisaApply
                show={preview}
                setShow={setPreview}
                visa_apply={data}
                confirmSubmit={handleConfirmSubmit}
                isPassportRequired={isPassportRequired}
                isPhotoRequired={isPhotoRequired}
            />
        </WebLayout>
    )
}

export default VisaApply;
