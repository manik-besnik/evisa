import {Head, Link, useForm} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import Select from "@/Components/Select.jsx";
import {jobTypes} from "@/Components/Constant/index.js";
import InputBox from "@/Components/Admin/InputBox.jsx";
import InputFile from "@/Components/Admin/InputFile.jsx";
import {TinyEditor} from "@/Components/TinyEditor.jsx";
import {useState} from "react";
import TopSection from "@/Components/Admin/TopSection.jsx";

const EditJobPost = ({job_post}) => {

    const [type, setType] = useState(jobTypes.find(item => item.id === job_post.type));

    const {data, setData, put, errors, processing} = useForm({
        'type': job_post.type,
        'thumbnail': '',
        'title': job_post.title,
        'company': job_post.company,
        'salary_range': job_post.salary_range,
        'location': job_post.location,
        'description': job_post.description,
        'last_apply_date': job_post.last_apply_date,
    })

    const handleFileChange = (fileType, file) => {
        setData('thumbnail', file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('admin.job-posts.update', job_post.id))
    }


    return (
        <Authenticated>
            <Head title="Add New Job | Dubai E-Visa"/>

            <TopSection title='Add New Job Post'>
                <Link href={route('admin.job-posts.index')} className='btn-primary'> Job Post List
                </Link>
            </TopSection>

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

export default EditJobPost
