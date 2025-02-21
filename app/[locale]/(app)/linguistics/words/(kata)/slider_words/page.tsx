"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import {animationVariants} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@assets/animaition";
import ActionButtons from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/ActionButtons";
import BlockContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/@components/BlockContent";
import useSlider_words from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";


/**
 * Page adding and displaying words slider as well as its settings
 */
export default function Carrousel_Slider() {
    debugger
    const { pagination, data, actions } = useSlider_words();
    const { pageCount, currentPage, handleChangePage } = pagination;
    const { currentItems} = data;
    const { handleWordChange, handleWordDelete, handleLoadWords } = actions;

    return (
        <>
            <Box className="relative">
                <Typography component="h1" variant="h4" className="header_h1 absolute opacity-0">
                    Button Information Slider
                </Typography>

                {/* Control panel which includes(slider settings, back button, word search) */}
                <div className="absolute translate-x-full right-0 top-0">
                    <ActionButtons
                        orientation="vertical"
                        style=""
                    />
                </div>

                {/* Slider main content, settings, editor*/}
                <Box className="base-animation-all w-full">
                    <AnimatePresence mode="wait">
                        <BlockContent
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


