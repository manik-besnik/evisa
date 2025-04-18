import React from 'react';

const ResumePreview = () => {
    return (
        <div className="flex justify-center bg-gray-100 p-5">
            <div className="w-full max-w-5xl bg-white flex shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="w-1/3 bg-gray-900 text-white p-6">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="w-44 h-44 rounded-full bg-primary border-4 border-white flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full bg-white overflow-hidden">
                                <img
                                    src="/placeholder.svg?height=140&width=140"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-primary leading-tight">Esther Smith</h1>
                        <h2 className="text-lg font-semibold mt-2">MARKETING MANAGER</h2>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold mb-4">Contact Me</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">📞</span> +123-456-7890
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✉️</span> hello@reallygreatsite.com
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📍</span> 123 Anywhere St., Any City
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">🔗</span> www.reallygreatsite.com
                            </li>
                        </ul>
                    </div>

                    {/* Personal Skills */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold mb-4">Personal Skills</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Personal Banking</li>
                            <li>Customer Service</li>
                            <li>Finance</li>
                            <li>Communication</li>
                            <li>Negotiation</li>
                        </ul>
                    </div>

                    {/* Interests */}
                    <div>
                        <h3 className="text-primary font-bold mb-4">Interests</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Swimming</li>
                            <li>Traveling</li>
                            <li>Songs</li>
                            <li>Reading</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-2/3 p-6">
                    {/* About Me */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold text-xl mb-2">About Me</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit.
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold text-xl mb-2">Experience</h3>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span className="font-bold">2030 - PRESENT</span>
                                <span className="font-bold">Marketing Manager & Specialist</span>
                            </div>
                            <div className="font-semibold">Borcelle Studio</div>
                            <p>
                                • Develop and execute comprehensive marketing strategies and campaigns that align with the company's
                                goals and objectives.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold text-xl mb-2">Education</h3>
                        <div className="mb-4">
                            <div className="flex justify-between">
                                <span className="font-bold">2029 - 2030</span>
                            </div>
                            <div className="font-semibold">WARDIERE UNIVERSITY</div>
                            <p>• Master of Business Management</p>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                        <h3 className="text-primary font-bold text-xl mb-2">Languages</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Arabic</li>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Urdu</li>
                            <li>French</li>
                        </ul>
                    </div>

                    {/* References */}
                    <div>
                        <h3 className="text-primary font-bold text-xl mb-2">References</h3>
                        <div className="mb-4">
                            <div className="font-bold">Estelle Darcy</div>
                            <div>Wardiere Inc. / CTO</div>
                            <div>Phone: 123-456-7890</div>
                            <div>Email: hello@reallygreatsite.com</div>
                        </div>
                        <div>
                            <div className="font-bold">Harper Richard</div>
                            <div>Wardiere Inc. / CEO</div>
                            <div>Phone: 123-456-7890</div>
                            <div>Email: hello@reallygreatsite.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePreview;
