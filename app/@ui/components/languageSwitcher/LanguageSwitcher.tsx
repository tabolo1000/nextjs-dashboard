"use client";

import {usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";
import React, {useCallback, useState} from "react";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {Fade, Menu} from "@mui/material";
import {Language} from "@/i18n/languages";
import FlagCountriesIcon from "@/app/@ui/components/flagCountriesIcon/FlagCountriesIcon";
import FlagAndLanguageElement from "@/app/@ui/components/FlagAndLanguageElement/FlagAndLanguageElement";

type LanguageSwitcherProps = {
    locales: { locale: string; content: string }[];
    opened: boolean;
};

export default React.memo(function LanguageSwitcher({
                                                        locales,
                                                        opened = false,
                                                    }: LanguageSwitcherProps) {
    const currentPath = usePathname() || Language.Ru;
    const locale = useLocale();
    const [anchorEl, setAnchorEl] = useState<boolean>(opened);
    const open = Boolean(anchorEl);


    const handleClose = useCallback(() => setAnchorEl(false), [])
    return (
        <div className="relative inline-block text-left">

            {/*Button with a flag on the current screen*/}
            <Base_button
                onClick={useCallback(() => setAnchorEl(!anchorEl), [anchorEl])}
                classStyle={"button_to px-2"}
                id="fade-button"
            >
                <FlagCountriesIcon locale={locale}/>
            </Base_button>

            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    className: "dark:bg-gray-800",

                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableScrollLock={true}
            >
                {locales.map((it, i) => (
                    <FlagAndLanguageElement
                        key={i}
                        locale={it.locale}
                        content={it.content}
                        currentPath={currentPath}
                        currentLanguage={locale}
                    />
                ))}
            </Menu>

        </div>
    );
})




