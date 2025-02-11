'use client';
import React from 'react';


/**
 * Login button via third-party services
 * @param title The expression on the button
 * @param icon Icon located on the button
 *
 */
const SocialButton: React.FC<SocialButtonProps> = ({ title, icon }) => {
    const icons = {
        google: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-5 h-5">
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(3 2)" fillRule="nonzero">
                        <path fill="#4285F4" d="M57.81 30.15c0-2.42-.2-4.19-.63-6.03H29.5v10.95h16.26c-.33 2.72-2.1 6.82-6.04 9.57l-.06.37 8.75 6.79.61.06c5.57-5.15 8.78-12.72 8.78-21.71z" />
                        <path fill="#34A853" d="M29.5 58.99c7.96 0 14.64-2.62 19.53-7.14l-9.31-7.21c-2.49 1.74-5.83 2.95-10.22 2.95-7.8 0-14.42-5.15-16.78-12.26l-.35.03-9.1 7.05-.12.33c4.85 9.64 14.81 16.25 26.35 16.25z" />
                        <path fill="#FBBC05" d="M12.72 35.33c-.62-1.84-.99-3.81-.99-5.83s.37-3.99.95-5.83l-.02-.39-9.22-7.16-.3.14C1.15 20.25 0 24.74 0 29.5c0 4.75 1.15 9.23 3.15 13.23l9.57-7.4z" />
                        <path fill="#EB4335" d="M29.5 11.4c5.54 0 9.28 2.39 11.41 4.4l9.32-8.13C44.11 2.92 37.46 0 29.5 0 17.96 0 7.99 6.62 3.15 16.26l9.57 7.41c2.39-7.11 8.99-12.26 16.78-12.26z" />
                    </g>
                </g>
            </svg>
        ),
        github: (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className='fill-dark-background_ec dark:fill-background_ec' d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.3 9.2 8 10.7.6.1.8-.3.8-.6V19c-3.3.7-4-1.5-4-1.5-.6-1.5-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 .1 1.6-.7 1.8-1.1.2-.8.5-1.3.9-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 0 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.7 1.8.2 3.2.1 3.5.8.9 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6 4.8-1.5 8-5.7 8-10.7C23.2 5.4 18.3.5 12 .5z" />
            </svg>
        ),
    };

    return (
        <button className="border border-border_color dark:border-dark-border_color group w-45 h-12 p-1 flex items-center justify-center rounded-full transition-all duration-300 bg-background_ec dark:bg-dark-background_ec hover:bg-background_ec_hover dark:hover:bg-dark-background_ec_hover shadow-md hover:shadow-none">
            <div className="flex items-center space-x-2 text-text_color dark:text-dark-text_color">
                {icons[icon]}
                <span className="text-sm font-medium">{title}</span>
            </div>
        </button>
    );
};

export default SocialButton;



interface SocialButtonProps {
    title: string;
    icon: 'google' | 'github';
}
