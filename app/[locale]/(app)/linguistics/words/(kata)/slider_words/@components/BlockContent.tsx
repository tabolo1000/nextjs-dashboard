import EditFormContainer
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/EditFormContainer";
import SettingsContent
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SettingsContent";
import SliderContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SliderContent";
import {Actions} from "@/app/[locale]/(app)/linguistics/words/(kata)/useSlider_words";
import {Variants} from "framer-motion";
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/linguisticsSlice";
import React from "react";

const BlockContent = ({
                             editingFrom,
                             isSettingsActive,
                             actions,
                             animationVariants,
                             currentItems,
                             handleWordChange,
                             handleWordDelete,
                             pageCount,
                             currentPage,
                             handleChangePage,
                             setIsModalSearchOpen,
                             isModalSearchOpen
                         }: BlockContentProps) => {
    /**
     * Editor slider
     */
    if (editingFrom) {
        return (
            <EditFormContainer
                editingFrom={editingFrom}
                isEditingForm={actions.setEditingForm}
                animationVariants={animationVariants}
            />
        );
    }
    /**
     * Slider settings
     */
    if (isSettingsActive) {
        return (
            <SettingsContent
                animationVariants={animationVariants}
            />
        );
    }
    /**
     * Slider with the words
     */
    return (
        <SliderContent
            setIsModalSearchOpen={setIsModalSearchOpen}
            isModalSearchOpen= {isModalSearchOpen}
            currentItems={currentItems}
            handleWordChange={handleWordChange}
            handleWordDelete={handleWordDelete}
            isEditingForm={actions.setEditingForm}
            pageCount={pageCount}
            currentPage={currentPage}
            handleChange={handleChangePage}
            animationVariants={animationVariants}
        />
    );
};

export default BlockContent


type BlockContentProps = {
    editingFrom: boolean;
    isSettingsActive: boolean;
    actions: Actions;
    animationVariants: Variants;
    currentItems: WordCarousel[];
    handleWordChange: (word: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    pageCount: number;
    currentPage: number;
    handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
    setIsModalSearchOpen: (isModalSearchOpen: boolean) => void;
    isModalSearchOpen: boolean;
}