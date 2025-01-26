import WebLayout from "@/Layouts/WebLayout.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {genders, groups, maritalStatuses, visaProcessingTypes, visaTypes} from "@/Components/Constant/index.js";
import {useState} from "react";
import {Head} from "@inertiajs/react";

const VisaApply = () => {

    const [processingType, setProcessingType] = useState('')


    return (

        <WebLayout showBgImage={false} showServiceImage={false}>

            <Head title="Apply For New Visa | Dubai E-Visa"/>

            <div className="container">
                <h3 className="text-text-primary text-lg font-semibold mt-3">Apply Visa</h3>

                <form>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            id="personal-name"
                            placeholder="Personal Name | Company Name"
                                   label="Personal Name | Company Name" divClasses="my-3"
                                   defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                   labelClasses="text-text-primary"/>

                        <Select placeholder="Processing Type"
                                label="Processing Type*"
                                items={visaProcessingTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>

                        <Select placeholder="Visa Type"
                                label="Visa Type*"
                                items={visaTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>

                        <Select placeholder="Select Group"
                                label="Group Membership(if any)"
                                items={groups}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>
                    </div>

                    <h4 className="text-success mt-2 text-md">Personal Information</h4>

                    <div className="flex gap-x-8 items-center">

                        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-x-4">

                            <TextInput
                                id="fullname-english"
                                placeholder="Full Name English"
                                label="Full Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                id="fullname-arabic"
                                placeholder="Full Name Arabic"
                                label="Full Name (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <Select
                                placeholder="Select Nationality"
                                label="Current Nationality*"
                                items={visaProcessingTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />

                            <Select
                                placeholder="Select Nationality"
                                label="Prev Nationality"
                                items={visaTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />

                            <Select
                                placeholder="Select Gender"
                                label="Gender*"
                                items={genders}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />


                            <TextInput
                                id="date-of-birth"
                                placeholder="Date Of Birth"
                                label="Date Of Birth" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                                type="date"
                            />

                            <Select
                                placeholder="Select Country"
                                label="Birth Country*"
                                items={genders}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />


                            <Select
                                placeholder="Select Status"
                                label="Marital Status*"
                                items={maritalStatuses}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            />
                            <TextInput
                                id="birth-place-english"
                                placeholder="Birth Place English"
                                label="Birth Place (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                id="birth-place-arabic"
                                placeholder="Birth Place Arabic"
                                label="Birth Place (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                id="mother-english"
                                placeholder="Mother Name English"
                                label="Mother Name (English)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                id="mother-arabic"
                                placeholder="Mother Name Arabic"
                                label="Mother Name (Arabic)" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />


                            <TextInput
                                id="religion"
                                placeholder="Religion"
                                label="Religion" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                id="faith"
                                placeholder="Faith"
                                label="Faith" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                id="qualification"
                                placeholder="Qualification"
                                label="Qualification" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                            <TextInput
                                id="profession"
                                placeholder="Profession"
                                label="Profession" divClasses="my-3"
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                                labelClasses="text-text-primary"
                            />

                        </div>
                        <div className="w-1/4"></div>


                    </div>

                    <h4 className="text-success mt-2 text-md">Passport Information</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            id="passport-type"
                            placeholder="Ex: Ordinary"
                            label="Passport Type" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            id="passport-no"
                            placeholder="Passport NO"
                            label="Passport NO*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />


                        <TextInput
                            id="passport-issue-date"
                            placeholder="Passport Issue Date"
                            label="Passport Issue Date" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />

                        <TextInput
                            id="passport-expire-date"
                            placeholder="Passport Expire Date"
                            label="Passport Expire Date" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                            type="date"
                        />

                        <TextInput
                            id="passport-issue-place"
                            placeholder="Passport Issue Place"
                            label="Passport Issue Place*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            id="passport-issue-place-arabic"
                            placeholder="Passport Issue Place Arabic"
                            label="Passport Issue Place(Arabic)*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <Select placeholder="Processing Issue Country"
                                label="Processing Country*"
                                items={visaProcessingTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>

                    </div>

                    <h4 className="text-success mt-2 text-md">Guarantor Information</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 items-center">

                        <TextInput
                            id="guarntor-name"
                            placeholder="Ex: Jhon Deo"
                            label="Name*" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            id="guarantor-passport-no"
                            placeholder="Passport NO"
                            label="Passport No" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <Select placeholder="Select Nationality"
                                label="Nationality*"
                                items={visaProcessingTypes}
                                selected={processingType}
                                setSelected={setProcessingType}
                                defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>


                        <TextInput
                            id="guarantor-phone"
                            placeholder="Mobile"
                            label="Mobile" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />

                        <TextInput
                            id="guarantor-relation"
                            placeholder="Relation"
                            label="Relation" divClasses="my-3"
                            defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                            labelClasses="text-text-primary"
                        />


                    </div>
                </form>
            </div>
        </WebLayout>
    )
}

export default VisaApply;
