"use client"

import React, {useCallback, useEffect, useState} from 'react';
import {Base_button} from "@/app/ui/math/components/Base_button";
import Switcher from "@/app/@ui/components/switch/Switcher";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    // Синхронизация темы с локальным хранилищем
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    return (
        <Base_button
            classStyle={"button_to px-2 "}
           /* onClick={toggleTheme}*/
        >
            <Switcher
                currentChecked={theme !== 'light'}
                onChange={useCallback((value: boolean) => {
                    const newTheme = value ? 'dark' : 'light';
                    localStorage.setItem('theme', newTheme);
                    setTheme(newTheme);
                    document.documentElement.classList.toggle('dark', newTheme === 'dark');
                }, [])}
                checkedIcon={<NightsStayIcon className="text-yellow-500"/>}
                uncheckedIcon={<LightModeIcon className="text-yellow-500"/>}
            />
        </Base_button>
    );
}



