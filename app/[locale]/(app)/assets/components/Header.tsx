"use client"

import {Logo} from "@/app/ui/math/components/Logo";
import Language_switcher from "@/app/ui/math/components/Language_switcher";
import ThemeToggle from "@/app/ui/math/components/ThemeToggle";
import {Link} from "@/i18n/routing";
import {Person2TwoTone} from "@mui/icons-material";
import React from "react";


export function Header({language}:{language: {locale: string, content: string}[]}) {
    const [isOpen, setOpen] = React.useState(false);
    return <div className={`${isOpen && "hidden"}`}>
        {
            isOpen &&
            <button onClick={() => setOpen(!isOpen)}>ff</button>
        }
        <header
            className={`fixed p-4 h-15 z-10 w-full    
        base-animation-all bg-blue-600 dark:bg-blue-950 text-white
        `}>
            <div
                className={"flex justify-between w-[1100px] mx-auto"}
            >
                <div className="flex items-center gap-4">
                    <Logo/>
                </div>
                <div className="flex items-center gap-4">
                    <Language_switcher name="Русский" locales={language}/>
                    <ThemeToggle/>
                    <Link className="button_to p-2" href="/login">
                        <Person2TwoTone/>
                    </Link>
                    <button onClick={() => setOpen(!isOpen)}>ff</button>
                </div>
            </div>
        </header>
    </div>
}