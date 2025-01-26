import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import Switch from "@/Components/Web/Switch.jsx";
import {Link, useForm} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import Facebook from "@/Components/SvgIcons/Facebook.jsx";
import Google from "@/Components/SvgIcons/Google.jsx";
import React from "react";
import SocialLogin from "@/Components/Web/SocialLogin.jsx";

const UserLogin = () => {
    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const handleRemember = (value) => {
        setData('remember', value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-[72vh] bg-black/70 w-1/2 pr-5 pt-3 pb-8">
            <img className="w-full h-auto" src={`${assetUrl + 'images/sign-in.png'}`} alt=""/>

            <SocialLogin />

            <form onSubmit={handleSubmit} className="pl-5">
                <TextInput label="Username*" id="username" placeholder="Username"/>
                <TextInput divClasses="my-2" label="Password*" type="password" id="password" placeholder="Password"/>
                <Switch classes=" justify-end mr-1 mt-4" value={data.remember} onChange={handleRemember}/>
                <Link href={route('home')} className="block mt-4 text-sm font-semibold text-white">Forget
                    Password</Link>
                <PrimaryBtn classes="mt-3" type="submit" text="Next" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default UserLogin;
