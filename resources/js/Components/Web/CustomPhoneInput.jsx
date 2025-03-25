import React, { useState } from "react";

const CustomPhoneInput = ({ value, onChange, placeholder, icon, selectedCountry, onCountryChange, countriesList }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative w-full">
            <div className="flex rounded overflow-hidden border">
                {/* Country selector with flag and code */}
                <div
                    className="bg-white p-2 flex items-center space-x-1 border-r cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <img
                        src={`https://flagcdn.com/${selectedCountry.code}.svg`}
                        alt={`${selectedCountry.name} flag`}
                        className="w-6 h-4"
                    />
                    <span className="text-sm">{selectedCountry.dialCode}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Phone input */}
                <input
                    type="tel"
                    className="flex-1 p-2 border-0"
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                />

                {/* Icon button on the right */}
                {icon && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        {icon}
                    </div>
                )}

                {/* Country dropdown */}
                {showDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                        {countriesList.map((country) => (
                            <div
                                key={country.code}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    onCountryChange(country);
                                    setShowDropdown(false);
                                }}
                            >
                                <img
                                    src={`https://flagcdn.com/${country.code}.svg`}
                                    alt={`${country.name} flag`}
                                    className="w-6 h-4 mr-2"
                                />
                                <span className="text-sm">{country.name}</span>
                                <span className="text-sm text-gray-500 ml-auto">{country.dialCode}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomPhoneInput;