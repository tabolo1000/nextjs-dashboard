import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import methodImage from "@/app/[locale]/(app)/linguistics/words/method/assets/img/method.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Method() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Method</h1>

            <Section title="Etymology of the Word 'Method'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>method</Highlight> came into the English language from the Latin <Highlight>methodus</Highlight>, which in turn derives from the Ancient Greek <Highlight>μέθοδος</Highlight> (<Highlight>méthodos</Highlight>), meaning *way of investigation*, *way of knowing*. The Greek word consists of two parts:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>"μετά" (meta)</Highlight> — means "after," "beyond," or "through."
                    </li>
                    <li>
                        <Highlight>"ὁδός" (hodos)</Highlight> — translates as "path" or "road."
                    </li>
                </ul>
                <p className="paragraph">
                    Initially, the word <Highlight>method</Highlight> in Greek referred to a path toward a goal, a means of reaching a result through investigation or problem-solving. The term was used to describe a systematic approach to acquiring knowledge, especially in philosophy and science.
                </p>
            </Section>

            <Interactive_Image src={methodImage} alt={"method"} width={500} height={500} />

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Prefix "met-"</Highlight> — comes from the Greek <Highlight>"μετά"</Highlight>, which signifies movement or following something, striving toward a goal.
                    </li>
                    <li>
                        <Highlight>Root "-hod-"</Highlight> — comes from the Greek word <Highlight>"ὁδός"</Highlight>, meaning "path" or "road." This is the key element that defines the meaning of the word <Highlight>method</Highlight> as a way of achieving a goal.
                    </li>
                    <li>
                        <Highlight>Ending "-od"</Highlight> — typical for nouns of Greek origin that denote a process or way of action.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In ancient Greek philosophy and science, the word <Highlight>μέθοδος</Highlight> was used to describe a systematic approach to investigation, the search for truth, or the development of solutions. It became a key term in the works of philosophers such as Aristotle, who actively used the concept of method to describe his approaches to studying nature and philosophical questions.
                </p>
                <p className="paragraph">
                    During the Middle Ages, with the Latin borrowing, the word <Highlight>method</Highlight> entered scientific lexicons. It was used to describe systematic approaches to research in theology, philosophy, and natural science. In the Renaissance, when scientific methods began to be actively developed and systematized, the term "method" became foundational for describing the ways of scientific inquiry.
                </p>
                <p className="paragraph">
                    In the 18th and 19th centuries, the word <Highlight>method</Highlight> became widely used in various fields of knowledge, from mathematics and physics to the humanities. It began to refer not only to scientific methods but also to pedagogical, technical, and sociological approaches to problem-solving.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, a <Highlight>method</Highlight> is a way, technique, or set of techniques used to achieve a specific goal, solve a problem, or investigate a question. Depending on the context, a <Highlight>method</Highlight> can take different forms and have distinct characteristics, but at its core, it always involves a systematic approach to resolving an issue.
                </p>
                <p className="paragraph">
                    Methods are used in all areas of life, whether in science, education, technology, art, or social studies. They help organize and structure the process of acquiring knowledge or completing tasks, making them essential tools in any activity.
                </p>
            </Section>

            <Section title="Types of Methods">
                        <Highlight>Scientific Methods</Highlight> — systematic ways of investigation and knowledge acquisition used in science. Examples include:
                        <ul className="unordered_list ">
                            <li><Highlight>Experimental method</Highlight> — the testing of a hypothesis through experiments.</li>
                            <li><Highlight>Observation method</Highlight> — analyzing phenomena by studying them in their natural conditions.</li>
                            <li><Highlight>Mathematical modeling</Highlight> — using mathematical models to predict the behavior of systems.</li>
                        </ul>


                        <Highlight>Pedagogical Methods</Highlight> — methods of teaching and education used in the educational process. Examples include:
                        <ul className="unordered_list ">
                            <li><Highlight>Explanation method</Highlight> — conveying knowledge through a teacher's explanations.</li>
                            <li><Highlight>Demonstration method</Highlight> — using visual examples for teaching.</li>
                            <li><Highlight>Project method</Highlight> — actively involving students in project creation to acquire knowledge and skills.</li>
                        </ul>


                        <Highlight>Technical Methods</Highlight> — techniques and approaches used in technical disciplines to solve practical problems. Examples include:
                        <ul className="unordered_list">
                            <li><Highlight>Trial-and-error method</Highlight> — finding a solution through successive attempts and analyzing errors.</li>
                            <li><Highlight>Method of engineering analysis</Highlight> — systematically studying technical problems to find effective solutions.</li>
                        </ul>

                        <Highlight>Mathematical Methods</Highlight> — methods used to solve problems in mathematics. Examples include:
                        <ul className="unordered_list">
                            <li><Highlight>Inductive method</Highlight> — deriving general principles from particular cases.</li>
                            <li><Highlight>Method of elimination</Highlight> — systematically excluding incorrect options to find the correct solution.</li>
                            <li><Highlight>Substitution method</Highlight> — replacing variables to simplify solving systems of equations.</li>
                        </ul>

                        <Highlight>Sociological Methods</Highlight> — methods of data collection and analysis in social sciences. Examples include:
                        <ul className="unordered_list ">
                            <li><Highlight>Questionnaire method</Highlight> — collecting data through a survey of respondents using questionnaires.</li>
                            <li><Highlight>Sociological survey</Highlight> — a method of studying public opinion through mass surveys.</li>
                            <li><Highlight>Content analysis</Highlight> — a method of analyzing texts and messages based on their content and structure.</li>
                        </ul>
            </Section>

            <Section title="Examples of Using the Word 'Method'">
                <ul className="space-y-6">
                    <Base_card
                        title="Science"
                        description="The method of scientific experimentation allows us to test a hypothesis and either confirm or refute it."
                        icon="🔬"
                    />
                    <Base_card
                        title="Education"
                        description="The teacher uses the method of group work to develop communication skills among students."
                        icon="🎓"
                    />
                    <Base_card
                        title="Mathematics"
                        description="The substitution method in algebra helps solve systems of equations."
                        icon="📐"
                    />
                    <Base_card
                        title="Technology"
                        description="The method of modeling is used to create prototypes of complex systems."
                        icon="⚙️"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Method is a necessary means of attaining truth and building a system of knowledge."
                        annotation="René Descartes"
                    />
                    <Quote_with_annotation
                        quote="The scientific method is the constant pursuit of knowledge through experience and experimentation."
                        annotation="Albert Einstein"
                    />
                    <Quote_with_annotation
                        quote="Education is not a method, but a system of means aimed at the development of a person."
                        annotation="Leo Tolstoy"
                    />
                </div>
            </Section>

            <Section title="The Importance of Method">
                <p className="paragraph">
                    <Highlight>Method</Highlight> is a key element in any activity, whether it is science, art, education, or technology. It helps organize the process of problem-solving, achieve set goals, and systematize knowledge. Without methods, it would be impossible to effectively solve complex problems, conduct research, or develop various areas of knowledge.
                </p>
                <p className="paragraph">
                    In science, methods help researchers discover new patterns and test hypotheses. In education, teaching methods enable educators to effectively impart knowledge and develop students' skills. In technology, methods of analysis and design help engineers create complex systems and solve practical problems.
                </p>
                <p className="paragraph">
                    Regardless of the field of application, a method always implies a sequence of actions aimed at achieving a specific result. This makes it a universal tool for solving problems in various areas of life.
                </p>
            </Section>

            <Section title="Conclusion">
                <p className="paragraph">
                    Thus, the <Highlight>method</Highlight> is an essential element of any organized activity. It allows us to systematize knowledge, structure the process of inquiry or work, and achieve set goals. Throughout the development of humanity, methods have played an important role in scientific discoveries, educational processes, and technological progress, and their significance remains relevant in today's world.
                </p>
            </Section>
        </div>
    );
}