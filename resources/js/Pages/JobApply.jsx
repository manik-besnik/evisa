import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head, useForm, usePage} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputFile from "@/Components/Web/InputFile.jsx";
import Select from "@/Components/Web/Select.jsx";
import {useState} from "react";
import {jobApplyDocuments, languageProficiency} from "@/Components/Constant/index.js";
import {FaPlus} from "react-icons/fa6";
import {FaTrashAlt} from "react-icons/fa";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import TextArea from "@/Components/TextArea.jsx";

const JobApply = () => {

    const countries = usePage().props.countries
    const languages = usePage().props.languages

    const jobs = usePage().props.job_posts


    const {data, setData, post, errors, processing, reset} = useForm({
        job_post_id: route().params?.id ?? '',
        name: '',
        phone: '',
        email: '',
        avatar: '',
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


    const [jobPost, setJobPost] = useState(jobs.find(item => item.id === Number(route()?.params?.id)) ?? null)
    const [motherLanguage, setMotherLanguage] = useState(null)
    const [englishProficiency, setEnglishProficiency] = useState(null)
    const [arabicProficiency, setArabicProficiency] = useState(null)
    const [urduProficiency, setUrduProficiency] = useState(null)

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
            }
        })
    }


    return (
        <WebLayout showBgImage={false} showServiceImage={false}>
            <Head title="Job Apply | Dubai E-Visa"/>
            <div className="container mt-4">
                <h3 className="text-text-primary text-lg font-semibold mt-3">Apply Form</h3>
                <form onSubmit={handleSubmit} className="mb-4">

                    <div className="flex gap-y-2 gap-x-4 md:gap-y-0">
                        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                            <TextInput
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                error={errors.name}
                                id="personal-name"
                                placeholder="Name"
                                label="Name*"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />
                            <TextInput
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                error={errors.phone}
                                id="phone"
                                placeholder="Mobile Number with country code"
                                label="Mobile No*"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />
                            <TextInput
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                error={errors.email}
                                id="email"
                                placeholder="Email Address"
                                label="Email*"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />
                            <Select
                                placeholder="Select Job"
                                label="Apply for post*"
                                items={jobs}
                                selected={jobPost}
                                setSelected={setJobPost}
                                handleValueChange={(value) => setData('job_id', value.id)}
                                error={errors.job_id}
                                field='title'
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <InputFile
                                defaultClasses="w-[160px] h-[160px]"
                                placeholder="Passport size pic"
                                onChange={handleFileChange}
                                fileType="avatar"
                            />
                        </div>
                    </div>
                    <h4 className="text-success mt-2 text-md">Educational Details</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <TextInput
                            value={data.exam_name}
                            onChange={(e) => setData('exam_name', e.target.value)}
                            error={errors.exam_name}
                            id="centificate"
                            placeholder="EX: SSC"
                            label="Certificate*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />
                        <TextInput
                            value={data.passing_year}
                            onChange={(e) => setData('passing_year', e.target.value)}
                            error={errors.passing_year}
                            id="centificate"
                            placeholder="EX: 2016"
                            label="Passing Year*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />
                        <TextInput
                            value={data.institute}
                            onChange={(e) => setData('institute', e.target.value)}
                            error={errors.institute}
                            id="institute"
                            placeholder="EX: 2016"
                            label="Board | Universaity*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />
                        <TextInput
                            value={data.result}
                            onChange={(e) => setData('result', e.target.value)}
                            error={errors.result}
                            id="institute"
                            placeholder="Result in GPA/CGPA"
                            label="Result*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.computer_skill}
                            onChange={(e) => setData('computer_skill', e.target.value)}
                            error={errors.computer_skill}
                            id="computer-skill"
                            placeholder="Enter Your Computer skill"
                            label="Computer Skill*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            value={data.driving_license}
                            onChange={(e) => setData('driving_license', e.target.value)}
                            error={errors.driving_license}
                            id="driving_license"
                            placeholder="Enter Your Driving License"
                            label="Driving License*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />
                        <TextInput
                            value={data.driving_license_issue_date}
                            onChange={(e) => setData('driving_license_issue_date', e.target.value)}
                            error={errors.driving_license_issue_date}
                            id="driving_license_issue_date"
                            placeholder="Driving License Issue Date"
                            label="Driving License Issue Date*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />
                        <TextInput
                            value={data.driving_license_expire_date}
                            onChange={(e) => setData('driving_license_expire_date', e.target.value)}
                            error={errors.driving_license_expire_date}
                            id="driving_license_expire_date"
                            placeholder="Driving License Expire Date"
                            label="Driving License Expire Date*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />

                        <Select
                            placeholder="Select Label"
                            label="English*"
                            items={languageProficiency}
                            selected={englishProficiency}
                            setSelected={setEnglishProficiency}
                            handleValueChange={(value) => setData('english_proficiency', value.id)}
                            error={errors.english_proficiency}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />
                        <Select
                            placeholder="Select Label"
                            label="Arabic*"
                            items={languageProficiency}
                            selected={arabicProficiency}
                            setSelected={setArabicProficiency}
                            handleValueChange={(value) => setData('arabic_proficiency', value.id)}
                            error={errors.arabic_proficiency}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />
                        <Select
                            placeholder="Select Label"
                            label="Urbu/Hindi*"
                            items={languageProficiency}
                            selected={urduProficiency}
                            setSelected={setUrduProficiency}
                            handleValueChange={(value) => setData('urdu_proficiency', value.id)}
                            error={errors.urdu_proficiency}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />

                        <Select
                            placeholder="Select Language"
                            label="Mother Language*"
                            items={languages}
                            selected={motherLanguage}
                            setSelected={setMotherLanguage}
                            handleValueChange={(value) => setData('mother_language', value.id)}
                            error={errors.mother_language}
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <h4 className="text-success text-md">Job Experiences</h4>
                        <button type="button" onClick={addNewExperience}
                                className="flex items-center gap-x-2 py-2 px-4 text-white bg-yellow-500 hover:bg-primary font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)] text-xs hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200">
                            <FaPlus className="text-white"/> Add New Experience
                        </button>
                    </div>

                    <div>
                        {data.job_experiences.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2">
                                    <TextInput
                                        value={item.position}
                                        onChange={(e) => updateJobExperience(i, "position", e.target.value)}
                                        error={errors?.job_experiences ? errors?.job_experiences[i]?.position : ""}
                                        id={`position-${i}`}
                                        placeholder="EX: Software Enginner"
                                        label="Position*"
                                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                        labelClasses="text-text-primary"
                                    />
                                    <TextInput
                                        value={item.duration}
                                        onChange={(e) => updateJobExperience(i, "duration", e.target.value)}
                                        error={errors?.job_experiences ? errors?.job_experiences[i]?.duration : ""}// error={errors.passing_year}
                                        id={`duration-${i}`}
                                        placeholder="EX: 4 Years"
                                        label="Duration*"
                                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                        labelClasses="text-text-primary"
                                    />
                                    <TextInput
                                        value={item.company}
                                        onChange={(e) => updateJobExperience(i, "company", e.target.value)}
                                        error={errors?.job_experiences ? errors?.job_experiences[i]?.company : ""}
                                        id={`company-${i}`}
                                        placeholder="Company Name"
                                        label="Company Name*"
                                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                        labelClasses="text-text-primary"
                                    />

                                    <Select
                                        placeholder="Select Country"
                                        label="Country*"
                                        items={countries}
                                        selected={item.country}
                                        setSelected={(value) => updateJobExperience(i, "country", value)}
                                        handleValueChange={(value) => updateJobExperience(i, "country", value)}
                                        error={errors?.job_experiences ? errors?.job_experiences[i]?.country_id : ""}
                                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                        classes="mt-1"
                                    />
                                </div>


                                {i > 0 && (<button type="button" onClick={() => deleteExperience(i)}
                                                   className="bg-warning text-white text-sm w-9 text-center p-2.5 h-9 mt-5 flex item-center justify-between">
                                    <FaTrashAlt/></button>)}
                            </div>
                        ))}

                    </div>

                    <h4 className="text-success text-md my-4">Others Information</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        <TextInput
                            value={data.shirt_size}
                            onChange={(e) => setData('shirt_size', e.target.value)}
                            error={errors.shirt_size}
                            id="shirt-size"
                            placeholder="Type Here"
                            label="Shirt Size*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />
                        <TextInput
                            value={data.weight}
                            onChange={(e) => setData('weight', e.target.value)}
                            error={errors.weight}
                            id="weight"
                            placeholder="Type Here"
                            label="Weight (In KG)*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />
                        <TextInput
                            value={data.pant_size}
                            onChange={(e) => setData('pant_size', e.target.value)}
                            error={errors.pant_size}
                            id="pant-size"
                            placeholder="Type Here"
                            label="Pant Size(Waist)*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />
                        <TextInput
                            value={data.height}
                            onChange={(e) => setData('height', e.target.value)}
                            error={errors.height}
                            id="height-size"
                            placeholder="Type Here"
                            label="Height(in Centimeters)*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />
                        <TextInput
                            value={data.show_size}
                            onChange={(e) => setData('show_size', e.target.value)}
                            error={errors.show_size}
                            id="shoes-size"
                            placeholder="Type Here"
                            label="shoes Size*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />
                        <TextInput
                            value={data.nearest_airport}
                            onChange={(e) => setData('nearest_airport', e.target.value)}
                            error={errors.nearest_airport}
                            id="nearest_airport"
                            placeholder="Type Here"
                            label="Nearest Airport*"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="text"
                        />


                    </div>

                    <h4 className="text-success text-md my-4">Add Any Type of documents</h4>

                    {errors.documents && <span className='text-red-600 text-sm'>{errors.documents}</span>}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2">
                        {jobApplyDocuments.map((item, i) => (
                            <InputFile
                                defaultClasses="w-full h-10"
                                key={i} fileType={item.type}
                                onChange={handleFileChange} placeholder={item.name}
                            />
                        ))}
                    </div>

                    <TextArea
                        value={data.summary}
                        onChange={(e) => setData('summary', e.target.value)}
                        error={errors.summary}
                        id="summary"
                        placeholder="Write Here"
                        label="Summary*"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary mt-2"
                        labelClasses="text-text-primary mt-4"
                    />

                    <div className="flex w-full justify-center items-center mt-4">
                        <PrimaryBtn classes="w-[300px]" disabled={processing} type="submit" text="Apply"
                                    onClick={handleSubmit}/>
                    </div>

                </form>
            </div>
        </WebLayout>
    )
}
export default JobApply;
