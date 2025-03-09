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


const SingleJobDemand = () => {
    // Create form with useForm
    const { data, setData, post, processing, errors } = useForm({
        // Job details
        jobLocation: '',
        visaValidity: '',
        accommodation: '',
        transport: '',
        food: '',
        medicalInsurance: '',
        workingHours: '',
        salary: '',
        vacationBenefits: '',
        ageLimits: '',
        inDemandWorkers: '',
        education: '',
        companyActivities: '',

        // Company details
        companyName: '',
        contactPerson: '',
        contactNo: '',
        whatsappNo: '',
        email: '',

        // Address
        currentAddress: '',
        city: '',
        area: '',

        // Application requirements
        applicationRequirements: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        post(route('job-demand.store'), {
            onSuccess: () => {
                toast.success('Job demand submitted successfully');
            }
        });
    };

    return (
        <WebLayout showBgImage={true} showServiceImage={false}>
            <Head title="Job Demand | Dubai E-Visa" />

            <div className="container mx-auto px-4 py-8">
                <form onSubmit={handleSubmit}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-16">
                        {/* Header with "Security" and Camera Icon */}
                        <div className="bg-gray-500 text-white p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="flex">
                                    <div className="h-6 w-3 bg-yellow-500 mr-0.5"></div>
                                    <div className="h-6 w-3 bg-yellow-500 mr-0.5"></div>
                                    <div className="h-6 w-3 bg-yellow-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Camera Icon Space */}
                        <div className="relative h-32 bg-gray-500">
                            <div className="absolute bottom-4 right-4 text-white">
                                <FaCameraRetro size={30} className="text-white" />
                            </div>
                        </div>

                        {/* Salary and Code Section */}
                        <div className="p-4 w-4/12">
                            <TextInput
                                value={data.typeOfWork}
                                onChange={(e) => setData("typeOfWork", e.target.value)}
                                error={errors.typeOfWork}
                                placeholder="Type of Work"
                                defaultClasses="border-2 border-[#8A9298] focus:outline-none focus:ring-0"
                            />

                        </div>

                        {/* Job Details Table with TextInput */}
                        <div className="w-full">
                            <div className="grid mt-5">
                                <div className="flex gap-4">
                                    <div className="pr-2 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right  flex items-center justify-end">
                                           Job Location 
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white">

                                        <TextInput
                                            id="jobLocation"
                                            value={data.jobLocation}
                                            onChange={(e) => setData("jobLocation", e.target.value)}
                                            error={errors.jobLocation}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Visa validity
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="visaValidity"
                                            value={data.visaValidity}
                                            onChange={(e) => setData("visaValidity", e.target.value)}
                                            error={errors.visaValidity}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
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
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
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
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
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
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Medical Insurance
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="medicalInsurance"
                                            value={data.medicalInsurance}
                                            onChange={(e) => setData("medicalInsurance", e.target.value)}
                                            error={errors.medicalInsurance}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Daily working hours
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="workingHours"
                                            value={data.workingHours}
                                            onChange={(e) => setData("workingHours", e.target.value)}
                                            error={errors.workingHours}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
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
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Vacation benefits
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="vacationBenefits"
                                            value={data.vacationBenefits}
                                            onChange={(e) => setData("vacationBenefits", e.target.value)}
                                            error={errors.vacationBenefits}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Age limits
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="ageLimits"
                                            value={data.ageLimits}
                                            onChange={(e) => setData("ageLimits", e.target.value)}
                                            error={errors.ageLimits}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        In-demand workers
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="inDemandWorkers"
                                            value={data.inDemandWorkers}
                                            onChange={(e) => setData("inDemandWorkers", e.target.value)}
                                            error={errors.inDemandWorkers}
                                            placeholder="Type Here"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
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
                                    <div className="pr-2 border-t-0 border-2 border-[#8A9298] w-1/3 font-semibold bg-[#EFD79D] text-right flex items-center justify-end">
                                        Company activities
                                    </div>
                                    <div className="w-full border-2 border-[#8A9298] bg-white border-t-0">
                                        <TextInput
                                            id="companyActivities"
                                            value={data.companyActivities}
                                            onChange={(e) => setData("companyActivities", e.target.value)}
                                            error={errors.companyActivities}
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
                            <Textarea
                                id="applicationRequirements"
                                name="applicationRequirements"
                                value={data.applicationRequirements}
                                onChange={handleChange}
                                className="w-full"
                                rows={4}
                            />
                        </div>

                        {/* Company Details */}

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

                        {/* Company Name */}
                        <div className="flex gap-4">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CO. NAME</span>
                                <span className="text-red-500 ml-2">*</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>
                                
                                <TextInput
                                    id="companyName"
                                    value={data.companyName}
                                    onChange={(e) => setData("companyName", e.target.value)}
                                    error={errors.companyName}
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
                                    id="contactPerson"
                                    value={data.contactPerson}
                                    onChange={(e) => setData("contactPerson", e.target.value)}
                                    error={errors.contactPerson}
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
                                    id="contactNo"
                                    value={data.contactNo}
                                    onChange={(e) => setData("contactNo", e.target.value)}
                                    error={errors.contactNo}
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
                                    id="whatsappNo"
                                    value={data.whatsappNo}
                                    onChange={(e) => setData("whatsappNo", e.target.value)}
                                    error={errors.whatsappNo}
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
                                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 20% 100%)" }}
                                    ></span>
                                    ADRESS
                                </h3>
                            </div>
                        </div>

                        {/* Current Address */}
                        <div className="flex gap-4">
                            <div className="bg-gray-600 text-white p-2 w-48 flex items-center">
                                <span className="font-bold">CURRENT ADRESS</span>
                            </div>
                            <div className="flex-1 p-0 relative border-2 border-[#8A9298]">
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500"></div>
                                
                                <TextInput
                                    id="currentAddress"
                                    value={data.currentAddress}
                                    onChange={(e) => setData("currentAddress", e.target.value)}
                                    error={errors.currentAddress}
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

                        {/* Submit and Preview Buttons */}
                        <div className="p-4 flex justify-end space-x-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-600 text-white px-8 py-2 rounded font-bold"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded font-bold flex items-center"
                            >
                                <span className="mr-2">Preview</span>
                                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </WebLayout>
    )
}

export default SingleJobDemand;