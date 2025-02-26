import React, {useCallback, useState} from "react";
import {useLocale} from "next-intl";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {Language} from "@/i18n/languages";
import {usePathname} from "@/i18n/routing";
import FlagCountriesIcon from "@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon";
import {LanguageMenu} from "@/app/@ui/components/languageMenu/LanguageMenu";

type LanguageSwitcherProps = {
    locales: { locale: string; content: string }[];
    opened?: boolean;
};

export default React.memo(function LanguageSwitcher({
                                                        locales,
                                                        opened = false,
                                                    }: LanguageSwitcherProps) {
    // Current path (if usePathname returned undefined, use Language.Ru)
    const currentPath = usePathname() || Language.Ru;

    // Current locale
    const locale = useLocale();

    // Status to control opening/closing of the menu
    const [anchorEl, setAnchorEl] = useState<boolean>(opened);
    const open = Boolean(anchorEl);

    const handleClose = useCallback(() => setAnchorEl(false), []);
    const handleToggle = useCallback(() => setAnchorEl((prev) => !prev), []);

    return (
        <div className="relative inline-block text-left">
            {/* Кнопка с флагом */}
            <Base_button
                onClick={handleToggle}
                classStyle={"button_to px-2"}
                id="fade-button"
            >
                <FlagCountriesIcon locale={locale}/>
            </Base_button>

            {/* Меню */}
            <LanguageMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                locales={locales}
                currentPath={currentPath}
                currentLanguage={locale}
            />
        </div>
    );
});