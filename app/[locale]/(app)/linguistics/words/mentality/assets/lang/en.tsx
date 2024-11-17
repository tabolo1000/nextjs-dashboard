
import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import mentalityImage from "./../img/mentality.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Mentality() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Mentality: Etymology, Meaning, and Examples</h1>

            <Section title="Etymology of the word 'mentality'">
                <p className="paragraph">
                    The word <Highlight>mentality</Highlight> entered the Russian language from French, where it is *mentalité*. This word, in turn, originates from the Latin root *mens*, *mentis*, meaning "mind," "intellect," or "thought."
                </p>
                <p className="paragraph">
                    <Highlight>Latin Root:</Highlight> The Latin *mens* (mind) is the primary root from which many words related to thought and intellect derive. For example, words like "mental" (intellectual) and "mentor" (advisor) also originate from this root.
                </p>
                <p className="paragraph">
                    <Highlight>French Borrowing:</Highlight> The French *mentalité* became popular in European languages in the 19th–20th centuries and was borrowed by Russian to describe the specific characteristics of thinking and perception unique to a particular group of people.
                </p>
            </Section>

            <Interactive_Image src={mentalityImage} alt={"Mentality"} width={500} height={500} />

            <Section title="Meaning of the word 'mentality'">
                <p className="paragraph">
                    <Highlight>Mentality</Highlight> refers to the combination of characteristic traits of thinking, perception, and behavior typical of a particular social or ethnic group. Mentality is shaped by historical, cultural, social, and geographical factors and can be viewed as a kind of "collective mind" or worldview of a group of people.
                </p>
                <p className="paragraph">
                    Mentality manifests in how people perceive the world, how they respond to events, make decisions, and build social connections. It is a blend of attitudes, beliefs, values, and habits that can vary from one nation, culture, or social group to another.
                </p>
            </Section>

            <Section title="Examples of using the word 'mentality'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>National Mentality:</Highlight> This is one of the most common contexts for using the word "mentality." For example, people speak of the "Russian mentality," "American mentality," or "Asian mentality." This refers to the set of characteristic features typical of people raised in a particular cultural environment.
                    </li>
                    <li>
                        <Highlight>Social Mentality:</Highlight> The term can also be applied to various social groups. For example, there is the mentality of the working class, the mentality of the intelligentsia, urban or rural mentality. This reflects differences in thinking, values, and behavior among different groups within one society.
                    </li>
                    <li>
                        <Highlight>Corporate Mentality:</Highlight> In corporate culture, there is also the notion of mentality. Each company can have its own "corporate mentality" — the set of rules, norms, and attitudes that shape the employees' approach to work and interactions with colleagues.
                    </li>
                </ul>
            </Section>

            <Section title="Factors influencing the formation of mentality">
                <ul className="unordered_list">
                    <li>
                        <Highlight>History:</Highlight> Historical events, such as wars, revolutions, periods of prosperity, or crisis, have a huge influence on shaping the worldview and mentality of a people. For example, the mentality in post-Soviet countries was largely formed under the influence of their socialist past.
                    </li>
                    <li>
                        <Highlight>Culture and Traditions:</Highlight> Customs, folklore, religious beliefs, and norms of behavior passed down from generation to generation form a unique cultural code that influences people's mentality. For instance, Eastern cultures often emphasize collectivism and respect for elders, while Western cultures may be more oriented toward individualism.
                    </li>
                    <li>
                        <Highlight>Geographical and Climatic Conditions:</Highlight> Geography and climate can also influence mentality. For example, people living in harsh climatic conditions often develop survival skills, patience, and a culture of mutual aid. Conversely, in regions with milder climates, a more relaxed and optimistic approach to life may prevail.
                    </li>
                    <li>
                        <Highlight>Economic and Social Conditions:</Highlight> The standard of living, access to education, and the social structure of society also play a key role in shaping mentality. For example, societies with high levels of social inequality may develop stronger traits of competition and individualism.
                    </li>
                </ul>
            </Section>

            <Section title="Mentality in Culture and Science">
                <ul className="space-y-6">
                    <Base_card
                        title="Sociology and Psychology"
                        description="In disciplines like sociology and psychology, the concept of mentality is often used to describe the collective attitudes and behaviors of groups. Studies of mentality help to understand how people make decisions, how they relate to traditions, authority, morality, and other aspects of life."
                        icon="🧠"
                    />
                    <Base_card
                        title="Anthropology"
                        description="Anthropologists study mentality as part of a people's cultural heritage. They explore how traditions, myths, rituals, and customs influence the thinking and worldview of different peoples."
                        icon="🌍"
                    />
                    <Base_card
                        title="Literature and Art"
                        description="In literature and art, mentality often becomes a central theme for studying the characters' worldviews and behaviors. For example, works of Russian classics like Dostoevsky or Tolstoy often explore the peculiarities of Russian mentality: its deep spirituality, search for truth and justice, and tendency towards self-reflection."
                        icon="📖"
                    />
                </ul>
            </Section>

            <Section title="Quotes about mentality and their meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Mentality is the mirror of a nation's soul."
                        annotation="Meaning: The mentality of a nation reflects its deep values, beliefs, and worldview, just as a mirror reflects one's appearance."
                    />
                    <Quote_with_annotation
                        quote="Times change, technology advances, but mentality remains the same."
                        annotation="Meaning: While technological progress and social changes can transform living conditions, the fundamental attitudes and worldview of a people remain stable over time."
                    />
                    <Quote_with_annotation
                        quote="Mentality is an invisible boundary separating one people from another."
                        annotation="Meaning: Despite physical proximity, different peoples can have different values and beliefs that shape their behavior and worldview."
                    />
                    <Quote_with_annotation
                        quote="To understand the mentality of a people, you need to live among them, not just study their history."
                        annotation="Meaning: Mentality is shaped not only by historical facts but also by daily traditions and culture, which can only be understood through direct experience with the people."
                    />
                    <Quote_with_annotation
                        quote="Mentality is what unites people in one society and distinguishes them from others."
                        annotation="Meaning: Mentality forms a collective identity that helps people feel part of a group and differentiates them from other cultures."
                    />
                </div>
            </Section>
        </div>
    );
}