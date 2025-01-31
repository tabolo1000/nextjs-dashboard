"use server"
import {FaBook, FaHeartbeat, FaLaptopCode, FaLeaf, FaMicrochip, FaPalette, FaUsers, FaUtensils} from "react-icons/fa";
import {TopicWord} from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@types/main";
import TopicSelected from "@/app/[locale]/(app)/linguistics/words/(kata)/slider_words_theme/@components/TopicSelected";

/**
 * TopicWords is a structured array of topics designed for linguistic discussions.
 * Each topic contains a unique set of vocabulary and expressions tailored for specific themes,
 * ranging from casual conversations to deep philosophical discussions.
 *
 * The goal of this data structure is to provide developers with a pre-defined selection
 * of topics that can be easily used in UI components or educational tools.
 *
 * Fields:
 * - `topic`: Unique identifier for the topic (used for routing or logic binding).
 * - `title`: Human-readable title for the topic, displayed in the UI.
 * - `description`: A detailed explanation of the topic's vocabulary and purpose.
 * - `icon`: Icon representing the topic visually.
 * - `iconColor`: Tailwind CSS color classes for styling the icon.
 *
 * Example usage:
 * Render this list in a component to provide users with an interactive way
 * to explore vocabulary by topics.
 *
 */
const topicWords: TopicWord[] = [
    {
        topic: "all_topics", // Общая тема
        title: "Words: General Discussion Topics",
        description: "A comprehensive set of words for discussions on various topics, ranging from daily life to complex philosophical questions.",
        icon: <FaBook />,
        iconColor: "text-blue-500",
    },
    {
        topic: "conversation_topic_dream",
        title: "Words: Dreams and Inspiration",
        description: "Words and expressions related to dreams, goals, and inspiration. Perfect for discussing ambitions and plans for the future.",
        icon: <FaLeaf />,
        iconColor: "text-green-500",
    },
    {
        topic: "conversation_topic_anger", // Тема "Злость"
        title: "Words: Anger and Frustration",
        description: "Vocabulary for discussing emotions such as anger and frustration. Useful for exploring feelings and emotional expression.",
        icon: <FaBook />,
        iconColor: "text-orange-500",
    },
    {
        topic: "conversation_topic_programmer",
        title: "Words: Programming and Coding",
        description: "Vocabulary for discussing programming, coding languages, and software development. Ideal for tech enthusiasts and professionals.",
        icon: <FaLaptopCode />,
        iconColor: "text-red-500",
    },
    {
        topic: "conversation_topic_food",
        title: "Words: Food and Cooking",
        description: "Words related to dishes, ingredients, and culinary preferences. Perfect for conversations about favorite foods and recipes.",
        icon: <FaUtensils />,
        iconColor: "text-red-500",
    },
    {
        topic: "conversation_topic_hobbies",
        title: "Words: Hobbies and Interests",
        description: "Vocabulary for discussing hobbies, interests, and leisure activities. Great for conversations about creativity and pastimes.",
        icon: <FaPalette />,
        iconColor: "text-purple-500",
    },
    {
        topic: "conversation_topic_health",
        title: "Words: Health and Fitness",
        description: "Words and expressions related to physical and mental health, as well as fitness and sports.",
        icon: <FaHeartbeat />,
        iconColor: "text-teal-500",
    },
    {
        topic: "conversation_topic_technology",
        title: "Words: Technology and Innovation",
        description: "Vocabulary for discussing modern technologies, gadgets, the internet, and scientific advancements.",
        icon: <FaMicrochip />,
        iconColor: "text-gray-500",
    },
    {
        topic: "conversation_topic_environment",
        title: "Words: Environment and Nature",
        description: "Words about environmental protection, climate change, and conservation of natural resources. Perfect for eco-conscious discussions.",
        icon: <FaLeaf />,
        iconColor: "text-green-700",
    },
    {
        topic: "conversation_topic_relationships",
        title: "Words: Relationships and Communication",
        description: "Words and phrases related to communication, friendship, love, and interpersonal relationships. Suitable for personal conversations.",
        icon: <FaUsers />,
        iconColor: "text-pink-500",
    },
];

export default async function Words() {
    return  <TopicSelected topicWords={topicWords} />
}