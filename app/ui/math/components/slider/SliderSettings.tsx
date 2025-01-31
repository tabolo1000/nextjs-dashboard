"use client";

import React from "react";
import {
    Box,
    Switch,
    Typography,
    Slider,
    FormControlLabel,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useSettingSlider} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/settingStore";



// Компонент настроек
export const SliderSettings = () => {
    const { setSettings, settings } = useSettingSlider()
    return (
        <Box className={"dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg rounded-tr-none"} p={2}  mb={4}>
            <Typography variant="h6" mb={2}>
                Настройки слайдера
            </Typography>

            {/* Цикличность */}
            <FormControlLabel
                control={
                    <Switch
                        checked={settings.loop}
                        onChange={() => setSettings({ loop: !settings.loop })}
                    />
                }
                label={`Цикличность: ${settings.loop ? "Включена" : "Отключена"}`}
            />

            {/* Скорость прокрутки */}
            <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                    Скорость прокрутки (мс): {settings.delay}ms
                </Typography>
                <Slider
                    value={settings.delay}
                    min={1000}
                    max={60000}
                    step={500}
                    onChange={(_, value) =>
                        setSettings({delay: value as number})
                    }
                />
            </Box>

            {/* Количество слайдов */}
            <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                    Количество слайдов на экране: {settings.slidesPerView}
                </Typography>
                <Slider
                    value={settings.slidesPerView}
                    min={1}
                    max={5}
                    step={1}
                    onChange={(e, value) =>
                        setSettings({slidesPerView: value as number})
                    }
                />
            </Box>

            {/* Автопрокрутка */}
            <FormControlLabel
                control={
                    <Switch
                        checked={settings.autoplay}
                        onChange={() =>
                            setSettings({autoplay: !settings.autoplay})
                        }
                    />
                }
                label={`Автопрокрутка: ${settings.autoplay ? "Включена" : "Отключена"}`}
            />
        </Box>
    );
};


// Типы данных для настроек
/*
export interface SliderSettingsType {
    loop: boolean;
    delay: number;
    slidesPerView: number;
    autoplay: boolean;
}*/
