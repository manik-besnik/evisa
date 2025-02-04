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

    const countries = usePage().props.countries


    const [applyCountry, setApplyCountry] = useState('')
    const [food, setFoodType] = useState('')
    const [accommodation, setAccommodationType] = useState('')
    const [transport, setTransportType] = useState('')
    const [yearlyTicket, setYearlyTicketType] = useState('')

    const [businessPhoto, setBusinessPhoto] = useState('')

    const initialState = {
        date: '',
        apply_from: '',
        type_of_work: '',
        businessPhoto: '',
        visa_validity: '',
        salary: '',
        worker_quantity: '',
        duty_hours: '',
        over_time: '',
        weekly_work: '',
        age_limit: '',
        qualifications: '',
        company_activities: '',
        food: '',
        accommodation: '',
        transport: '',
        yearly_ticket: '',
        holiday_benefits: '',
        note: '',
        company_name: '',
        contact_person: '',
        contact_no: '',
        whatsapp_no: '',
        email: '',
        current_address: '',
        city: '',
        area: '',
        user_id: auth.user.id // Add user_id to form data
    }


    const { data, setData, post, processing, errors, reset } = useForm(initialState);

    const resetForm = () => {
        // Reset form data
        reset();

        // Reset all state variables
        setApplyCountry('');
        setFoodType('');
        setAccommodationType('');
        setTransportType('');
        setYearlyTicketType('');
        setBusinessPhoto('');

        // Reset the form data to initial state
        setData(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create FormData object to handle file upload
        const formData = new FormData();

        // Append all form fields to FormData
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        // Post to the store route
        post(route('job-demand.store'), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
                // Reset form after successful submission
                resetForm();
                toast("Job demand created successfully!")
            },
            onError: () => {
                alert('Error creating job demand. Please check the form.');
            }
        });
    };

    const updateApplyCountry = (value) => {
        setData('apply_from', value.id)
    }

    const updateFoodType = (value) => {
        setData('food', value.id)
    }
    const updateAccommodationType = (value) => {
        setData('accommodation', value.id)
    }
    const updateTransportType = (value) => {
        setData('transport', value.id)
    }
    const updateYearlyTicketType = (value) => {
        setData('yearly_ticket', value.id)
    }

    const handleUploadFile = (e) => {
        const file = e.target.files[0];

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setBusinessPhoto('');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setBusinessPhoto(reader.result);
            };

            setData('businessPhoto', file);
            reader.readAsDataURL(file);
        } else {
            setBusinessPhoto('');
        }
    };


    return (

        <WebLayout showBgImage={true} showServiceImage={false}>

            <Head title="Job Demand | Dubai E-Visa" />

            <div className="container">
                <h3 className="text-white text-lg font-semibold mt-3 bg-red-600 text-center ">Job Demand</h3>

                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex flex-row gap-4 justify-between">

                        <div className="basis-1/4">
                            <TextInput
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                                error={errors.date}
                                id="date"
                                placeholder="Date"
                                label="Date" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                                type="date"
                            />
                        </div>
                        <div className="basis-1/4 my-3">
                            <Select
                                placeholder="Select Country"
                                label="Apply From*"
                                items={countries}
                                selected={applyCountry}
                                setSelected={setApplyCountry}
                                handleValueChange={updateApplyCountry}
                                error={errors.apply_from}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />
                        </div>



                    </div>
                    <div>
                        <div className="w-full h-64 relative">
                            <label htmlFor="businessPhoto" className="cursor-pointer">
                                {businessPhoto && <img className="w-full h-full" src={businessPhoto} alt="preview-avatar" />}

                                {!businessPhoto && <div
                                    className="flex flex-col bg-[#1E374A] h-64">
                                    <FaCameraRetro size={120} className="absolute bottom-5 right-5 text-yellow-400" />
                                </div>}
                                <input id="businessPhoto" onChange={(e) => handleUploadFile(e)} type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className="my-3  place-items-end">
                        <div className="w-3/4">
                            <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                <span
                                    className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)" }}
                                ></span>
                                JOB DETAILS
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    TYPE OF WORK <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.type_of_work}
                                    onChange={(e) => setData("type_of_work", e.target.value)}
                                    error={errors.type_of_work}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    VISA VALIDITY <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.visa_validity}
                                    onChange={(e) => setData("visa_validity", e.target.value)}
                                    error={errors.visa_validity}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4 my-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    SALARY <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.salary}
                                    onChange={(e) => setData("salary", e.target.value)}
                                    error={errors.salary}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    WORKER QUNTT <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.worker_quantity}
                                    onChange={(e) => setData("worker_quantity", e.target.value)}
                                    error={errors.worker_quantity}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4 my-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    DUTY HOURS <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.duty_hours}
                                    onChange={(e) => setData("duty_hours", e.target.value)}
                                    error={errors.duty_hours}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    OVER TIME <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.over_time}
                                    onChange={(e) => setData("over_time", e.target.value)}
                                    error={errors.over_time}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 my-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    WEEKLY WORK <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.weekly_work}
                                    onChange={(e) => setData("weekly_work", e.target.value)}
                                    error={errors.weekly_work}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    AGE LIMIT <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.age_limit}
                                    onChange={(e) => setData("age_limit", e.target.value)}
                                    error={errors.age_limit}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 my-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    QUALIFICATIONS <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.qualifications}
                                    onChange={(e) => setData("qualifications", e.target.value)}
                                    error={errors.qualifications}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] p-1 my-1">
                                <label className="block font-bold text-white my-1">
                                    COMPANY ACTIVITIES <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.company_activities}
                                    onChange={(e) => setData("company_activities", e.target.value)}
                                    error={errors.company_activities}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="my-3  place-items-end">
                        <div className="w-3/4">
                            <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                <span
                                    className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)" }}
                                ></span>
                                FACILITY
                            </h3>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 my-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-8 bg-[#5D5E5E]">
                                <label className="block font-bold text-white my-1">
                                    FOOD <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <Select
                                    placeholder="Select"
                                    items={joDemand}
                                    selected={food}
                                    setSelected={setFoodType}
                                    handleValueChange={updateFoodType}
                                    error={errors.food}
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-8 bg-[#5D5E5E]">
                                <label className="block font-bold text-white my-1">
                                    ACCOMMODATION <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <Select
                                    placeholder="Select"
                                    items={joDemand}
                                    selected={accommodation}
                                    setSelected={setAccommodationType}
                                    handleValueChange={updateAccommodationType}
                                    error={errors.accommodation}
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 my-3">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-8 bg-[#5D5E5E]">
                                <label className="block font-bold text-white my-1">
                                    TRANSPORT <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <Select
                                    placeholder="Select"
                                    items={joDemand}
                                    selected={transport}
                                    setSelected={setTransportType}
                                    handleValueChange={updateTransportType}
                                    error={errors.transport}
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-8 bg-[#5D5E5E]">
                                <label className="block font-bold text-white my-1">
                                    YEARLY TICKET <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <Select
                                    placeholder="Select"
                                    items={joDemand}
                                    selected={yearlyTicket}
                                    setSelected={setYearlyTicketType}
                                    handleValueChange={updateYearlyTicketType}
                                    error={errors.yearly_ticket}
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="my-1">
                        <div className="flex gap-4">
                            <div className="w-[19%] h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    HOLIDAY BENEFITS <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.holiday_benefits}
                                    onChange={(e) => setData("holiday_benefits", e.target.value)}
                                    error={errors.holiday_benefits}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"

                                />

                            </div>
                        </div>

                    </div>
                    <div className="my-1">
                        <div className="flex gap-4">
                            <div className="w-[19%] h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    NOTE <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <Textarea
                                    value={data.note}
                                    onChange={(e) => setData("note", e.target.value)}
                                    error={errors.note}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"

                                />

                            </div>
                        </div>

                    </div>

                    <div className="my-3  place-items-end">
                        <div className="w-3/4">
                            <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                <span
                                    className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)" }}
                                ></span>
                                COMPANY DETAILS
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    CO. NAME <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.company_name}
                                    onChange={(e) => setData("company_name", e.target.value)}
                                    error={errors.company_name}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    CONTACT PERSON <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.contact_person}
                                    onChange={(e) => setData("contact_person", e.target.value)}
                                    error={errors.contact_person}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    CONTACT NO. <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.contact_no}
                                    onChange={(e) => setData("contact_no", e.target.value)}
                                    error={errors.contact_no}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    WHATSAPP NO. <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.whatsapp_no}
                                    onChange={(e) => setData("whatsapp_no", e.target.value)}
                                    error={errors.whatsapp_no}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    EMAIL <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    error={errors.email}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>


                    </div>

                    <div className="my-3  place-items-end">
                        <div className="w-3/4">
                            <h3 className="relative text-lg font-bold text-white bg-[#5D5E5E] py-2 px-4">
                                <span
                                    className="absolute right-0 top-0 h-full w-4/12 bg-red-600"
                                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)" }}
                                ></span>
                                ADDRESS
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-1">
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    CURRENT ADRESS <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.current_address}
                                    onChange={(e) => setData("current_address", e.target.value)}
                                    error={errors.current_address}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    CITY <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.city}
                                    onChange={(e) => setData("city", e.target.value)}
                                    error={errors.city}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-2/4 h-9 bg-[#5D5E5E] my-1 p-1">
                                <label className="block font-bold text-white my-1">
                                    AREA <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="w-full">

                                <TextInput
                                    value={data.area}
                                    onChange={(e) => setData("area", e.target.value)}
                                    error={errors.area}
                                    placeholder="Type Here"
                                    defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                />
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-center mt-2">
                        <PrimaryBtn text="Save" type="submit" classes="w-[200px]" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </WebLayout>
    )
}

export default JobDemand;
