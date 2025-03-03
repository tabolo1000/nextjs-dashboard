import React from "react";
import {Box, Fade, Popover} from "@mui/material";
import LanguageMenuItems from "@/app/@ui/components/navigation/languageMenuItems/LanguageMenuItems";

type LanguageMenuProps = {
    open: boolean;
    onClose: () => void;
    locales: { locale: string; content: string }[];
    currentPath: string;
    currentLanguage: string;
    anchorEl: HTMLElement | null;
};

export const LanguageMenu = React.memo(function LanguageMenu({
                                                                 open,
                                                                 anchorEl,
                                                                 onClose,
                                                                 locales,
                                                                 currentPath,
                                                                 currentLanguage,
                                                             }: LanguageMenuProps) {
    return (
        <Box>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <LanguageMenuItems
                    onClose={onClose}
                    locales={locales}
                    currentPath={currentPath}
                    currentLanguage={currentLanguage}/>
            </Popover>
        </Box>

    )
        ;
});