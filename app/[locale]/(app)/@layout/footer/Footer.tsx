"use client"

import React from 'react';
import {useAppSelector} from "@/app/store/hooks";


export const Footer = React.memo(function Footer({
                                                     title = "© 2024 Your Company. All rights reserved."
                                                 }: { title?: string | React.ReactNode }
) {
    const isOpenHeaderPanel = useAppSelector(state => state.mainSlice.panel.isOpenHeaderPanel);

    if (!isOpenHeaderPanel) return null;

    return (
        <footer
            className="
                absolute bottom-0 p-4 w-full z-10
                text-center text-white
                bg-blue-600 dark:bg-blue-950
                base-animation-all
            ">
            <p>{title}</p>
        </footer>
    );
});