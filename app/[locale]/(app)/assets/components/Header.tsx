"use client"

import {Logo} from "@/app/ui/math/components/Logo";
import Language_switcher from "@/app/ui/math/components/Language_switcher";
import ThemeToggle from "@/app/ui/math/components/ThemeToggle";
import {Link} from "@/i18n/routing";
import {Person2TwoTone} from "@mui/icons-material";
import React from "react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";
import {useAppSelector} from "@/app/store/hooks";
import { AnimatePresence, motion, MotionConfig} from "framer-motion";


export function Header({language}: HeaderProps) {
    const isOpenHeaderPanel = useAppSelector((state)=> state.mainSlice.panel.isOpenHeaderPanel)
    const {isAnimating} = useAppSelector((state)=> state.mainSlice.animation)
    const animatePresence = {
        initial: {opacity: 0, y: -50, x: -500},
        animate: {
            opacity: 1, y: 0, x: 0,
            width: ["0%", "100%"],
        },
        exit: {
            opacity: 0,
            y: 100,
            x: -500,
            width: ["100%", "0%"]
        } ,
    };
    return <>
        <MotionConfig transition={{
            delay: .2,
            duration: 0.4,
            ease: ["easeOut"],
            repeatDelay: 1,
        }}> {/* для всех в групп */}
        <AnimatePresence>
            {!isOpenHeaderPanel && (
                <motion.div
                    variants={isAnimating ? animatePresence : {}}
                    className={"z-50"}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                        <header
                            className={`
                fixed p-3 h-15 z-10 w-full
                dark:bg-blue-950 bg-blue-600 text-white   
                base-animation-all 
        `}>
                            <div
                                className={"flex justify-between w-[1100px] mx-auto"}
                            >
                                <Logo/>
                                <div className="flex items-center gap-4">
                                    <Language_switcher name="Русский" locales={language}/>
                                    <ThemeToggle/>
                                    <Link className="button_to p-2" href="/login"><Person2TwoTone/></Link>
                                </div>
                            </div>
                        </header>
                </motion.div>
            )}
        </AnimatePresence>
        </MotionConfig>
    </>


}


interface HeaderProps {
    language: Array<Language>
}


/*
    "linear"

    "easeIn" "easeOut" "easeInOut"

    "circIn" "circOut" "circInOut"

    "backIn" "backOut" "backInOut"

    "anticipate"
*/