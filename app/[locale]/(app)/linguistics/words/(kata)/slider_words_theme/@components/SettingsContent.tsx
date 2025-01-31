"use client";

import React from "react";
import {motion, Variants} from "framer-motion";
import { Box, Button } from "@mui/material";
import { ExitToAppTwoTone } from "@mui/icons-material";
import { SliderSettings } from "@/app/ui/math/components/slider/SliderSettings";


export default React.memo(function SettingsContent ({
                                                                                 toggleSettings,
                                                                                 animationVariants,
                                                                             }: SettingsContentProps) {
    return (
        <motion.div
            key="settings"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 rounded-lg shadow-lg"
        >
            {/* Кнопка для выхода из настроек */}
            <Box className="flex justify-end">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={toggleSettings}
                    className="hover:bg-red-500 transition-all mb-2"
                >
                    <ExitToAppTwoTone className="text-3xl" />
                </Button>
            </Box>
            {/* Компонент SliderSettings */}
            <SliderSettings />
        </motion.div>
    );
})



//-------------------------------------------Types--------------------------------------

interface SettingsContentProps {
    toggleSettings: () => void;
    animationVariants: Variants
}