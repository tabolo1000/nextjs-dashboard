"use client";

import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";
import React, {MouseEvent, useCallback, useState} from "react";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {Fade , Menu, MenuItem} from "@mui/material";

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
    const renderFlagIcon = (locale: string) => {
        switch (locale) {
            case "en":
                return (
                    <svg x="48" y="0" width="48" height="32">
                        <rect width="48" height="2.666" fill="#b22234"/>
                        <rect y="2.666" width="48" height="2.666" fill="#fff"/>
                        <rect y="5.332" width="48" height="2.666" fill="#b22234"/>
                        <rect y="8" width="48" height="2.666" fill="#fff"/>
                        <rect y="10.666" width="48" height="2.666" fill="#b22234"/>
                        <rect y="13.332" width="48" height="2.666" fill="#fff"/>
                        <rect y="16" width="48" height="2.666" fill="#b22234"/>
                        <rect y="18.666" width="48" height="2.666" fill="#fff"/>
                        <rect y="21.332" width="48" height="2.666" fill="#b22234"/>
                        <rect y="24" width="48" height="2.666" fill="#fff"/>
                        <rect y="26.666" width="48" height="2.666" fill="#b22234"/>
                        <rect y="29.332" width="48" height="2.666" fill="#fff"/>
                        <rect width="24" height="16" fill="#3c3b6e"/>
                        <circle cx="6" cy="4" r="1" fill="#fff"/>
                        <circle cx="12" cy="4" r="1" fill="#fff"/>
                        <circle cx="18" cy="4" r="1" fill="#fff"/>
                        <circle cx="6" cy="8" r="1" fill="#fff"/>
                        <circle cx="12" cy="8" r="1" fill="#fff"/>
                        <circle cx="18" cy="8" r="1" fill="#fff"/>
                        <circle cx="6" cy="12" r="1" fill="#fff"/>
                        <circle cx="12" cy="12" r="1" fill="#fff"/>
                        <circle cx="18" cy="12" r="1" fill="#fff"/>
                    </svg>
                );
            case "ru":
                return (
                    <svg x="0" y="0" width="48" height="32">
                        {/*<rect width="48" height="10.666" fill="#fff"/>*/}
                        <rect width="48" height="10.666" fill="#FFFFFF"/>
                        <rect y="10.666" width="48" height="10.666" fill="#0039a6"/>
                        <rect y="21.332" width="48" height="10.666" fill="#d52b1e"/>
                    </svg>
                );
            case "es":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 48 48"
                    >
                        <path fill="#ffda44" d="M0 16h48v16H0z"/>
                        <path fill="#d80027" d="M0 32h48v16H0z"/>
                        <path fill="#d80027" d="M0 0h48v16H0z"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative inline-block text-left">
            {/* Кнопка для открытия меню */}

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
})




