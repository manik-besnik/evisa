import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, usePage} from "@inertiajs/react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import {getValue} from "@/Components/Helper/index.js";
import {languageProficiency} from "@/Components/Constant/index.js";
import InfoSection from "@/Components/InfoSection.jsx";
import InfoItem from "@/Components/Web/InfoItem.jsx";
import {FaRegEye} from "react-icons/fa6";

const JobApplicationShow = () => {

    const {job_apply, experiences} = usePage().props;

    return (
        <Authenticated>
            <Head title="Job Apply Details"/>
            <TopSection title="Job Apply Details">
                <div className="flex gap-x-2">

                    <Link href={route('admin.visa-applies.index')} className='btn-primary'>View Job Apply List
                    </Link>
                </div>
            </TopSection>

            <div className="min-h-screen">

                <div className="flex gap-8">

                    <div className="w-full md:w-1/2">
                        <InfoSection title="General Info">
                            <InfoItem label="Name" value={job_apply.name}/>
                            <InfoItem label="Mobile Number" value={job_apply.phone}/>
                            <InfoItem label="Email Address" value={job_apply.email}/>
                            <InfoItem label="Shirt Size" value={job_apply.shirt_size}/>
                            <InfoItem label="Weight(in kgs)" value={job_apply.weight}/>
                            <InfoItem label="Height(in cm)" value={job_apply.height}/>
                            <InfoItem label="Pant Size" value={job_apply.pant_size}/>
                            <InfoItem label="Show Size" value={job_apply.show_size}/>
                            <InfoItem label="Nearest Airport" value={job_apply.nearest_airport}/>
                            <InfoItem label="Summary" value={job_apply.summary}/>
                        </InfoSection>

                        <InfoSection title="Documents">
                            {job_apply.documents && job_apply.documents.length > 0 ? (
                                <ul className="list-disc list-inside text-gray-800">
                                    {job_apply.documents.map((doc, index) => (
                                        <li key={index} className="mb-2 flex text-sm justify-between items-center">
                                        <span>
                                            {doc.name}
                                        </span>
                                            <a href={doc.url} target="_blank">
                                                <FaRegEye/>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No documents available</p>
                            )}
                        </InfoSection>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <InfoSection title="Education">
                            <InfoItem label="Certificate" value={job_apply.education.exam_name}/>
                            <InfoItem label="Year" value={job_apply.education.passing_year}/>
                            <InfoItem label="Board or University" value={job_apply.education.institute}/>
                            <InfoItem label="Computer Skill" value={job_apply.education.computer_skill}/>
                            <InfoItem label="Driving License" value={job_apply.education.driving_license}/>
                            <InfoItem label="Issue Date" value={job_apply.education.driving_license_issue_date}/>
                            <InfoItem label="Expire Date" value={job_apply.education.driving_license_expire_date}/>
                            <InfoItem
                                label="English"
                                value={getValue(languageProficiency, job_apply.education.english_proficiency)}
                            />
                            <InfoItem
                                label="Urdu/Hindi"
                                value={getValue(languageProficiency, job_apply.education.urdu_proficiency)}
                            />
                            <InfoItem
                                label="Arabic"
                                value={getValue(languageProficiency, job_apply.education.arabic_proficiency)}
                            />
                            <InfoItem label="Mother Language" value={job_apply.education.language.name}/>

                        </InfoSection>

                        <InfoSection title="Job Experiences">
                            {
                                experiences.map((item, i) => (
                                    <div key={i} className="my-2">
                                        <InfoItem label="Country" value={item.country.name}/>
                                        <InfoItem label="Company" value={item.company}/>
                                        <InfoItem label="Position" value={item.position}/>
                                        <InfoItem label="Duration" value={item.duration}/>
                                    </div>
                                ))
                            }


                        </InfoSection>

                    </div>


                </div>

            </div>
        </Authenticated>
    )
}

export default JobApplicationShow;
