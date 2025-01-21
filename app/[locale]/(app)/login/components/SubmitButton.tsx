'use client'
import React from "react";
import { useFormikContext } from 'formik';

interface SubmitButtonProps {
    children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
    const { isSubmitting } = useFormikContext();

    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg tracking-wide shadow-md transition hover:shadow-lg disabled:opacity-50"
        >
            {isSubmitting ? 'Загрузка...' : children}
        </button>
    );
};

export default SubmitButton;