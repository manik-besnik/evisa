import {useForm, usePage} from "@inertiajs/react";
import Select from "@/Components/Select.jsx";
import {useEffect, useState} from "react";
import {
    documentTypes,
    genders,
    groups,
    maritalStatuses,
    visaProcessingTypes,
    visaTypes
} from "@/Components/Constant/index.js";
import InputBox from "@/Components/Admin/InputBox.jsx";
import InputFile from "@/Components/Admin/InputFile.jsx";
import axios from "axios";

const VisaApplyForm = ({submitUrl}) => {

    const {countries, users} = usePage().props;

    const [user, setUser] = useState(null);

    const [personalInfo, setPersonalInfo] = useState({});
    const [passport, setPassport] = useState({});
    const [guarantor, setGuarantor] = useState({});

    useEffect(() => {
        if (user?.id) {
            const getVisaInfo = async () => {
                try {
                    const { data } = await axios.get(route('visa-info', user?.id));

                    // Update local states first
                    setPersonalInfo(data.personal_info || {});
                    setPassport(data.passport || {});
                    setGuarantor(data.guarantor || {});

                    // Wait until state updates, then update derived states
                    setTimeout(() => {
                        setCurrentNationality(countries.find(item => item.id === data.personal_info?.current_nationality) || '');
                        setPrevNationality(countries.find(item => item.id === data.personal_info?.prev_nationality) || '');
                        setGender(genders.find(item => item.id === data.personal_info?.gender) || '');
                        setBirthCountry(countries.find(item => item.id === data.personal_info?.birth_country) || '');
                        setMaritalStatus(maritalStatuses.find(item => item.id === data.personal_info?.marital_status) || '');
                        setPassportIssueCountry(countries.find(item => item.id === data.passport?.passport_issue_country) || '');
                        setGuarantorNationality(countries.find(item => item.id === data.guarantor?.nationality) || '');
                    }, 0);
                } catch (error) {
                    console.error("Error fetching visa info:", error);
                }
            };
            getVisaInfo();
        }
    }, [user?.id]);


    const [isPassportRequired, setIsPassportRequired] = useState(false);
    const [isPhotoRequired, setIsPhotoRequired] = useState(false);

    const [processingType, setProcessingType] = useState('');
    const [visaType, setVisaType] = useState('');
    const [group, setGroup] = useState('');
    const [currentNationality, setCurrentNationality] = useState('');
    const [prevNationality, setPrevNationality] = useState('');
    const [gender, setGender] = useState('');
    const [birthCountry, setBirthCountry] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [passportIssueCountry, setPassportIssueCountry] = useState('');
    const [guarantorNationality, setGuarantorNationality] = useState('');

    const {data, setData, post, errors, processing} = useForm({
        personal_name: '',
        processing_type: null,
        visa_type: null,
        group: null,
        name: '',
        name_arabic: '',
        current_nationality: '',
        prev_nationality: '',
        gender: '',
        date_of_birth: '',
        birth_country: '',
        marital_status: '',
        birth_place: '',
        birth_place_arabic: '',
        mother_name: '',
        mother_name_arabic: '',
        religion: '',
        faith: '',
        qualification: '',
        profession: '',
        passport_type: '',
        passport_no: '',
        passport_issue_date: '',
        passport_expire_date: '',
        passport_issue_place: '',
        passport_issue_place_arabic: '',
        passport_issue_country: '',
        guarantor_name: '',
        guarantor_passport_no: '',
        guarantor_nationality: '',
        guarantor_phone: '',
        guarantor_relation: '',
        documents: {
            passport: {name: "Passport", type: "passport", file: null},
            photo: {name: "Photo", type: "photo", file: null},
        },
    });
    useEffect(() => {
        if (Object.keys(personalInfo).length > 0 || Object.keys(passport).length > 0 || Object.keys(guarantor).length > 0) {
            setData(prevData => ({
                ...prevData,
                name: personalInfo?.name || '',
                name_arabic: personalInfo?.name_arabic || '',
                current_nationality: personalInfo?.current_nationality || '',
                prev_nationality: personalInfo?.prev_nationality || '',
                gender: personalInfo?.gender || '',
                date_of_birth: personalInfo?.date_of_birth || '',
                birth_country: personalInfo?.birth_country || '',
                marital_status: personalInfo?.marital_status || '',
                birth_place: personalInfo?.birth_place || '',
                birth_place_arabic: personalInfo?.birth_place_arabic || '',
                mother_name: personalInfo?.mother_name || '',
                mother_name_arabic: personalInfo?.mother_name_arabic || '',
                religion: personalInfo?.religion || '',
                faith: personalInfo?.faith || '',
                qualification: personalInfo?.qualification || '',
                profession: personalInfo?.profession || '',
                passport_type: passport?.passport_type || '',
                passport_no: passport?.passport_no || '',
                passport_issue_date: passport?.passport_issue_date || '',
                passport_expire_date: passport?.passport_expire_date || '',
                passport_issue_place: passport?.passport_issue_place || '',
                passport_issue_place_arabic: passport?.passport_issue_place_arabic || '',
                passport_issue_country: passport?.passport_issue_country || '',
                guarantor_name: guarantor?.name || '',
                guarantor_passport_no: guarantor?.passport_no || '',
                guarantor_nationality: guarantor?.nationality || '',
                guarantor_phone: guarantor?.phone || '',
                guarantor_relation: guarantor?.relation || '',
            }));
        }
    }, [personalInfo, passport, guarantor]);
    const updateUser = (value) => {
        setData('user_id', value.id)
    }

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

    const handleFileChange = (fileType, file) => {
        data.documents[fileType] = {
            "name": documentTypes[fileType].name,
            "type": fileType,
            "file": file
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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

        post(submitUrl)
    }


    return (
        <>

            <div className=" bg-white lg:rounded-[8px] py-1.5 px-4 lg:py-4 mt-4">
                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 items-center">

                        <Select
                            placeholder="Select User"
                            label="User*"
                            items={users}
                            selected={user}
                            setSelected={setUser}
                            handleValueChange={updateUser}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            error={errors.processing_type}
                        />

                        <InputBox
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


                    <div className="w-full">
                        <h4 className="text-success my-4 text-md">Personal Information</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-x-4 gap-y-2">

                            <InputBox
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                error={errors.name}
                                id="fullname-english"
                                placeholder="Full Name English"
                                label="Full Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <InputBox
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


                            <InputBox
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

                            <InputBox
                                value={data.birth_place}
                                onChange={(e) => setData('birth_place', e.target.value)}
                                error={errors.birth_place}
                                id="birth-place-english"
                                placeholder="Birth Place English"
                                label="Birth Place (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <InputBox
                                value={data.birth_place_arabic}
                                onChange={(e) => setData('birth_place_arabic', e.target.value)}
                                error={errors.birth_place_arabic}
                                id="birth-place-arabic"
                                placeholder="Birth Place Arabic"
                                label="Birth Place (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
                                value={data.mother_name}
                                onChange={(e) => setData('mother_name', e.target.value)}
                                error={errors.mother_name}
                                id="mother-english"
                                placeholder="Mother Name English"
                                label="Mother Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <InputBox
                                value={data.mother_name_arabic}
                                onChange={(e) => setData('mother_name_arabic', e.target.value)}
                                error={errors.mother_name_arabic}
                                id="mother-arabic"
                                placeholder="Mother Name Arabic"
                                label="Mother Name (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <InputBox
                                value={data.religion}
                                onChange={(e) => setData('religion', e.target.value)}
                                error={errors.religion}
                                id="religion"
                                placeholder="Religion"
                                label="Religion" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
                                value={data.faith}
                                onChange={(e) => setData('faith', e.target.value)}
                                error={errors.faith}
                                id="faith"
                                placeholder="Faith"
                                label="Faith" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
                                value={data.qualification}
                                onChange={(e) => setData('qualification', e.target.value)}
                                error={errors.qualification}
                                id="qualification"
                                placeholder="Qualification"
                                label="Qualification" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
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
                    </div>

                    <div className="w-full">
                        <h4 className="text-success mt-6 text-md mb-5">Documents</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

                            <InputFile
                                placeholder="Passport Page 1"
                                onChange={handleFileChange}
                                fileType="passport"
                                type="file"
                            />

                            <InputFile
                                placeholder="Photo"
                                onChange={handleFileChange}
                                fileType="photo"
                            />

                            <InputFile
                                placeholder="Deposit Paper"
                                onChange={handleFileChange}
                                fileType="deposit"
                            />

                            <InputFile
                                placeholder="ID Card"
                                onChange={handleFileChange}
                                fileType="id"
                            />

                            <InputFile
                                placeholder="Residence Letter"
                                onChange={handleFileChange}
                                fileType="residence"
                            />

                            <InputFile
                                placeholder="Sponsor Letter"
                                onChange={handleFileChange}
                                fileType="sponsor"
                            />
                            <InputFile
                                placeholder="Health Insurance"
                                onChange={handleFileChange}
                                fileType="health"
                            />


                            <InputFile
                                placeholder="Return Ticket"
                                onChange={handleFileChange}
                                fileType="return_ticker"
                            />


                            <InputFile
                                placeholder="Bank Statement"
                                onChange={handleFileChange}
                                fileType="bank"
                            />


                            <InputFile
                                placeholder="Proof of Employment"
                                onChange={handleFileChange}
                                fileType="proof"
                            />


                            <InputFile
                                placeholder="Additional Document 1"
                                onChange={handleFileChange}
                                fileType="additional1"
                            />


                            <InputFile
                                placeholder="Additional Document 2"
                                onChange={handleFileChange}
                                fileType="additional1"
                            />


                            {isPassportRequired &&
                                <p className="text-warning text-sm my-2">Passport Document is required</p>}

                            {isPhotoRequired && <p className="text-warning text-sm">Photo Document is required</p>}

                        </div>

                    </div>
                    <div className="w-full">
                        <h4 className="text-success my-4 text-md">Passport Information</h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 items-center">

                            <InputBox
                                value={data.passport_type}
                                onChange={(e) => setData('passport_type', e.target.value)}
                                error={errors.passport_type}
                                id="passport-type"
                                placeholder="Ex: Ordinary"
                                label="Passport Type" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
                                value={data.passport_no}
                                onChange={(e) => setData('passport_no', e.target.value)}
                                error={errors.passport_no}
                                id="passport-no"
                                placeholder="Passport NO"
                                label="Passport NO*" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <InputBox
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

                            <InputBox
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

                            <InputBox
                                value={data.passport_issue_place}
                                onChange={(e) => setData('passport_issue_place', e.target.value)}
                                error={errors.passport_issue_place}
                                id="passport-issue-place"
                                placeholder="Passport Issue Place"
                                label="Passport Issue Place*" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
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


                    </div>
                    <div className="w-full">
                        <h4 className="text-success my-4 text-md">Guarantor Information</h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 items-center">

                            <InputBox
                                value={data.guarantor_name}
                                onChange={(e) => setData('guarantor_name', e.target.value)}
                                error={errors.guarantor_name}
                                id="guarntor-name"
                                placeholder="Ex: Jhon Deo"
                                label="Name*" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
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


                            <InputBox
                                value={data.guarantor_phone}
                                onChange={(e) => setData('guarantor_phone', e.target.value)}
                                error={errors.guarantor_phone}
                                id="guarantor-phone"
                                placeholder="Mobile"
                                label="Mobile" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <InputBox
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
                    </div>

                    <div className="flex justify-center mt-2">
                        <button disabled={processing} className="btn-primary" type="submit"
                                onClick={handleSubmit}>Save
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default VisaApplyForm;
