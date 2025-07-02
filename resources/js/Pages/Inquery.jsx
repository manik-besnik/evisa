import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head } from "@inertiajs/react";
import InputFile from "@/Components/Web/InputFile.jsx";
import TextInput from "@/Components/TextInput.jsx";
import CustomPhoneInput from "@/Components/Web/CustomPhoneInput.jsx";
import {
    regions,
    visaTypes,
    jobApplyDocuments,
    countriesList
} from "@/Components/Constant/index.js";
import { usePage, router, useForm } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Inquery = () => {
    const { apply_for, countries = [], locations = [], languages } = usePage().props;
    const [region, setRegion] = useState(null);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [locationOptions, setLocationOptions] = useState([]);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState("");
    const recaptchaRef = useRef(null);

    const [phoneCountry, setPhoneCountry] = useState(countriesList[0]);
    const [whatsappCountry, setWhatsappCountry] = useState(countriesList[0]);

    // Set up the form data using useForm
    const { data, setData, errors } = useForm({
        name: '',
        email: '',
        visa_type: '',
        location: '',
        phone: '',
        phone_country: countriesList[0].code,
        whatsapp: '',
        whatsapp_country: countriesList[0].code,
        message: '',
        documents: {},
        recaptcha_token: ''
    });

    const handleVisaClick = (visa) => {
        router.get(route('visa-apply.create'), { visaType: visa.id });
    };

    const params = new URLSearchParams(window.location.search);
    const urlVisaType = params.get('visaType');
    const selectedVisaTypeObj = urlVisaType ?
        visaTypes.find(type => type.id.toString() === urlVisaType) || '' :
        '';
    const [visaType, setVisaType] = useState(selectedVisaTypeObj);

    const updateVisaType = (value) => {
        setData('visa_type', value.id);
    };

    const handleFileChange = (fileType, file) => {
        const fileName = jobApplyDocuments.find((item) => item.type === fileType)?.name || "Unknown";

        const updatedDocuments = {
            ...data.documents,
            [fileType]: {
                name: fileName,
                type: fileType,
                file: file
            }
        };

        setData('documents', updatedDocuments);
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        setData('recaptcha_token', token);
        setCaptchaError("");
    };

    const handleCaptchaExpired = () => {
        setCaptchaToken(null);
        setData('recaptcha_token', '');
        setCaptchaError("reCAPTCHA has expired, please verify again");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate reCAPTCHA
        if (!captchaToken) {
            setCaptchaError("Please complete the reCAPTCHA verification");
            return;
        }

        const formData = new FormData();

        // Add basic fields
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('visa_type', data.visa_type);
        formData.append('location', data.location);
        formData.append('phone', data.phone);
        formData.append('phone_country', data.phone_country);
        formData.append('whatsapp', data.whatsapp);
        formData.append('whatsapp_country', data.whatsapp_country);
        formData.append('message', data.message);
        formData.append('recaptcha_token', captchaToken);

        // Add documents
        Object.keys(data.documents).forEach(key => {
            const document = data.documents[key];
            formData.append(`documents[${key}][name]`, document.name);
            formData.append(`documents[${key}][file]`, document.file);
        });

        router.post(route('query.store'), formData, {
            forceFormData: true,  // Important for Inertia to send as FormData
            onSuccess: () => {
                setData({
                    name: '',
                    email: '',
                    visa_type: '',
                    location: '',
                    phone: '',
                    phone_country: countriesList[0].code,
                    whatsapp: '',
                    whatsapp_country: countriesList[0].code,
                    message: '',
                    documents: {},
                    recaptcha_token: ''
                });

                // Reset reCAPTCHA
                setCaptchaToken(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }

                toast.success('Your query has been submitted successfully!');
            },
            onError: (errors) => {
                if (errors.recaptcha_token) {
                    setCaptchaError(errors.recaptcha_token);
                    // Reset reCAPTCHA on error
                    if (recaptchaRef.current) {
                        recaptchaRef.current.reset();
                    }
                }
            }
        });
    };

    const handleRegionChange = (e) => {
        const selectedRegionId = parseInt(e.target.value);
        const selectedRegion = regions.find(r => r.id === selectedRegionId);

        setRegion(selectedRegion);
        setShowLocationDropdown(selectedRegionId > 0);

        setData('location', '');

        updateLocationOptions(selectedRegion);
    };

    const updateLocationOptions = (selectedRegion) => {
        if (!selectedRegion) {
            setLocationOptions([]);
            return;
        }

        if (selectedRegion.name === "Inside UAE") {
            const uaeLocations = locations.length > 0 ? locations : [
                { id: 1, name: "DUBAI" },
                { id: 2, name: "ABUDHABI" },
                { id: 3, name: "SHARJAH" },
                { id: 4, name: "AJMAN" },
                { id: 5, name: "UMM AL QWAIN" },
                { id: 6, name: "RAS AL KHAIMA" },
            ];
            setLocationOptions(uaeLocations);
        } else {
            setLocationOptions(countries || []);
        }
    };

    // Phone icon component
    const PhoneIcon = () => (
        <div className="bg-blue-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
            </svg>
        </div>
    );

    // WhatsApp icon component
    const WhatsAppIcon = () => (
        <div className="bg-green-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        </div>
    );

    return (
        <WebLayout showBgImage={true} showServiceImage={true}>
            <Head title="Other | Dubai E-Visa" />
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col-reverse lg:flex-row lg:gap-x-20">
                        <div className="w-full lg:w-1/2">
                            <h4 className="text-success text-md my-4">Add Any Type of documents</h4>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-2 mt-10">
                                {jobApplyDocuments.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center w-full h-full"
                                    >{i !== 24 && <InputFile
                                        defaultClasses="w-full h-12"
                                        fileType={item.type}
                                        onChange={handleFileChange}
                                        placeholder={item.name}
                                    />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 h-auto lg:h-[85vh] mb-6 lg:mb-0">
                            <div className="bg-[#6b7377c8] h-full relative p-5">
                                <h4 className="text-white font-medium text-lg mb-4">Feel free to get in touch</h4>

                                {/* Contact form */}
                                <div className="space-y-3">
                                    <TextInput
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Your Name"
                                        id="name"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />

                                    <div className="relative w-full">
                                        <select
                                            className="w-full p-2 rounded"
                                            onChange={(e) => setData('visa_type', e.target.value)}
                                            value={data.visa_type}
                                        >
                                            <option value="">Apply For</option>
                                            {visaTypes && visaTypes.map((type, i) => (
                                                <option key={i} value={type.id}>{type.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="relative w-full">
                                        <select
                                            className="w-full p-2 rounded"
                                            onChange={handleRegionChange}
                                            value={region?.id || ''}
                                        >
                                            <option value="">Apply From</option>
                                            {regions && regions.map((r, i) => (
                                                <option key={i} value={r.id}>{r.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Conditional Location dropdown */}
                                    {showLocationDropdown && (
                                        <div className="relative w-full">
                                            <select
                                                className="w-full p-2 rounded"
                                                onChange={(e) => setData('location', e.target.value)}
                                                value={data.location}
                                            >
                                                <option value="">Select Location</option>
                                                {locationOptions && locationOptions.length > 0 ? (
                                                    locationOptions.map((item, i) => (
                                                        <option key={i} value={item.name}>{item.name}</option>
                                                    ))
                                                ) : (
                                                    <option value="" disabled>No options available</option>
                                                )}
                                            </select>
                                        </div>
                                    )}

                                    <TextInput
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        error={errors.email}
                                        placeholder="Your Email"
                                        id="email"
                                        required={true}
                                        defaultClasses="border-2 border-[#848585] focus:border-[#848585]"
                                    />

                                    {/* Updated Phone input with country selection */}
                                    <CustomPhoneInput
                                        value={data.phone}
                                        onChange={(value) => setData('phone', value)}
                                        placeholder="Phone Number"
                                        icon={<PhoneIcon />}
                                        selectedCountry={phoneCountry}
                                        onCountryChange={(country) => {
                                            setPhoneCountry(country);
                                            setData('phone_country', country.code);
                                        }}
                                        countriesList={countriesList}
                                    />

                                    {/* Updated WhatsApp input with country selection */}
                                    <CustomPhoneInput
                                        value={data.whatsapp}
                                        onChange={(value) => setData('whatsapp', value)}
                                        placeholder="WhatsApp Number"
                                        icon={<WhatsAppIcon />}
                                        selectedCountry={whatsappCountry}
                                        onCountryChange={(country) => {
                                            setWhatsappCountry(country);
                                            setData('whatsapp_country', country.code);
                                        }}
                                        countriesList={countriesList}
                                    />

                                    <textarea
                                        placeholder="Write Message..."
                                        className="w-full p-2 rounded h-24"
                                        onChange={(e) => setData('message', e.target.value)}
                                        value={data.message || ''}
                                    ></textarea>

                                    <div>
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LeTeScrAAAAAKSFD731Y2cxiy5D3sqodmTKbNa4"
                                            onChange={handleCaptchaChange}
                                            onExpired={handleCaptchaExpired}
                                        />
                                        {captchaError && (
                                            <div className="text-red-500 text-sm mt-1">{captchaError}</div>
                                        )}
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </WebLayout>
    );
}

export default Inquery;