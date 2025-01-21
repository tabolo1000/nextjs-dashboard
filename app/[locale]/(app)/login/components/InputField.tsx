"use client"

import React from "react";
import { useField } from 'formik';

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-4">
            <label htmlFor={props.name} className="block font-semibold mb-1">
                {label}
            </label>
            <input
                {...field}
                {...props}
                className="w-full p-3 bg-gray-700 dark:bg-gray-200 rounded-lg text-gray-300 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default InputField;

