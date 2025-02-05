import {useForm, usePage} from "@inertiajs/react";
import {toast} from "react-toastify";
import Select from "@/Components/Select.jsx";
import InputBox from "@/Components/Admin/InputBox.jsx";
import {useState} from "react";

export const AddUserForm = ({submitRoute}) => {
    const countries = usePage().props.countries;
    const languages = usePage().props.languages;

    const [nationality, setNationality] = useState(null)
    const [language, setLanguage] = useState(null)
    const [country, setCountry] = useState(null)


    const {data, setData, post, errors, processing} = useForm({
        name: '',
        username: '',
        password: '',
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

        post(submitRoute, {
            onSuccess: () => {
                toast.success('Your Information saved successfully')
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-5 bg-white rounded-lg">

            <InputBox
                divClasses="mb-2" id="name"
                label="Name"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                error={errors.name}
            />
            <InputBox
                divClasses="mb-2" id="username"
                label="Username"
                placeholder="Username"
                value={data.username}
                onChange={(e) => setData('username', e.target.value)}
                error={errors.username}
            />

            <InputBox
                divClasses="mb-2" id="password"
                placeholder="Password*"
                label="Password*"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                error={errors.password}
                type="password"
            />

            <InputBox
                divClasses="mb-2"
                id="profession"
                placeholder="Profession"
                label="Profession"
                value={data.profession}
                onChange={(e) => setData('profession', e.target.value)}
                error={errors.profession}
            />

            <InputBox
                divClasses="mb-2"
                id="phone"
                label="Whatsapp | Mobile With Country Code"
                placeholder="Whatsapp | Mobile With Country Code"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                error={errors.phone}
            />

            <InputBox
                divClasses="mb-2"
                id="phone"
                label="Email Address"
                placeholder="Email Address"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                error={errors.email}
            />

            <Select
                label="Nationality"
                items={countries}
                selected={nationality}
                setSelected={setNationality}
                handleValueChange={updateNationality}
                error={errors.nationality}
                placeholder="Select Nationality"
                field='nationality'
            />

            <Select
                label="Preffered Language"
                items={languages}
                selected={language}
                setSelected={setLanguage}
                handleValueChange={updateLanguage}
                error={errors.preffer_language}
                placeholder="Select Language"
            />

            <Select
                label="Living Country"
                items={countries}
                selected={country}
                setSelected={setCountry}
                handleValueChange={updateLivingCountry}
                error={errors.living_country}
                placeholder="Select Country"
            />

            <InputBox
                id="city"
                label="Enter City"
                placeholder="Enter City"
                value={data.city}
                onChange={(e) => setData('city', e.target.value)}
                error={errors.city}
            />
            <div>
                <button disabled={processing} className="btn-primary" type="submit" onClick={handleSubmit}>
                    Add User
                </button>
            </div>

        </form>
    )
}

export default AddUserForm;
