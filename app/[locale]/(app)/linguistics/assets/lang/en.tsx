import { FaLanguage } from 'react-icons/fa';
import { LessonCard } from "@/app/ui/math/components/LessonCard";

/**
 *  English Linguistics main navigation bar
 * that helps you select the required course
 *
 */
export default async function Linguistics() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1"> Лингвистика </h1>
            <LessonCard
                to={"./linguistics/words"}
                title="Etymology and Word History"
                description="Dive into the origins of words: their evolution, shifts in meaning, and the impact of various languages and cultures. Discover the hidden roots of modern vocabulary."
                icon={<FaLanguage />}
                iconColor="text-blue-600"
            />
            <LessonCard
                to={"./linguistics/words/slider_words_theme"}
                title="Word Carousel"
                description="Explore words interactively, uncovering their meanings and contexts. Discover new techniques for memorizing and understanding vocabulary."
                icon={<FaLanguage />}
                iconColor="text-blue-600"
            />
            <LessonCard
                to={"./linguistics/words/conversation_topics"}
                title="Conversation Topics"
                description="A collection of engaging topics for discussions: from linguistic nuances to cultural differences. Enhance your communication and comprehension skills through enjoyable dialogues."
                icon={<FaLanguage />}
                iconColor="text-blue-600"
            />
        </div>
    )
}


