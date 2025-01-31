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
    const animatePresence = isAnimating?({
        initial: {opacity: 0, y: -50, x: -500},
        animate: {
            opacity: 1, y: 0, x: 0,
            width: ["0%", "100%"],
        },
        exit: {
            opacity: 0,
            y: 50,
            x: 500,
        } ,
    }): ({
        initial: { opacity: 1, y: 0, x: 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 1, y: 0, x: 0 },
    });
    return <>
        <MotionConfig transition={{
            delay: .2,
            duration: 0.4,
            ease: ["easeOut"],
            repeatDelay: 1,
        }}> {/* для всех в групп */}
        <AnimatePresence>
            {(isOpenHeaderPanel) && (
                <motion.div
                    key={isAnimating ? "animating" : "static"}
                    variants={animatePresence}
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




export const Switch = () => {
    return (
        <div className="relative">
            <input
                id="checkbox-input"
                type="checkbox"
                className="hidden peer"
            />
            <label
                htmlFor="checkbox-input"
                className="w-fit p-2 bg-gray-800 rounded-full cursor-pointer flex items-center transition-all duration-700 peer-checked:bg-amber-700 peer-checked:shadow-[0_0_100px_rgb(255,196,0)]"
            >
                <svg
                    xmlSpace="preserve"
                    style={{ enableBackground: "new 0 0 128 128" }}
                    viewBox="0 0 128 128"
                    height="2em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M77.547 120.684h-5.765l-1.698 3.012a7.477 7.477 0 0 1-6.513 3.804h-.003a7.479 7.479 0 0 1-6.513-3.804l-1.698-3.012h-5.765v-4.06h27.956v4.06z"
                        style={{ fill: "#51514c" }}
                    />
                    <path
                        d="M77.547 113.65H49.591v-4.279h27.956v4.279zm0-11.711H49.591v4.279h27.956v-4.279zm38.587-32.576-12.209-3.271.92-3.434 12.209 3.271-.92 3.434zm-104.268 0-.92-3.434 12.209-3.271.92 3.434-12.209 3.271zm92.979-24.913-.92-3.434 12.209-3.272.92 3.434-12.209 3.272zm-81.69 0-12.209-3.272.92-3.434 12.209 3.272-.92 3.434zM94.82 25.247l-2.514-2.514 8.938-8.938 2.514 2.514-8.938 8.938zm-61.64 0-8.937-8.938 2.514-2.514 8.937 8.938-2.514 2.514zm43.358-11.618-3.434-.92L76.376.5l3.434.92-3.272 12.209zm-25.076 0L48.191 1.42 51.625.5l3.272 12.209-3.435.92z"
                        style={{ fill: "#a7a79b" }}
                    />
                    <path
                        d="M59.802 64.141h7.535v34.934h-7.535V64.141zm3.767-44.754c-18.485-.53-33.631 14.817-33.631 33.824 0 9.781 4.016 18.581 10.431 24.753 5.637 5.423 9.222 13.147 9.222 21.111h7.84V64.141H51.75c-4.44 0-8.051-3.612-8.051-8.051s3.612-8.051 8.051-8.051 8.052 3.612 8.052 8.051v5.681h7.535V56.09c0-4.44 3.612-8.051 8.052-8.051 4.44 0 8.051 3.612 8.051 8.051s-3.612 8.051-8.051 8.051h-5.682v34.934h7.84c0-7.964 3.584-15.688 9.222-21.111C93.184 71.792 97.2 62.992 97.2 53.211c0-19.008-15.146-34.355-33.631-33.824zM51.75 50.408a5.687 5.687 0 0 0-5.681 5.681 5.687 5.687 0 0 0 5.681 5.681h5.682v-5.681a5.688 5.688 0 0 0-5.682-5.681zM75.389 61.77h-5.682v-5.681a5.688 5.688 0 0 1 5.682-5.681 5.687 5.687 0 0 1 5.681 5.681 5.687 5.687 0 0 1-5.681 5.681z"
                        style={{ fill: "#ffffff" }}
                    />
                </svg>
            </label>
        </div>
    );
};


const Button = () => {
    return (
        <div className="flex space-x-3">
            <button className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-90 hover:scale-110 hover:shadow-xl">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                >
                    <path
                        clipRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        fillRule="evenodd"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <button className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-700 flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-90 hover:scale-110 hover:shadow-xl">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                >
                    <path
                        clipRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        fillRule="evenodd"
                        fill="currentColor"
                    />
                    <path
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <button className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-90 hover:scale-110 hover:shadow-xl">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                >
                    <path
                        clipRule="evenodd"
                        d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                        fillRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Button;