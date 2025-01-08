"use client";

import React from "react";
import {Aside_panel} from "@/app/[locale]/(app)/Aside_panel";
import {useAppSelector} from "@/app/store/hooks";
import { motion } from "motion/react"
import {AnimatePresence} from "framer-motion";

export function MainBlock({content} : {content: React.ReactNode}) {
    const {isOpenHeaderPanel, isOpenAsidePanel} = useAppSelector((state)=> state.mainSlice.panel)
    const {isAnimating} = useAppSelector((state)=> state.mainSlice.animation)

    const asideVariants = {
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
    return <div
        className={
        `flex h-full flex-col content-center w-[1140px] mx-auto
        ${!isOpenHeaderPanel && "pt-16 base-animation-all"}
    `}>
        <AnimatePresence>
            {!isOpenAsidePanel && (
                <motion.div
                    variants={isAnimating ? asideVariants : {}}
                    className={"z-49"}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        delay: .4,
                        duration: 0.4,
                        ease: ["easeOut"],
                        repeatDelay: 1,
                    }}
                >
                    <Aside_panel
                        nameLink={{
                            math: "Математика",
                            biology: "Биология",
                            physics: "Физика",
                            words: "Лингвистика",
                            logout: "Выйти",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
        <main
            className={`w-full grow 
                         ${isOpenAsidePanel ? "ml-[0%] max-w-[100%]" : "p-4 xl:ml-[18%] xl:max-w-[82%] lg:ml-[25%] lg:max-w-[75%]"}
                         ${isAnimating && "base-animation-all"}
                         `}
        >
        <div className="bg-white rounded-lg shadow-md px-6 dark:bg-gray-900">{content}</div>
        </main>
    </div>
}