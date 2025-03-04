import TextInput from "@/Components/TextInput.jsx";
import Select from "@/Components/Web/Select.jsx";
import {groups, visaProcessingTypes, visaStatuses, visaTypes} from "@/Components/Constant/index.js";
import {useState} from "react";
import {router, useForm} from "@inertiajs/react";

const SearchForm = () => {

    const queryParams = route()?.params

    let visaProcessingType = ''

    if (queryParams?.processing_type) {
        visaProcessingType = visaProcessingTypes.find(item => item.id === Number(queryParams?.processing_type))
    }

    let type = ''

    if (queryParams?.visa_type) {
        type = visaTypes.find(item => item.id === Number(queryParams?.visa_type))
    }

    let visaGroup = ''

    if (queryParams?.group) {
        visaGroup = groups.find(item => item.id === Number(queryParams?.group))
    }

    let status = ''

    if (queryParams?.visa_status) {
        status = visaStatuses.find(item => item.id === Number(queryParams?.visa_status))
    }

    const [processingType, setProcessingType] = useState(visaProcessingType)
    const [visaType, setVisaType] = useState(type)
    const [group, setGroup] = useState(visaGroup)
    const [visaStatus, setVisaStatus] = useState(status);

    const {data, setData, processing} = useForm({
        name: queryParams?.name || '',
        app_id: queryParams?.app_id || '',
        processing_type: queryParams?.processing_type || '',
        visa_type: queryParams?.visa_type || '',
        from_date: queryParams?.from_date || '',
        to_date: queryParams?.to_date || '',
        personal_name: queryParams?.personal_name || '',
        passport_no: queryParams?.passport_no || '',
        group: queryParams?.group || '',
        visa_status: queryParams?.visa_status || '',
    })

    const resetForm = () => {
        setProcessingType('')
        setVisaType('')
        setGroup('')
        setVisaStatus('')
        setData('name','');
        setData('app_id','');
        setData('processing_type','');
        setData('visa_type','');
        setData('from_date','');
        setData('to_date','');
        setData('personal_name','');
        setData('passport_no','');
        setData('group','');
        setData('visa_status','');

    }

    const handleSearch = () => {
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== '' && value !== null)
        );

        if (Object.keys(filteredData).length === 0) {
            return;
        }

        router.get(route('visa-apply.index'), filteredData);
    };


    return (
        <>
            <h3 className="text-text-primary text-lg font-semibold mt-3">Search Report</h3>

            <form>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 items-center">

                    <TextInput
                        value={data.name}
                        id="personal-name"
                        placeholder="Personal Name"
                        label="Personal Name" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <Select
                        placeholder="Processing Type"
                        label="Processing Type"
                        items={visaProcessingTypes}
                        selected={processingType}
                        setSelected={setProcessingType}
                        handleValueChange={(value) => setData('processing_type', value.id)}
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <Select
                        placeholder="Visa Type"
                        label="Visa Type"
                        items={visaTypes}
                        selected={visaType}
                        setSelected={setVisaType}
                        handleValueChange={(value) => setData('visa_type', value.id)}
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <TextInput
                        id="from-date"
                        value={data.from_date}
                        onChange={e => setData('from_date', e.target.value)}
                        placeholder="From Date"
                        label="From Date"
                        divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <TextInput
                        id="to-date"
                        value={data.to_date}
                        onChange={e => setData('to_date', e.target.value)}
                        placeholder="To Date"
                        label="To Date" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        type='date'
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        placeholder="Name"
                        label="Name" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <TextInput
                        id="passport-no"
                        value={data.passport_no}
                        onChange={e => setData('passport_no', e.target.value)}
                        placeholder="Passport No"
                        label="Passport No" divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />


                    <TextInput
                        id="app-id"
                        value={data.app_id}
                        onChange={e => setData('app_id', e.target.value)}
                        placeholder="App ID"
                        label="App ID"
                        divClasses="my-3"
                        inputClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        labelClasses="text-text-primary"
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                    <Select
                        placeholder="Select Group"
                        label="Group ID"
                        items={groups}
                        selected={group}
                        setSelected={setGroup}
                        handleValueChange={value => setData('group', value.id)}
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />


                    <Select
                        placeholder="Select Status"
                        label="Status"
                        items={visaStatuses}
                        selected={visaStatus}
                        setSelected={setVisaStatus}
                        handleValueChange={value => setData('visa_status', value.id)}
                        defaultClasses="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                        classes="bg-[#E0EBF8] border-l-primary focus:border-l-primary"
                    />

                </div>

                <div className="mb-8 flex gap-x-2">
                    <button
                        onClick={handleSearch}
                        type="button"
                        disabled={processing}
                        className={`py-2 px-4 bg-warning rounded hover:bg-warning text-white font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.3)]  hover:shadow-[2px_2px_6px_rgba(0,0,0,0.35)] transition-shadow duration-200 `}
                    >
                        Search Visa
                    </button>
                    <button
                        onClick={resetForm}
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
