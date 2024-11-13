"use client"
import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from "next-intl";
import {useCallback, useState} from "react"; // Для получения текущей локали

const LanguageSwitcher = () => {

    const asPath = usePathname();
    const locale = useLocale();
    const [isOpen, setOpen] = useState(false);

    const handlerWindow = useCallback(() => {
        setOpen(!isOpen);
    },[isOpen])

    return (
        <div className="relative inline-block text-left">
            {/* Кнопка для открытия меню */}
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={ handlerWindow }
                >
                    Language
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
            {isOpen &&
                (
                    <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        {/* Пункт меню для английского */}
                        <Link href={asPath} locale="en" onClick={handlerWindow}>
            <span
                className={`block px-4 py-2 text-sm ${
                    locale === "en" ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
            >
              English
            </span>
                        </Link>

                        {/* Пункт меню для русского */}
                        <Link href={asPath} locale="ru" onClick={handlerWindow}>
            <span
                className={`block px-4 py-2 text-sm ${
                    locale === "ru" ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
            >
              Русский
            </span>
                        </Link>
                    </div>
                </div>
                )}
        </div>
    );
};

export default LanguageSwitcher;