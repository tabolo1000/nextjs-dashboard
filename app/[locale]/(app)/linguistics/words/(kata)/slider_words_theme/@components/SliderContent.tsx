"use client";

import React, {memo, useEffect, useState} from "react";
import {motion, Variants} from "framer-motion";
import { SettingsApplicationsTwoTone, ExitToAppTwoTone } from "@mui/icons-material";
import ActionButtons from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/ActionButtons";
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
                            onClick: () => setTopic([]),
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
            <TextReader/>
        </motion.div>
    );
})

//---------------------------------------Types------------------------------

interface SliderContentProps {
    toggleSettings: () => void;
    setTopic: (topic: string[]) => void;
    currentItems: WordCarousel[];
    handleWordChange: (word: WordCarouselUpdate) => void;
    handleWordDelete: (id: string) => void;
    isEditingForm: (active: boolean) => void;
    pageCount: number;
    currentPage: number;
    handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    animationVariants: Variants;
}



const TextReader = () => {
    const [text, setText] = useState(""); // Текст для озвучивания
    const [voices, setVoices] = useState([]); // Доступные голоса
    const [selectedVoice, setSelectedVoice] = useState(null); // Выбранный голос

    // Получение голосов
    useEffect(() => {
        if ("speechSynthesis" in window) {
            const loadVoices = () => {
                const availableVoices = window.speechSynthesis.getVoices();
                setVoices(availableVoices);

                // Устанавливаем голос по умолчанию (например, первый русский голос)
                const defaultVoice = availableVoices.find((voice) =>
                    voice.lang.startsWith("ru")
                );
                setSelectedVoice(defaultVoice || availableVoices[0]);
            };

            // Если голоса загружаются асинхронно, слушаем обновление
            window.speechSynthesis.onvoiceschanged = loadVoices;
            loadVoices();
        }
    }, []);

    // Озвучивание текста
    const handleSpeak = () => {
        if (!text) {
            alert("Введите текст для озвучивания!");
            return;
        }

        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);

            // Устанавливаем выбранный голос
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }

            // Дополнительно можно установить язык (если голос поддерживает несколько языков)
            utterance.lang = selectedVoice?.lang || "ru-RU";

            // Озвучиваем текст
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Ваш браузер не поддерживает Web Speech API.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Озвучивание текста</h1>
            <textarea
                className="w-full p-2 border rounded mb-4"
                rows="5"
                placeholder="Введите текст для озвучивания..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select
                className="w-full p-2 border rounded mb-4"
                value={selectedVoice?.name || ""}
                onChange={(e) =>
                    setSelectedVoice(voices.find((voice) => voice.name === e.target.value))
                }
            >
                {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                    </option>
                ))}
            </select>
            <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                onClick={handleSpeak}
            >
                Озвучить
            </button>
        </div>
    );
};

