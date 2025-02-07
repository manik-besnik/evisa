import Facebook from "@/Components/SvgIcons/Facebook.jsx";
import React from "react";
import {assetUrl} from "@/Components/Constant/index.js";

const SocialLogin = ({classes}) => {
    return (
        <div className={`flex justify-end gap-x-4 text-white ${classes}`}>
            <a href={route('google.redirect')}>

                <img src={`${assetUrl + 'images/google.svg'}`} alt="google" className="w-7 h-7"/>
            </a>
            <a href={route('facebook.redirect')}>

                <Facebook className="w-7 h-7"/>
            </a>
        </div>
    )
}

export default SocialLogin
