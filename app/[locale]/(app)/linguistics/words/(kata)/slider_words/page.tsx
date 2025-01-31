/**
 * Page adding and displaying words slider as well as its settings
 */

"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import SliderContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SliderContent";
import SettingsContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SettingsContent";
import EditFormContainer from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/EditFormContainer";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import { LoadingStatus } from "@/app/store/slices/linguisticsSlice";
import {useSliderStore} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";
import {languageMessage} from "@/i18n/languages";
import {ErrorScreen} from "@/app/[locale]/(app)/@components/ErrorScreen";
import {LoaderScreen} from "@/app/[locale]/(app)/@components/LoaderScreen";



export default function Carrousel_Slider() {
    const { topics, setTopic } = useSliderStore();
    const { pagination, data, actions } = useSlider_words(topics);
    const { pageCount, currentPage, handleChangePage } = pagination;
    const { currentItems, loading, editingFrom } = data;
    const { handleWordChange, handleWordDelete, isSettingsActive, toggleSettings, handleLoadWords } = actions;

    const animationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };

    // Используем LoadingHandler
    if (loading.fetchWords.status === LoadingStatus.rejected || loading.fetchWords.status === LoadingStatus.padding) {
        return (
            <LoadingHandler
                status={loading.fetchWords.status}
                message={loading.fetchWords.message as languageMessage}
                onRetry={handleLoadWords}
            />
        );
    }

    return (
        <>
            <Box>
                <Typography component="h1" variant="h4" className="header_h1 absolute opacity-0">
                    Button Information Slider
                </Typography>

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
                                animationVariants={animationVariants}
                            />
                        ) : (
                            <SliderContent
                                toggleSettings={toggleSettings}
                                setTopic={setTopic}
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

type LoadingHandlerProps = {
    status: string;
    message: languageMessage;
    onRetry?: () => void;
};

const LoadingHandler: React.FC<LoadingHandlerProps> = ({ status, message, onRetry }) => {
    if (status === LoadingStatus.rejected) {
        return <ErrorScreen message={message} onRetry={onRetry!} />;
    }

    if (status === LoadingStatus.padding) {
        return <LoaderScreen message={message} />;
    }

    return null;
};

/*export function getErrorMessage(status: number): string {
    const errorMessages: Record<number, string> = {
        400: "Неверный запрос. Проверьте данные и повторите попытку.",
        401: "Неавторизован. Пожалуйста, выполните вход.",
        403: "Доступ запрещён. У вас недостаточно прав.",
        404: "Ресурс не найден. Проверьте URL.",
        500: "Внутренняя ошибка сервера. Попробуйте позже.",
        503: "Сервис временно недоступен. Попробуйте позже.",
    };

    return errorMessages[status] || "Произошла неизвестная ошибка.";
}*/


