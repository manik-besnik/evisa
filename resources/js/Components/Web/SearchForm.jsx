import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {groups, visaProcessingTypes, visaTypes} from "@/Components/Constant/index.js";
import {useState} from "react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";

const SearchForm = () => {

    const [processingType, setProcessingType] = useState('')


    return (
        <>
            <h3 className="text-text-primary text-lg font-semibold mt-3">Search Report</h3>

            <form>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 items-center">

                    <TextInput
                        id="personal-name"
                        placeholder="Personal Name"
                        label="Personal Name" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                    />

                    <Select
                        placeholder="Processing Type"
                        label="Processing Type*"
                        items={visaProcessingTypes}
                        selected={processingType}
                        setSelected={setProcessingType}
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <Select
                        placeholder="Visa Type"
                        label="Visa Type*"
                        items={visaTypes}
                        selected={processingType}
                        setSelected={setProcessingType}
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <TextInput
                        id="from-date"
                        placeholder="From Date"
                        label="From Date" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                    />

                    <TextInput
                        id="to-date"
                        placeholder="To Date"
                        label="To Date" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                    />

                    <TextInput
                        id="name"
                        placeholder="Name"
                        label="Name" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                    />

                    <TextInput
                        id="passport-no"
                        placeholder="Passport No"
                        label="Passport No" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                    />


                    <TextInput
                        id="app-id"
                        placeholder="App ID"
                        label="App ID" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                    />

                    <Select placeholder="Select Group"
                            label="Group ID"
                            items={groups}
                            selected={processingType}
                            setSelected={setProcessingType}
                            classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>


                    <Select placeholder="Select Status"
                            label="Status"
                            items={groups}
                            selected={processingType}
                            setSelected={setProcessingType}
                            classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"/>

                </div>

                <div className="mb-8 flex gap-x-2">
                    <button
                        type="button"
                        className={`py-2 px-4 bg-warning rounded hover:bg-warning text-white font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 `}
                    >
                        Search Visa
                    </button>
                    <button
                        type="button"
                        className={`py-2 px-4 rounded bg-yellow-500 hover:bg-primary text-gray-800 font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 `}
                    >
                        Clear
                    </button>
                </div>

            </form>
        </>
    )
}

export default SearchForm;
