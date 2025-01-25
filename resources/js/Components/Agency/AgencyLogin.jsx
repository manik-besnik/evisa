import TextInput from "@/Components/TextInput.jsx";
import Switch from "@/Components/Web/Switch.jsx";
import {Link, useForm} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React, {useState} from "react";
import SocialLogin from "@/Components/Web/SocialLogin.jsx";
import {FaCameraRetro} from "react-icons/fa";

const AgencyLogin = () => {

    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        remember: false,
        avatar: null
    })

    const [avatar, setAvatar] = useState('')

    const handleRemember = (value) => {
        setData('remember', value)
    }

    const handleUploadFile = (e) => {
        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {

                setAvatar('');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };

            setData('avatar', file)
            reader.readAsDataURL(file);
        } else {
            setAvatar('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="bg-black/70 w-1/2 p-5 min-h-[72vh]">
            <div className="flex gap-x-2 text-white">
                <h4 className="text-white min-w-max">
                    Agency
                    <br/>Register</h4>
                <label htmlFor="avatar" className="cursor-pointer">
                    {avatar && <img className="h-28 w-28 rounded-full" src={avatar} alt="preview-avatar"/>}

                    {!avatar && <div
                        className="flex items-center justify-center flex-col bg-[#1E374A] h-28 w-28 rounded-full">
                       <FaCameraRetro size={42}/>
                         <span className="text-[9px]">Upload Your Photo</span>
                    </div>}
                    <input id="avatar" onChange={(e) => handleUploadFile(e)} type="file" className="hidden"/>
                </label>

            </div>

            <SocialLogin/>

            <form onSubmit={handleSubmit}>
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

export default AgencyLogin;
