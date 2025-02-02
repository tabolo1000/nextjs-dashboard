

import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import {getLocalizedText} from "@/app/lib/utils";
import React from "react";


/**
 * Full screen error
 */
export function ErrorScreen({
                                message = {
                                    en: "Something went wrong. Please try again.",
                                    ru: "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
                                },
                                onRetry,
                            }: ErrorScreen) {
    const pathname = usePathname();
    const currentLang = pathname.split("/")[1];

    return (
        <div className="flex items-center justify-center h-[70vh] bg-gray-100 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md text-center"
            >
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-300 rounded-full flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
                            />
                        </svg>
                    </div>

                    {/* Error Message */}
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">
                        {getLocalizedText(currentLang, { en: "Error!", ru: "Ошибка!" })}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {getLocalizedText(currentLang, message)}
                    </p>

                    {/* Retry Button */}
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                            {
                                getLocalizedText(currentLang, {
                                    en: "Try Again",
                                    ru: "Попробуйте еще раз",
                                })
                            }
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}



//------------------------------------------Types ----------------------------------------------------

type LanguageMessage = {
    en: string;
    ru: string;
    [key: string]: string;
};
type ErrorScreen = {
    message: LanguageMessage;
    onRetry: () => void;
}

