"use client";

import React from "react";
import {Aside_panel} from "@/app/[locale]/(app)/Aside_panel";
import {useAppSelector} from "@/app/store/hooks";
import {AnimatePresence, motion} from "framer-motion";

export function MainBlock({content}: { content: React.ReactNode }) {
    const {isOpenHeaderPanel, isOpenAsidePanel} = useAppSelector(
        (state) => state.mainSlice.panel
    );
    const {isAnimating} = useAppSelector((state) => state.mainSlice.animation);

    const asideVariants = isAnimating
        ? {
            initial: {opacity: 0, y: -50, x: -500},
            animate: {
                opacity: 1,
                y: 0,
                x: 0,
                width: ["0%", "100%"],
            },
            exit: {
                opacity: 0,
                y: 100,
                x: -500,
                width: ["100%", "0%"],
            },
        }
        : {
            initial: {opacity: 1, x: 0, y: 0},
            animate: {opacity: 1, x: 0, y: 0},
            exit: {opacity: 1, x: 0, y: 0},
        };

    const transition = isAnimating
        ? {
            delay: 0.4,
            duration: 0.4,
            ease: ["easeOut"],
        }
        : {duration: 0};

    return (
        <div
            className={`flex flex-col content-center w-[1140px] mx-auto  
                ${isOpenHeaderPanel && "pt-16 base-animation-all"}
            `}
        >
            <AnimatePresence>
                {isOpenAsidePanel && (
                    <motion.div
                        key={isAnimating ? "animating" : "static"} // Новый ключ для каждого состояния
                        variants={asideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
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
                className={`w-full
                    ${
                    isOpenAsidePanel
                        ? "p-2 xl:ml-[18%] xl:max-w-[82%] lg:ml-[25%] lg:max-w-[75%] "
                        : "ml-[0%] max-w-[100%] min-h-screen"
                }
                    ${isAnimating && "base-animation-all"}
                `}
            >
                <div className={`
                    ${!isOpenAsidePanel? "min-h-screen" : "min-h-full"}
                    bg-white dark:bg-gray-900
                    rounded-lg shadow-md
                    px-6 py-2 
                `}>
                    {content}
                </div>
            </main>
        </div>
    );
}