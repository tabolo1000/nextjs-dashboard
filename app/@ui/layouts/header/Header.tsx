"use client"

import {useAppSelector} from "@/app/store/hooks";
import {Logo} from "@/app/ui/math/components/Logo";

import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";
import ControlPanelHeader from "@/app/@ui/components/layout/controlPanelHeader/ControlPanelHeader";
import AnimatedContainer from "@/app/@ui/components/layout/animatedContainer/AnimatedContainer";

interface HeaderProps {
    /**
     * A language model object that includes the language for example 'en'
     * and content that contains the text to be displayed on the language switch.
     */
    languages: Array<Language>
}

/**
 * Header section that includes logo and application control panel
 */
const Header = ({languages}: HeaderProps) => {
    const isOpenHeaderPanel = useAppSelector((state) => state.mainSlice.panel.isOpenHeaderPanel)
    const {isAnimating} = useAppSelector((state) => state.mainSlice.animation)
    return (
        <AnimatedContainer
            isVisible={isOpenHeaderPanel}
            isAnimating={!!isAnimating}
        >
            <header
                className={`
                fixed p-3 h-15 z-10 w-full
                dark:bg-blue-950 bg-blue-600 text-white   
                base-animation-all 
        `}>
                <div role = "container-content" className={"flex justify-between w-[1100px] mx-auto"}>
                    {/* Website logo */}
                    <Logo/>
                    {/* Site Control Panel main functions */}
                    <ControlPanelHeader languages={languages}/>
                </div>
            </header>
        </AnimatedContainer>
    )
}

export default Header;



