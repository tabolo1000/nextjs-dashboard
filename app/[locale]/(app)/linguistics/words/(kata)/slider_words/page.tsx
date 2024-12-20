"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "@mui/material";
import { CodexForm } from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/CodexForm";
import { SliderSettings, SliderSettingsType } from "@/app/ui/math/components/slider/SliderSettings";
import CustomSwiper from "@/app/ui/math/components/slider/CustomSwiper";
import CustomPagination from "@/app/ui/math/components/slider/CustomPagination";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import { ExitToAppTwoTone, SettingsApplicationsTwoTone } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

export default function ButtonInfoSlider() {
    const { pagination, data, actions } = useSlider_words();
    const { pageCount, currentPage, handleChange } = pagination;
    const { currentItems, loading, error, editingFrom } = data;
    const { handleWordChange, handleWordDelete, isEditingForm } = actions;

    // Состояние настроек
    const [settings, setSettings] = useState<SliderSettingsType>({
        loop: true,
        delay: 3000,
        slidesPerView: 1,
        autoplay: true,
    });
    const [pageSettingsActive, setPageSettingsActive] = useState(false);

    // Переключение между настройками и слайдером
    const toggleSettings = () => setPageSettingsActive((prev) => !prev);

    // Анимации для появления/исчезновения
    const variants = {
        initial: { opacity: 0, y: 20 }, // Начальное состояние компонента
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Анимация появления
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }, // Анимация исчезновения
    };

    if (loading.status) return <p>{loading.message}</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div>
            <h1 className="header_h1 absolute opacity-0">Button Information Slider</h1>
            <div className="base-animation-all w-full">
                {/* Редактирование формы */}
                {editingFrom ? (
                    <CodexForm editingFrom={editingFrom} isEditingForm={isEditingForm} />
                ) : (
                    <>
                        {/* Анимация с помощью AnimatePresence */}
                        <AnimatePresence mode="wait">
                            {pageSettingsActive ? (
                                <motion.div
                                    key="settings"
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="p-6 rounded-lg shadow-lg"
                                >
                                    <div className="flex justify-end">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={toggleSettings}
                                            className="hover:bg-red-500 transition-all mb-2"
                                        >
                                            <ExitToAppTwoTone className="text-3xl" />
                                        </Button>
                                    </div>
                                    <SliderSettings settings={settings} setSettings={setSettings} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="slider"
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="p-6 rounded-lg shadow-lg"
                                >
                                    <div className="flex justify-end">
                                        <Button
                                            variant="outlined"
                                            onClick={toggleSettings}
                                            className="transition-all mb-2"
                                        >
                                            <SettingsApplicationsTwoTone className="text-3xl" />
                                        </Button>
                                    </div>
                                    {/* Слайдер */}
                                    <CustomSwiper
                                        settings={settings}
                                        currentItems={currentItems}
                                        handleWordChange={handleWordChange}
                                        handleWordDelete={handleWordDelete}
                                        isEditingForm={isEditingForm}
                                    />
                                    {/* Пагинация */}
                                    <CustomPagination
                                        pageCount={pageCount}
                                        currentPage={currentPage}
                                        handleChange={handleChange}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </div>
    );
}