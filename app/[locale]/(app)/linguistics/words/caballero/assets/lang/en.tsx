import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import caballeroImage from "./../img/caballero.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Caballero() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Caballero: Etymology, History, and Modern Meaning</h1>

            <Section title="Etymology of the word 'caballero'">
                <p className="paragraph">
                    The word <Highlight>caballero</Highlight> came into the Russian language from Spanish. It has deep historical roots and is associated with the concepts of knighthood and nobility. Let's examine the etymology in more detail:
                </p>

                <p className="paragraph">
                    <Highlight>Spanish origin:</Highlight> In the Spanish language, the word <Highlight>caballero</Highlight> literally means "horseman" or "man on horseback." It derives from the word <Highlight>caballo</Highlight> — "horse" (from the Latin <Highlight>caballus</Highlight> — "work horse"). In medieval Spain, a man who could afford to keep a horse and participate in battles on horseback was considered an aristocrat or knight. Over time, the word <Highlight>caballero</Highlight> acquired a broader meaning, coming to signify not only a rider but also a person of noble birth, a knight, or a gentleman.
                </p>

                <p className="paragraph">
                    <Highlight>Latin root:</Highlight> The word <Highlight>caballo</Highlight> in Spanish comes from the Latin <Highlight>caballus</Highlight>, which meant "work horse" or "strong horse." This word was used to denote animals that played an important role in wars and agriculture. Thus, <Highlight>caballero</Highlight> literally meant "a man who manages a horse," which in medieval culture was a symbol of status and nobility.
                </p>

                <p className="paragraph">
                    <Highlight>Borrowing into Russian:</Highlight> In Russian, the word <Highlight>caballero</Highlight> retained its Spanish sound and came through literature, cinema, and cultural contacts. It is used as a synonym for "knight," "gentleman," or "nobleman," and is often associated with gallantry and politeness.
                </p>
            </Section>

            <Interactive_Image src={caballeroImage} alt={"Caballero"} width={500} height={500} />

            <Section title="Meaning of the word 'caballero'">
                <p className="paragraph">
                    <Highlight>Historical meaning:</Highlight> In the Middle Ages, <Highlight>caballero</Highlight> was a title that referred to a knight or noble warrior who fought on horseback. A <Highlight>caballero</Highlight> was a man who not only possessed combat skills but also adhered to a code of honor, which included loyalty, respect for women, the defense of the weak, and determination.
                </p>

                <p className="paragraph">
                    <Highlight>Modern meaning:</Highlight> Today, the word <Highlight>caballero</Highlight> is most often used to mean "gentleman" or "gallant man." It emphasizes polite, respectful, and noble behavior by a man, especially toward women.
                </p>

                <p className="paragraph">
                    <Highlight>Spanish-speaking countries:</Highlight> In Spanish-speaking countries, <Highlight>caballero</Highlight> is used as a polite form of address to a man, similar to the words "señor" or "sir." For example, in a store or restaurant, the address <Highlight>caballero</Highlight> is analogous to "sir" or "gentleman" in English.
                </p>
            </Section>

            <Section title="Examples of usage">
                <ul className="unordered_list">
                    <li>
                        <Highlight>In everyday speech:</Highlight> In Spanish-speaking countries, the word <Highlight>caballero</Highlight> is used for polite address to a man:
                        <br />
                        <i> "Disculpe, caballero, ¿puedo ayudarle?" — "Excuse me, sir, may I help you?"</i>
                    </li>
                    <li>
                        <Highlight>In the Russian language:</Highlight> In Russian, the word <Highlight>кабальеро</Highlight> is often used in the context of chivalrous or gallant behavior:
                        <br />
                        <i> "Он вёл себя как настоящий кабальеро, помог даме выйти из кареты." — "He behaved like a true caballero, helping the lady out of the carriage."</i>
                    </li>
                </ul>
            </Section>

            <Section title="Quotes about caballero and their meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A caballero is not the one who knows how to fight, but the one who knows what he fights for."
                        annotation="Meaning: True nobility lies not only in the ability to fight, but in understanding the purpose and justice of one's actions. A caballero always fights for the right cause."
                    />
                    <Quote_with_annotation
                        quote="Not every man is a caballero, but every caballero is a man."
                        annotation="Meaning: Being a caballero is not just about being a man, it means possessing certain qualities: nobility, honor, and respect for others."
                    />
                    <Quote_with_annotation
                        quote="A caballero doesn't need a sword if he has his word."
                        annotation="Meaning: True nobility lies in the power of words and persuasion, not in physical strength. A caballero can achieve more with respectful behavior and honesty."
                    />
                    <Quote_with_annotation
                        quote="A true caballero always helps those who are weaker than him."
                        annotation="Meaning: One of the main principles of a caballero is to protect those who need help, be it women, children, or weaker people."
                    />
                    <Quote_with_annotation
                        quote="A caballero is not a title, but a way of life."
                        annotation="Meaning: Being a caballero is about daily demonstrations of nobility and honor, not just a social status or rank."
                    />
                </div>
            </Section>

            <Section title="Caballero in culture">
                <ul className="space-y-6">
                    <Base_card
                        title="Literature"
                        description="In literature, the image of the caballero is often used to describe heroes who adhere to a code of honor, help the weak, and defend justice. For example, in classical Spanish literature, the caballero is often depicted as a romantic hero willing to do anything for the lady of his heart."
                        icon="📚"
                    />
                    <Base_card
                        title="Cinema"
                        description="In films and TV series, especially in Western and Latin American productions, the caballero is portrayed as an elegant and masculine character who respects women, protects the weak, and always follows his principles. Such characters are often seen in Westerns and historical films."
                        icon="🎥"
                    />
                </ul>
            </Section>
        </div>
    );
}