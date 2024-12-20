"use client"

import { useState, useEffect } from 'react';
import {Base_button} from "@/app/ui/math/components/Base_button";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    // Синхронизация темы с локальным хранилищем
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <Base_button
            classStyle={"button_to px-2 "}
            onClick={toggleTheme}
        >
            <div >
                {theme === 'light' ? <LightModeIcon className="text-yellow-500" /> : <NightsStayIcon className="text-yellow-500"/>}
            </div>
        </Base_button>
    );
}