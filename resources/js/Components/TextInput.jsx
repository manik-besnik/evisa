import React from "react";

const TextInput = ({
                       placeholder,
                       type = "text",
                       value,
                       onChange,
                       id = 'input-field',
                       label = '',
                       divClasses = "",
                       inputClasses = '',
                       labelClasses = "",
                       error = ""
                   }) => {
    return (
        <div className={`flex flex-col my-1 ${divClasses}`}>
            {label && <label htmlFor={id} className={`text-sm font-medium text-gray-200 mb-1 ${labelClasses}`}>
                {label}
            </label>}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 border-l-4 border-red-500 focus:outline-none focus:ring-0 focus:border-l-red-500 ${inputClasses}`}
            />

            {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}

        </div>
    );
};

export default TextInput;
