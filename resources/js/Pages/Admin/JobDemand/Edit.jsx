import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import Select from "@/Components/Web/Select.jsx";
import {useState} from "react";
import TopSection from "@/Components/Admin/TopSection.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {FaCameraRetro} from "react-icons/fa";
import {usePage} from "@inertiajs/react";
import JobDemandBanner from "@/Components/Web/JobDemandBanner.jsx";
import FileUpload from "@/Components/Web/FileUpload.jsx";

const Edit = () => {

    const {locations, job_demand} = usePage().props
    const jobLocations = [
        ...[
            {
                id: "ready_job",
                name: "READY JOB",
            }, {
                id: "new_job",
                name: "NEW JOB",
            }
        ],
        ...locations
    ]
    const setJobLocation = () => {

        if (job_demand.is_on_demand) {
            return jobLocations.find(item => item.id === 'ready_job')
        }

        if (job_demand.is_new) {
            return jobLocations.find(item => item.id === 'new_job')
        }
        return jobLocations.find(item => item.id === job_demand.location_id)


    }

    const [location, setLocation] = useState(setJobLocation())


    const {data, setData, post, processing, errors} = useForm({
        // Job details
        type_of_work: job_demand.type_of_work, // Default value
        job_location: job_demand.job_location,
        thumbnail: '',
        location_id: job_demand.location_id,
        visa_validity: job_demand.visa_validity,
        accommodation: job_demand.accommodation,
        transport: job_demand.transport,
        food: job_demand.food,
        medical_insurance: job_demand.medical_insurance,
        working_hours: job_demand.duty_hours,
        salary: job_demand.salary,
        vacation_benefits: job_demand.vacation_benefits,
        age_limits: job_demand.age_limit,
        worker_quantity: job_demand.worker_quantity,
        education: job_demand.education,
        company_activities: job_demand.company_activities,
        company_name: job_demand.company.name,
        contact_person: job_demand.company.contact_person,
        phone_no: job_demand.company.phone_no,
        whatsapp_no: job_demand.company.whatsapp_no,
        email: job_demand.company.email,
        current_address: job_demand.company.address,
        city: job_demand.company.city,
        area: job_demand.company.area,
        note: job_demand.requirements,
        is_on_demand: job_demand.is_on_demand,
        is_new_job: job_demand.is_new_job,
        is_approved: job_demand.is_approved,
    });


    const handleSubmit = (e) => {
        e.preventDefault()

        confirmFormSubmit()
    }

    const handleApprove = () => {

        data.is_approved = true
        confirmFormSubmit();
    }
    const confirmFormSubmit = () => {
        if (data.location_id === 'ready_job') {
            setData('location_id', null)
            setData('is_on_demand', true)
        }
        if (data.location_id === 'new_job') {
            setData('location_id', null)
            setData('is_new_job', true)
        }
        if (data.location_id !== 'new_job') {
            setData('is_new_job', false)
        }
        if (data.location_id !== 'ready_job') {
            setData('is_on_demand', false)
        }

        post(route('admin.job-demands.update', job_demand.id))
    }


    return (
        <Authenticated>
            <Head title="Edit Job Demand | Dubai E-Visa"/>

            <TopSection title='Edit Job Demand'>
                <Link href={route('admin.job-demands.index')} className='btn-primary'> Job Demand List
                </Link>
            </TopSection>

            <div className="mt-1">

                <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
                    <div className="p-10 h-full overflow-y-auto bg-white">

                        <FileUpload
                            onChange={(fileType,value) => setData('thumbnail', value)}
                            error={errors.thumbnail}
                            fileType="thumbnail"
                        >
                            <JobDemandBanner/>
                        </FileUpload>

                        {/* Salary and Code Section */}
                        <div className="p-4 w-4/12">
                            <TextInput
                                value={data.type_of_work}
                                onChange={(e) => setData("type_of_work", e.target.value)}
                                error={errors.type_of_work}
                                placeholder="Type of Work"
                                defaultClasses="border-2 border-[#8A9298] focus:outline-none focus:ring-0"
                            />

                        </div>

                        {/* Job Details Table with TextInput */}
                        <div className="w-full">
                            <div className="grid mt-5">

                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right  flex items-center justify-end">
                                        Job Location
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white">

                                        <Select
                                            items={jobLocations}
                                            selected={location}
                                            setSelected={setLocation}
                                            handleValueChange={(value) => setData('location_id', value.id)}
                                            error={errors.location_id}

                                        />

                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Visa validity
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="visa_validity"
                                            value={data.visa_validity}
                                            onChange={(e) => setData("visa_validity", e.target.value)}
                                            error={errors.visa_validity}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Accommodation
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="accommodation"
                                            value={data.accommodation}
                                            onChange={(e) => setData("accommodation", e.target.value)}
                                            error={errors.accommodation}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Transport
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="transport"
                                            value={data.transport}
                                            onChange={(e) => setData("transport", e.target.value)}
                                            error={errors.transport}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Food
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="food"
                                            value={data.food}
                                            onChange={(e) => setData("food", e.target.value)}
                                            error={errors.food}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Medical Insurance
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="medical_insurance"
                                            value={data.medical_insurance}
                                            onChange={(e) => setData("medical_insurance", e.target.value)}
                                            error={errors.medical_insurance}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Daily working hours
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="working_hours"
                                            value={data.working_hours}
                                            onChange={(e) => setData("working_hours", e.target.value)}
                                            error={errors.working_hours}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Salary
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="salary"
                                            value={data.salary}
                                            onChange={(e) => setData("salary", e.target.value)}
                                            error={errors.salary}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Vacation benefits
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="vacation_benefits"
                                            value={data.vacation_benefits}
                                            onChange={(e) => setData("vacation_benefits", e.target.value)}
                                            error={errors.vacation_benefits}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Age limits
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="age_limits"
                                            value={data.age_limits}
                                            onChange={(e) => setData("age_limits", e.target.value)}
                                            error={errors.age_limits}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        In-demand workers
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="worker_quantity"
                                            value={data.worker_quantity}
                                            onChange={(e) => setData("worker_quantity", e.target.value)}
                                            error={errors.worker_quantity}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Education
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="education"
                                            value={data.education}
                                            onChange={(e) => setData("education", e.target.value)}
                                            error={errors.education}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div
                                        className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Company activities
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="company_activities"
                                            value={data.company_activities}
                                            onChange={(e) => setData("company_activities", e.target.value)}
                                            error={errors.company_activities}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Application Requirements */}
                        <div className="flex mt-8 mb-4">
                            <div className="bg-gray-600 text-white px-8 flex items-center">
                                <span className="font-bold">Note</span>
                            </div>
                            <div className="flex-1 p-2 bg-white">
                                <h3 className="font-bold text-lg">Application Requirements:</h3>
                            </div>
                        </div>
                        <div className="px-4 py-2 border-l-4 border-red-500 mb-4 ml-28">
                             <textarea
                                 id="note"
                                 name="note"
                                 value={data.note}
                                 onChange={(e) => setData('note', e.target.value)}
                                 className="w-full rounded"
                                 rows={4}
                             ></textarea>
                        </div>

                        {/* Company Details */}

                        <div className="my-3  place-items-end">
                            <div className="w-3/4">
                                <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                    <span
                                        className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                        style={{clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)"}}
                                    ></span>
                                    COMPANY DETAILS
                                </h3>
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="flex gap-4">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CO. NAME</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="company_name"
                                    value={data.company_name}
                                    onChange={(e) => setData("company_name", e.target.value)}
                                    error={errors.company_name}
                                    placeholder="Type Here"
                                />
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="flex gap-4 mt-2">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CONTACT PERSON</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="contact_person"
                                    value={data.contact_person}
                                    onChange={(e) => setData("contact_person", e.target.value)}
                                    error={errors.contact_person}
                                    placeholder="Type Here"
                                />
                            </div>
                        </div>

                        {/* Contact No */}
                        <div className="flex  gap-4 mt-2">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CONTACT NO.</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>


                                <TextInput
                                    id="phone_no"
                                    value={data.phone_no}
                                    onChange={(e) => setData("phone_no", e.target.value)}
                                    error={errors.phone_no}
                                    placeholder="Type Here"
                                />
                            </div>
                        </div>

                        {/* WhatsApp No */}
                        <div className="flex gap-4 mt-2">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">WHATSAPP NO.</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="whatsapp_no"
                                    value={data.whatsapp_no}
                                    onChange={(e) => setData("whatsapp_no", e.target.value)}
                                    error={errors.whatsapp_no}
                                    placeholder="Type Here"
                                />

                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-4 mt-2">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">EMAIL</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    error={errors.email}
                                    placeholder="Type Here"
                                />
                            </div>
                        </div>
                        {/* Address Section */}

                        <div className="my-3  place-items-end">
                            <div className="w-3/4">
                                <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                    <span
                                        className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                        style={{clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)"}}
                                    ></span>
                                    ADDRESS
                                </h3>
                            </div>
                        </div>

                        {/* Current Address */}
                        <div className="flex gap-4">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CURRENT ADDRESS</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="current_address"
                                    value={data.current_address}
                                    onChange={(e) => setData("current_address", e.target.value)}
                                    error={errors.current_address}
                                    placeholder="Type Here"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div className="flex gap-4 mt-2">
                            <div className="w-48"></div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="city"
                                    value={data.city}
                                    onChange={(e) => setData("city", e.target.value)}
                                    error={errors.city}
                                    placeholder="City"
                                />

                            </div>
                        </div>

                        {/* Area */}
                        <div className="flex gap-4 mt-2">
                            <div className="w-48"></div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>

                                <TextInput
                                    id="area"
                                    value={data.area}
                                    onChange={(e) => setData("area", e.target.value)}
                                    error={errors.area}
                                    placeholder="area"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-600 text-white px-8 py-2 rounded font-bold"
                            >
                                Save Changes
                            </button>


                            <button
                                type="button"
                                onClick={handleApprove}
                                disabled={processing}
                                className="bg-green-600 text-white px-8 py-2 rounded font-bold ml-4"
                            >
                                Save & Approve
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </Authenticated>
    )
}

export default Edit
