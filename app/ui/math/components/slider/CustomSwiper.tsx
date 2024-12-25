import {A11y, Autoplay, FreeMode, Keyboard, Manipulation, Mousewheel, Navigation, Virtual, Zoom} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Slider_card} from "@/app/ui/math/components/slider/Slider_card";
import React, {useRef} from "react";
import {SliderSettingsType} from "@/app/ui/math/components/slider/SliderSettings";
import {WordCarousel, WordCarouselUpdate} from "@/app/store/slices/linguisticsSlice";


export default function CustomSwiper({
    settings,
    currentItems,
    handleWordChange,
    handleWordDelete,
    isEditingForm,

                                     }:CustomSwiperProps) {
/*
    currentItems.findIndex(())

    const swiperRef = useRef("");

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };*/

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
        ]}
        zoom={{ maxRatio: 3 }}
        virtual
        a11y={{
            prevSlideMessage: "Предыдущий слайд",
            nextSlideMessage: "Следующий слайд",
        }}
        autoplay={settings.autoplay ? { delay: settings.delay } : false}
        loop={settings.loop}
        freeMode
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        spaceBetween={30}
        slidesPerView={settings.slidesPerView}
        navigation
        pagination={{ clickable: true }}
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
                    isEditingForm={isEditingForm}
                />
            </SwiperSlide>
        ))}
    </Swiper>
}

//------------------------Types---------------------------------------------

interface CustomSwiperProps {
    settings: SliderSettingsType,
    currentItems: WordCarousel[],
    handleWordChange: (value: WordCarouselUpdate) => void,
    handleWordDelete: (id: string) => void,
    isEditingForm: (active: boolean) => void
}