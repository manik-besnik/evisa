import WebLayout from "@/Layouts/WebLayout.jsx";
import { Head } from "@inertiajs/react";
import { assetUrl } from "@/Components/Constant/index.js";
import PrimaryBtn from "@/Components/Web/PrimaryBtn.jsx";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        country: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <WebLayout showBgImage={true}>
            <Head title="Contact Us | Dubai E-Visa" />
            <div className="container py-10">
                <h1 className="text-3xl font-bold mb-2 border-l-4 border-red-500 pl-3">Contact Us - Dubaievisaservice.com</h1>

                <div className="flex flex-col md:flex-row gap-8 mt-10">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">We are here to help you</h2>
                        <p className="text-gray-600 mb-6">We'd love to hear from you. Fill this out so we can learn more about you and your needs. We will get back to you as soon as possible.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Full Name"
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email ID"
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile No</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter Mobile No (Example : +1 9876543210)"
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        <option value="UAE">UAE</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write Your Message..."
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <div className="g-recaptcha border border-gray-200 p-2 rounded inline-block">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="recaptcha" className="mr-2" />
                                        <label htmlFor="recaptcha" className="text-sm">I'm not a robot</label>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-500 text-white py-2 px-8 rounded-full hover:bg-red-600 transition duration-300"
                            >
                                Send Request
                            </button>
                        </form>
                    </div>

                    {/* Address Information */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <div className="bg-gray-800 text-white p-4 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">OFFICIAL ADDRESS :</h2>

                            {/* Map */}
                            <div className="mb-4 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.6782986872944!2d55.2726417!3d25.197565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42c2a5b0be59%3A0x5bc9c927381cfc74!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1649922897554!5m2!1sen!2sae"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="bg-white p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>+971528260909</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-white p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <span>contact@gmail.com</span>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-full mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span>Emirates Visa EMIRATI INTERNATIONAL SERVICES PRIVATE LIMITED, HOUSE NO 1094 P, SECTOR 46, GURGAON, Haryana, India - 122001</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-white p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span>dubaievisaservice.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}

export default Contact;