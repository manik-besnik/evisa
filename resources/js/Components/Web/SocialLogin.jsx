import Facebook from "@/Components/SvgIcons/Facebook.jsx";
import React from "react";
import {assetUrl} from "@/Components/Constant/index.js";

const SocialLogin = ({classes}) => {
    return (
        <div className={`flex justify-end gap-x-4 text-white ${classes}`}>
            <img src={`${assetUrl +'images/google.svg'}`} alt="google" className="w-7 h-7"/>
            <Facebook className="w-7 h-7"/>
        </div>
    )
}

export default SocialLogin
