import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import recitativeImage from "@/app/[locale]/(app)/linguistics/words/recitative/assets/img/recitative.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";

export default function Recitative() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Recitative</h1>

            <Section title="Etymology of the word 'Recitative'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>recitative</Highlight> entered the Russian language through the French <Highlight>récitatif</Highlight> and Italian <Highlight>recitativo</Highlight>, both derived from the Latin <Highlight>recitare</Highlight>, meaning "to read aloud," "to tell," or "to recite." The root <Highlight>recitare</Highlight> is composed of two parts: <Highlight>re-</Highlight> (repetition) and <Highlight>citare</Highlight> (to call, to summon). Thus, recitative can be literally translated as "repeated recitation," which reflects the essence of this musical-poetic genre.
                </p>
            </Section>

            <Interactive_Image src={recitativeImage} alt={"Recitative"} width={500} height={500} />

            <Section title="Definition of 'Recitative'">
                <p className="paragraph">
                    <Highlight>Recitative</Highlight> is a form of musical declamation that lies between singing and speaking. In a recitative, the melodic line is often minimal, and the rhythm and intonation resemble normal speech more than traditional singing. It is used to deliver text or dialogue in a more natural, conversational manner than an aria or choral composition.
                </p>
                <p className="paragraph">
                    In music, the recitative serves to quickly and clearly convey the plot, link musical numbers together, and prepare the listener for the more melodic and emotional parts of the piece.
                </p>
            </Section>

            <Section title="Types of Recitative">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Recitativo secco (dry recitative)</Highlight>: This is "dry" recitative, accompanied by minimal harmony, often just chords from a harpsichord or piano. It has little to no melody, and the primary focus is on the text. This type of recitative is used to convey large amounts of information, such as dialogue and narration.
                    </li>
                    <li>
                        <Highlight>Recitativo accompagnato (accompanied recitative)</Highlight>: Unlike secco, this recitative is accompanied by an orchestra, giving it a more emotional and expressive character. The orchestral accompaniment supports and highlights the intonations and emotional nuances of the text.
                    </li>
                    <li>
                        <Highlight>Recitative obbligato</Highlight>: A type of recitative where the orchestral accompaniment plays a more active and integrated role, not just supporting the vocal line.
                    </li>
                </ul>
            </Section>

            <Section title="Role of Recitative in Opera and Other Musical Genres">
                <p className="paragraph">
                    In classical opera, <Highlight>recitative</Highlight> is often used to advance the plot and convey dialogues between characters. Unlike arias, which express emotions and emphasize musical beauty, recitative focuses on the text and its content.
                </p>
                <p className="paragraph">
                    In Baroque and Classical operas, recitatives served as a bridge between arias, duets, and ensembles. For example, in Mozart's operas, recitatives were often used to explain events that happened between arias and to develop the dramatic action.
                </p>
                <p className="paragraph">
                    Recitatives are also found in oratorios, cantatas, and other vocal works.
                </p>
            </Section>

            <Section title="Examples of Recitative Usage">
                <ul className="space-y-6">
                    <Base_card
                        title="In Operas"
                        description="For example, in Mozart's operas such as 'Don Giovanni' and 'The Marriage of Figaro,' recitatives are used for the dialogues between characters, advancing the plot. Most often, secco recitatives are performed with minimal instrumental accompaniment."
                        icon="🎭"
                    />
                    <Base_card
                        title="In Oratorios"
                        description="In Handel's oratorio 'Messiah,' recitatives play an important role in the narrative. For instance, the recitatives at the beginning of the oratorio deliver the biblical story with minimal musical accompaniment, allowing the text to take center stage."
                        icon="🎶"
                    />
                    <Base_card
                        title="In Bach's Cantatas"
                        description="In J.S. Bach's cantatas, recitatives serve as narrative elements that help develop the plot and prepare for the arias, which express deeper thoughts and emotions."
                        icon="🎻"
                    />
                </ul>
            </Section>

            <Section title="Recitative in Modern Music">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Rap</Highlight>: In rap, recitative plays a key role, as the performer speaks or rhythmically declaims the text rather than singing. In this genre, the emphasis is on rhythm, intonation, and the content of the text, making it a modern counterpart to classical recitative.
                    </li>
                    <li>
                        <Highlight>Musical Theater and Musicals</Highlight>: In musicals, elements of recitative are often used, especially in dialogues between characters, where speech flows into singing and vice versa.
                    </li>
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Recitative is the dialogue between music and speech on stage."
                        annotation="Unknown author — on the role of recitative in art"
                    />
                    <Quote_with_annotation
                        quote="In recitative, not only the text is important, but also its rhythmic delivery."
                        annotation="Modern musicologists — on the connection between rap and recitative"
                    />
                    <Quote_with_annotation
                        quote="Recitative is a way to tell a story through the voice, but without melodic complexity."
                        annotation="Opera directors — on the importance of recitative in opera"
                    />
                </div>
            </Section>

            <Section title="Conclusion">
                <p className="paragraph">
                    In the modern world, <Highlight>recitative</Highlight> continues to find its place not only in classical music but also in contemporary genres like rap and musicals. This genre, positioned between speech and music, remains an essential tool for conveying text, emotion, and dramatic action.
                </p>
            </Section>
        </div>
    );
}