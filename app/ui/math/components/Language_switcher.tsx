"use client";

import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";
import React, {MouseEvent, useCallback, useState} from "react";
import {Base_button} from "@/app/ui/math/components/Base_button";
import {Fade , Menu, MenuItem} from "@mui/material";



export default React.memo(function LanguageSwitcher({
                                                        name,
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#f44336"
                            d="M48 36c0 6.6-5.4 12-12 12H12C5.4 48 0 42.6 0 36v-2h48v2z"
                        />
                        <path fill="#3f51b5" d="M0 14h48v8H0z"/>
                        <path fill="#fff" d="M0 22h48v8H0z"/>
                        <path
                            fill="#3f51b5"
                            d="M48 12V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v10h48z"
                        />
                    </svg>
                );
            case "ru":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 48 48"
                    >
                        <path fill="#fff" d="M0 14h48v20H0z"/>
                        <path fill="#0052b4" d="M0 14h48v10H0z"/>
                        <path fill="#d80027" d="M0 24h48v10H0z"/>
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



// Пример props для компонента
type LanguageSwitcherProps = {
    name: string;
    locales: { locale: string; content: string }[];
};

