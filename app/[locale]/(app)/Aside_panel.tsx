"use client"

import {Link} from "@/i18n/routing";
import {AcademicCapIcon, BookOpenIcon, CollectionIcon, LightningBoltIcon, LogoutIcon} from '@heroicons/react/outline';
import {useState} from "react";
import {usePathname} from "next/navigation";


export function Aside_panel({
    nameLink
                            }: Aside_panel_props) {
    const urlPath = usePathname();
    const [activeLink, setActiveLink] = useState<string>(urlPath.split("/")[2]);


    return <aside className="sidebar w-1/5 bg-gray-900 min-h-screen p-4 fixed">
        <nav className="sidebar-nav">
            <ul className="space-y-4">
                <li>
                    <Link href="/math"
                          onClick={() => setActiveLink("math")}
                          className={`sidebar-link flex items-center space-x-2 
                          text-gray-300 hover:text-white  ${(activeLink === "math") ? "bg-red-900" : ""}`}>
                        <AcademicCapIcon className="h-6 w-6 text-gray-400"/>
                        <span>{nameLink.math}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/biology"
                          onClick={() => setActiveLink("biology")}
                          className={`sidebar-link flex items-center space-x-2 
                          text-gray-300 hover:text-white  ${(activeLink === "biology") ? "bg-red-900" : ""}`}>
                        <BookOpenIcon className="h-6 w-6 text-gray-400"/>
                        <span>{nameLink.biology}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/physics"
                          onClick={() => setActiveLink("physics")}
                          className={`sidebar-link flex items-center space-x-2 
                          text-gray-300 hover:text-white  ${(activeLink === "physics") ? "bg-red-900" : ""}`}>
                        <LightningBoltIcon className="h-6 w-6 text-gray-400"/>
                        <span>{nameLink.physics}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/linguistics"
                          onClick={() => setActiveLink("linguistics")}
                          className={`sidebar-link flex items-center space-x-2 
                          text-gray-300 hover:text-white  ${(activeLink === "linguistics") ? "bg-red-900" : ""}`}>
                        <CollectionIcon className="h-6 w-6 text-gray-400"/>
                        <span>{nameLink.words}</span>
                    </Link>
                </li>
                <li>
                    <Link href="#"
                          onClick={() => setActiveLink("#")}
                          className={`sidebar-link flex items-center space-x-2 text-red-500 hover:text-red-700  ${(activeLink === "#") ? "bg-red-900" : ""}`}>
                        <LogoutIcon className="h-6 w-6 text-gray-400"/>
                        <span>{nameLink.logout}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
}


interface Aside_panel_props {
    nameLink: {
        math: string;
        biology: string;
        words: string;
        physics: string;
        logout: string;
    }
}