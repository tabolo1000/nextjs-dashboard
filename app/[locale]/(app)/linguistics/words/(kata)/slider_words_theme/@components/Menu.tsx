"use client"

/**
 * The Menu component is designed to display a list of topics as cards (LessonCard).
 * This is a client-side component that:
 * - Receives a list of topics (`topicWords`) as a prop.
 * - Uses Zustand (`useSliderStore`) for local state management, specifically
 *   for selecting a topic (`setTopic`).
 * - Determines the application's language based on the current path using
 *   `usePathname()` from Next.js and displays the header in the appropriate language.
 * - Renders topic cards (LessonCard) with a title, description, icon, and action.
 *
 * Props:
 * - `topicWords`: An array of objects of type `TopicWord`, containing topic data.
 *
 * Dependencies:
 * - Zustand store for state management (`useSliderStore`).
 * - The LessonCard component to display each card.
 * - `usePathname` from Next.js for working with the current path.
 */

import { LessonCard } from "@/app/ui/math/components/LessonCard";
import { TopicWord } from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@types/main";
import { usePathname } from "next/navigation";
import {getLocalizedText} from "@/app/lib/utils";
import {
    useSliderHandlers
} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@store/sliderStore";

export type MenuProps = {
    topicWords: TopicWord[];
}

export default function Menu({ topicWords }: MenuProps) {
    const language = usePathname().split("/")[1];
    const { setTopic } = useSliderHandlers()

    const handleSelectTopic = (selectedTopic: string) => {
        setTopic([selectedTopic]);
    };

    return (
        <>
            <div className="main_block_task">
                <h1 className="header_h1">
                    {getLocalizedText(language, { en: "Words",ru: "Слова"})}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {topicWords.map((word, i) => (
                        <LessonCard
                            key={word.topic || i}
                            to={() => handleSelectTopic(word.topic)}
                            title={word.title}
                            description={word.description}
                            icon={word.icon}
                            iconColor={word.iconColor}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

