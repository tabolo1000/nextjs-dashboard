"use client"
import Carrousel_Slider from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/page";
import Menu from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/Menu";
import {useTopics} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";
import {TopicWord} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@types/main";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorScreen} from "@/app/[locale]/(app)/@components/ErrorScreen";
import {Suspense} from "react";
import {LoaderScreen} from "@/app/[locale]/(app)/@components/LoaderScreen";


export type TopicSelectedProps = {
    topicWords: TopicWord[];
}


export default function TopicSelected({topicWords}: TopicSelectedProps) {
    const topics = useTopics();

    const isTopicSelected = topicWords.some((el) =>
        topics.some((topic: string) => el.topic === topic)
    );

    return (
        <>
            {isTopicSelected ? (
                <ErrorBoundary fallback={<ErrorScreen message={{en: "Error", ru: "Ошибка"}} onRetry={() => {
                }}/>
                }>
                    <Suspense fallback={<LoaderScreen message={{en: "Loading...", ru: "Идет загрузка..."}}/>}>
                        <Carrousel_Slider/>
                    </Suspense>
                </ErrorBoundary>

            ) : (
                <Menu topicWords={topicWords}/>
            )}
        </>
    );
}