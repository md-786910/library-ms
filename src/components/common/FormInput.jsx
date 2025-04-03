import React from 'react';

const FormInput = ({
    id,
    name,
    type,
    label,
    icon,
    placeholder,
    value,
    onChange,
    required,
    hint,
    min,
    max
}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon}
                </div>
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    min={min}
                    max={max}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 pl-3 sm:text-sm border-gray-300 rounded-md"
                    placeholder={placeholder}
                />
            </div>
            {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
        </div>
    );
};

export default FormInput;