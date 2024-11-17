import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import resultImage from "./../img/results.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Result() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Result: Etymology, Meaning, and Examples</h1>

            {/* Etymology */}
            <Section title="Etymology of the Word 'Result'">
                <p className="paragraph">
                    The word <Highlight>"result"</Highlight> entered the Russian language from the Latin <Highlight>*resultatus*</Highlight>, meaning "yield," "echo," or "consequence." The Latin <Highlight>*resultare*</Highlight> is derived from the verb <Highlight>*salire*</Highlight>, meaning "to jump" or "to leap." In a literal translation, <Highlight>*resultare*</Highlight> can be interpreted as "to bounce back" or "to return," symbolizing the outcome of actions or events.
                </p>
                <p className="paragraph">
                    <Highlight>1. Latin Root:</Highlight>
                    The Latin word <Highlight>*resultare*</Highlight> initially referred to a physical action—something that bounces back or is the consequence of a previous action. Over time, the word began to be used in a more abstract sense to denote the outcomes of actions.
                </p>
                <p className="paragraph">
                    <Highlight>2. Borrowing into Russian:</Highlight>
                    Through the French word <Highlight>*résultat*</Highlight>, it was borrowed into Russian in the 19th century and began to be used to refer to the final outcome of a process or action.
                </p>
            </Section>

            <Interactive_Image src={resultImage} alt={"Результат"} width={500} height={500} />

            {/* Definition */}
            <Section title="Definition of the Word 'Result'">
                <p className="paragraph">
                    A <Highlight>result</Highlight> is the final outcome or consequence of a process, action, or event. A result can be either positive or negative, and it reflects the changes that occurred as a result of performing certain actions.
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Outcome of Actions:</Highlight>
                        A result is the end product of a process.
                        <br />
                        <i>"The result of the experiment revealed new data."</i>
                    </li>
                    <li>
                        <Highlight>2. Consequences of Events:</Highlight>
                        A result can be the consequence of certain events or decisions.
                        <br />
                        <i>"The election results were unexpected for everyone."</i>
                    </li>
                    <li>
                        <Highlight>3. A Goal to Strive For:</Highlight>
                        A result is the final goal that a person or group strives for through their actions.
                        <br />
                        <i>"Hard work led to excellent results."</i>
                    </li>
                </ul>
            </Section>

            {/* Examples of Use */}
            <Section title="Examples of Using the Word 'Result'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Results in Education:</Highlight>
                        The outcomes of the learning process or exams, showing the student's level of knowledge or skills.
                        <br />
                        <i>"The exam results will be announced next month."</i>
                    </li>
                    <li>
                        <Highlight>2. Results in Sports:</Highlight>
                        The outcome of competitions or athletic achievements.
                        <br />
                        <i>"The result of the match favored the local team."</i>
                    </li>
                    <li>
                        <Highlight>3. Experimental Results:</Highlight>
                        In science, a result refers to the data obtained during an experiment or research.
                        <br />
                        <i>"The results of the experiment confirmed the scientists' hypothesis."</i>
                    </li>
                    <li>
                        <Highlight>4. Work Results:</Highlight>
                        The outcome of work, which can be expressed as a completed task, a finished project, or an achieved goal.
                        <br />
                        <i>"The result of months of work was presented at the conference."</i>
                    </li>
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes About Results and Their Meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="The result does not always justify the means."
                        annotation="Meaning: It is important not only to achieve a result, but also to consider the means by which it is achieved. Ethical and moral aspects also play a significant role."
                    />
                    <Quote_with_annotation
                        quote="The result speaks for itself."
                        annotation="Meaning: When the result is obvious, it does not need additional explanation or justification—its quality and significance are self-evident."
                    />
                    <Quote_with_annotation
                        quote="It doesn’t matter how you start, it’s how you finish. The result is everything."
                        annotation="Meaning: The final outcome of actions is more important than the initial steps or intermediate stages. Success is determined by the achieved result."
                    />
                    <Quote_with_annotation
                        quote="The result comes to those who do not give up."
                        annotation="Meaning: Persistence and determination in reaching a goal lead to results, even if the path to it is difficult."
                    />
                    <Quote_with_annotation
                        quote="There is no result without effort."
                        annotation="Meaning: Every result requires effort and work. Without investing time and energy, it is impossible to achieve meaningful outcomes."
                    />
                </div>
            </Section>

            {/* Results in Various Fields */}
            <Section title="Results in Various Fields">
                <ul className="space-y-6">
                    <Base_card
                        title="Results in Business"
                        description="In business, results refer to financial or operational outcomes, such as profit, growth, customer satisfaction, and more."
                        icon="💼"
                    />
                    <Base_card
                        title="Results in Science"
                        description="In scientific research, a result is the data obtained through experiments or analysis, allowing conclusions about the validity of a hypothesis."
                        icon="🔬"
                    />
                    <Base_card
                        title="Results in Sports"
                        description="Sports results show the achievements of athletes or teams in competitions, such as points, times, or number of victories."
                        icon="🏅"
                    />
                    <Base_card
                        title="Results in Politics"
                        description="In politics, results can include election outcomes, referenda, or decisions that affect government policy and society."
                        icon="🏛️"
                    />
                    <Base_card
                        title="Results in Art"
                        description="In the arts, a result can be a created work (painting, film, music) that expresses the artist's ideas or resonates with the audience."
                        icon="🎨"
                    />
                </ul>
            </Section>

            {/* Factors Affecting the Result */}
            <Section title="Factors Affecting the Result">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Perseverance and Hard Work:</Highlight>
                        Achieving a result often requires persistence and hard work. Successful people tend not to give up, despite difficulties, and this leads to positive outcomes.
                    </li>
                    <li>
                        <Highlight>2. Quality of Preparation:</Highlight>
                        A good result depends on the quality of preparation. This can refer to study, work, sports, or other areas.
                    </li>
                    <li>
                        <Highlight>3. Conditions and Circumstances:</Highlight>
                        Sometimes, the result depends not only on efforts but also on external circumstances, such as the environment, resources, or support. It is important to recognize that not everything is under our control.
                    </li>
                    <li>
                        <Highlight>4. Methods and Approaches:</Highlight>
                        The chosen methods and strategies play an important role in achieving the result. The right approach helps to reach the goal faster and with fewer resources.
                    </li>
                </ul>
            </Section>

            {/* Results and Goals */}
            <Section title="Results and Goals">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Result as a Goal:</Highlight>
                        Often, a result is something to strive for, a concrete goal. For example, in business, the result may be increased profits or gaining new market share.
                    </li>
                    <li>
                        <Highlight>2. Result as a Measure of Success:</Highlight>
                        A result is used to measure success or failure. It allows one to assess how effectively actions have been performed or how closely a goal has been achieved.
                    </li>
                    <li>
                        <Highlight>3. Evaluating Results:</Highlight>
                        After achieving a result, it is important to evaluate and analyze it. This helps to understand what was done correctly and where improvements can be made.
                    </li>
                </ul>
            </Section>
        </div>
    );
}