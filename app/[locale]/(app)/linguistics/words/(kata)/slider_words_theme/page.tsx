"use client";

import { FaBook, FaLeaf } from "react-icons/fa";
import { LessonCard } from "@/app/ui/math/components/LessonCard";
import { useState } from "react";
import Carrousel_Slider from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/page";

// Тип для описания темы
interface TopicWord {
    topic: string;
    title: string;
    description: string;
    icon: JSX.Element;
    iconColor: string;
}
// Список всех тем
const topicWords: TopicWord[] = [
    {
        topic: " ", // Общая тема
        title: "Слова: Обсуждение всех тем",
        description: "Всеобъемлющий набор слов для обсуждений на разные темы, от повседневной жизни до сложных философских вопросов.",
        icon: <FaBook />,
        iconColor: "text-blue-500",
    },
    {
        topic: "conversation_topic_dream", // Тема "Мечта"
        title: "Слова: Мечта и вдохновение",
        description: "Слова и выражения, связанные с мечтами, целями и вдохновением. Отлично подходит для обсуждения амбиций и планов на будущее.",
        icon: <FaLeaf />,
        iconColor: "text-green-500",
    },
    {
        topic: "conversation_topic_anger", // Тема "Злость"
        title: "Слова: Злость",
        description: "Лексика для обсуждения путешествий, новых мест, культур и приключений. Идеально для любителей странствий.",
        icon: <FaBook />,
        iconColor: "text-orange-500",
    },
    {
        topic: "conversation_topic_programmer", // Тема "Еда"
        title: "Слова: Программирование",
        description: "Слова, связанные с блюдами, ингредиентами и кулинарными предпочтениями. Подходит для обсуждений о любимой еде и рецептах.",
        icon: <FaLeaf />,
        iconColor: "text-red-900",
    },
    {
        topic: "conversation_topic_food", // Тема "Еда"
        title: "Слова: Еда и кулинария",
        description: "Слова, связанные с блюдами, ингредиентами и кулинарными предпочтениями. Подходит для обсуждений о любимой еде и рецептах.",
        icon: <FaLeaf />,
        iconColor: "text-red-500",
    },
    {
        topic: "conversation_topic_hobbies", // Тема "Хобби"
        title: "Слова: Хобби и увлечения",
        description: "Лексика для обсуждения хобби, увлечений и свободного времени. Отлично подходит для разговоров о творчестве и досуге.",
        icon: <FaBook />,
        iconColor: "text-purple-500",
    },
    {
        topic: "conversation_topic_health", // Тема "Здоровье"
        title: "Слова: Здоровье и фитнес",
        description: "Слова и выражения, связанные с физическим и ментальным здоровьем, а также с фитнесом и спортом.",
        icon: <FaLeaf />,
        iconColor: "text-teal-500",
    },
    {
        topic: "conversation_topic_technology", // Тема "Технологии"
        title: "Слова: Технологии и инновации",
        description: "Лексика, посвящённая обсуждению современных технологий, гаджетов, интернета и научных достижений.",
        icon: <FaBook />,
        iconColor: "text-gray-500",
    },
    {
        topic: "conversation_topic_environment", // Тема "Экология"
        title: "Слова: Экология и природа",
        description: "Слова о защите окружающей среды, изменении климата и сохранении природных ресурсов. Идеально для экологически осознанных дискуссий.",
        icon: <FaLeaf />,
        iconColor: "text-green-700",
    },
    {
        topic: "conversation_topic_relationships", // Тема "Отношения"
        title: "Слова: Отношения и общение",
        description: "Слова и фразы, связанные с общением, дружбой, любовью и межличностными отношениями. Подходит для личных разговоров.",
        icon: <FaBook />,
        iconColor: "text-pink-500",
    },
];


// Компонент Words
export default function Words() {
    const [topic, setTopic] = useState<null | string>(null);


    // Обработчик выбора темы
    const handleSelectTopic = (selectedTopic: string) => {
        setTopic(selectedTopic);
    };

    // Проверка, выбрана ли тема
    const isTopicSelected = topic && topicWords.some((el) => el.topic === topic);

    return (
        <>
            {/* Если выбрана тема, рендерим слайдер */}
            {isTopicSelected ? (
                <Carrousel_Slider endPoints={[topic!]} setTopic = {setTopic} />
            ) : (
                <div className="main_block_task">
                    <h1 className="header_h1">Слова</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {topicWords.map((word, i) => (
                            <LessonCard
                                key={word.topic || i} // Используем topic как уникальный ключ
                                to={() => handleSelectTopic(word.topic)} // Обработчик выбора темы
                                title={word.title}
                                description={word.description}
                                icon={word.icon}
                                iconColor={word.iconColor}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}