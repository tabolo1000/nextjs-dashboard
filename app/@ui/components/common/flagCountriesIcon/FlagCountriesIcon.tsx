import AmericanFlag from "@/app/@ui/image/svg/AmericanFlag";
import RussianFlag from "@/app/@ui/image/svg/RussianFlag";
import SpanishFlag from "@/app/@ui/image/svg/SpanishFlag";
import React from "react";
import {Language} from "@/i18n/languages";


const FlagCountriesIcon = ({locale}: { locale: string }) => {
    const countryFlagIcons: Record<string, JSX.Element> = {
        [Language.En]: <AmericanFlag/>,
        [Language.Ru]: <RussianFlag/>,
        "es": <SpanishFlag/>,
    }
    return countryFlagIcons[locale];
}

export default FlagCountriesIcon;