import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import dossierImage from "./../img/dossier.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Dossier() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Dossier: Etymology, History, and Modern Meaning</h1>

            <Section title="Etymology of the word 'Dossier'">
                <p className="paragraph">
                    The word <Highlight>dossier</Highlight> has French roots. It comes from the French word <Highlight>dossier</Highlight>, which literally means "folder with documents." The French word <Highlight>dossier</Highlight> is related to the root <Highlight>dos</Highlight> — "back." This is explained by the fact that notes for identifying the folder's contents were usually made on the "back" of the folder. This root goes back to the Latin word <Highlight>dorsum</Highlight>, which also means "back." Thus, the original meaning of the word is related to the idea of storing documents in a folder on which it is convenient to make notes.
                </p>
                <p className="paragraph">
                    The word entered the Russian language in the 19th–20th centuries when French was actively used in diplomacy, science, and culture. In Russian, the word <Highlight>dossier</Highlight> became established with the meaning of "a collection of documents" or "case," especially in the context of investigations and information gathering.
                </p>
            </Section>

            <Interactive_Image src={dossierImage} alt={"Dossier"} width={500} height={500} />

            <Section title="Historical Context">
                <p className="paragraph">
                    The word <Highlight>dossier</Highlight> gained widespread recognition, especially in the 20th century, in the context of the work of intelligence agencies such as the KGB, CIA, and other intelligence services. They created dossiers on suspects, politicians, and even ordinary citizens. During the Cold War, dossiers played a key role in intelligence operations and espionage, serving as tools of control and influence.
                </p>
            </Section>

            <Section title="The Meaning of Dossiers in the Modern World">
                <p className="paragraph">
                    In the digital age, <Highlight>dossiers</Highlight> have evolved from physical folders into virtual files. Today, dossiers are kept not only by law enforcement agencies or intelligence services but also in everyday life:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Personal Data</Highlight>: Social networks and internet companies collect information about users' preferences and activity, forming detailed "dossiers."
                    </li>
                    <li>
                        <Highlight>Corporate Dossiers</Highlight>: Companies gather data on customers for marketing analysis and to improve sales efficiency.
                    </li>
                    <li>
                        <Highlight>Government Dossiers</Highlight>: Governments accumulate databases with tax information, medical records, and citizens' biometrics.
                    </li>
                </ul>
                <p className="paragraph">
                    Thus, in the modern world, every person has a "dossier," collected by various structures for analysis and decision-making.
                </p>
            </Section>

            <Section title="Psychological Aspect of Dossiers">
                <p className="paragraph">
                    Dossiers can also be viewed in a psychological context. People often create "mental dossiers" on those around them: collecting facts, opinions, memories, and using this information to form their attitude towards others. This helps to build social connections, but it can also lead to bias, as a dossier compiled based on personal impressions may be incomplete or distorted.
                </p>
            </Section>

            <Section title="Philosophical Perspective on Dossiers">
                <p className="paragraph">
                    Philosophically, a <Highlight>dossier</Highlight> can be seen as a symbol of control and power. Michel Foucault, a French philosopher, argued that information is a form of power, through which people can be controlled. In this context, dossiers become tools of manipulation and control, especially in a world where information is a key resource.
                </p>
            </Section>

            <Section title="Dossiers in Literature and Cinema">
                <ul className="space-y-6">
                    <Base_card
                        title="1984 by George Orwell"
                        description="In this dystopia, the state keeps dossiers on every citizen, symbolizing total control and suppression of freedom."
                        icon="📚"
                    />
                    <Base_card
                        title="Spy Movies"
                        description="Dossiers are often a key plot element, revealing secret operations or compromising information."
                        icon="🎥"
                    />
                    <Base_card
                        title="Detective Stories"
                        description="In classic detective stories, dossiers on suspects help investigators solve crimes by connecting the facts into a single picture."
                        icon="🕵️‍♂️"
                    />
                </ul>
            </Section>

            <Section title="Quotes about Dossiers and their Meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A dossier is not a photograph of a person, but their shadow, reflecting only what fell under the spotlight."
                        annotation="Meaning: A dossier reflects only part of the information that was collected, and may be incomplete or biased."
                    />
                    <Quote_with_annotation
                        quote="A person can be forgiven for their mistakes, but those recorded in a dossier — never."
                        annotation="Meaning: Mistakes recorded in documents may have long-term consequences, even if they have been corrected in real life."
                    />
                    <Quote_with_annotation
                        quote="A dossier is a weapon that can be used both in defense and in attack."
                        annotation="Meaning: Information in a dossier can serve both for protection and for attack, if it falls into the right hands."
                    />
                    <Quote_with_annotation
                        quote="Collecting a dossier is the art of systematizing chaos."
                        annotation="Meaning: Creating a dossier is the process of organizing scattered information so that it becomes useful and understandable."
                    />
                    <Quote_with_annotation
                        quote="A dossier is not just documents, it’s human destinies enclosed in paper."
                        annotation="Meaning: Behind the documents lie real lives and stories that may have great significance for people."
                    />
                </div>
            </Section>

        </div>
    );
}