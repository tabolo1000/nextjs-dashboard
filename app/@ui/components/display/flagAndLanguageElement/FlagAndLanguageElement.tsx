import {Link} from "@/i18n/routing";
import React from "react";
import FlagCountriesIcon from "@/app/@ui/components/common/flagCountriesIcon/FlagCountriesIcon";


type FlagAndLanguageElementProps = {
    currentPath: string;
    locale: string,
    content: string,
    currentLanguage: string,
}

const FlagAndLanguageElement = ({
                                    currentPath,
                                    currentLanguage,
                                    locale,
                                    content,
                                }: FlagAndLanguageElementProps) => {

    return (
        <Link
            href={currentPath}
            locale={locale}
        >
                                <span
                                    className={`
                                    button_to flex items-center px-4 py-2 text-sm dark:text-dark-text_color
                                    dark:bg-dark-background_ec dark:hover:bg-dark-background_ec_hover
                                     ${currentLanguage === locale
                                        ? "bg-background_ec"
                                        : ""
                                    } hover:bg-background_ec_hover text-text_color  `}
                                    role="menuitem"
                                >
                                    <FlagCountriesIcon locale={locale}/> {/*Иконка флага страны*/}
                                    <p>{content}</p> {/*Текстовое представление языка*/}
                                </span>
        </Link>
    )
}

export default FlagAndLanguageElement;