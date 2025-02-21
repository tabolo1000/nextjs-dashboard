import EditFormContainer
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/EditFormContainer";
import SettingsContent
    from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SettingsContent";
import SliderContent from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/SliderContent";
import {Variants} from "framer-motion";
import React from "react";
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";
import {
    useEditing,
    useSettings,
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";


const BlockContent = ({
                          animationVariants,
                          currentItems,
                          handleWordChange,
                          handleWordDelete,
                          pageCount,
                          currentPage,
                          handleChangePage,
                      }: BlockContentProps) => {
    const isEditingActive = useEditing();
    const isSettingsActive = useSettings();
    /**
     * Editor slider and add word
     */
    if (isEditingActive) return <EditFormContainer animationVariants={animationVariants}/>
    /**
     * Slider settings
     */
    if (isSettingsActive) return <SettingsContent animationVariants={animationVariants}/>
    /**
     * Slider with the words
     */
    return (
        <SliderContent
            currentItems={currentItems}
            handleWordChange={handleWordChange}
            handleWordDelete={handleWordDelete}
            pageCount={pageCount}
            currentPage={currentPage}
            handleChange={handleChangePage}
            animationVariants={animationVariants}
        />
    );
};

export default BlockContent


type BlockContentProps = {
    animationVariants: Variants;
    currentItems: WordCarousel[];
    handleWordChange: (word: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    pageCount: number;
    currentPage: number;
    handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}