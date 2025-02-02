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
import {usePathname} from "next/navigation";
import {localizedText, LocalizedText} from "@/app/ui/math/components/slider/sliderSettings/language";


/**
 * Settings component
 */
export const SliderSettings = () => {
    const { setSettings, settings } = useSettingSlider();
    const lang = usePathname().split("/")[1]; // Определение языка из URL
    const LocText: LocalizedText = localizedText(lang)


    return (
        <Box
            className="h-[75vh] dark:text-white dark:border-gray-600 relative p-6 border-gray-200 rounded-lg border-2 shadow-lg rounded-tr-none"
            p={2}
            mb={4}
        >
            {/* Заголовок */}
            <Typography variant="h6" mb={2} align={"center"}>
                {LocText.title}
            </Typography>

            {/* Цикличность слайдера */}
            <FormControlLabel
                control={
                    <Switch
                        checked={settings.loop}
                        onChange={() => setSettings({ loop: !settings.loop })}
                    />
                }
                label={`${LocText.loop}: ${
                    settings.loop ? LocText.loopEnabled : LocText.loopDisabled
                }`}
            />

            {/* Скорость прокрутки */}
            <Box mt={2}>
                <Typography variant="body1" gutterBottom >
                    {LocText.scrollSpeed}: {settings.delay}ms
                </Typography>
                <Slider
                    value={settings.delay}
                    min={1000}
                    max={60000}
                    step={500}
                    onChange={(_, value) =>
                        setSettings({ delay: value as number })
                    }
                />
            </Box>

            {/* Количество слайдов */}
            <Box mt={2}>
                <Typography variant="body1" gutterBottom >
                    {LocText.slidesPerView}: {settings.slidesPerView}
                </Typography>
                <Slider
                    value={settings.slidesPerView}
                    min={1}
                    max={2}
                    step={1}
                    onChange={(_, value) =>
                        setSettings({ slidesPerView: value as number })
                    }
                />
            </Box>

            {/* Автопрокрутка */}
            <FormControlLabel
                control={
                    <Switch
                        checked={settings.autoplay}
                        onChange={() =>
                            setSettings({ autoplay: !settings.autoplay })
                        }
                    />
                }
                label={`${LocText.autoplay}: ${
                    settings.autoplay
                        ? LocText.autoplayEnabled
                        : LocText.autoplayDisabled
                }`}
            />
        </Box>
    );
};

