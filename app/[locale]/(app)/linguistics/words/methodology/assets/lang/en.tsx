import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Highlight} from "@/app/ui/math/components/Highlight";
import methodology from "@/app/[locale]/(app)/linguistics/words/methodology/assets/img/methodology.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Methodology() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Method</h1>

            <Section title="Etymology of the Word 'Method'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight>
                    The word <Highlight>Способ</Highlight> comes from the Old Russian <Highlight>спосѡбъ</Highlight>,
                    which traces back to the Proto-Slavic <Highlight>spǫsobъ</Highlight>. It consists of two parts:
                </p>
                <p className="paragraph">
                    Originally, the word <Highlight>method</Highlight> referred to a way or means by which something can be done or a result achieved.
                </p>
            </Section>

            <Interactive_Image src={methodology} alt={"methodology"} width={500} height={500} />

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li><Highlight>Prefix "с-"</Highlight> — indicates joint action or interaction.</li>
                    <li><Highlight>Root "-пособ-"</Highlight> — associated with help or assistance.</li>
                    <li><Highlight>Ending "–"</Highlight> — a standard ending for masculine nouns in singular form.</li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In Old Russian, <Highlight>method</Highlight> was used to denote a method or means by which a goal could be achieved or a task completed. This term appeared in various areas of life, from everyday tasks to more complex craft or military actions.
                </p>
                <p className="paragraph">
                    Over time, the word came to be used more broadly, including not only physical methods of performing tasks but also abstract ways of solving problems, approaches to management, or organizing processes.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, <Highlight>method</Highlight> is a technique, approach, or means by which a goal can be achieved, an action performed, or a problem solved. It is a universal concept applicable in various fields: from science and technology to everyday life.
                </p>
            </Section>

            <Section title="Types of Methods">
                <Highlight>Physical Methods</Highlight> — methods involving physical impact on objects or materials. Examples:
                <ul className="unordered_list">
                    <li>Cutting</li>
                    <li>Welding</li>
                    <li>Melting</li>
                </ul>

                <Highlight>Mathematical Methods</Highlight> — methods used for solving mathematical problems. Examples:
                <ul className="unordered_list">
                    <li>Substitution Method</li>
                    <li>Elimination Method</li>
                    <li>Mathematical Induction Method</li>
                </ul>

                <Highlight>Chemical Methods</Highlight> — methods applied for conducting chemical reactions or analyzing substances. Examples:
                <ul className="unordered_list">
                    <li>Titration Method</li>
                    <li>Distillation Method</li>
                </ul>

                <Highlight>Biological Methods</Highlight> — methods related to research and modification of living organisms. Examples:
                <ul className="unordered_list">
                    <li>Cloning Method</li>
                    <li>Selection Method</li>
                </ul>

                <Highlight>Organizational Methods</Highlight> — methods of management, planning, and task execution in a group or company. Examples:
                <ul className="unordered_list">
                    <li>Delegation Method</li>
                    <li>Resource Allocation Method</li>
                </ul>
            </Section>

            <Section title="Examples of Using the Word 'Method'">
                <ul className="space-y-6">
                    <Base_card
                        title="Science"
                        description="Scientists developed a new method for obtaining pure hydrogen from water."
                        icon="🔬"
                    />
                    <Base_card
                        title="Technology"
                        description="This assembly method reduces production time by half."
                        icon="⚙️"
                    />
                    <Base_card
                        title="Education"
                        description="The best way to learn a foreign language is regular practice."
                        icon="📚"
                    />
                    <Base_card
                        title="Everyday Life"
                        description="This coffee-making method turned out to be the quickest and most convenient."
                        icon="☕"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="War is not a method to achieve an end, but an extreme measure when all other methods have proved useless."
                        annotation="Leo Tolstoy"
                    />
                    <Quote_with_annotation
                        quote="The only way to avoid mistakes is to have no new ideas."
                        annotation="Albert Einstein"
                    />
                    <Quote_with_annotation
                        quote="The best way to predict the future is to create it."
                        annotation="Confucius"
                    />
                </div>
            </Section>

            <Section title="Importance of Methods">
                <p className="paragraph">
                    <Highlight>Method</Highlight> is a key concept in any activity, from simple tasks to complex scientific research. Methods help find solutions, optimize processes, and achieve set goals.
                </p>
            </Section>
        </div>
    );
}