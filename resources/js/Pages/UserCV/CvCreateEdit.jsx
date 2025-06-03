import React from 'react';
import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {
    genders,
    maritalStatuses,
    bloodGroups,
    educationQualifications,
    religions
} from "@/Components/Constant/index.js";
import {useState, useEffect} from "react";
import {Head, useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import {FaTrashAlt} from "react-icons/fa";
import FileUpload from "@/Components/Web/FileUpload.jsx";
import {FaPlus} from "react-icons/fa6";
import MultiSelect from "@/Components/Web/MultiSelect.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import ResumePreview from "@/Components/Web/ResumePreview.jsx";


const CvCreate = () => {

    const { countries, languages, cv, format } = usePage().props;

    const userSelectedLanguages = languages.filter(lang =>
        cv?.languages?.split(',').map(name => name.trim()).includes(lang.name)
    );

    const [nationality, setNationality] = useState(countries.find(item => item.id === cv?.nationality) ?? '');
    const [gender, setGender] = useState(genders.find(item => item.id == cv?.gender) ?? '');
    const [religion, setReligion] = useState(religions.find(item => item.id == cv?.religion) ?? '');
    const [bloodGroup, setBloodGroup] = useState(bloodGroups.find(item => item.id == cv?.blood_group) ?? '');
    const [maritalStatus, setMaritalStatus] = useState(maritalStatuses.find(item => item.id == cv?.marital_status) ?? '');
    const [selectedLanguages, setSelectedLanguages] = useState(userSelectedLanguages ?? [])
    const [resumePreview, setResumePreview] = useState(false)

    const {data, setData, post, errors, processing, reset} = useForm({
        name: cv?.name,
        designation: cv?.designation,
        phone: cv?.phone,
        email: cv?.email,
        website: cv?.website,
        avatar: '',
        nationality: cv?.nationality,
        gender: cv?.gender,
        date_of_birth: cv?.date_of_birth,
        religion: cv?.religion,
        blood_group: cv?.blood_group,
        marital_status: cv?.marital_status,
        cv_type: format,
        
        
        personal_skills: cv?.personal_skills,
        interests: cv?.interests,
        languages: userSelectedLanguages ?? [],
        summary: cv?.summary,
        job_experiences: cv?.experiences?.length > 0 ? cv.experiences : [
            {
                position: "",
                start_date: "",
                end_date: "",
                is_present: false,
                company: "",
                description: "",
            }
        ],
        educations: cv?.educations?.length ? cv.educations :  [
            {
                qualification: "",
                institute: "",
                start_date: "",
                end_date: "",
                is_present: false,
                result: "",
            }
        ],
        references: cv?.references?.length ? cv.references : [
            {
                name: "",
                company: "",
                designation: "",
                phone: "",
                email: "",
            }
        ]
    })


    const updateJobExperience = (index, key, value) => {
        const updatedExperiences = [...data.job_experiences];

        updatedExperiences[index] = {
            ...updatedExperiences[index],
            [key]: value
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
            start_date: "",
            end_date: "",
            is_present: false,
            company: "",
            description: "",
        }

        const experiences = [
            ...data.job_experiences,
            experience
        ]

        setData('job_experiences', experiences)
    }


    const addNewEducation = () => {
        const education = {
            qualification: "",
            institute: "",
            start_date: "",
            end_date: "",
            is_present: false,
            result: "",
        }

        const educations = [
            ...data.educations,
            education
        ]

        setData('educations', educations)
    }

    const updateEducation = (index, key, value) => {
        const updatedEducations = [...data.educations];

        updatedEducations[index] = {
            ...updatedEducations[index],
            [key]: value
        };

        setData('educations', updatedEducations);
    };

    const deleteEducation = (i) => {

        data.educations.splice(i, 1)

        setData('educations', data.educations)

    }

    const addNewReference = () => {
        const reference = {
            name: "",
            company: "",
            designation: "",
            phone: "",
            email: "",
        }

        const references = [
            ...data.references,
            reference
        ]

        setData('references', references)
    }

    const updateReference = (index, key, value) => {
        const updatedEducations = [...data.references];

        updatedEducations[index] = {
            ...updatedEducations[index],
            [key]: value
        };

        setData('references', updatedEducations);
    };

    const deleteReference = (i) => {

        data.references.splice(i, 1)

        setData('references', data.references)

    }

    const updateCheckboxField = (field, index) => {
        const updatedData = [...data[field]];

        updatedData[index] = {
            ...updatedData[index],
            ['is_present']: !updatedData[index]['is_present'],
        };

        setData(field, updatedData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        confirmSubmit()

    };

    const confirmSubmit = () => {
        setResumePreview(false);

        post(route('cv.store'), {
            onSuccess: () => {
                reset()
            },
        });
    }


    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="CV Create Form | Dubai E-Visa"/>

            <div className="container mx-auto px-4 py-6">
                <div className="bg-white border-4 border-[#848585] p-6">

                    <form onSubmit={handleSubmit} className="mb-6">
                        {/* Apply From and Photo Upload */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-600 text-white text-center py-3 px-6 text-2xl font-bold">
                                        <span className="bg-gray-400">RESUME CREATE</span>
                                    </div>
                                </div>

                            </div>

                            <div className="md:w-1/3 flex justify-center">
                                <div className="border-2 border-gray-300 w-56 h-full flex items-center justify-center">

                                    <FileUpload
                                        fileType="avatar"
                                        onChange={(fileType, value) => setData('avatar', value)}
                                        error={errors.avatar}

                                    >
                                        {cv?.avatar ? (<img src={cv.avatar} className="w-auto m-auto h-full p-2 text-center" alt="Uploaded file"/>) :
                                            <div className="flex flex-col items-center text-center">
                                                <div className="flex items-center justify-center">
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
                                        }
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
                                        divClasses="mb-2"

                                    />
                                    <TextInput
                                        value={data.designation}
                                        onChange={(e) => setData('designation', e.target.value)}
                                        error={errors.designation}
                                        placeholder="Designation"
                                        id="name"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        divClasses="mb-2"

                                    />
                                    <TextInput
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        error={errors.phone}
                                        id="phone"
                                        placeholder="Mobile No. with country Code"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        divClasses="mb-2"
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
                                        divClasses="mb-2"
                                    />

                                    <TextInput
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        error={errors.website}
                                        placeholder="Website Link"
                                        type="email"
                                        id="email"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                        divClasses="mb-2"
                                    />
                                </div>

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
                       
                        {/* Education - Enhanced Section */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">EDUCATION DETAILS</h2>

                            {data.educations.map((item, i) => (
                                <div key={i} className="mb-4">
                                    <div className="flex items-center gap-3 ">
                                        <div className="w-1/4">
                                            <label className="w-1/3">Exam*</label>
                                            <div className="flex-1">
                                                <Select
                                                    placeholder="Select Qualification"
                                                    items={educationQualifications}
                                                    selected={item.qualification ? educationQualifications.find(qual => qual.id === item.qualification) : ''}
                                                    setSelected={(value) => updateEducation(i, "qualification", value.id)}
                                                    handleValueChange={(value) => updateEducation(i, "qualification", value.id)}
                                                    error={errors?.educations ? errors?.educations[i]['qualification'] : ""}
                                                    defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585] p-3"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.institute}
                                                onChange={(e) => updateEducation(i, "institute", e.target.value)}
                                                error={errors?.educations ? errors?.educations[i]['institute'] : ""}
                                                id={`institute-${i}`}
                                                placeholder="EX: Institute Name"
                                                label="Institute*"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.result}
                                                onChange={(e) => updateEducation(i, "result", e.target.value)}
                                                error={errors?.educations ? errors?.educations[i]['result'] : ""}
                                                id={`result-${i}`}
                                                placeholder="Result(GPA/CGPA)"
                                                label="Result*"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.start_date}
                                                onChange={(e) => updateEducation(i, "start_date", e.target.value)}
                                                error={errors?.educations ? errors?.educations[i]['start_date'] : ""}
                                                id={`start-date-${i}`}
                                                label="Start Date*"
                                                type="date"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.end_date}
                                                onChange={(e) => updateEducation(i, "end_date", e.target.value)}
                                                error={errors?.educations ? errors?.educations[i]['end_date'] : ""}
                                                id={`end-date-${i}`}
                                                label="End Date"
                                                type="date"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>

                                        <div className="w-1/4">
                                            <label className="flex items-center mt-5"
                                                   htmlFor={`current-institute-${i}`}>
                                                <Checkbox
                                                    value={item.is_present}
                                                    onChange={() => updateCheckboxField('educations', i)}
                                                    id={`current-institute-${i}`}
                                                />
                                                <span className="ml-1"> Current Institute</span>
                                            </label>
                                        </div>

                                        {data.educations.length - 1 === i && (
                                            <button type="button" onClick={() => addNewEducation()}
                                                    className="bg-primary text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                                <FaPlus className="text-white"/>
                                            </button>)}

                                        {data.educations.length > 1 && (
                                            <button type="button" onClick={() => deleteEducation(i)}
                                                    className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                                <FaTrashAlt/></button>)}

                                    </div>

                                </div>
                            ))}

                            {/* Computer Skills */}
                          

                            <MultiSelect
                                items={languages}
                                selected={selectedLanguages}
                                setSelected={setSelectedLanguages}
                                handleValueChange={(value) => setData('languages', value)}
                                placeholder="Select Languages"
                                label="Select Language*"
                                error={errors.languages}
                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                            />

                            <div>
                                <p className="mt-2 mb-1 text-sm border-[#848585]">
                                    Personal Skills (Add Multiple Item separate by comma)
                                </p>
                                <TextInput
                                    value={data.personal_skills}
                                    onChange={(e) => setData('personal_skills', e.target.value)}
                                    error={errors.personal_skills}
                                    id="personal_skills"
                                    placeholder="Ex: Swaiming,Travikibg,Reading"
                                    defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                />
                            </div>
                            <div>
                                <p className="mt-2 mb-1 text-sm border-[#848585]">
                                    Interests (Add Multiple Item separate by comma)
                                </p>
                                <TextInput
                                    value={data.interests}
                                    onChange={(e) => setData('interests', e.target.value)}
                                    error={errors.interests}
                                    id="interests"
                                    placeholder="Ex: Swaiming,Travikibg,Reading"
                                    defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                />
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
                                <div key={i} className="mb-4">
                                    <div className="flex items-center gap-3 ">
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.position}
                                                onChange={(e) => updateJobExperience(i, "position", e.target.value)}
                                                error={errors?.[`job_experiences.${i}.position`] || ''}
                                                id={`position-${i}`}
                                                placeholder="EX: Software Enginner"
                                                label="Position*"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.company}
                                                onChange={(e) => updateJobExperience(i, "company", e.target.value)}
                                                error={errors?.[`job_experiences.${i}.company`] || ''}
                                                id={`company-${i}`}
                                                placeholder="Company Name"
                                                label="Company Name*"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.start_date}
                                                onChange={(e) => updateJobExperience(i, "start_date", e.target.value)}
                                                error={errors?.[`job_experiences.${i}.start_date`] || ''}
                                                id={`start-date-${i}`}
                                                label="Start Date*"
                                                type="date"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.end_date}
                                                onChange={(e) => updateJobExperience(i, "end_date", e.target.value)}
                                                error={errors?.[`job_experiences.${i}.end_date`] || ''}
                                                id={`end-date-${i}`}
                                                label="End Date"
                                                type="date"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>

                                        <div className="w-1/4">
                                            <label className="flex items-center mt-5" htmlFor={`current-working-${i}`}>
                                                <Checkbox
                                                    value={item.is_present}
                                                    onChange={() => updateCheckboxField('job_experiences', i)}
                                                    id={`current-working-${i}`}/>
                                                <span className="ml-1"> Currently Working here</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-2 gap-x-3 w-full">
                                        <div className="w-[95%]">
                                            <TextInput
                                                value={item.description}
                                                onChange={(e) => updateJobExperience(i, "description", e.target.value)}
                                                error={errors?.[`job_experiences.${i}.description`] || ''}
                                                id={`description-${i}`}
                                                label="Job Description"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        {data.job_experiences.length > 1 && (
                                            <button type="button" onClick={() => deleteExperience(i)}
                                                    className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                                <FaTrashAlt/></button>)}
                                    </div>

                                </div>
                            ))}

                            <h2 className="text-xl font-bold mb-3 border-l-4 border-red-600 pl-2">REFENENCES</h2>

                            {data.references.map((item, i) => (
                                <div key={i} className="mb-4">
                                    <div className="flex items-center gap-3 ">
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.name}
                                                onChange={(e) => updateReference(i, "name", e.target.value)}
                                                error={errors?.[`references.${i}.name`] || ''}
                                                id={`name-${i}`}
                                                placeholder="EX: John Doe"
                                                label="Name*"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.company}
                                                onChange={(e) => updateReference(i, "company", e.target.value)}
                                                error={errors?.[`references.${i}.company`] || ''}
                                                id={`company-${i}`}
                                                placeholder="EX: CEO"
                                                label="Company"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.designation}
                                                onChange={(e) => updateReference(i, "designation", e.target.value)}
                                                error={errors?.[`references.${i}.designation`] || ''}
                                                id={`designation-${i}`}
                                                placeholder="EX: CEO"
                                                label="Designation"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.phone}
                                                onChange={(e) => updateReference(i, "phone", e.target.value)}
                                                error={errors?.[`references.${i}.phone`] || ''}
                                                id={`reference-phone-${i}`}
                                                label="Phone Number"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>
                                        <div className="w-1/4">
                                            <TextInput
                                                value={item.email}
                                                onChange={(e) => updateReference(i, "email", e.target.value)}
                                                error={errors?.[`references.${i}.email`] || ''}
                                                id={`email-${i}`}
                                                label="Email Address"
                                                type="email"
                                                defaultClasses="border-2 border-[#848585] border-l-4 border-l-red-500 focus:border-[#848585]"
                                                labelClasses="text-text-primary"
                                            />
                                        </div>


                                        {data.references.length - 1 === i && (
                                            <button type="button" onClick={() => addNewReference()}
                                                    className="bg-primary text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                                <FaPlus className="text-white"/>
                                            </button>)}

                                        {data.references.length > 1 && (
                                            <button type="button" onClick={() => deleteReference(i)}
                                                    className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                                <FaTrashAlt/></button>)}

                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Summary for application */}
                        <div className="mb-6">
                            <div className="bg-yellow-300 p-4">
                                <div className="font-bold mb-2">About Me</div>
                                <textarea
                                    value={data.summary}
                                    onChange={(e) => setData('summary', e.target.value)}
                                    rows={6}
                                    id="summary"
                                    className="w-full border-2 border-[#848585] rounded focus:border-[#848585]"
                                >{data.summary}</textarea>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-center mt-6 gap-3">
                            <PrimaryBtn
                                text="Submit"
                                type="button"
                                classes="w-full md:w-2/12 py-3"
                                onClick={() => setResumePreview(true)}
                                disabled={processing}
                            />

                        </div>
                    </form>
                </div>
            </div>

            <ResumePreview show={resumePreview} setShow={setResumePreview} cvData={data} oldAvatar={cv?.avatar || ''} confirmSubmit={confirmSubmit}/>
        </WebLayout>
    );
};

export default CvCreate;
