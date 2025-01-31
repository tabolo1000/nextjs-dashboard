/**
 * Full screen Loader
 */

import {languageMessage} from "@/i18n/languages";
import {usePathname} from "next/navigation";
import {getLocalizedText} from "@/app/lib/utils";
import React from "react";

export const LoaderScreen = ({message}: LoaderScreenProps) => {
    const pathname = usePathname();
    const currentLang = pathname.split("/")[1];
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-100 dark:bg-gray-900">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto" />
            <h2 className="text-zinc-900 dark:text-white mt-4">
                {
                    getLocalizedText(currentLang, {
                        en: "Loading...", ru: "Идёт загрузка..."
                    })
                }
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
                {
                    getLocalizedText(currentLang, {
                        en: message.en, ru: message.ru,
                    })
                }
            </p>
        </div>
    );
}


type LoaderScreenProps = {
    message: languageMessage
}