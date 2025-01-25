import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import {useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React from "react";
import Select from "@/Components/Web/Select.jsx";


const AgencyRegister = () => {

    const countries = usePage().props.countries;
    const languages = usePage().props.languages;

    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const updateNationality = (value) => {
        setData('remember', value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-[60%] bg-black/70 px-5 h-[72vh] overflow-y-scroll">

            <form onSubmit={handleSubmit} >

                <TextInput divClasses="mb-2 mt-5" id="name" placeholder="Name | Company Name" inputClasses='text-xs'/>

                <TextInput divClasses="mb-2" id="contact-person" placeholder="Contact Person" inputClasses='text-xs'/>

                <TextInput divClasses="mb-2" id="profession" placeholder="Profession" inputClasses='text-xs'/>

                <TextInput divClasses="mb-2" id="phone" placeholder="Whatsapp | Mobile With Country Code"
                           inputClasses='text-xs'/>

                <TextInput divClasses="mb-2" id="email" placeholder="Email Address"
                           inputClasses='text-xs'/>

                <Select classes="my-2 sm:text-xs" items={countries} selected={null} setSelected={updateNationality}
                        handleValueChange={updateNationality}
                        placeholder="Nationality" field='nationality'/>

                <Select classes="my-2 sm:text-xs" items={languages} selected={null} setSelected={updateNationality}
                        handleValueChange={updateNationality}
                        placeholder="Preffered Language"/>

                <Select classes="my-2 sm:text-xs" items={countries} selected={null} setSelected={updateNationality}
                        handleValueChange={updateNationality}
                        placeholder="Living Country"/>

                <TextInput id="city" placeholder="Enter City" inputClasses='text-xs'/>

                <p className="text-white text-md mt-3">Inside UAE</p>
                <TextInput id="eid" placeholder="EID No." inputClasses='text-xs'/>
                <TextInput id="passport-no" placeholder="Passport No" inputClasses='text-xs'/>
                <TextInput id="uid" placeholder="UID No" inputClasses='text-xs'/>

                <p className="text-white text-md mt-3">BANK Account Details</p>
                <TextInput id="eid" placeholder="EID No." inputClasses='text-xs h-20'/>

                <p className="text-white text-md mt-3">Nominee</p>
                <TextInput id="nominee-name" placeholder="Name" inputClasses='text-xs'/>
                <TextInput id="nominee-passport-no" placeholder="Passport No" inputClasses='text-xs'/>

                <PrimaryBtn text="Register" type="submit" btnClasses="uppercase mt-2 mb-5" />


            </form>
        </div>
    )
}

export default AgencyRegister;
