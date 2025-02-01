import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import Select from "@/Components/Select.jsx";
import {jobTypes} from "@/Components/Constant/index.js";
import {useState} from "react";
import InputBox from "@/Components/Admin/InputBox.jsx";
import InputFile from "@/Components/Admin/InputFile.jsx";
import {TinyEditor} from "@/Components/TinyEditor.jsx";
import {post} from "axios";

const CreateJobPost = () => {

    const [type, setType] = useState(null);

    const {data, setData, errors, processing} = useForm({
        'type': '',
        'thumbnail': '',
        'title': '',
        'company': '',
        'salary_range': '',
        'location': '',
        'description': '',
        'last_apply_date': '',
    })

    const handleFileChange = (fileType, file) => {
        setData('thumbnail', file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('admin.job-posts.store'))
    }


    return (
        <Authenticated>
            <Head title="Add New Job | Dubai E-Visa"/>
            <div className="flex justify-between items-center mb-3">
                <h3 className=''>Add New Job Post</h3>
                <Link href={route('admin.job-posts.index')} className='btn-primary'> Job Post List
                </Link>
            </div>

            <div className="mt-1">

                <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">

                    <Select
                        placeholder="Select Type"
                        label="Job Type(Full Time/Part Time)*"
                        items={jobTypes}
                        selected={type}
                        setSelected={setType}
                        handleValueChange={(value) => setData('type', value.id)}
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        error={errors.type}
                    />
                    <InputBox
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        error={errors.title}
                        id="job-title"
                        label="Title"
                        placeholder="Ex: Software Engineer"
                        divClasses="my-3"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                    />

                    <InputBox
                        value={data.company}
                        onChange={(e) => setData('company', e.target.value)}
                        error={errors.company}
                        id="company"
                        label="Company Name"
                        placeholder="Enter Company Name"
                        divClasses="my-3"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                    />
                    <InputBox
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                        error={errors.location}
                        id="company-location"
                        label="Location"
                        placeholder="Type Here"
                        divClasses="my-3"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                    />
                    <InputBox
                        value={data.salary_range}
                        onChange={(e) => setData('salary_range', e.target.value)}
                        error={errors.salary_range}
                        id="salary"
                        label="Salary Range"
                        placeholder="Ex: $300-$400"
                        divClasses="my-3"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                    />

                    <InputBox
                        value={data.last_apply_date}
                        onChange={(e) => setData('last_apply_date', e.target.value)}
                        error={errors.last_apply_date}
                        id="last-apply-date"
                        label="Last Apply Date"
                        placeholder="Ex: $300-$400"
                        divClasses="my-3"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type="date"
                    />
                    <InputFile
                        placeholder="Select Post Thumbnail"
                        onChange={handleFileChange}
                        fileType="thumbanil"
                        type="file"
                    />

                    <TinyEditor value={data.description} onChange={(value) => setData('description', value)}/>

                    <div className="flex justify-end mt-4">
                        <button className="btn-primary" onClick={handleSubmit} disabled={processing}
                                type="submit">Save
                        </button>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}

export default CreateJobPost
