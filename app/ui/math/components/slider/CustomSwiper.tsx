import {
    A11y,
    Autoplay,
    FreeMode,
    Keyboard,
    Manipulation,
    Mousewheel,
    Navigation,
    Virtual,
    Zoom,
    EffectCube,
} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Slider_card} from "@/app/ui/math/components/slider/sliderCard/Slider_card";
import React from "react";

import {useSettingSlider} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/settingStore";
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";


export default function CustomSwiper({
    currentItems,
    handleWordChange,
    handleWordDelete

                                     }:CustomSwiperProps) {
    const { settings } = useSettingSlider()
    return <Swiper
        modules={[
            Navigation,
            Virtual,
            Keyboard,
            Mousewheel,
            FreeMode,
            Zoom,
            A11y,
            Manipulation,
            Autoplay,
            EffectCube,
        ]}
        autoplay={settings.autoplay ? { delay: settings.delay } : false}
        loop={settings.loop}
        slidesPerView={settings.slidesPerView}
        a11y={{
            prevSlideMessage: "Предыдущий слайд",
            nextSlideMessage: "Следующий слайд",
        }}
        freeMode
        cubeEffect={{
            shadow: true,
            shadowOffset: 20,
            shadowScale:  0.94,
            slideShadows: true
        }}
        keyboard={{ enabled: true }}
        spaceBetween={30}
        navigation
        scrollbar={{ draggable: true }}
        hashNavigation={{ watchState: true }}
    >
        {currentItems.map((item) => (
            <SwiperSlide key={item._id}>
                <Slider_card
                    _id={item._id}
                    morpheme={item.morpheme}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    quote={item.quote}
                    annotation={item.annotation}
                    joke={item.joke || ""}
                    derivatives={item.derivatives}
                    collections={item.collections}
                    handleWordChange={handleWordChange}
                    handleWordDelete={handleWordDelete}
                />
            </SwiperSlide>
        ))}
    </Swiper>
}

//------------------------Types---------------------------------------------

interface CustomSwiperProps {
    currentItems: WordCarousel[],
    handleWordChange: (value: WordCarouselUpdate) => void,
    handleWordDelete: (id: string) => void,
}