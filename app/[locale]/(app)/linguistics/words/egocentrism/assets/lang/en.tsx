import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import egocentrismImage from "./../img/egocentrism.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Egocentrism() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Egocentrism</h1>

            <Section title="Etymology of the word 'Egocentrism'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>egocentrism</Highlight> comes from the Latin words:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>"ego"</Highlight> — I, self.</li>
                    <li><Highlight>"centrum"</Highlight> — center.</li>
                </ul>
                <p className="paragraph">
                    Therefore, <Highlight>egocentrism</Highlight> literally means "placing oneself at the center." This reflects the main idea of the concept — the tendency of a person to perceive everything happening around them through the lens of their own interests, views, and needs.
                </p>
            </Section>

            <Interactive_Image src={egocentrismImage} alt={"Egocentrism"} width={500} height={500} />

            <Section title="Definition">
                <p className="paragraph">
                    <Highlight>Egocentrism</Highlight> is a psychological term that describes a person's tendency to view themselves as the central figure in their world, with an inability or unwillingness to consider other people's points of view. An egocentric person tends to see actions and events primarily from the perspective of how they affect them and may not realize that others can have thoughts, feelings, and needs different from their own.
                </p>
                <p className="paragraph">
                    Egocentrism is often associated with an excessive focus on one's own needs and desires, which can lead to insufficient understanding or respect for the thoughts and feelings of others.
                </p>
            </Section>

            <Section title="Psychological Aspect">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Child Development</Highlight>: In early childhood, children naturally tend to be egocentric. They are not yet able to fully understand that other people may have their own thoughts and feelings different from their own. The famous Swiss psychologist Jean Piaget described egocentrism as a normal stage of cognitive development. As children grow older, they begin to understand other people's points of view and learn to take them into account in their actions.
                    </li>
                    <li>
                        <Highlight>Adult Egocentrism</Highlight>: While egocentrism is often considered a characteristic of childhood, some adults may retain egocentric traits throughout life. This can manifest as an inability or unwillingness to understand other perspectives, making it difficult to build healthy interpersonal relationships.
                    </li>
                    <li>
                        <Highlight>Cognitive Egocentrism</Highlight>: This refers to the inability or difficulty in accepting another person's point of view in cognitive processes. For example, a person may assume that everyone thinks the same way they do or that their opinion is the only correct one.
                    </li>
                    <li>
                        <Highlight>Emotional Egocentrism</Highlight>: This is the tendency to focus on one's own emotions while ignoring the feelings and emotional experiences of others. An emotional egocentric may expect others to always respond to their emotional needs but fail to reciprocate.
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Egocentrism">
                <ul className="unordered_list">
                    <li>
                        <Highlight>In Children</Highlight>: A small child may think that if they close their eyes, no one can see them because they can't see anything themselves. This is a classic example of childhood egocentrism, where the child has difficulty understanding that others perceive the world differently.
                    </li>
                    <li>
                        <Highlight>In Adults</Highlight>: An adult may exhibit egocentrism if, for example, they expect their problems to be the most important to everyone around them, without considering that others may have their own concerns and difficulties.
                    </li>
                    <li>
                        <Highlight>In Communication</Highlight>: An egocentric person may frequently interrupt others in conversation, shifting the topic to themselves and their experiences, without paying attention to what others are saying.
                    </li>
                </ul>
            </Section>

            <Section title="Types of Egocentrism">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Cognitive Egocentrism</Highlight>: The person believes that their point of view is the only correct one. They have difficulty understanding or considering that others may have their own opinions or perceptions.
                    </li>
                    <li>
                        <Highlight>Emotional Egocentrism</Highlight>: The person is focused on their own emotional states and is unable or unwilling to understand the emotional experiences of others.
                    </li>
                    <li>
                        <Highlight>Moral Egocentrism</Highlight>: The person believes their moral principles or beliefs are universal and applicable to everyone, disregarding the fact that others may have different moral and ethical views.
                    </li>
                </ul>
            </Section>

            <Section title="Differences from Egoism">
                <p className="paragraph">
                    Egocentrism is often confused with <Highlight>egoism</Highlight>, though they are different concepts:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Egoism</Highlight> is a conscious focus on one's own interests and benefits, often at the expense of others, to gain personal advantage.</li>
                    <li><Highlight>Egocentrism</Highlight> is more of an unconscious tendency to perceive the world through the lens of one's own experiences and needs, often without realizing that one is disregarding the interests of others.</li>
                </ul>
                <p className="paragraph">
                    An egoist may consciously use others to achieve their goals, while an egocentric simply doesn't understand that their behavior might affect others.
                </p>
            </Section>

            <Section title="Examples in Culture">
                <ul className="space-y-6">
                    <Base_card
                        title="Literature"
                        description="In works such as 'The Little Prince' by Antoine de Saint-Exupéry, egocentrism is discussed through characters who see the world only from one — their own — point of view. For example, the king on his planet, who believes that everyone must obey him, is a typical example of egocentrism."
                        icon="📚"
                    />
                    <Base_card
                        title="Cinema"
                        description="In films, egocentric characters are often depicted as unable to understand or consider the feelings of others. For example, in the movie 'The Devil Wears Prada,' the main character, Miranda Priestly, is an egocentric character focused solely on her demands and expectations of those around her."
                        icon="🎬"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Ego centrism is when the world appears to revolve around you, and everyone else is just background."
                        annotation="Ego centrism makes a person view others as unimportant, merely existing to support or enhance their own life, ignoring the significance of other people's lives and perspectives."
                    />

                    <Quote_with_annotation
                        quote="The ego centric person is always baffled by why others don't see the world the way they do."
                        annotation="Ego centric individuals believe their perspective is the only valid one and are often confused when others don’t agree or share their viewpoint."
                    />

                    <Quote_with_annotation
                        quote="Ego centrism isn’t about self-love; it’s about an inability to recognize anyone else."
                        annotation="Ego centrism is not just excessive self-love, but rather an obliviousness to the existence, thoughts, and feelings of others."
                    />

                    <Quote_with_annotation
                        quote="He who places himself at the center of the universe often finds himself alone."
                        annotation="Ego centric people often end up isolated because their self-centeredness alienates others and prevents them from forming meaningful connections."
                    />

                    <Quote_with_annotation
                        quote="Ego centrism is when you look in the mirror and fail to see anything beyond your own reflection."
                        annotation="Ego centrism limits a person to seeing only their own desires and interests, without acknowledging the existence of others around them."
                    />
                </div>
            </Section>

            <Section title="Impact of Egocentrism on Relationships">
                <p className="paragraph">
                    Egocentrism can negatively affect interpersonal relationships as it prevents a person from understanding and considering the needs of others. Egocentrics may exhibit the following traits:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Inability to empathize</Highlight>: An egocentric person finds it difficult to understand that others may experience feelings different from their own. This can lead to misunderstandings and conflicts in relationships.</li>
                    <li><Highlight>Expectation that everyone should adapt</Highlight>: An egocentric person may expect everyone to follow their desires and interests, without considering others' needs.</li>
                    <li><Highlight>Disregard for feedback</Highlight>: An egocentric person may ignore criticism and feedback as they are unable to understand another person’s point of view.</li>
                </ul>
            </Section>
        </div>
    );
}