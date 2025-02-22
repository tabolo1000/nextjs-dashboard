"use client"

import React, {memo} from "react";
import { Box, Button, ButtonProps } from "@mui/material";
import {
    useEditing,
    useSettings, useSliderHandlers
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";
import {
    getActionButtonsConfig
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/getActionButtonsConfig";


export interface ActionButton {
    icon: React.ReactNode;
    onClick: () => void;
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    className?: string;
    tooltip?: string;
}

interface ActionButtonsProps {
    orientation?: "horizontal" | "vertical";
    gap?: number;
    style?: string;
}

/**
 * Control panel k.p. for each window
 */
export default memo(function ActionButtons({
                                               orientation = "horizontal",
                                               gap = 1,
                                               style = ""
                                           }: ActionButtonsProps) {
    const isSettingsActive = useSettings()
    const isEditingActive = useEditing()
    const {
        setTopic,
        setCurrentWindow
    } = useSliderHandlers()
    const actions = getActionButtonsConfig({isSettingsActive, isEditingActive, setTopic, setCurrentWindow})
    return (
        <Box
            className={`
                flex 
                ${orientation === "horizontal" ? "flex-row" : "flex-col"}
                ${style}`
            }
            gap={gap}
        >
            {actions.map((action, index) => (
                <Button
                    key={index}
                    onClick={action.onClick}
                    color={action.color ||  "primary"}
                    variant={action.variant || "outlined"}
                    title={action.tooltip}
                >
                    {action.icon}
                </Button>
            ))}
        </Box>
    );
})