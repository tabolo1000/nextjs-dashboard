'use client'
import React from 'react';

interface SocialButtonProps {
    title: string;
    icon: 'google' | 'github';
}

const SocialButton: React.FC<SocialButtonProps> = ({ title, icon }) => {
    const icons = {
        google: (
            <svg
                className="w-5 h-5 fill-current text-white dark:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12 11.5v2.8h7.9c-.3 2-2.4 5.9-7.9 5.9-4.8 0-8.7-3.9-8.7-8.7S7.2 3.8 12 3.8c2.6 0 4.4 1.1 5.4 2.1l2.6-2.6C17.8 1.4 15.2.5 12 .5 5.7.5.8 5.4.8 11.7S5.7 22.9 12 22.9c6.5 0 10.3-4.6 10.3-10.8 0-.7-.1-1.5-.3-2.1H12z" />
            </svg>
        ),
        github: (
            <svg
                className="w-5 h-5 fill-current text-white dark:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.3 9.2 8 10.7.6.1.8-.3.8-.6V19c-3.3.7-4-1.5-4-1.5-.6-1.5-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 .1 1.6-.7 1.8-1.1.2-.8.5-1.3.9-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 0 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.7 1.8.2 3.2.1 3.5.8.9 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6 4.8-1.5 8-5.7 8-10.7C23.2 5.4 18.3.5 12 .5z" />
            </svg>
        ),
    };

    return (
        <button
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-300 p-3 rounded-full shadow-md transition"
            title={title}
        >
            {icons[icon]}
        </button>
    );
};

export default SocialButton;
