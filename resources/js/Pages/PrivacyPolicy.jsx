import React from 'react';
import { Head } from "@inertiajs/react";
import WebLayout from "@/Layouts/WebLayout.jsx";

const PrivacyPolicy = () => {
    return (
        <WebLayout>
            <Head title="Privacy Policy - Dubai Evisa" />
            <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Privacy Policy</h1>

                    <div className="prose prose-lg text-gray-700">
                        <p className="mb-4">
                            At <strong>Dubai E-visa Service</strong>, we are committed to protecting the privacy and confidentiality of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website to apply for visas, create CVs, register as an agent, or interact with our services, including through <strong>Facebook Login</strong>.
                        </p>
                        <p className="mb-6">
                            By using <strong>Dubai E-visa Service</strong>, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect the following types of information to provide and improve our services:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Personal Information</strong>: Name, email, phone number, passport details, nationality, and other visa-related data.</li>
                            <li><strong>Job & CV Data</strong>: Employment history, education, skills, and other details provided in user-created CVs.</li>
                            <li><strong>Agent & User Registration</strong>: Business details (for agents), login credentials, and transaction history.</li>
                            <li><strong>Facebook Login Data</strong>: If you sign in via Facebook, we may collect your public profile information (name, email, profile picture) as permitted by Facebook’s policies.</li>
                            <li><strong>Payment Information</strong>: Credit/debit card details (processed securely via third-party payment gateways; we do not store full card details).</li>
                            <li><strong>Technical Data</strong>: IP address, browser type, device information, and cookies for analytics and security.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            Your data is used for:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Processing visa applications and verifying identity.</li>
                            <li>Facilitating job applications and CV submissions.</li>
                            <li>Enabling agent services and user management.</li>
                            <li>Improving website functionality and user experience.</li>
                            <li>Sending updates, transaction confirmations, and promotional offers (you can opt out anytime).</li>
                            <li>Complying with legal and regulatory requirements.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">3. Data Sharing & Disclosure</h2>
                        <p className="mb-4">
                            We do not sell or rent your personal information. Data may be shared only in these cases:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>With authorized agents</strong> (if you apply through an agent).</li>
                            <li><strong>With government/immigration authorities</strong> for visa processing.</li>
                            <li><strong>With third-party service providers</strong> (payment processors, hosting services) under strict confidentiality agreements.</li>
                            <li><strong>For legal compliance</strong> (if required by law or to prevent fraud).</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">4. Security Measures</h2>
                        <p className="mb-4">
                            We implement <strong>SSL encryption</strong>, secure servers, and strict access controls to protect your data. However, no online transmission is 100% secure—users must also take precautions (e.g., strong passwords).
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">5. Cookies & Tracking</h2>
                        <p className="mb-4">
                            We use cookies to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Remember user preferences.</li>
                            <li>Analyze website traffic.</li>
                            <li>Enable Facebook Login functionality.</li>
                        </ul>
                        <p className="mb-4">
                            You can disable cookies in your browser, but some features may not work.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">6. Third-Party Links</h2>
                        <p className="mb-4">
                            Our site may contain links to other websites (e.g., government portals, job boards). We are not responsible for their privacy practices—review their policies separately.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">7. Your Rights</h2>
                        <p className="mb-4">
                            You can:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Withdraw consent for marketing emails.</li>
                            <li>Deactivate your account (contact support).</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">8. Policy Updates</h2>
                        <p className="mb-4">
                            We may update this policy periodically. Changes will be posted on this page with an updated "Last Modified" date.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">9. Contact Us</h2>
                        <p className="mb-4">
                            For questions or requests regarding your data, email us at:<br />
                            <strong>info@dubaievisaservice.com</strong><br />
                            <strong>Dubai E-visa Service, Dubai, UAE</strong>
                        </p>

                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default PrivacyPolicy;