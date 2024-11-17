"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";

// Пример props для компонента
type LanguageSwitcherProps = {
    name: string;
    locales: { locale: string; content: string }[];
};

export default function LanguageSwitcher({
                                             name,
                                             locales,
                                         }: LanguageSwitcherProps) {
    const asPath = usePathname();
    const locale = useLocale();
    const [isOpen, setOpen] = useState(false);

    const handlerWindow = useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

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
                        <path fill="#3f51b5" d="M0 14h48v8H0z" />
                        <path fill="#fff" d="M0 22h48v8H0z" />
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
                        <path fill="#fff" d="M0 14h48v20H0z" />
                        <path fill="#0052b4" d="M0 14h48v10H0z" />
                        <path fill="#d80027" d="M0 24h48v10H0z" />
                    </svg>
                );
            case "es":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 48 48"
                    >
                        <path fill="#ffda44" d="M0 16h48v16H0z" />
                        <path fill="#d80027" d="M0 32h48v16H0z" />
                        <path fill="#d80027" d="M0 0h48v16H0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-36 relative inline-block text-left">
            {/* Кнопка для открытия меню */}
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={handlerWindow}
                >
                    {renderFlagIcon(locale)}
                    {name}
                    {/* Иконка стрелки вниз */}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Выпадающее меню */}
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        {/* Пункты меню с флагами */}
                        {locales.map((item, index) => (
                            <Link
                                key={index}
                                href={asPath}
                                locale={item.locale}
                                onClick={handlerWindow}
                            >
                <span
                    className={`flex items-center px-4 py-2 text-sm ${
                        locale === item.locale
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}