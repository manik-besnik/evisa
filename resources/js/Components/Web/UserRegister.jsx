import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import {useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React from "react";
import Select from "@/Components/Web/Select.jsx";


const UserLogin = () => {

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
        <div className="w-[60%]">
            <div className="bg-black/70 px-5 pb-5">
                <img className="w-3/4 h-auto" src={`${assetUrl + 'images/logo.png'}`} alt=""/>
            </div>

            <form onSubmit={handleSubmit} className="px-5 pt-4 pb-5 bg-primary">
                <TextInput divClasses="mb-2" id="name" placeholder="Name" inputClasses='text-xs'/>
                <TextInput divClasses="mb-2" id="profession" placeholder="Profession" inputClasses='text-xs'/>
                <TextInput divClasses="mb-2" id="phone" placeholder="Whatsapp | Mobile With Country Code"
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

                <PrimaryBtn classes="w-full mt-3" type="submit" text="Register" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default UserLogin;
