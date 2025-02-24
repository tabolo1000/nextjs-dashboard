"use client";

import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";
import React, {MouseEvent, useCallback, useState} from "react";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {Fade, Menu, MenuItem} from "@mui/material";
import AmericanFlag from "@/app/@ui/image/svg/AmericanFlag";
import RussianFlag from "@/app/@ui/image/svg/RussianFlag";
import SpanishFlag from "@/app/@ui/image/svg/SpanishFlag";

type LanguageSwitcherProps = {
    locales: { locale: string; content: string }[];
};

export default React.memo(function LanguageSwitcher({
                                                        locales,
                                                    }: LanguageSwitcherProps) {
    const asPath = usePathname();
    const locale = useLocale();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    // Функция для рендеринга соответствующей иконки флага


    return (
        <div className="relative inline-block text-left">
            <div>
                <Base_button
                    onClick={handleClick}
                    classStyle={"button_to px-2"}
                    id="fade-button"
                >
                    {renderFlagIcon(locale)}
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
                    {locales.map((item, index) => (
                        <MenuItem
                            onClick={handleClose}
                            key={index}
                        >
                            <Link
                                href={asPath}
                                locale={item.locale}
                            >
                                <span
                                    className={`button_to flex items-center px-4 py-2 text-sm 
                                     ${locale === item.locale
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } hover:bg-gray-100 hover:text-gray-900`}
                                    role="menuitem"
                                >
                                    {/* Иконка флага */}
                                    {renderFlagIcon(item.locale)}
                                    {item.content}
                                </span>
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    );
});