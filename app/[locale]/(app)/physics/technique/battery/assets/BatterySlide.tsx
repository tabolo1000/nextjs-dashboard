'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Virtual,
    Keyboard,
    Mousewheel,
    FreeMode,
    Zoom,
    A11y,
} from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/swiper-bundle.css";
import {Section} from "@/app/ui/math/components/Section";
import {Highlight} from "@/app/ui/math/components/Highlight";

// Общая структура данных для слайдов
const slidesData = [
    {
        title: "Батарейка на основе цинка и меди",
        description:
            "Простейший тип батарейки, где используются цинк (анод) и медь (катод) с раствором медного купороса (CuSO₄) в качестве электролита.",
        reactions: [
            {
                label: "На аноде",
                formula: "Zn → Zn²⁺ + 2e⁻",
                details: "Цинк окисляется, отдаёт электроны и превращается в ионы.",
            },
            {
                label: "На катоде",
                formula: "Cu²⁺ + 2e⁻ → Cu",
                details: "Ионы меди из раствора принимают электроны и превращаются в атомы меди.",
            },
        ],
        conclusion:
            "В результате цинковая пластина растворяется, а медная пластина утолщается за счёт осаждения меди.",
    },
    {
        title: "Щелочная батарейка",
        description:
            "Один из самых распространённых типов батареек, где анодом выступает порошковый цинк, а катодом — диоксид марганца (MnO₂).",
        reactions: [
            {
                label: "На аноде",
                formula: "Zn + 2OH⁻ → ZnO + H₂O + 2e⁻",
                details: "Цинк окисляется, превращаясь в ионы.",
            },
            {
                label: "На катоде",
                formula: "2MnO₂ + H₂O + 2e⁻ → Mn₂O₃ + 2OH⁻",
                details: "Диоксид марганца восстанавливается, принимая электроны.",
            },
        ],
        conclusion:
            "Щелочные батарейки имеют высокую ёмкость и стабильное напряжение, но их нельзя перезаряжать.",
    },
    {
        title: "Литий-ионная батарейка",
        description:
            "Современный тип батареек, где анод состоит из графита, катод — часто из оксида лития-кобальта (LiCoO₂), а электролит — органический раствор с солями лития.",
        reactions: [
            {
                label: "На аноде",
                formula: "Li → Li⁺ + e⁻",
                details: "Литий отдаёт электроны и превращается в ионы.",
            },
            {
                label: "На катоде",
                formula: "Li⁺ + e⁻ + CoO₂ → LiCoO₂",
                details: "Ионы лития восстанавливаются в структуре оксида кобальта.",
            },
        ],
        conclusion:
            "Литий-ионные батарейки широко используются в смартфонах, ноутбуках и электромобилях благодаря их высокой энергоёмкости и возможности перезарядки.",
    },
    {
        title: "Свинцово-кислотная батарея",
        description:
            "Батарея для автомобилей, где анод сделан из свинца, катод — из оксида свинца (PbO₂), а электролит — раствор серной кислоты (H₂SO₄).",
        reactions: [
            {
                label: "На аноде",
                formula: "Pb + SO₄²⁻ → PbSO₄ + 2e⁻",
                details: "Свинец окисляется.",
            },
            {
                label: "На катоде",
                formula: "PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O",
                details: "Оксид свинца восстанавливается.",
            },
        ],
        conclusion:
            "Такие батареи обладают высокой надёжностью, но их вес и необходимость обслуживания делают их менее удобными для повседневного использования.",
    },
];

// Компонент для отображения одного слайда
const Battery_the_Slide: React.FC<{
    title: string;
    description: string;
    reactions: { label: string; formula: string; details: string }[];
    conclusion: string;
}> = ({ title, description, reactions, conclusion }) => {
    return (
        <Box
            className="relative p-6 border-gray-400 rounded-lg border-2 shadow-lg"
        >
            <div className="slide-content">
                <h3 className="header_h3 text-center">{title}</h3>
                <p className="paragraph_example">{description}</p>
                <ul className="unordered_list dark:text-gray-300 ">
                    {reactions.map((reaction, index) => (
                        <li  key={index}>
                            <Highlight>{reaction.label + ":"}</Highlight> {reaction.details}
                            <div className="text-center p-5 text-red-600 font-black text-3xl">
                                <p>{reaction.formula}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="paragraph_conclusion">
                    {conclusion}
                </p>
            </div>
        </Box>
    );
};

// Главный компонент
export const BatterySlide: React.FC = () => {
    return (
        <Section title="Химические реакции в батарейках">
        <p className="paragraph_example">
                Здесь мы рассмотрим несколько типов батареек, их состав, реакции и
                особенности.
            </p>

            <Swiper
                modules={[
                    Navigation,
                    Virtual,
                    Keyboard,
                    Mousewheel,
                    FreeMode,
                    Zoom,
                    A11y,
                ]}
                zoom={{ maxRatio: 3 }}
                virtual
                a11y={{
                    prevSlideMessage: "Предыдущий слайд",
                    nextSlideMessage: "Следующий слайд",
                }}
                freeMode
                mousewheel={{ forceToAxis: true }}
                keyboard={{ enabled: true }}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                hashNavigation={{ watchState: true }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} >
                        <Battery_the_Slide
                            title={slide.title}
                            description={slide.description}
                            reactions={slide.reactions}
                            conclusion={slide.conclusion}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
};