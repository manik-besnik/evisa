import React from "react";

const Switch = ({value, onChange, classes = ''}) => {
    const handleToggle = (e) => {
        e.preventDefault()
        onChange(!value)
    }

    return (
        <div className={`flex items-center ${classes}`}>
            <button
                onClick={handleToggle}
                className="relative w-12 h-1 bg-gray-400"
                aria-pressed={value}
                aria-label="Toggle switch"
            >
                <div
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-warning rounded-full shadow-md transform transition-transform duration-300 ease-in-out
            ${value ? "translate-x-10" : "translate-x-0"}`}
                />
            </button>
        </div>

    );
};

export default Switch;
