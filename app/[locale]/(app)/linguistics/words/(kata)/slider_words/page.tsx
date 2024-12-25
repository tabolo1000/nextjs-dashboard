"use client";

import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import SliderContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/move/SliderContent";
import SettingsContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/move/SettingsContent";
import EditFormContainer from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/move/EditFormContainer";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import { LoadingStatus } from "@/app/store/slices/linguisticsSlice";

export default function Carrousel_Slider({
                                             endPoints,
                                             setTopic,
                                         }: {
    endPoints: Array<string>;
    setTopic: (topic: string | null) => void;
}) {
    const { pagination, data, actions } = useSlider_words(endPoints);
    const { pageCount, currentPage, handleChangePage } = pagination;
    const { currentItems, loading, error, editingFrom, settings} = data;
    const { handleWordChange, handleWordDelete, isSettingsActive, toggleSettings, setSettings } = actions;




    const animationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };

    // Загрузка или ошибка
    if (loading.fetchWords.status === LoadingStatus.rejected) {
        return (
            <>
                <Box>
                    <Typography color="error">
                        Ошибка: {loading.fetchWords.message} {error}
                    </Typography>
                </Box>
                <ToastContainer theme="dark" position="top-right" autoClose={3000} />
            </>
        );
    }

    if (loading.fetchWords.status === LoadingStatus.padding) {
        return (
            <>
                <Box>
                    <LinearProgress />
                    <Typography>{loading.fetchWords.message}</Typography>
                </Box>
                <ToastContainer theme="dark" position="top-right" autoClose={3000} />
            </>
        );
    }

    // Основной рендер
    return (
        <>
            <Box>
                {/* Заголовок для SEO */}
                <Typography component="h1" variant="h4" className="header_h1 absolute opacity-0">
                    Button Information Slider
                </Typography>

                {/* Контент */}
                <Box className="base-animation-all w-full">
                    <AnimatePresence mode="wait">
                        {editingFrom ? (
                            <EditFormContainer
                                editingFrom={editingFrom}
                                isEditingForm={actions.setEditingForm}
                                animationVariants={animationVariants}
                            />
                        ) : isSettingsActive ? (
                            <SettingsContent
                                toggleSettings={toggleSettings}
                                settings={data.settings}
                                setSettings={actions.setSettings}
                                animationVariants={animationVariants}
                            />
                        ) : (
                            <SliderContent
                                toggleSettings={toggleSettings}
                                setTopic={setTopic}
                                settings={data.settings}
                                currentItems={currentItems}
                                handleWordChange={handleWordChange}
                                handleWordDelete={handleWordDelete}
                                isEditingForm={actions.setEditingForm}
                                pageCount={pageCount}
                                currentPage={currentPage}
                                handleChange={handleChangePage}
                                animationVariants={animationVariants}
                            />
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
            <ToastContainer theme="dark" position="top-right" autoClose={3000} />
        </>
    );
}



