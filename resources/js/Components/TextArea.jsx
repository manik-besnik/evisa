import React from "react";

const TextArea = ({
                      placeholder,
                      value,
                      onChange,
                      id = 'textarea-field',
                      label = '',
                      divClasses = "",
                      defaultClasses = "bg-white focus:border-l-red-500 border-red-500",
                      textareaClasses = '',
                      labelClasses = "",
                      error = ""
                  }) => {
    return (
        <div className={`flex flex-col my-1 ${divClasses}`}>
            {label && <label htmlFor={id} className={`text-sm font-medium text-gray-200 mb-1 ${labelClasses}`}>
                {label}
            </label>}

            <textarea
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 border-0 border-l-4 focus:outline-none focus:ring-0 ${defaultClasses} ${textareaClasses}`}
                rows={4}
            />

            {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
        </div>
    );
};

export default TextArea;
