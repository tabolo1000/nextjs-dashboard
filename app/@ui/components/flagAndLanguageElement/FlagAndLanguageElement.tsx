import FlagCountriesIcon from "@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon";
import {Link} from "@/i18n/routing";
import React from "react";


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
            locale={currentLanguage}
        >
                                <span
                                    className={`button_to flex items-center px-4 py-2 text-sm 
                                     ${currentLanguage === locale
                                        ? "bg-background_ec"
                                        : ""
                                    } hover:bg-background_ec_hover text-text_color  `}
                                    role="menuitem"
                                >
                                    <FlagCountriesIcon locale={locale}/>
                                    <p>{content}</p>
                                </span>
        </Link>
    )
}

export default FlagAndLanguageElement;