"use client";

import React, {memo} from "react";
import {motion, Variants} from "framer-motion";
import { SettingsApplicationsTwoTone, ExitToAppTwoTone } from "@mui/icons-material";
import ActionButtons from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/move/ActionButtons";
import CustomSwiper from "@/app/ui/math/components/slider/CustomSwiper";
import CustomPagination from "@/app/ui/math/components/slider/CustomPagination";
import { SliderSettingsType } from "@/app/ui/math/components/slider/SliderSettings";
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/linguisticsSlice";

export default memo(function SliderContent ({
                                                toggleSettings,
                                                setTopic,
                                                settings,
                                                currentItems,
                                                handleWordChange,
                                                handleWordDelete,
                                                isEditingForm,
                                                pageCount,
                                                currentPage,
                                                handleChange,
                                                animationVariants,
                                            }: SliderContentProps) {
    return (
        <motion.div
            key="slider"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 rounded-lg shadow-lg"
        >
            {/* Buttons window management */}
            <ActionButtons
                actions={[
                    {
                        icon: <SettingsApplicationsTwoTone className="text-3xl" />,
                        onClick: toggleSettings,
                        tooltip: "Открыть настройки",
                    },
                    {
                        icon: <ExitToAppTwoTone className="text-3xl" />,
                        onClick: () => setTopic(null),
                        color: "error",
                        tooltip: "Выйти",
                    },
                ]}
                style={"justify-end mb-2"}
            />

            {/* Slider window */}
            <CustomSwiper
                settings={settings}
                currentItems={currentItems}
                handleWordChange={handleWordChange}
                handleWordDelete={handleWordDelete}
                isEditingForm={isEditingForm}
            />

            {/* Pagination after the bordering */}
            <CustomPagination
                pageCount={pageCount}
                currentPage={currentPage}
                handleChange={handleChange}
            />
        </motion.div>
    );
})

//---------------------------------------Types------------------------------

interface SliderContentProps {
    toggleSettings: () => void;
    setTopic: (topic: string | null) => void;
    settings: SliderSettingsType;
    currentItems: WordCarousel[];
    handleWordChange: (word: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    isEditingForm: (active: boolean) => void;
    pageCount: number;
    currentPage: number;
    handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    animationVariants: Variants;
}
