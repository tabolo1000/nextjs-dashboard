"use client"
import Carrousel_Slider from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words/page";
import Menu from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/Menu";
import {useSliderStore} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";
import {TopicWord} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@types/main";


export type TopicSelectedProps = {
    topicWords: TopicWord[];
}


export default function TopicSelected({ topicWords }:TopicSelectedProps) {
    const { topics = [] } = useSliderStore(); // Убедитесь, что topics — массив
    const isTopicSelected = topicWords.some((el) =>
        topics.some((topic: string) => el.topic === topic)
    );

    return (
        <>
            {isTopicSelected ? (
                <Carrousel_Slider />
            ) : (
                <Menu topicWords={topicWords}/>
            )}
        </>
    );
}