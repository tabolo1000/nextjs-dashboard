import React from "react";
import {Box, Fade, MenuItem, Popover, PopoverPosition, PopoverReference} from "@mui/material";
import FlagAndLanguageElement from "@/app/@ui/components/flagAndLanguageElement/FlagAndLanguageElement";

type LanguageMenuProps = {
    open: boolean;
    onClose: () => void;
    locales: { locale: string; content: string }[];
    currentPath: string;
    currentLanguage: string;
    anchorEl: HTMLElement | null;

    anchorReference?: PopoverReference;
    disablePortal?: boolean;
    anchorPosition?: PopoverPosition;
    disableAutoFocus?: boolean; // отключает фокус на элементе
};

export const LanguageMenu = React.memo(function LanguageMenu({
                                                                 open,
                                                                 anchorEl,
                                                                 onClose,
                                                                 locales,
                                                                 currentPath,
                                                                 currentLanguage,

                                                                 disablePortal,
                                                                 anchorReference,
                                                                 anchorPosition,
                                                                 disableAutoFocus
                                                             }: LanguageMenuProps) {
    return (
        <Box>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                TransitionComponent={Fade}
                disableScrollLock={true} // Разрешаем прокрутку страницы
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transitionDuration={{appear: 100, exit: 200, enter: 500}}


                anchorReference={anchorReference}
                anchorPosition={anchorPosition}
                disablePortal={disablePortal}
                disableAutoFocus={disableAutoFocus}
            >
                {locales.map((localeItem) => (
                    <MenuItem
                        selected={localeItem.locale === currentLanguage}
                        key={localeItem.locale} // Используем locale как ключ
                        onClick={onClose} // Закрываем меню при выборе
                    >
                        <FlagAndLanguageElement
                            locale={localeItem.locale}
                            content={localeItem.content}
                            currentPath={currentPath}
                            currentLanguage={currentLanguage}
                        />
                    </MenuItem>
                ))}
            </Popover>
        </Box>

    )
        ;
});