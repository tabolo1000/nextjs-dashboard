"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import { SliderSettings } from "@/app/ui/math/components/slider/sliderSettings/SliderSettings";

/**
 * Displays the settings
 */
export default React.memo(function SettingsContent ({
                                                                                 animationVariants,
                                                                             }: SettingsContentProps) {
    return (
        <motion.div
            key="settings"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative rounded-lg shadow-lg"
        >
            {/* Setting window */}
            <SliderSettings/>
        </motion.div>
    );
});



//-------------------------------------------Types--------------------------------------

interface SettingsContentProps {
    animationVariants: Variants
}