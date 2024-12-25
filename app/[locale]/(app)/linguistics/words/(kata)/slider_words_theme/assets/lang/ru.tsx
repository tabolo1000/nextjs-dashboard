//"use client"

import {FaBook, FaLeaf} from 'react-icons/fa';
import {LessonCard} from "@/app/ui/math/components/LessonCard";
import {useState} from "react";
import Carrousel_Slider from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/page";



// Функция для статического чтения файлов
export default async function Words() {
    const topicWords = [
        "conversation_topic_dream"
    ]
    return <div className="main_block_task">
        <h1 className="header_h1">
            Слова
        </h1>
        <div className="w-full">
            {/*<LessonCard
                react
                to={<Carrousel_Slider endPoints={topicWords}/>}
                title="Витамины: Биология и здоровье"
                description="Изучение всех типов витаминов, их функций, источников и влияния на здоровье человека."
                icon={<FaLeaf />}
                iconColor="text-green-500"
            />*/}

          {/*  <LessonCard
                to={"./slider_words/conversation_topic_dream"}
                title="Слова: Темы для обсуждения"
                description="Изучение всех типов витаминов, их функций, источников и влияния на здоровье человека."
                icon={<FaBook />}
                iconColor="text-green-500"
            />*/}
        </div>
    </div>
}


