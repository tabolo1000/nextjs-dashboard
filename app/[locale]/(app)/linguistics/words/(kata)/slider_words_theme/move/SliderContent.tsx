"use client";

import React, {memo} from "react";
import {motion, Variants} from "framer-motion";
import { SettingsApplicationsTwoTone, ExitToAppTwoTone } from "@mui/icons-material";
import ActionButtons from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/move/ActionButtons";
import CustomSwiper from "@/app/ui/math/components/slider/CustomSwiper";
import CustomPagination from "@/app/ui/math/components/slider/CustomPagination";
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/linguisticsSlice";

export default memo(function SliderContent ({
                                                toggleSettings,
                                                setTopic,
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
            className="p-6 rounded-lg shadow-lg relative border border-red-200 "
        >
            {/* Buttons window management */}
            <div className="absolute translate-x-full right-0 top-0">
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
                    orientation={"vertical"}
                    style={""}
                />
            </div>


            {/* Slider window */}
            <CustomSwiper
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
    currentItems: WordCarousel[];
    handleWordChange: (word: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    isEditingForm: (active: boolean) => void;
    pageCount: number;
    currentPage: number;
    handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    animationVariants: Variants;
}
