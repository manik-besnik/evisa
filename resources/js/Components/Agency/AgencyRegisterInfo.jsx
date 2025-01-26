import TextInput from "@/Components/TextInput.jsx";
import {useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React, {useState} from "react";
import Select from "@/Components/Web/Select.jsx";
import {toast} from "react-toastify";


const AgencyRegisterInfo = () => {

    const countries = usePage().props.countries;
    const languages = usePage().props.languages;

    const {data, setData, post, errors} = useForm({
        company_name: '',
        person_name: '',
        profession: '',
        phone: '',
        email: '',
        nationality: '',
        preffer_language: '',
        living_country: '',
        city: '',
        eid_no: '',
        passport_no: '',
        uid_no: '',
        bank_details: '',
        nominee_name: '',
        nominee_passport: '',
    })

    const [nationality, setNationality] = useState({})
    const [prefferLanguage, setPrefferLanguage] = useState({})
    const [livingCountry, setLivingCountry] = useState({})

    const updateNationality = (value) => {
        setData('nationality', value.id)
    }

    const updatePrefferLanguage = (value) => {
        setData('preffer_language', value.id)
    }

    const updateLivingCountry = (value) => {
        setData('living_country', value.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('agency.register.agency-info.store'), {
            onSuccess: () => {
                toast.success("Your Agency Account Registration Completed")
            }
        })
    }

    return (
        <div className="w-[60%] bg-black/70 px-5 h-[72vh] overflow-y-scroll">

            <form onSubmit={handleSubmit}>

                <TextInput
                    divClasses="mb-2 mt-5" id="name"
                    placeholder="Name | Company Name"
                    inputClasses='text-xs'
                    onChange={(e) => setData('company_name', e.target.value)}
                    error={errors.company_name}
                />

                <TextInput
                    divClasses="mb-2" id="contact-person"
                    placeholder="Contact Person" inputClasses='text-xs'
                    onChange={(e) => setData('person_name', e.target.value)}
                    error={errors.person_name}
                />

                <TextInput
                    divClasses="mb-2" id="profession"
                    placeholder="Profession" inputClasses='text-xs'
                    onChange={(e) => setData('profession', e.target.value)}
                    error={errors.profession}
                />

                <TextInput
                    divClasses="mb-2" id="phone"
                    placeholder="Whatsapp | Mobile With Country Code"
                    inputClasses='text-xs'
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                />

                <TextInput
                    divClasses="mb-2"
                    id="email"
                    placeholder="Email Address"
                    inputClasses='text-xs'
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={countries} selected={nationality}
                    setSelected={setNationality}
                    handleValueChange={updateNationality}
                    placeholder="Nationality"
                    field='nationality'
                    error={errors.nationality}
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={languages} selected={prefferLanguage}
                    setSelected={setPrefferLanguage}
                    handleValueChange={updatePrefferLanguage}
                    placeholder="Preffered Language"
                    error={errors.preffer_language}
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={countries} selected={livingCountry}
                    setSelected={setLivingCountry}
                    handleValueChange={updateLivingCountry}
                    placeholder="Living Country"
                    error={errors.living_country}
                />

                <TextInput
                    id="city"
                    placeholder="Enter City"
                    inputClasses='text-xs'
                    onChange={(e) => setData('city', e.target.value)}
                    error={errors.city}
                />

                <p className="text-white text-md mt-3">Inside UAE</p>

                <TextInput
                    id="eid" placeholder="EID No."
                    inputClasses='text-xs'
                    onChange={(e) => setData('eid_no', e.target.value)}
                    error={errors.eid_no}
                />

                <TextInput
                    id="passport-no" placeholder="Passport No"
                    inputClasses='text-xs'
                    onChange={(e) => setData('passport_no', e.target.value)}
                    error={errors.passport_no}
                />

                <TextInput id="uid" placeholder="UID No" inputClasses='text-xs'
                           onChange={(e) => setData('uid_no', e.target.value)}
                           error={errors.uid_no}/>

                <p className="text-white text-md mt-3">BANK Account Details</p>

                <TextInput
                    id="eid" placeholder="EID No."
                    inputClasses='text-xs h-20'
                    onChange={(e) => setData('bank_details', e.target.value)}
                    error={errors.bank_details}
                />

                <p className="text-white text-md mt-3">Nominee</p>

                <TextInput
                    id="nominee-name"
                    placeholder="Name" inputClasses='text-xs'
                    onChange={(e) => setData('nominee_name', e.target.value)}
                    error={errors.nominee_name}
                />

                <TextInput
                    id="nominee-passport-no"
                    placeholder="Passport No"
                    inputClasses='text-xs'
                    onChange={(e) => setData('nominee_passport', e.target.value)}
                    error={errors.nominee_passport}
                />

                <PrimaryBtn text="Register" type="submit" btnClasses="uppercase mt-2 mb-5"/>


            </form>
        </div>
    )
}

export default AgencyRegisterInfo;
