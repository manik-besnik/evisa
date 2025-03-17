import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import InputFile from "@/Components/Web/InputFile.jsx";
import {
    documentTypes,
    genders,
    groups,
    maritalStatuses,
    visaTypes,
    bloodGroups,
    jobApplyDocuments,
    regions,
    postForApply,
    shirtSizes,
    languageProficiency,
    drivingLicenses,
    religions
} from "@/Components/Constant/index.js";
import {useState, useEffect} from "react";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import {FaTrashAlt} from "react-icons/fa";
import {toast} from "react-toastify";
import MultiSelect from "@/Components/Web/MultiSelect.jsx";
import FileUpload from "@/Components/Web/FileUpload.jsx";
import {FaPlus} from "react-icons/fa6";


const JobDemand = () => {

    const {apply_for, countries, locations, languages} = usePage().props;


    const [nationality, setNationality] = useState('');
    const [jobDemands, setJobDemands] = useState([])
    const [motherLanguage, setMotherLanguage] = useState(null)
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [applyLocation, setApplyLocation] = useState('');
    const [englishProficiency, setEnglishProficiency] = useState(null)
    const [arabicProficiency, setArabicProficiency] = useState(null)
    const [urduProficiency, setUrduProficiency] = useState(null)
    const [drivingLicense, setDrivingLicense] = useState(null)
    const [applyFor, setApplyFor] = useState(apply_for)


    const [region, setRegion] = useState(null)


    const {data, setData, post, errors, processing, reset} = useForm({
        job_post_id: route().params?.id ?? '',
        job_demand_id: apply_for.id ?? '',
        region: '',
        location: "",
        name: '',
        phone: '',
        email: '',
        avatar: '',
        nationality: "",
        gender: "",
        religion: "",
        blood_group: "",
        marital_status: "",
        current_state: "",
        current_city: "",
        current_area: "",
        permanent_district: "",
        permanent_thana: "",
        permanent_village: "",
        passport_no: "",
        passport_expiry: "",
        country_contact_no: "",
        visa_status: "",
        visa_expiry: "",
        whatsapp_no: "",
        exam_name: '',
        passing_year: '',
        institute: '',
        result: '',
        computer_skill: '',
        driving_license: '',
        driving_license_issue_date: '',
        driving_license_expire_date: '',
        english_proficiency: '',
        arabic_proficiency: '',
        urdu_proficiency: '',
        mother_language: '',
        shirt_size: '',
        pant_size: '',
        show_size: '',
        height: '',
        weight: '',
        nearest_airport: '',
        summary: '',
        documents: [],
        job_demands: [],
        job_experiences: [
            {
                position: "",
                duration: "",
                company: "",
                country: "",
                country_id: ""
            }
        ],
    })

    const updateJobExperience = (index, key, value) => {
        const updatedExperiences = [...data.job_experiences];

        updatedExperiences[index] = {
            ...updatedExperiences[index],
            [key]: value,
            ...(key === "country" && {country_id: value?.id})
        };

        setData('job_experiences', updatedExperiences);
    };
    const deleteExperience = (i) => {

        data.job_experiences.splice(i, 1)

        setData('job_experiences', data.job_experiences)

    }


    const addNewExperience = () => {
        const experience = {
            position: "",
            duration: "",
            company: "",
            country: "",
            country_id: ""
        }

        const experiences = [
            ...data.job_experiences,
            experience
        ]

        setData('job_experiences', experiences)
    }


    const handleFileChange = (fileType, file) => {
        const fileName = jobApplyDocuments.find((item) => item.type === fileType)?.name || "Unknown";

        const updatedDocuments = {
            ...data.documents,
            [fileType]: {
                name: fileName,
                type: fileType,
                file: file
            }
        };

        setData('documents', updatedDocuments);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('job-posts.store'), {
            onSuccess: () => {
                reset()
            },
        });
    };


    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job Application Form | Dubai E-Visa"/>

            <div className="container mx-auto px-4 py-6">
                <div className="bg-white border-4 border-[#848585] p-6">

                    <form onSubmit={handleSubmit} className="mb-6">
                        {/* Apply From and Photo Upload */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 text-white text-center py-3 px-6 text-2xl font-bold">
                                        JOB<br/>APPLICATION<br/>
                                        <span className="bg-gray-400">FORM</span>
                                    </div>
                                </div>

                                <div className="flex items-center mb-4">
                                    <label className="text-xl font-bold mr-4">Apply From</label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Here"
                                            items={regions}
                                            selected={region}
                                            setSelected={setRegion}
                                            handleValueChange={(value) => setData('region', value.name)}
                                            error={errors.region}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>

                                {region && (
                                    <div className="flex items-center mb-4">
                                        <label className="text-xl font-bold mr- w-4/12">
                                            {region.id === 1 ? 'Location' : 'Country'}
                                        </label>
                                        <div className="flex-1">
                                            {region.id === 1 ? <Select
                                                placeholder="Select Here"
                                                items={locations}
                                                selected={applyLocation}
                                                setSelected={setApplyLocation}
                                                handleValueChange={(value) => setData('location', value.name)}
                                                error={errors.location}
                                                required={true}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            /> : <Select
                                                placeholder="Select Here"
                                                items={countries}
                                                selected={applyLocation}
                                                setSelected={setApplyLocation}
                                                handleValueChange={(value) => setData('location', value.name)}
                                                error={errors.location}
                                                required={true}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="md:w-1/3 flex justify-center">
                                <div className="border-2 border-gray-300 w-56 h-full flex items-center justify-center">

                                    <FileUpload
                                        fileType="avatar"
                                        onChange={(value) => setData('avatar', value)}
                                        error={errors.avatar}

                                    >
                                        <div className="text-center">
                                            <div className="flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path
                                                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                                    <circle cx="12" cy="13" r="4"></circle>
                                                </svg>
                                            </div>
                                            <p className="mt-2 text-sm">Passport Size Pic</p>
                                        </div>
                                    </FileUpload>

                                </div>
                            </div>

                            <div className="md:w-1/3">
                                <div className="space-y-3">
                                    <TextInput
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Your Name"
                                        id="name"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"

                                    />
                                    <TextInput
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        error={errors.phone}
                                        id="phone"
                                        placeholder="Mobile No. with country Code"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                    <TextInput
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        error={errors.email}
                                        placeholder="e-mail ID"
                                        type="email"
                                        id="email"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />

                                </div>
                                <div className="mb-6 mt-3">
                                    <h2 className="text-red-600 text-xs font-bold mb-3">POST FOR APPLY</h2>
                                    <div className="grid">

                                        {applyFor ? <Select
                                                items={[]}
                                                selected={applyFor}
                                                setSelected={setApplyFor}
                                                handleValueChange={(value) => setData('job_demand_id', value.id)}
                                                field="type_of_work"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                                disabled={true}
                                            /> :
                                            <MultiSelect
                                                placeholder="Select Here"
                                                items={postForApply}
                                                selected={jobDemands}
                                                setSelected={setJobDemands}
                                                handleValueChange={(values) => setData('job_demands', values)}
                                                error={errors.job_demands}
                                                required={true}
                                                field="name"
                                                selectLimit="3"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />}

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Posts */}


                        {/* Personal Details */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">PERSONAL DETAILS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Nationality</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select Here"
                                                items={countries}
                                                field="nationality"
                                                selected={nationality}
                                                setSelected={setNationality}
                                                handleValueChange={(value) => setData('nationality', value.id)}
                                                error={errors.nationality}
                                                required={true}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Date Of Birth</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                type="date"
                                                value={data.date_of_birth}
                                                onChange={(e) => setData('date_of_birth', e.target.value)}
                                                error={errors.date_of_birth}
                                                required={true}
                                                id="data-of-birth"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Gender</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select Here"
                                                items={genders}
                                                selected={gender}
                                                setSelected={setGender}
                                                handleValueChange={(value) => setData('gender', value.id)}
                                                error={errors.gender}
                                                required={true}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Religion</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select"
                                                items={religions}
                                                selected={religion}
                                                setSelected={setReligion}
                                                handleValueChange={(value) => setData('religion', value.id)}
                                                error={errors.religion}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Blood Group</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select"
                                                items={bloodGroups}
                                                selected={bloodGroup}
                                                setSelected={setBloodGroup}
                                                handleValueChange={(value) => setData('blood_group', value.id)}
                                                error={errors.blood_group}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Marital Status</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select"
                                                items={maritalStatuses}
                                                selected={maritalStatus}
                                                setSelected={setMaritalStatus}
                                                handleValueChange={(value) => setData('marital_status', value.id)}
                                                error={errors.marital_status}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-[#848585] mb-3"/>
                        {/* Address */}
                        <div className="mb-6">
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center">
                                    <label className="w-[12.90rem] font-bold">Current Address</label>
                                    <span className="mx-2">:</span>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <TextInput
                                            placeholder="State"
                                            value={data.current_state}
                                            onChange={(e) => setData('current_state', e.target.value)}
                                            error={errors.current_state}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="City"
                                            value={data.current_city}
                                            onChange={(e) => setData('current_city', e.target.value)}
                                            error={errors.current_city}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Area"
                                            value={data.current_area}
                                            onChange={(e) => setData('current_area', e.target.value)}
                                            error={errors.current_area}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <label className="w-[12.90rem] font-bold">Permanent Address</label>
                                    <span className="mx-2">:</span>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <TextInput
                                            placeholder="District"
                                            value={data.permanent_district}
                                            onChange={(e) => setData('permanent_district', e.target.value)}
                                            error={errors.permanent_district}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Thana"
                                            value={data.permanent_thana}
                                            onChange={(e) => setData('permanent_thana', e.target.value)}
                                            error={errors.permanent_thana}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Village"
                                            value={data.permanent_village}
                                            onChange={(e) => setData('permanent_village', e.target.value)}
                                            error={errors.permanent_village}
                                            required={true}
                                            id="permanent_village"
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-[#848585] mb-3"/>
                        {/* Passport & Visa Information */}
                        <div className="mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Passport No</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                placeholder="Typing Here"
                                                value={data.passport_no}
                                                onChange={(e) => setData('passport_no', e.target.value)}
                                                error={errors.passport_no}
                                                required={true}
                                                id="passport_no"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Expiry Date</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                type="date"
                                                placeholder="Typing Here"
                                                value={data.passport_expiry}
                                                onChange={(e) => setData('passport_expiry', e.target.value)}
                                                error={errors.passport_expiry}
                                                required={true}
                                                id="passport_expiry"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Country Contact No</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                placeholder="With country Code"
                                                value={data.country_contact_no}
                                                onChange={(e) => setData('country_contact_no', e.target.value)}
                                                error={errors.country_contact_no}
                                                required={true}
                                                id="country_contact_no"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Visa Status</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                placeholder="Typing Here"
                                                value={data.visa_status}
                                                onChange={(e) => setData('visa_status', e.target.value)}
                                                error={errors.visa_status}
                                                required={true}
                                                id="visa_status"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Visa Expiry</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                type="date"
                                                placeholder="Typing Here"
                                                value={data.visa_expiry}
                                                onChange={(e) => setData('visa_expiry', e.target.value)}
                                                error={errors.visa_expiry}
                                                id="visa_expiry"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="w-1/3 font-bold">Whatsapp No.</label>
                                        <span className="mx-2">:</span>
                                        <div className="flex-1">
                                            <TextInput
                                                placeholder="with country Code"
                                                value={data.whatsapp_no}
                                                onChange={(e) => setData('whatsapp_no', e.target.value)}
                                                error={errors.whatsapp_no}
                                                required={true}
                                                id="whatsapp_no"
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Education - Enhanced Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">EDUCATION DETAILS</h2>

                            {/* Original education fields */}
                            <div className="grid grid-cols-12 gap-3 mb-4">
                                <div className="col-span-3">
                                    <TextInput
                                        placeholder="Certificate"
                                        value={data.exam_name}
                                        onChange={(e) => setData('exam_name', e.target.value)}
                                        error={errors.exam_name}
                                        id="exam_name"
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <TextInput
                                        placeholder="Year"
                                        value={data.passing_year}
                                        onChange={(e) => setData('passing_year', e.target.value)}
                                        error={errors.passing_year}
                                        id="passing_year"
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-7">
                                    <TextInput
                                        placeholder="Board | University"
                                        value={data.institute}
                                        onChange={(e) => setData('institute', e.target.value)}
                                        error={errors.institute}
                                        id="institute"
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            {/* Computer Skills */}
                            <div className="grid grid-cols-12 gap-3 mb-4">
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">Computer Skills</p>
                                </div>
                                <div className="col-span-9">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.computer_skill}
                                        onChange={(e) => setData('computer_skill', e.target.value)}
                                        error={errors.computer_skill}
                                        id="computer_skill"
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            {/* Driving License */}
                            <div className="grid grid-cols-12 gap-3 mb-4">
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">Driving License</p>

                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Select"
                                        items={drivingLicenses}
                                        selected={drivingLicense}
                                        setSelected={setDrivingLicense}
                                        handleValueChange={(value) => setData('driving_license', value.id)}
                                        error={errors.driving_license}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <TextInput
                                        type="date"
                                        placeholder="Issue Date"
                                        value={data.driving_license_issue_date}
                                        onChange={(e) => setData('driving_license_issue_date', e.target.value)}
                                        error={errors.driving_license_issue_date}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <TextInput
                                        type="date"
                                        placeholder="Expire Date"
                                        value={data.driving_license_expire_date}
                                        onChange={(e) => setData('driving_license_expire_date', e.target.value)}
                                        error={errors.driving_license_expire_date}
                                        id="driving_license_expire_date"
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            {/* Language Proficiency */}
                            <div className="grid grid-cols-12 gap-3 mb-4">
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">English</p>

                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Good | Fair | Poor"
                                        items={languageProficiency}
                                        selected={englishProficiency}
                                        setSelected={setEnglishProficiency}
                                        handleValueChange={(value) => setData('english_proficiency', value.id)}
                                        error={errors.english_proficiency}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">Urdu | Hindi</p>
                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Good | Fair | Poor"
                                        items={languageProficiency}
                                        selected={urduProficiency}
                                        setSelected={setUrduProficiency}
                                        handleValueChange={(value) => setData('urdu_proficiency', value.id)}
                                        error={errors.urdu_proficiency}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-3 mb-4">
                                <div className="col-span-3">

                                    <p className="p-[7px] border-2 border-[#848585]">Arabic</p>
                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Good | Fair | Poor"
                                        items={languageProficiency}
                                        selected={arabicProficiency}
                                        setSelected={setArabicProficiency}
                                        handleValueChange={(value) => setData('arabic_proficiency', value.id)}
                                        error={errors.arabic_proficiency}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">Mother Language</p>
                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Select Language"
                                        items={languages}
                                        selected={motherLanguage}
                                        setSelected={setMotherLanguage}
                                        handleValueChange={(value) => setData('mother_language', value.id)}
                                        error={errors.mother_language}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Job Experience */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mt-8">
                                <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">JOB
                                    EXPERIENCE</h2>
                                <button type="button" onClick={addNewExperience}
                                        className="flex items-center gap-x-2 py-2 px-4 text-white bg-yellow-500 hover:bg-primary font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)] text-xs hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200">
                                    <FaPlus className="text-white"/> Add New Experience
                                </button>
                            </div>

                            {data.job_experiences.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 mb-4">
                                    <div className="w-1/4">
                                        <TextInput
                                            value={item.position}
                                            onChange={(e) => updateJobExperience(i, "position", e.target.value)}
                                            error={errors?.job_experiences ? errors?.job_experiences[i]?.position : ""}
                                            id={`position-${i}`}
                                            placeholder="EX: Software Enginner"
                                            label="Position*"
                                            defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                            labelClasses="text-text-primary"
                                        />
                                    </div>
                                    <div className="w-1/4">
                                        <TextInput
                                            value={item.duration}
                                            onChange={(e) => updateJobExperience(i, "duration", e.target.value)}
                                            error={errors?.job_experiences ? errors?.job_experiences[i]?.duration : ""}// error={errors.passing_year}
                                            id={`duration-${i}`}
                                            placeholder="EX: 4 Years"
                                            label="Duration*"
                                            defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                            labelClasses="text-text-primary"
                                        />
                                    </div>
                                    <div className="w-1/4">
                                        <TextInput
                                            value={item.company}
                                            onChange={(e) => updateJobExperience(i, "company", e.target.value)}
                                            error={errors?.job_experiences ? errors?.job_experiences[i]?.company : ""}
                                            id={`company-${i}`}
                                            placeholder="Company Name"
                                            label="Company Name*"
                                            defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                            labelClasses="text-text-primary"
                                        />
                                    </div>
                                    <div className="w-1/4">
                                        <Select
                                            placeholder="Select Country"
                                            label="Country*"
                                            items={countries}
                                            selected={item.country}
                                            setSelected={(value) => updateJobExperience(i, "country", value)}
                                            handleValueChange={(value) => updateJobExperience(i, "country", value)}
                                            error={errors?.job_experiences ? errors?.job_experiences[i]?.country_id : ""}
                                            defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                        />
                                    </div>
                                    {data.job_experiences.length > 1 && (
                                        <button type="button" onClick={() => deleteExperience(i)}
                                                className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                            <FaTrashAlt/></button>)}
                                </div>
                            ))}
                        </div>

                        {/* Summary for application */}
                        <div className="mb-6">
                            <div className="bg-yellow-300 p-4">
                                <div className="font-bold mb-2">Summary for application | _</div>
                                <textarea
                                    value={data.summary}
                                    onChange={(e) => setData('summary', e.target.value)}
                                    rows={6}
                                    id="summary"
                                    className="w-full border-2 border-[#848585] rounded focus:border-[#848585]"
                                >{data.summary}</textarea>
                            </div>
                        </div>

                        {/* Physical Details */}
                        <div className="mb-6">
                            <div className="grid grid-cols-12 gap-3 mb-1">
                                <div className="col-span-2 flex items-center">
                                    <span className="font-bold">Shirt Size</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-3">
                                    <Select
                                        placeholder="Select Here"
                                        items={shirtSizes}
                                        selected={data.shirt_size}
                                        setSelected={(value) => setData('shirt_size', value)}
                                        handleValueChange={(value) => setData('shirt_size', value.id)}
                                        error={errors.shirt_size}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3 flex items-center">
                                    <span className="font-bold">Weight (In Kgs)</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-4">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.weight}
                                        onChange={(e) => setData('weight', e.target.value)}
                                        error={errors.weight}
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-3 mb-1">
                                <div className="col-span-2 flex items-center">
                                    <span className="font-bold">Pant Size (Waist)</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-3">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.pant_size}
                                        onChange={(e) => setData('pant_size', e.target.value)}
                                        error={errors.pant_size}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3 flex items-center">
                                    <span className="font-bold">Height (In Centimeters)</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-4">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.height}
                                        onChange={(e) => setData('height', e.target.value)}
                                        error={errors.height}
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-3 mb-1">
                                <div className="col-span-2 flex items-center">
                                    <span className="font-bold">Shoes Size</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-3">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.show_size}
                                        onChange={(e) => setData('show_size', e.target.value)}
                                        error={errors.show_size}
                                        id="show-size"
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3 flex items-center">
                                    <span className="font-bold">Nearest Airport</span>
                                    <span className="mx-2">:</span>
                                </div>
                                <div className="col-span-4">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.nearest_airport}
                                        onChange={(e) => setData('nearest_airport', e.target.value)}
                                        error={errors.nearest_airport}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                            </div>
                        </div>

                        <h4 className="text-success text-md my-4">Add Any Type of documents</h4>

                        {errors.documents && <span className='text-red-600 text-sm'>{errors.documents}</span>}

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2">
                            {jobApplyDocuments.map((item, i) => (
                                <InputFile
                                    defaultClasses="w-full h-15"
                                    key={i} fileType={item.type}
                                    onChange={handleFileChange} placeholder={item.name}
                                />
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6 gap-3">
                            <PrimaryBtn
                                text="Submit Application"
                                type="submit"
                                classes="w-full md:w-2/12 py-3"
                                onClick={handleSubmit}
                                disabled={processing}
                            />
                            <PrimaryBtn
                                text="Preview"
                                type="submit"
                                classes="w-full md:w-2/12 py-3"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </WebLayout>
    );
};

export default JobDemand;
