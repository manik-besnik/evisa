import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import InputFile from "@/Components/Web/InputFile.jsx";
import {
    documentTypes,
    genders,
    groups,
    maritalStatuses,
    joDemand,
    visaTypes
} from "@/Components/Constant/index.js";
import { useState, useEffect } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import { FaCameraRetro } from "react-icons/fa";
import { Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import { jobApplyDocuments, languageProficiency } from "@/Components/Constant/index.js";


const JobDemand = () => {
    const { auth,countries } = usePage().props;
    ;

    // States for form elements
    const [nationality, setNationality] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [district, setDistrict] = useState('');
    const [applySource, setApplySource] = useState(''); // Inside UAE or Outside UAE
    const [applyLocation, setApplyLocation] = useState(''); // For specific location
    const [businessPhoto, setBusinessPhoto] = useState('');
    const [passportPhoto, setPassportPhoto] = useState(null);

    // Define UAE locations
    const uaeLocations = [
        { id: 'dubai', name: 'DUBAI' },
        { id: 'abudhabi', name: 'ABUDHABI' },
        { id: 'sharjah', name: 'SHARJAH' },
        { id: 'ajman', name: 'AJMAN' },
        { id: 'umm_al_quwain', name: 'UMM AL QWAIN' },
        { id: 'ras_al_khaimah', name: 'RAS AL KHAIMA' },
        { id: 'fujairah', name: 'FUJAYRAH' },
        { id: 'al_ain', name: 'AL AIN' }
    ];


    const [locationsToDisplay, setLocationsToDisplay] = useState([]);

    const applySourceOptions = [
        { id: 'inside_uae', name: 'Inside UAE' },
        { id: 'outside_uae', name: 'Outside UAE' }
    ];

    const initialState = {
        // Personal Details
        name: '',
        mobile: '',
        email: '',
        nationality: '',
        date_of_birth: '',
        gender: '',
        religion: '',
        blood_group: '',
        marital_status: '',

        // Address
        current_address_state: '',
        current_address_city: '',
        current_address_area: '',
        permanent_address_district: '',
        permanent_address_thana: '',
        permanent_address_village: '',

        // Passport & Visa
        passport_no: '',
        passport_expiry: '',
        country_contact_no: '',
        visa_status: '',
        visa_expiry: '',
        whatsapp_no: '',

        // Education
        education_certificate: '',
        education_year: '',
        education_board: '',
        computer_skills: '',
        driving_license: '',
        driving_license_issue_date: '',
        driving_license_expiry_date: '',
        english_proficiency: '',
        arabic_proficiency: '',
        other_languages: [],
        mother_language: '',

        // Job Experience
        job_experiences: [
            { position: '', duration: '', company_name: '', country: '' },
            { position: '', duration: '', company_name: '', country: '' }
        ],

        // Physical details
        shirt_size: '',
        pant_size: '',
        shoes_size: '',
        weight: '',
        height: '',
        nearest_airport: '',

        // Summary
        application_summary: '',

        // Job details
        apply_from_source: '',
        apply_location: '',
        job_post: ['', '', '']
    };

    const { data, setData, post, processing, errors, reset } = useForm(initialState);


    useEffect(() => {
        if (applySource && applySource.id === 'inside_uae') {
            setLocationsToDisplay(uaeLocations);
        } else if (applySource && applySource.id === 'outside_uae') {
            setLocationsToDisplay(countries);
        } else {
            setLocationsToDisplay([]);
        }

        // Reset the location when source changes
        setApplyLocation('');
        setData('apply_location', '');
    }, [applySource]);

    const resetForm = () => {
        reset();
        setNationality('');
        setGender('');
        setReligion('');
        setBloodGroup('');
        setMaritalStatus('');
        setDistrict('');
        setApplySource('');
        setApplyLocation('');
        setBusinessPhoto('');
        setPassportPhoto(null);
        setData(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData();


        Object.keys(data).forEach(key => {
            if (key === 'job_post') {
                // Handle array data
                data[key].forEach((value, index) => {
                    formData.append(`job_post[${index}]`, value);
                });
            } else {
                formData.append(key, data[key]);
            }
        });


        if (passportPhoto) {
            formData.append('passport_photo', passportPhoto);
        }


        post(route('job-posts.store'), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
                resetForm();
                toast("Job application submitted successfully!");
            },
            onError: () => {
                alert('Error submitting job application. Please check the form.');
            }
        });
    };

    // Handle select changes
    const updateApplySource = (value) => {
        setApplySource(value);
        setData('apply_from_source', value.id);
    };

    const updateApplyLocation = (value) => {
        setApplyLocation(value);
        setData('apply_location', value.id);
    };

    const updateNationality = (value) => {
        setNationality(value);
        setData('nationality', value.id);
    };

    const updateGender = (value) => {
        setGender(value);
        setData('gender', value.id);
    };

    const updateDistrict = (value) => {
        setDistrict(value);
        setData('permanent_address_district', value.id);
    };

    // Handle file input change
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPassportPhoto(file);
        }
    };

    // Handle job post selection change
    const handleJobPostChange = (index, value) => {
        const updatedPosts = [...data.job_post];
        updatedPosts[index] = value.id;
        setData('job_post', updatedPosts);
    };

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

    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job Application Form | Dubai E-Visa" />

            <div className="container mx-auto px-4 py-6">
                <div className="bg-white border-4 border-[#848585] p-6">

                    <form onSubmit={handleSubmit} className="mb-6">
                        {/* Apply From and Photo Upload */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 text-white text-center py-3 px-6 text-2xl font-bold">
                                        JOB<br />APPLICATION<br />
                                        <span className="bg-gray-400">FORM</span>
                                    </div>
                                </div>

                                <div className="flex items-center mb-4">
                                    <label className="text-xl font-bold mr-4">Apply From</label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Here"
                                            items={applySourceOptions}
                                            selected={applySource}
                                            setSelected={setApplySource}
                                            handleValueChange={updateApplySource}
                                            error={errors.apply_from_source}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>
                                {applySource && (
                                    <div className="flex items-center mb-4">
                                        <label className="text-xl font-bold mr- w-4/12">
                                            {applySource.id === 'inside_uae' ? 'Location' : 'Country'}
                                        </label>
                                        <div className="flex-1">
                                            <Select
                                                placeholder="Select Here"
                                                items={locationsToDisplay}
                                                selected={applyLocation}
                                                setSelected={setApplyLocation}
                                                handleValueChange={updateApplyLocation}
                                                error={errors.apply_location}
                                                required={true}
                                                defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="md:w-1/3 flex justify-center">
                                <div className="border-2 border-gray-300 w-56 h-full flex items-center justify-center">
                                    {passportPhoto ? (
                                        <img
                                            src={URL.createObjectURL(passportPhoto)}
                                            alt="Passport"
                                            className="max-w-full max-h-full"
                                        />
                                    ) : (
                                        <div className="text-center">
                                            <div className="flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                                    <circle cx="12" cy="13" r="4"></circle>
                                                </svg>
                                            </div>
                                            <p className="mt-2 text-sm">Passport Size Pic</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="md:w-1/3">
                                <div className="space-y-3">
                                    <TextInput
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Your Name"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                    <TextInput
                                        value={data.mobile}
                                        onChange={(e) => setData('mobile', e.target.value)}
                                        error={errors.mobile}
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
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />

                                </div>
                                <div className="mb-6 mt-3">
                                    <h2 className="text-red-600 text-xs font-bold mb-3">POST FOR APPLY</h2>
                                    <div className="grid">

                                        <Select
                                            placeholder="Select Here"
                                            items={[]} // Add your nationality options
                                            selected={nationality}
                                            setSelected={setNationality}
                                            handleValueChange={updateNationality}
                                            error={errors.nationality}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
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
                                                items={[]} // Add your nationality options
                                                selected={nationality}
                                                setSelected={setNationality}
                                                handleValueChange={updateNationality}
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
                                                items={[
                                                    { id: 'male', name: 'Male' },
                                                    { id: 'female', name: 'Female' },
                                                    { id: 'other', name: 'Other' }
                                                ]}
                                                selected={gender}
                                                setSelected={setGender}
                                                handleValueChange={updateGender}
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
                                                items={[]} // Add religion options
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
                                                items={[]} // Add blood group options
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
                                                items={[
                                                    { id: 'single', name: 'Single' },
                                                    { id: 'married', name: 'Married' },
                                                    { id: 'divorced', name: 'Divorced' },
                                                    { id: 'widowed', name: 'Widowed' }
                                                ]}
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
                        <hr className="border-2 border-[#848585] mb-3" />
                        {/* Address */}
                        <div className="mb-6">
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center">
                                    <label className="w-[12.90rem] font-bold">Current Address</label>
                                    <span className="mx-2">:</span>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <TextInput
                                            placeholder="State"
                                            value={data.current_address_state}
                                            onChange={(e) => setData('current_address_state', e.target.value)}
                                            error={errors.current_address_state}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="City"
                                            value={data.current_address_city}
                                            onChange={(e) => setData('current_address_city', e.target.value)}
                                            error={errors.current_address_city}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Area"
                                            value={data.current_address_area}
                                            onChange={(e) => setData('current_address_area', e.target.value)}
                                            error={errors.current_address_area}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <label className="w-[12.90rem] font-bold">Permanent Address</label>
                                    <span className="mx-2">:</span>
                                    <div className="flex-1 grid grid-cols-3 gap-2">
                                        <Select
                                            placeholder="District"
                                            items={[]} // Add district options
                                            selected={district}
                                            setSelected={setDistrict}
                                            handleValueChange={updateDistrict}
                                            error={errors.permanent_address_district}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Thana"
                                            value={data.permanent_address_thana}
                                            onChange={(e) => setData('permanent_address_thana', e.target.value)}
                                            error={errors.permanent_address_thana}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                        <TextInput
                                            placeholder="Village"
                                            value={data.permanent_address_village}
                                            onChange={(e) => setData('permanent_address_village', e.target.value)}
                                            error={errors.permanent_address_village}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-2 border-[#848585] mb-3" />
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
                                        value={data.education_certificate}
                                        onChange={(e) => setData('education_certificate', e.target.value)}
                                        error={errors.education_certificate}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <TextInput
                                        placeholder="Year"
                                        value={data.education_year}
                                        onChange={(e) => setData('education_year', e.target.value)}
                                        error={errors.education_year}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-7">
                                    <TextInput
                                        placeholder="Board | University"
                                        value={data.education_board}
                                        onChange={(e) => setData('education_board', e.target.value)}
                                        error={errors.education_board}
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
                                        value={data.computer_skills_details}
                                        onChange={(e) => setData('computer_skills_details', e.target.value)}
                                        error={errors.computer_skills_details}
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
                                        items={[
                                            { id: '1', name: 'light motor vehicle (Manual)' },
                                            { id: '2', name: 'light motor vehicle (Auto)' },
                                            { id: '3', name: 'Motorcycle' },
                                            { id: '4', name: 'Heavy truck' },
                                            { id: '5', name: 'Mini bus' },
                                            { id: '6', name: 'Heavy bus' },
                                            { id: '7', name: 'Fork lift' },
                                            { id: '8', name: 'Shovel' },
                                        ]}
                                        selected={data.has_driving_license}
                                        setSelected={(value) => setData('has_driving_license', value)}
                                        handleValueChange={(value) => setData('has_driving_license', value.id)}
                                        error={errors.has_driving_license}
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
                                        value={data.driving_license_expiry_date}
                                        onChange={(e) => setData('driving_license_expiry_date', e.target.value)}
                                        error={errors.driving_license_expiry_date}
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
                                        items={[
                                            { id: 'good', name: 'Good' },
                                            { id: 'fair', name: 'Fair' },
                                            { id: 'poor', name: 'Poor' }
                                        ]}
                                        selected={data.english_proficiency}
                                        setSelected={(value) => setData('english_proficiency', value)}
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
                                        items={[
                                            { id: 'good', name: 'Good' },
                                            { id: 'fair', name: 'Fair' },
                                            { id: 'poor', name: 'Poor' }
                                        ]}
                                        selected={data.other_languages_proficiency}
                                        setSelected={(value) => setData('other_languages_proficiency', value)}
                                        handleValueChange={(value) => setData('other_languages_proficiency', value.id)}
                                        error={errors.other_languages_proficiency}
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
                                        items={[
                                            { id: 'good', name: 'Good' },
                                            { id: 'fair', name: 'Fair' },
                                            { id: 'poor', name: 'Poor' }
                                        ]}
                                        selected={data.arabic_proficiency}
                                        setSelected={(value) => setData('arabic_proficiency', value)}
                                        handleValueChange={(value) => setData('arabic_proficiency', value.id)}
                                        error={errors.arabic_proficiency}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <p className="p-[7px] border-2 border-[#848585]">Mother Language</p>
                                </div>
                                <div className="col-span-3">
                                    <TextInput
                                        placeholder="Typing Here"
                                        value={data.mother_language}
                                        onChange={(e) => setData('mother_language', e.target.value)}
                                        error={errors.mother_language}
                                        defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Job Experience */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">JOB EXPERIENCE</h2>

                            {data.job_experiences.map((experience, index) => (
                                <div key={index} className="grid grid-cols-12 gap-3 mb-4">
                                    <div className="col-span-3">
                                        <TextInput
                                            placeholder="Position"
                                            value={experience.position}
                                            onChange={(e) => {
                                                const updated = [...data.job_experiences];
                                                updated[index].position = e.target.value;
                                                setData('job_experiences', updated);
                                            }}
                                            error={errors[`job_experiences.${index}.position`]}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <TextInput
                                            placeholder="Duration"
                                            value={experience.duration}
                                            onChange={(e) => {
                                                const updated = [...data.job_experiences];
                                                updated[index].duration = e.target.value;
                                                setData('job_experiences', updated);
                                            }}
                                            error={errors[`job_experiences.${index}.duration`]}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <TextInput
                                            placeholder="Company Name"
                                            value={experience.company_name}
                                            onChange={(e) => {
                                                const updated = [...data.job_experiences];
                                                updated[index].company_name = e.target.value;
                                                setData('job_experiences', updated);
                                            }}
                                            error={errors[`job_experiences.${index}.company_name`]}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <TextInput
                                            placeholder="Country"
                                            value={experience.country}
                                            onChange={(e) => {
                                                const updated = [...data.job_experiences];
                                                updated[index].country = e.target.value;
                                                setData('job_experiences', updated);
                                            }}
                                            error={errors[`job_experiences.${index}.country`]}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary for application */}
                        <div className="mb-6">
                            <div className="bg-yellow-300 p-4">
                                <div className="font-bold mb-2">Summary for application | _</div>
                                <Textarea
                                    value={data.application_summary}
                                    onChange={(e) => setData('application_summary', e.target.value)}
                                    rows={6}
                                    className="w-full border-2 border-[#848585] focus:border-[#848585]"
                                />
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
                                        items={[
                                            { id: 'S', name: 'S' },
                                            { id: 'M', name: 'M' },
                                            { id: 'L', name: 'L' },
                                            { id: 'XL', name: 'XL' },
                                            { id: 'XXL', name: 'XXL' }
                                        ]}
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
                                        value={data.shoes_size}
                                        onChange={(e) => setData('shoes_size', e.target.value)}
                                        error={errors.shoes_size}
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
