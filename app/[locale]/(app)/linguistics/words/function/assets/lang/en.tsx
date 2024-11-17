import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Function() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Function</h1>

            <Section title="Etymology of the Word 'Function'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>function</Highlight> entered the Russian language from the Latin <Highlight>functio</Highlight>, which means *execution*, *performance*, or *action*. The Latin <Highlight>functio</Highlight> derives from the verb <Highlight>fungor</Highlight>, which translates as *to perform* or *to execute duties*.
                </p>
                <p className="paragraph">
                    In Latin, the word <Highlight>functio</Highlight> was used to describe the duty or role performed by a person or object. Over time, the term gained broader significance and began to be applied in various fields to describe actions or tasks performed by a subject, object, or process.
                </p>
            </Section>

            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Root "функ-"</Highlight> — comes from the Latin <Highlight>fungor</Highlight>, meaning *to perform* or *to execute*.
                    </li>
                    <li>
                        <Highlight>Suffix "-ция"</Highlight> — typical for nouns of Latin origin, indicates a process or result of action (e.g., *information*, *instruction*).
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In Latin, the word <Highlight>function</Highlight> was used to denote the action or duties performed by a person in a specific role. Over time, this word started being used in philosophy, mathematics, science, and other disciplines to describe the role played by a particular part of a system or process.
                </p>
                <p className="paragraph">
                    In the 18th century, with the development of mathematics and other sciences, the word <Highlight>function</Highlight> began to be actively used to describe the dependence of one variable on another. Later, it became common in both scientific and technical terminology to describe any processes performing specific tasks.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, the word <Highlight>function</Highlight> has several meanings depending on the context:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Mathematical function</Highlight> — a dependence of one parameter (variable) on another. Example: the equation \( f(x) = x^2 \), where \( f(x) \) is a function of the variable \( x \).
                    </li>
                    <li>
                        <Highlight>Function in programming</Highlight> — a block of code that performs a specific task and can be called in a program. Example: a function for calculating the sum of two numbers.
                    </li>
                    <li>
                        <Highlight>Function in biology</Highlight> — the role or task performed by an organ or system in an organism. Example: the function of the heart is to pump blood.
                    </li>
                    <li>
                        <Highlight>Function in social science</Highlight> — the role played by an individual or institution in society. Example: the function of the family is to raise and socialize children.
                    </li>
                    <li>
                        <Highlight>Function in engineering</Highlight> — the task or action performed by a device or its part. Example: the function of an engine is to convert fuel into energy.
                    </li>
                </ul>
            </Section>

            <Section title="Types of Functions">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Mathematical Functions</Highlight> — In mathematics, a function is a rule or law that links one or more values (arguments) to a result. Examples:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Linear function</Highlight>: \( y = mx + b \)</li>
                            <li><Highlight>Quadratic function</Highlight>: \( y = ax^2 + bx + c \)</li>
                            <li><Highlight>Trigonometric function</Highlight>: \( f(x) = \sin(x) \)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Software Functions</Highlight> — In programming, a function is a block of code that performs a specific task and can be called multiple times. Example:
                        <pre className="code_block">
              {`def add(a, b):\n    return a + b`}
            </pre>
                        Here, the function *add* takes two arguments and returns their sum.
                    </li>
                    <li>
                        <Highlight>Biological Functions</Highlight> — In biology, a function describes the role of an organ or system in the body. Examples:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Lung function</Highlight>: supplying the body with oxygen</li>
                            <li><Highlight>Liver function</Highlight>: filtering blood and detoxification</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Sociological Functions</Highlight> — In social science, a function is the role played by an individual, group, or institution in society. Examples:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Function of education</Highlight>: transmitting knowledge and skills</li>
                            <li><Highlight>Function of government</Highlight>: maintaining order and enforcing laws</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Technical Functions</Highlight> — In engineering and technology, a function describes the task performed by a device or its part. Examples:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Function of a car's braking system</Highlight>: reducing speed or stopping the vehicle</li>
                            <li><Highlight>Function of a microprocessor</Highlight>: performing computational operations</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Using the Word 'Function'">
                <ul className="space-y-6">
                    <Base_card
                        title="Mathematics"
                        description="The function \( f(x) = x^2 \) describes a quadratic relationship between \( x \) and \( f(x) \)."
                        icon="📐"
                    />
                    <Base_card
                        title="Programming"
                        description="The data validation function returns true if the data is valid."
                        icon="💻"
                    />
                    <Base_card
                        title="Biology"
                        description="The function of the kidneys is to filter blood and remove excess fluid from the body."
                        icon="🧬"
                    />
                    <Base_card
                        title="Sociology"
                        description="The function of the police is to maintain order and protect citizens."
                        icon="👮‍♂️"
                    />
                    <Base_card
                        title="Engineering"
                        description="The main function of an air conditioner is to maintain a comfortable temperature in a room."
                        icon="🏭"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Mathematics is the language in which the functions of nature are expressed through numbers and equations."
                        annotation="Blaise Pascal - Pascal emphasizes the importance of mathematical functions in describing the laws of nature"
                    />
                    <Quote_with_annotation
                        quote="The functionality of a product should always come first; design follows function."
                        annotation="Steve Jobs - Jobs says that the external form of a device should always come from its primary task or function."
                    />
                    <Quote_with_annotation
                        quote="Every function in nature has its purpose, even if it's not immediately clear to us."
                        annotation="Richard Feynman - Feynman emphasizes the importance of understanding functions in natural processes."
                    />
                </div>
            </Section>

            <Section title="The Importance of Functions">
                <p className="paragraph">
                    A <Highlight>function</Highlight> is a universal concept that describes the action, role, or task performed by an object or process in a system. The concept of a function is applicable to mathematical expressions, biological organs, software modules, or social institutions. In each case, the function reflects the essence of interactions within the system or between its elements.
                </p>
            </Section>

            <Section title="Classification of Functions">
                <ul className="unordered_list">
                    <li>
                        <Highlight>By area of application</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Mathematical</li>
                            <li>Biological</li>
                            <li>Technical</li>
                            <li>Social</li>
                            <li>Software</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>By type of dependence</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Univariate (depends on one variable)</li>
                            <li>Multivariate (depends on multiple variables)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>By nature of execution</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Main functions (perform the system's primary task)</li>
                            <li>Auxiliary functions (support the main tasks)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>By type of result</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Returning a result (e.g., a mathematical function)</li>
                            <li>Not returning a result (e.g., a procedure in programming)</li>
                        </ul>
                    </li>
                </ul>
            </Section>
        </div>
    );
}