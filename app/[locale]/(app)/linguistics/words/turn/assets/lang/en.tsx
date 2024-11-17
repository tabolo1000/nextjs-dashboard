import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import turn from "@/app/[locale]/(app)/linguistics/words/turn/assets/img/turn.jpeg";

export default function Turn() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Turn</h1>

            <Section title="Etymology of the word 'Turn'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>turn</Highlight> comes from Old English <Highlight>turnian</Highlight>, which in turn has its roots in the Latin word <Highlight>tornare</Highlight>, meaning *to turn*, *to rotate*, or *to change direction*. The Latin word itself is derived from <Highlight>tornus</Highlight>, meaning a lathe or tool used for shaping by turning.
                </p>
                <p className="paragraph">
                    In Old English, the word <Highlight>turn</Highlight> was used to describe physical movement or rotation. Over time, it gained broader meanings, encompassing both physical changes in direction and metaphorical uses such as shifts in focus, transformations, or changes in state.
                </p>
            </Section>

            <Interactive_Image src={turn} alt={"Обратить"} width={500} height={500}/>

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Prefix 're-'</Highlight> — indicates repetition or a return to a previous state (in words like *return* or *redirect*).
                    </li>
                    <li>
                        <Highlight>Root 'turn'</Highlight> — comes from Old English, meaning *to rotate* or *to change direction*.
                    </li>
                    <li>
                        <Highlight>Suffix '-ing'</Highlight> — forms a gerund or present participle, indicating an ongoing action.
                    </li>
                </ul>
            </Section>

            <Section title="Morphological norms of the modern Russian language">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Root 'обрат-'</Highlight> — the root "обрат" carries the core meaning of an action related to changing direction, redirecting, or altering the state of something.
                    </li>
                    <li>
                        <Highlight>Suffix '-и-'</Highlight> — this suffix indicates the formation of a verb, giving the root the ability to express a process or action.
                    </li>
                    <li>
                        <Highlight>Suffix '-ть'</Highlight> — this suffix is a marker of the infinitive (the base form of the verb), indicating an undefined action.
                    </li>
                    <li>
                        <Highlight>Base 'обрати-'</Highlight> — "обрати" is the part of the word without the infinitive suffix "-ть," which expresses the action's base meaning.
                    </li>
                    <li>
                        <Highlight>Part of Speech:</Highlight> Verb (action, process).
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In Old English, the word <Highlight>turn</Highlight> was primarily used to describe physical movement or change in direction, such as turning a wheel or body. Over time, the word evolved to include abstract meanings, such as shifts in attention, focus, or intention.
                </p>
                <p className="paragraph">
                    In religious literature, especially in Christian texts, the word acquired additional significance, often referring to a spiritual transformation, such as *turning to faith* or *conversion* to a new belief system.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, the word <Highlight>turn</Highlight> is used in various contexts and has multiple meanings:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Change in direction</Highlight> — shifting the course or direction of movement. Example: *Turn your attention to the problem*.
                    </li>
                    <li>
                        <Highlight>Transformation or conversion</Highlight> — changing the state or form of something. Example: *Turn water into ice*.
                    </li>
                    <li>
                        <Highlight>Attracting attention</Highlight> — focusing or directing attention toward something. Example: *Turn your focus to the details*.
                    </li>
                    <li>
                        <Highlight>Religious conversion</Highlight> — the process of adopting a new faith or belief system. Example: *Turn to Christianity*.
                    </li>
                    <li>
                        <Highlight>Influence or impact</Highlight> — applying force or influence to change something. Example: *Turn the law against the violator*.
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Using the Word 'Turn'">
                <ul className="space-y-6">
                    <Base_card
                        title="Physical Change of Direction"
                        description="He decided to turn back and return home."
                        icon="🌍"
                    />
                    <Base_card
                        title="Transformation"
                        description="The chemical reaction allowed the liquid to turn into a solid state."
                        icon="⚗️"
                    />
                    <Base_card
                        title="Attracting Attention"
                        description="He turned his attention to the minor flaws in the report."
                        icon="🔍"
                    />
                    <Base_card
                        title="Religious Conversion"
                        description="Missionaries sought to turn people to Christianity."
                        icon="✝️"
                    />
                    <Base_card
                        title="Application of Influence"
                        description="The court decided to turn the law against the offenders."
                        icon="⚖️"
                    />
                </ul>
            </Section>

            <Section title="Idiomatic and Figurative Uses">
                <p className="paragraph">
                    In figurative language, the word <Highlight>turn</Highlight> is often used to describe abstract processes or changes:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Turn attention</Highlight> — focus attention or interest on something important.</li>
                    <li><Highlight>Turn resources</Highlight> — allocate or direct resources towards achieving a goal.</li>
                    <li><Highlight>Turn efforts</Highlight> — apply efforts or actions towards achieving a specific goal.</li>
                </ul>
                <p className="paragraph">
                    Idiomatic expressions and common phrases:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Turn a blind eye</Highlight> — deliberately ignore something.</li>
                    <li><Highlight>Turn the tide</Highlight> — reverse a situation or trend, usually for the better.</li>
                    <li><Highlight>Turn against someone</Highlight> — change from supporting to opposing someone.</li>
                    <li><Highlight>Turn over a new leaf</Highlight> — make a fresh start or change behavior for the better.</li>
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Wisdom consists in turning your attention to what truly matters."
                        annotation="Aristotle — on the importance of focusing on essential aspects of life"
                    />
                    <Quote_with_annotation
                        quote="It is impossible to turn a person towards good unless they desire it themselves."
                        annotation="Fyodor Dostoevsky — on how change is only possible with personal will"
                    />
                    <Quote_with_annotation
                        quote="Challenges are opportunities that can be turned into success."
                        annotation="Franklin D. Roosevelt — on how difficulties can become a stepping stone to achievements"
                    />
                </div>
            </Section>

            <Section title="The Meaning of 'Turn' in Various Fields">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Physics and Chemistry</Highlight>: Describes processes of transformation, for example, *a reversible reaction* — a reaction that can go in both directions.
                    </li>
                    <li>
                        <Highlight>Psychology</Highlight>: Used to describe changes in behavior or thinking, for example, *turning attention to your emotions*.
                    </li>
                    <li>
                        <Highlight>Religion and Philosophy</Highlight>: Associated with a change in worldview, for example, *turning to a new belief*.
                    </li>
                    <li>
                        <Highlight>Sociology</Highlight>: Describes changes in societal attitudes, for example, *society has turned its focus toward environmental issues*.
                    </li>
                </ul>
            </Section>

            <Section title="Classification of the Word 'Turn'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>By Application Area</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Lexical meaning (physical/figurative)</li>
                            <li>Religious meaning</li>
                            <li>Legal meaning</li>
                            <li>Scientific and technical meaning</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>By Type of Action</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Active turning (directing efforts)</li>
                            <li>Passive turning (change in perception)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>By Field of Use</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Physics</li>
                            <li>Psychology</li>
                            <li>Sociology</li>
                            <li>Technology and engineering</li>
                        </ul>
                    </li>
                </ul>
            </Section>
        </div>
    );
}