import React, {useCallback, useState} from "react";
import {useLocale} from "next-intl";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {usePathname} from "@/i18n/routing";
import {Fade, Popover} from "@mui/material";
import FlagCountriesIcon from "@/app/@ui/components/common/flagCountriesIcon/FlagCountriesIcon";
import LanguageMenuItems from "@/app/@ui/components/navigation/languageMenuItems/LanguageMenuItems";

type LanguageSwitcherProps = {
    locales: { locale: string; content: string }[];
};

export default React.memo(function LanguageSwitcher({
                                                        locales,
                                                    }: LanguageSwitcherProps) {
    const pathName = usePathname() || "/";
    const locale = useLocale();

    const [internalAnchorEl, setInternalAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(internalAnchorEl);

    const handleClose = useCallback(() => {
        setInternalAnchorEl(null);
    }, []);

    const handleToggle = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setInternalAnchorEl(event.currentTarget);
    }, []);

    return (
        <div className="relative inline-block text-left">
            <Base_button
                onClick={handleToggle}
                classStyle="button_to px-2"
                aria-expanded={open}
                aria-haspopup="menu"
                aria-label="Select language"
            >
                <FlagCountriesIcon locale={locale} />
            </Base_button>

            <Popover
                anchorEl={internalAnchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                disableScrollLock
                id="language-menu-popover"
            >
                <LanguageMenuItems
                    onClose={handleClose}
                    locales={locales}
                    currentPath={pathName}
                    currentLanguage={locale}
                />
            </Popover>
        </div>
    );
});