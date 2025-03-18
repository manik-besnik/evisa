import React from "react";

const TextInput = ({
                       placeholder,
                       type = "text",
                       value,
                       onChange,
                       id = 'input-field',
                       label = '',
                       divClasses = "",
                       defaultClasses = "bg-white focus:border-l-red-500 border-red-500",
                       inputClasses = '',
                       labelClasses = "",
                       error = ""
                   }) => {
    return (
        <div className={`flex flex-col ${divClasses}`}>
            {label && <label htmlFor={id} className={`text-sm font-medium text-gray-200 mb-1 ${labelClasses}`}>
                {label}
            </label>}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400  border-0 border-l-4 focus:outline-none focus:ring-0 ${defaultClasses} ${inputClasses}`}
            />

            {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}

        </div>
    );
};

export default TextInput;
