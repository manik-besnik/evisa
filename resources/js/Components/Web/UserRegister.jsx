import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import {useForm, usePage} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React, {useState} from "react";
import Select from "@/Components/Web/Select.jsx";
import {toast} from "react-toastify";


const UserRegister = () => {

    const countries = usePage().props.countries;
    const languages = usePage().props.languages;

    const [nationality, setNationality] = useState(null)
    const [language, setLanguage] = useState(null)
    const [country, setCountry] = useState(null)


    const {data, setData, put, errors} = useForm({
        name: '',
        profession: '',
        phone: '',
        email: '',
        preffer_language: '',
        nationality: '',
        living_country: '',
        city: '',
    })

    const updateNationality = (value) => {
        setData('nationality', value.id)
    }

    const updateLanguage = (value) => {
        setData('preffer_language', value.id)
    }
    const updateLivingCountry = (value) => {
        setData('living_country', value.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('user.info.store'), {
            onSuccess: () => {
                toast('Your Information saved successfully')
            }
        })
    }

    return (
        <div className="w-[60%]">
            <div className="bg-black/70 px-5 pb-5">
                <img className="w-3/4 h-auto" src={`${assetUrl + 'images/logo.png'}`} alt=""/>
            </div>

            <form onSubmit={handleSubmit} className="px-5 pt-4 pb-5 bg-primary h-[90.6%]">

                <TextInput
                    divClasses="mb-2" id="name"
                    placeholder="Name"
                    inputClasses='text-xs'
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                />

                <TextInput
                    divClasses="mb-2"
                    id="profession"
                    placeholder="Profession"
                    inputClasses='text-xs'

                    value={data.profession}
                    onChange={(e) => setData('profession', e.target.value)}
                    error={errors.profession}
                />

                <TextInput
                    divClasses="mb-2"
                    id="phone"
                    placeholder="Whatsapp | Mobile With Country Code"
                    inputClasses='text-xs'
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                />

                <TextInput
                    divClasses="mb-2"
                    id="phone"
                    placeholder="Email Address"
                    inputClasses='text-xs'
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={countries}
                    selected={nationality}
                    setSelected={setNationality}
                    handleValueChange={updateNationality}
                    error={errors.nationality}
                    placeholder="Nationality"
                    field='nationality'
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={languages}
                    selected={language}
                    setSelected={setLanguage}
                    handleValueChange={updateLanguage}
                    error={errors.preffer_language}
                    placeholder="Preffered Language"
                />

                <Select
                    classes="my-2 sm:text-xs"
                    items={countries}
                    selected={country}
                    setSelected={setCountry}
                    handleValueChange={updateLivingCountry}
                    error={errors.living_country}
                    placeholder="Living Country"
                />

                <TextInput
                    id="city"
                    placeholder="Enter City"
                    inputClasses='text-xs'
                    value={data.city}
                    onChange={(e) => setData('city', e.target.value)}
                    error={errors.city}
                />

                <PrimaryBtn classes="w-full mt-3" type="submit" text="Register" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default UserRegister;
