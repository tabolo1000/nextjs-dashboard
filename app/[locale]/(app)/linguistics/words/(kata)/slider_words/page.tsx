"use client";

import React, { useState, useEffect } from "react";
import { Button, LinearProgress, Box, Typography } from "@mui/material";
import { CodexForm } from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/add_word/CodexForm";
import { SliderSettings, SliderSettingsType } from "@/app/ui/math/components/slider/SliderSettings";
import CustomSwiper from "@/app/ui/math/components/slider/CustomSwiper";
import CustomPagination from "@/app/ui/math/components/slider/CustomPagination";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import { ExitToAppTwoTone, SettingsApplicationsTwoTone } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingStatus } from "@/app/store/slices/linguisticsSlice";
import { toast, ToastContainer } from "react-toastify";

export default function ButtonInfoSlider() {
    // Hooks и состояния
    const { pagination, data, actions } = useSlider_words();
    const { pageCount, currentPage, handleChange } = pagination;
    const { currentItems, loading, error, editingFrom } = data;
    const { handleWordChange, handleWordDelete, isEditingForm } = actions;

    const [settings, setSettings] = useState<SliderSettingsType>({
        loop: true,
        delay: 10000,
        slidesPerView: 1,
        autoplay: true,
    });

    const [isSettingsActive, setIsSettingsActive] = useState(false);
    const toastId = React.useRef<number | string>("");


    const handleLoadingNotifications = (loadingKey: keyof typeof loading) => {
        const { status, message } = loading[loadingKey];
  debugger
        if (status === LoadingStatus.padding) {
            if (!toastId.current) {
                toastId.current = toast.loading(message);
                debugger
            }

        } else {
            if (toastId.current) {
                toast.dismiss(toastId.current);
                toastId.current = "";
            }

            setTimeout(() => {
                if (status === LoadingStatus.fulfilled) toast.success(message);
                if (status === LoadingStatus.rejected) toast.error(message);
            }, 100); // Задержка 100 мс
        }
    };

    useEffect(() => handleLoadingNotifications("addWord"), [loading.addWord]);
    useEffect(() => handleLoadingNotifications("deleteWord"), [loading.deleteWord]);
    useEffect(() => handleLoadingNotifications("fetchWords"), [loading.fetchWords]);

    // Переключение между настройками и слайдером
    const toggleSettings = () => setIsSettingsActive((prev) => !prev);

    // Анимации слайдера
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
                <Typography color="error">Ошибка: {loading.fetchWords.message} {error}</Typography>
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
                            <motion.div
                                key="edit-form"
                                variants={animationVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="p-6 rounded-lg shadow-lg "
                            >
                                <CodexForm editingFrom={editingFrom} isEditingForm={isEditingForm} />
                            </motion.div>
                        ) : (
                            <>
                                {isSettingsActive ? (
                                    <motion.div
                                        key="settings"
                                        variants={animationVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="p-6 rounded-lg shadow-lg"
                                    >
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
                                        <SliderSettings settings={settings} setSettings={setSettings} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="slider"
                                        variants={animationVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="p-6 rounded-lg shadow-lg"
                                    >
                                        <Box className="flex justify-end">
                                            <Button
                                                variant="outlined"
                                                onClick={toggleSettings}
                                                className="transition-all mb-2"
                                            >
                                                <SettingsApplicationsTwoTone className="text-3xl" />
                                            </Button>
                                        </Box>
                                        <CustomSwiper
                                            settings={settings}
                                            currentItems={currentItems}
                                            handleWordChange={handleWordChange}
                                            handleWordDelete={handleWordDelete}
                                            isEditingForm={isEditingForm}
                                        />
                                        <CustomPagination
                                            pageCount={pageCount}
                                            currentPage={currentPage}
                                            handleChange={handleChange}
                                        />
                                    </motion.div>
                                )}
                            </>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
            <ToastContainer theme="dark" position="top-right" autoClose={3000} />
        </>
    );
}