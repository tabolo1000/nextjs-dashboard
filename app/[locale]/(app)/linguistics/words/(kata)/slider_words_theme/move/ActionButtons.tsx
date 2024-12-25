"use client"

import React, {memo} from "react";
import { Box, Button, ButtonProps } from "@mui/material";

export interface ActionButton {
    icon: React.ReactNode; // Иконка кнопки
    onClick: () => void; // Обработчик нажатия
    color?: ButtonProps["color"]; // Цвет кнопки (на базе MUI)
    variant?: ButtonProps["variant"]; // Вариант кнопки (на базе MUI)
    className?: string; // Дополнительные классы
    tooltip?: string; // Подсказка (если требуется)
}

interface ActionButtonsProps {
    actions: ActionButton[]; // Массив действий (кнопок)
    orientation?: "horizontal" | "vertical"; // Горизонтальная или вертикальная ориентация
    gap?: number; // Расстояние между кнопками
    style?: string;
}

export default memo(function ActionButtons({
                                               actions,
                                               orientation = "horizontal",
                                               gap = 1,
                                               style
                                           }: ActionButtonsProps) {
    return (
        <Box
            className={`flex ${
                orientation === "horizontal" ? "flex-row" : "flex-col"
            }  ${style}`}
            gap={gap}
        >
            {actions.map((action, index) => (
                <Button
                    key={index}
                    onClick={action.onClick}
                    color={action.color ||  "primary"}
                    variant={action.variant || "outlined"}
                    className={`transition-all ${action.className || ""}`}
                    title={action.tooltip} // Подсказка при наведении
                >
                    {action.icon}
                </Button>
            ))}
        </Box>
    );
})