import React from "react";
import {MenuItem} from "@mui/material";
import FlagAndLanguageElement from "@/app/@ui/components/flagAndLanguageElement/FlagAndLanguageElement";

type LanguageMenuProps = {
    onClose: () => void;
    locales: { locale: string; content: string }[];
    currentPath: string;
    currentLanguage: string;

};

const LanguageMenuItems = React.memo(function LanguageMenu({
                                                                 onClose,
                                                                 locales,
                                                                 currentPath,
                                                                 currentLanguage,
                                                             }: LanguageMenuProps) {
    return (
        <div className={"dark:bg-dark-component_background"}>
            {locales.map((localeItem) => (
                <MenuItem
                    selected={localeItem.locale === currentLanguage}
                    key={localeItem.locale}
                    onClick={onClose}
                >
                    <FlagAndLanguageElement
                        locale={localeItem.locale}
                        content={localeItem.content}
                        currentPath={currentPath}
                        currentLanguage={currentLanguage}
                    />
                </MenuItem>
            ))}
        </div>
    )
});

export default LanguageMenuItems;