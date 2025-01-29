import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import Switch from "@/Components/Web/Switch.jsx";
import {Link, useForm} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React from "react";
import SocialLogin from "@/Components/Web/SocialLogin.jsx";

const UserLogin = ({isRegister = false}) => {
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

        if (isRegister) {

            post(route('register.store'))
            return
        }

        post(route('user.login.store'))
    }

    return (
        <div className="bg-black/70 w-1/2 pr-5 pt-3 pb-8" style={{minHeight: "calc(100vh - 140px)"}}>
            <img className="w-full h-auto" src={`${assetUrl + 'images/sign-in.png'}`} alt=""/>

            <SocialLogin/>

            <form onSubmit={handleSubmit} className="pl-5">
                <TextInput
                    label="Username*"
                    id="username"
                    placeholder="Username"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />
                <TextInput
                    divClasses="my-2"
                    label="Password*"
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={data.epasswordmail}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                />

                <Switch
                    classes=" justify-end mr-1 mt-4"
                    value={data.remember}
                    onChange={handleRemember}
                />

                <Link href={route('home')} className="block mt-4 text-sm font-semibold text-white">Forget
                    Password</Link>

                {isRegister && <PrimaryBtn classes="mt-3" type="submit" text="Next" onClick={handleSubmit}/>}

                {!isRegister && <PrimaryBtn classes="mt-3" type="submit" text="Login" onClick={handleSubmit}/>}
            </form>
        </div>
    )
}

export default UserLogin;
