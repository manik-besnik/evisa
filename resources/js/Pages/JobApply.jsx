import WebLayout from "@/Layouts/WebLayout.jsx";
import {Head, useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputFile from "@/Components/Web/InputFile.jsx";
import Select from "@/Components/Web/Select.jsx";
import {useState} from "react";

const JobApply = () => {

    const jobs = [{id:1,name:"Software Engineer"}]
    const {data, setData, post, errors} = useForm({
        job_id: '',
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
    })

    const [jobPost, setJobPost] = useState(null)
    const [englishProficiency, setEnglishProficiency] = useState(null)
    const [arabicProficiency, setArabicProficiency] = useState(null)
    const [urduProficiency, setUrduProficiency] = useState(null)

    const updateJobPost = (value) => {
        setData('job_id', value.id)
    }
    const updateMotherLanguage = (value) => {
        setData('mother_language', value.id)
    }

    const handleFileChange = () => {

    }

    const handleSubmit = () => {

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
                                handleValueChange={updateJobPost}
                                error={errors.job_id}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <InputFile
                                defaultClasses="w-full h-full"
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
                    </div>

                </form>
            </div>
        </WebLayout>
    )
}
export default JobApply;
