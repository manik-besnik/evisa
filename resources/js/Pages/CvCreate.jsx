import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {
    documentTypes,
    genders,
    groups,
    maritalStatuses,
    joDemand,
    visaTypes
} from "@/Components/Constant/index.js";
import { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import { FaCameraRetro } from "react-icons/fa";
import { Textarea } from "flowbite-react";
import { toast } from "react-toastify";


const JobDemand = () => {
    const { auth } = usePage().props;
    const countries = usePage().props.countries;

    // States for form elements
    const [nationality, setNationality] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [district, setDistrict] = useState('');
    const [applyCountry, setApplyCountry] = useState('');
    const [businessPhoto, setBusinessPhoto] = useState('');
    const [passportPhoto, setPassportPhoto] = useState(null);

    // Form initial state
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

        // Job details
        apply_from: '',
        job_post: ['', '', '']
    };

    const { data, setData, post, processing, errors, reset } = useForm(initialState);

    const resetForm = () => {
        reset();
        setNationality('');
        setGender('');
        setReligion('');
        setBloodGroup('');
        setMaritalStatus('');
        setDistrict('');
        setApplyCountry('');
        setBusinessPhoto('');
        setPassportPhoto(null);
        setData(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create FormData object for file uploads
        const formData = new FormData();

        // Append all form fields to FormData
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

        // Append passport photo if selected
        if (passportPhoto) {
            formData.append('passport_photo', passportPhoto);
        }

        // Post to the store route
        post(route('job-demand.store'), {
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
    const updateApplyCountry = (value) => {
        setApplyCountry(value);
        setData('apply_from', value.id);
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

    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job Application Form | Dubai E-Visa" />

            <div className="container mx-auto px-4 py-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-6">
                        <div className="bg-red-600 text-white text-center py-3 px-6 text-2xl font-bold">
                            JOB<br />APPLICATION<br />
                            <span className="bg-gray-400">FORM</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mb-6">
                        {/* Apply From and Photo Upload */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-4">
                                    <label className="text-xl font-bold mr-4">Apply From</label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Here"
                                            items={countries}
                                            selected={applyCountry}
                                            setSelected={setApplyCountry}
                                            handleValueChange={updateApplyCountry}
                                            error={errors.apply_from}
                                            required={true}
                                            defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3 flex justify-center">
                                <div className="border-2 border-gray-300 w-40 h-40 flex items-center justify-center">
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
                            </div>
                        </div>

                        {/* Job Posts */}
                        <div className="mb-6">
                            <h2 className="text-red-600 text-xl font-bold mb-3">POST FOR APPLY</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[0, 1, 2].map((index) => (
                                    <Select
                                        key={index}
                                        placeholder={`Select Option -${index + 1}`}
                                        items={[]} // Add your job post options here
                                        selected={data.job_post[index]}
                                        handleValueChange={(value) => handleJobPostChange(index, value)}
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                ))}
                            </div>
                        </div>

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

                        {/* Address */}
                        <div className="mb-6">
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center">
                                    <label className="w-1/4 font-bold">Current Address</label>
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
                                    <label className="w-1/4 font-bold">Permanent Address</label>
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

                        {/* Education */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">EDUCATION DETAILS</h2>
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-3">
                                    <TextInput
                                        placeholder="Certificate"
                                        value={data.education_certificate}
                                        onChange={(e) => setData('education_certificate', e.target.value)}
                                        error={errors.education_certificate}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <TextInput
                                        placeholder="Year"
                                        value={data.education_year}
                                        onChange={(e) => setData('education_year', e.target.value)}
                                        error={errors.education_year}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                                <div className="col-span-7">
                                    <TextInput
                                        placeholder="Board | University"
                                        value={data.education_board}
                                        onChange={(e) => setData('education_board', e.target.value)}
                                        error={errors.education_board}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* File Upload for Passport Photo */}
                        <div className="mb-6">
                            <label className="block font-bold mb-2">Upload Passport Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-blue-100"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6">
                            <PrimaryBtn
                                text="Submit Application"
                                type="submit"
                                classes="w-full md:w-1/3 py-3"
                                onClick={handleSubmit}
                                disabled={processing}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </WebLayout>
    );
};

export default JobDemand;
