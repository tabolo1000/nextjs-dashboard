import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import attacheImage from "@/app/[locale]/(app)/linguistics/words/attache/assets/img/attache.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";

export default function Attache() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Attaché</h1>

            <Section title="Etymology of the word 'Attaché'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>attaché</Highlight> comes from the French word <Highlight>attaché</Highlight>, meaning "attached" or "assigned." The French verb <Highlight>attacher</Highlight> means "to attach," "to join," or "to fasten." This reflects the function of an attaché in diplomatic practice—someone attached to an embassy or another diplomatic mission to carry out specific duties.
                </p>
            </Section>

            <Interactive_Image src={attacheImage} alt={"Attaché"} width={500} height={500} />

            <Section title="Meaning of the word 'Attaché'">
                <p className="paragraph">
                    An <Highlight>attaché</Highlight> is an official who is attached to a diplomatic mission to perform specific functions. Typically, an attaché is a junior diplomat responsible for a particular area of work (such as culture, defense, economy, etc.).
                </p>
                <p className="paragraph">
                    In modern diplomatic contexts, an attaché can be either a junior specialist starting their career in diplomacy or an expert in a particular field brought in to address specific issues.
                </p>
            </Section>

            <Section title="Types of Attachés">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Military Attaché</Highlight> — A representative of the armed forces attached to an embassy to handle military or defense matters. Military attachés typically maintain relations between the armies of nations and monitor the military aspects of bilateral relations.
                    </li>
                    <li>
                        <Highlight>Cultural Attaché</Highlight> — Responsible for cultural interaction between countries, organizing cultural exchanges, events, exhibitions, concerts, and other projects that promote the culture of their home country abroad.
                    </li>
                    <li>
                        <Highlight>Press Attaché</Highlight> — A diplomat responsible for working with the press and media, as well as shaping the image of the embassy and the country in the host nation.
                    </li>
                    <li>
                        <Highlight>Trade Attaché</Highlight> — A representative responsible for economic and trade relations between countries. The trade attaché deals with foreign trade, export promotion, and investment attraction.
                    </li>
                    <li>
                        <Highlight>Science Attaché</Highlight> — A specialist responsible for scientific cooperation between countries, coordinating joint scientific projects and exchanges between scientists.
                    </li>
                </ul>
            </Section>

            <Section title="Functions and Responsibilities of an Attaché">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Representing their country's interests</Highlight> — The attaché acts as the official representative in the area they are responsible for (culture, science, economy, or defense).
                    </li>
                    <li>
                        <Highlight>Information and analysis</Highlight> — Collecting and analyzing information, preparing reports for their government.
                    </li>
                    <li>
                        <Highlight>Event organization</Highlight> — The attaché organizes various events (exhibitions, conferences, meetings) to promote their country's interests abroad.
                    </li>
                    <li>
                        <Highlight>Maintaining contacts</Highlight> — The attaché develops and maintains relationships with key figures in the host country.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    The title <Highlight>attaché</Highlight> appeared in the 18th century when European countries began developing their diplomatic services. Initially, attachés were junior diplomatic staff performing auxiliary functions. Over time, their roles expanded, and specialized positions emerged—military, cultural, and trade attachés.
                </p>
                <p className="paragraph">
                    In the 19th and 20th centuries, the role of attachés grew significantly, especially in the context of international relations. Military and trade attachés played key roles in maintaining strategic and economic ties between nations.
                </p>
            </Section>

            <Section title="Examples of Use">
                <ul className="space-y-6">
                    <Base_card
                        title="Military Attaché"
                        description="The military attaché of the French embassy held a meeting with the Ministry of Defense to discuss security cooperation."
                        icon="🎖️"
                    />
                    <Base_card
                        title="Cultural Attaché"
                        description="The cultural attaché organized an exhibition of contemporary artists to promote the art of their country abroad."
                        icon="🎨"
                    />
                    <Base_card
                        title="Press Attaché"
                        description="The press attaché of the embassy gave an interview to local media, explaining their country's position on an international matter."
                        icon="📰"
                    />
                    <Base_card
                        title="Trade Attaché"
                        description="The trade attaché organized a business forum to strengthen economic ties between the countries."
                        icon="💼"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Diplomacy is the art of saying 'good dog' until you can find a rock."
                        annotation="Winston Churchill — on the subtleties of diplomatic mastery"
                    />
                    <Quote_with_annotation
                        quote="In our time, diplomacy plays a key role in maintaining peace between nations."
                        annotation="Kofi Annan — on the importance of diplomatic relations"
                    />
                    <Quote_with_annotation
                        quote="Attachés are the eyes and ears of the embassy in the host country."
                        annotation="Unknown author — on the role of attachés in diplomacy"
                    />
                </div>
            </Section>

            <Section title="The Role of Attachés in the Modern World">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Military Attachés</Highlight> play a crucial role in developing defense and strategic ties between countries.
                    </li>
                    <li>
                        <Highlight>Cultural Attachés</Highlight> help promote cultural values and exchanges between nations.
                    </li>
                    <li>
                        <Highlight>Trade Attachés</Highlight> strengthen economic relations, promoting trade and investment.
                    </li>
                    <li>
                        <Highlight>Science Attachés</Highlight> coordinate international scientific cooperation and the exchange of expertise between researchers.
                    </li>
                </ul>
            </Section>
        </div>
    );
}