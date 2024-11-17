import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import componentImage from "@/app/[locale]/(app)/linguistics/words/component/assets/img/component.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Component() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Component</h1>

            <Section title="Etymology of the Word 'Component'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>component</Highlight> entered the English language from the Latin <Highlight>componentis</Highlight>, meaning *constituting* or *combining*. The Latin <Highlight>componentis</Highlight> derives from the verb <Highlight>componere</Highlight> — *to compose*, *to arrange*, which is composed of two parts:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>"com-"</Highlight> — a prefix meaning *together* or *with*.
                    </li>
                    <li>
                        <Highlight>"ponere"</Highlight> — a verb meaning *to place*, *to position*, *to arrange*.
                    </li>
                </ul>
                <p className="paragraph">
                    Thus, the word <Highlight>component</Highlight> originally referred to a part of something larger, which combines with other parts to create a whole.
                </p>
            </Section>

            <Interactive_Image src={componentImage} alt={"component"} width={500} height={500} />

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Prefix "com-"</Highlight> — indicates joint action or combination with something.
                    </li>
                    <li>
                        <Highlight>Root "-pon-"</Highlight> — from Latin <Highlight>"ponere"</Highlight>, meaning *to place* or *arrange*, emphasizes the idea of positioning or arranging parts.
                    </li>
                    <li>
                        <Highlight>Suffix "-ent"</Highlight> — forms a noun from a verbal stem, indicating an entity that performs an action.
                    </li>
                    <li>
                        <Highlight>Ending "-a"</Highlight> — absent in English, but the word remains gender-neutral, unlike the Russian version.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    The word <Highlight>component</Highlight> was initially used in the context of mathematics, physics, and engineering to denote individual parts of complex systems. In philosophy and logic, it was employed to describe elements of an argument or the structure of reasoning.
                </p>
                <p className="paragraph">
                    As science and technology progressed, the word became widely used to refer to the constituent parts of various systems, from mechanical devices to software and chemical compounds.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, a <Highlight>component</Highlight> is any part of a more complex system or structure that performs a specific function within the whole. Components can be physical objects (e.g., machine parts) or abstract concepts (e.g., components of a mathematical equation or a software program).
                </p>
            </Section>

            <Section title="Types of Components">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Technical Components</Highlight> — parts of mechanical or electronic devices. Examples include:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Electronic components</Highlight> (transistors, resistors)</li>
                            <li><Highlight>Mechanical parts</Highlight> (gears, shafts)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Software Components</Highlight> — parts of software, such as modules or libraries, used in development. Examples include:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Functions or classes</Highlight> in code</li>
                            <li><Highlight>Libraries</Highlight> and <Highlight>frameworks</Highlight></li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Mathematical Components</Highlight> — elements of mathematical structures, such as vectors, matrices, or systems of equations. Examples include:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Components of a vector</Highlight> (x, y, z)</li>
                            <li><Highlight>Elements of a matrix</Highlight></li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Chemical Components</Highlight> — substances or elements that form part of chemical compounds. Examples include:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Components of a solution</Highlight> (solvent and solute)</li>
                            <li><Highlight>Chemical elements</Highlight> in a molecule</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Social Components</Highlight> — parts of a social system or structure, such as institutions, roles, or norms. Examples include:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Institutions</Highlight> of family, education, government</li>
                            <li><Highlight>Social roles</Highlight> in society</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Using the Word 'Component'">
                <ul className="space-y-6">
                    <Base_card
                        title="Programming"
                        description="Each component of the system is responsible for performing its task within the larger application."
                        icon="💻"
                    />
                    <Base_card
                        title="Physics"
                        description="The force is divided into two components: horizontal and vertical."
                        icon="⚛️"
                    />
                    <Base_card
                        title="Chemistry"
                        description="The solution consists of two components: the solvent and the solute."
                        icon="🧪"
                    />
                    <Base_card
                        title="Engineering"
                        description="The engine components must be precisely matched to ensure reliable operation."
                        icon="🔧"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Simplicity is an important component of real beauty."
                        annotation="Albert Einstein"
                    />
                    <Quote_with_annotation
                        quote="Each part is a component that must fit perfectly into the overall system for it to work successfully."
                        annotation="Nikola Tesla"
                    />
                    <Quote_with_annotation
                        quote="Design is not just what it looks like. It's how all its components work together."
                        annotation="Steve Jobs"
                    />
                </div>
            </Section>

            <Section title="The Importance of Components">
                <p className="paragraph">
                    A <Highlight>component</Highlight> is a crucial element of any complex system, contributing to its operation or functioning. Understanding the structure and interaction of components helps create reliable systems, whether they are machines, programs, or even social institutions. The more complex the system, the more important it is to properly select and organize its components.
                </p>
            </Section>

            <Section title="Conclusion">
                <p className="paragraph">
                    In conclusion, <Highlight>component</Highlight> refers to an essential part of any organized system. It helps structure and define how a system operates, whether in technology, science, mathematics, or society. As systems become more complex, the role of components becomes increasingly significant, making it crucial to understand and manage their relationships to ensure successful operation.
                </p>
            </Section>
        </div>
    );
}