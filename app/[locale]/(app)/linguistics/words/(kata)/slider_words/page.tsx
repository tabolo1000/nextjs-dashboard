"use client";

import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import {useSliderStore} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";
import {languageMessage} from "@/i18n/languages";
import {animationVariants} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@assets/animaition";
import LoadingHandler from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/LoadingHandler";
import ActionButtons from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/ActionButtons";
import {
    getActionButtonsConfig
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/getActionButtonsConfig";
import BlockContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/BlockContent";
import {LoadingStatus} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";


/**
 * Page adding and displaying words slider as well as its settings
 */
export default function Carrousel_Slider() {
    const { topics, setTopic } = useSliderStore();
    const { pagination, data, actions } = useSlider_words(topics);
    const { pageCount, currentPage, handleChangePage } = pagination;
    const { currentItems, loading, editingFrom } = data;
    const { handleWordChange, handleWordDelete, isSettingsActive, toggleSettings, handleLoadWords } = actions;

    const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);
    /**
     * Handles uploads and errors during uploading
     */
    const isLoading = loading.fetchWords.status === LoadingStatus.padding;
    const hasError = loading.fetchWords.status === LoadingStatus.rejected;

    if (isLoading || hasError) {
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
            <Box className="relative">
                <Typography component="h1" variant="h4" className="header_h1 absolute opacity-0">
                    Button Information Slider
                </Typography>

                {/* Control panel which includes(slider settings, back button, word search) */}
                <div className="absolute translate-x-full right-0 top-0">
                    <ActionButtons
                        actions={getActionButtonsConfig(
                            editingFrom,
                            isSettingsActive,
                            setTopic,
                            toggleSettings,
                            setIsModalSearchOpen,
                            isModalSearchOpen
                        )}
                        orientation="vertical"
                        style=""
                    />
                </div>

                {/* Slider main content, settings, editor*/}
                <Box className="base-animation-all w-full">
                    <AnimatePresence mode="wait">
                        <BlockContent
                            setIsModalSearchOpen={setIsModalSearchOpen}
                            isModalSearchOpen={isModalSearchOpen}
                            editingFrom={editingFrom}
                            isSettingsActive={isSettingsActive}
                            actions={actions}
                            animationVariants={animationVariants}
                            currentItems={currentItems}
                            handleWordChange={handleWordChange}
                            handleWordDelete={handleWordDelete}
                            pageCount={pageCount}
                            currentPage={currentPage}
                            handleChangePage={handleChangePage}
                        />
                    </AnimatePresence>
                </Box>
            </Box>

            {/* Toast Notifications */}
            <ToastContainer theme="dark" position="top-right" autoClose={3000} />
        </>
    );
}


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


