import {assetUrl} from "@/Components/Constant/index.js";
import TextInput from "@/Components/TextInput.jsx";
import Switch from "@/Components/Web/Switch.jsx";
import {Link, useForm} from "@inertiajs/react";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import React, {useState, useEffect} from "react";
import SocialLogin from "@/Components/Web/SocialLogin.jsx";

const UserLogin = ({isRegister = false}) => {
    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        remember: false,
    })

    // State for password visibility toggle
    const [showPassword, setShowPassword] = useState(false);

    // Check for autofill and auto-check remember me
    useEffect(() => {
        const checkAutofill = () => {
            const passwordInput = document.getElementById('password');
            const emailInput = document.getElementById('username');
            
            // Check if inputs are autofilled
            if (passwordInput && emailInput) {
                const isPasswordAutofilled = passwordInput.matches(':-webkit-autofill') || 
                                           passwordInput.value !== '' || 
                                           passwordInput.getAttribute('autocomplete') === 'current-password';
                
                const isEmailAutofilled = emailInput.matches(':-webkit-autofill') || 
                                        emailInput.value !== '';

                // If both email and password are autofilled, check remember me
                if (isPasswordAutofilled && isEmailAutofilled && !data.remember) {
                    setData('remember', true);
                }
            }
        };

        // Check immediately
        checkAutofill();
        
        // Also check after a short delay to catch slower autofill
        const timeoutId = setTimeout(checkAutofill, 500);
        
        // Check when inputs change (for autofill detection)
        const passwordInput = document.getElementById('password');
        const emailInput = document.getElementById('username');
        
        if (passwordInput && emailInput) {
            const handleInputChange = () => {
                if (passwordInput.value !== '' && emailInput.value !== '' && !data.remember) {
                    setData('remember', true);
                }
            };
            
            passwordInput.addEventListener('input', handleInputChange);
            emailInput.addEventListener('input', handleInputChange);
            
            // Cleanup
            return () => {
                clearTimeout(timeoutId);
                passwordInput.removeEventListener('input', handleInputChange);
                emailInput.removeEventListener('input', handleInputChange);
            };
        }
        
        return () => clearTimeout(timeoutId);
    }, [data.remember, setData]);

    const handleRemember = (value) => {
        setData('remember', value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isRegister) {
            post(route('register.store'))
            return
        }

        // Submit login with remember option
        post(route('user.login.store'), {
            data: {
                email: data.email,
                password: data.password,
                remember: data.remember
            }
        })
    }

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                    autoComplete="username"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />
                
                {/* Password field with eye icon */}
                <div className="my-2 relative">
                    <TextInput
                        divClasses="my-2"
                        label="Password*"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                    />
                    {/* Eye icon button */}
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        style={{marginTop: '13px'}} // Adjust based on your TextInput component styling
                    >
                        {showPassword ? (
                            // Beautiful eye slash icon (password visible - click to hide)
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                <path d="M2 2L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                            </svg>
                        ) : (
                            // Beautiful eye icon (password hidden - click to show)
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                            </svg>
                        )}
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link href={route('home')} className="block text-sm font-semibold text-white">Forget
                    Password</Link>
                    <Switch
                        classes="mr-1"
                        value={data.remember}
                        onChange={handleRemember}
                    />
                </div>

                

                {isRegister && <PrimaryBtn classes="mt-3" type="submit" text="Next" onClick={handleSubmit}/>}

                {!isRegister && <PrimaryBtn classes="mt-3" type="submit" text="Login" onClick={handleSubmit}/>}
                {!isRegister && <p className="mt-3 text-white">Don't Have an Account ? <a href={route('register')} className="text-yellow-600 font-bold">REGISTER NOW</a></p>}
            </form>
        </div>
    )
}

export default UserLogin;