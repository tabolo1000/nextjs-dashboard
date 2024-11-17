import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import kompromatImage from "./../img/kompromat.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Kompromat() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Kompromat: Etymology, History, and Modern Meaning</h1>

            <Section title="Etymology of the word 'kompromat'">
                <p className="paragraph">
                    The word <Highlight>kompromat</Highlight> is an abbreviation of the phrase "compromising material" (компрометирующий материал). It was formed in the Russian language in the 20th century, primarily in the context of political struggle and covert activities. Let’s explore the origin of this word in more detail:
                </p>

                <p className="paragraph">
                    <Highlight>Compromise:</Highlight> The word <Highlight>comprometировать</Highlight> (to compromise) comes from the French <Highlight>compromettre</Highlight>, which in turn derives from the Latin <Highlight>compromittere</Highlight>, meaning "to put in question, to expose to risk." In Russian, the verb <Highlight>компрометировать</Highlight> means "to undermine reputation" or "to put in an awkward position."
                </p>

                <p className="paragraph">
                    <Highlight>Material:</Highlight> The second part of the word — <Highlight>мат</Highlight> (abbreviated from "material") — refers to information or data that can compromise someone. Thus, <Highlight>kompromat</Highlight> is not just rumors or accusations, but concrete materials, documents, recordings, photographs, or other evidence that can be used to undermine the reputation of a person or organization.
                </p>
            </Section>

            <Interactive_Image src={kompromatImage} alt={"Kompromat"} width={500} height={500} />

            <Section title="Meaning of the word 'kompromat'">
                <p className="paragraph">
                    <Highlight>Kompromat</Highlight> refers to material containing information that can damage the reputation of a person or organization. Compromising information can include both truthful facts and distorted or fabricated data. <Highlight>Kompromat</Highlight> is often used in political and business struggles, as well as in journalism and law enforcement.
                </p>

                <ul className="unordered_list">
                    <li>Financial documents indicating illegal activities.</li>
                    <li>Photographs or videos casting doubt on someone’s moral or ethical qualities.</li>
                    <li>Correspondence discussing illegal deals or personally compromising actions.</li>
                    <li>Witness statements undermining public trust.</li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    The history of using <Highlight>kompromat</Highlight> is closely related to political and judicial processes. In Soviet times, <Highlight>kompromat</Highlight> was actively used by intelligence services such as the KGB to control the political elite and public figures. Gathering compromising materials was one of the methods of manipulation and pressure on people, allowing the authorities to keep them in check.
                </p>

                <p className="paragraph">
                    In the post-Soviet period, <Highlight>kompromat</Highlight> was often used in political battles and influenced elections, public opinion, and business relationships. In modern Russia and other countries, <Highlight>kompromat</Highlight> remains a powerful tool of influence and manipulation.
                </p>
            </Section>

            <Section title="Examples of Kompromat Usage">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Political Struggle:</Highlight> Politicians may gather compromising information about their opponents to undermine their reputation before elections. For example, a leak of information regarding corruption schemes or personal life can seriously damage a political career.
                    </li>
                    <li>
                        <Highlight>Business Conflicts:</Highlight> In the corporate world, <Highlight>kompromat</Highlight> can be used to pressure competitors or unscrupulous partners. For example, publishing information about illegal financial operations or legal violations can ruin a company’s reputation.
                    </li>
                    <li>
                        <Highlight>Journalistic Investigations:</Highlight> Journalists often collect compromising information as part of their investigations. This can concern both politicians and public figures whose actions may be illegal or immoral.
                    </li>
                </ul>
            </Section>

            <Section title="Quotes about Kompromat and Their Meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Kompromat is a weapon that can always be used, but it’s not always safe to hold."
                        annotation="Meaning: Compromising information can be a powerful tool of influence, but it can also be dangerous for the one who possesses it. A leak or careless use of kompromat can lead to unpredictable consequences."
                    />
                    <Quote_with_annotation
                        quote="Kompromat is the currency of political life, exchanged for power, not money."
                        annotation="Meaning: In political struggle, kompromat can be more valuable than money, as it allows for the manipulation of public opinion and the influencing of political decisions."
                    />
                    <Quote_with_annotation
                        quote="In the world of kompromat, truth doesn’t matter; only the power of the information’s impact does."
                        annotation="Meaning: It’s not the truthfulness of the information that’s important, but the effect it can have on the reputation of a person or organization."
                    />
                    <Quote_with_annotation
                        quote="Kompromat is like poison: you can’t use it in small doses without consequences."
                        annotation="Meaning: Using kompromat always has consequences, and even a small leak of information can cause devastating results."
                    />
                    <Quote_with_annotation
                        quote="Kompromat is a time bomb that explodes when it’s most convenient for its owner."
                        annotation="Meaning: Compromising information can be held until the right moment to inflict maximum damage at the most opportune time."
                    />
                </div>
            </Section>

            <Section title="Kompromat in Culture">
                <ul className="space-y-6">
                    <Base_card
                        title="Spy Novels"
                        description="In works about espionage and intelligence, kompromat is often used as a primary tool to pressure heroes or villains. Intelligence agencies gather information that can destroy careers or lives."
                        icon="📚"
                    />
                    <Base_card
                        title="Political Thrillers"
                        description="In films and books about political intrigue, kompromat is used to create dramatic tension. The protagonists find themselves in situations where their past or personal life becomes the subject of manipulation."
                        icon="🎥"
                    />
                    <Base_card
                        title="Biographical Films and Documentaries"
                        description="In real-life stories, kompromat can play a decisive role in revealing the secrets of famous personalities or corruption schemes within the government."
                        icon="🎬"
                    />
                </ul>
            </Section>

            <Section title="Modern Forms of Kompromat">
                <p className="paragraph">
                    In the digital age, <Highlight>kompromat</Highlight> has taken on new forms. Now, compromising information can be collected through:
                </p>

                <ul className="unordered_list">
                    <li>
                        <Highlight>Hacker attacks:</Highlight> Hacking into email accounts or data leaks from personal accounts can provide access to personal correspondence, financial documents, or other important materials.
                    </li>
                    <li>
                        <Highlight>Social media:</Highlight> Personal information, photos, or videos posted on social media can be used as <Highlight>kompromat</Highlight>. Even seemingly harmless posts can be taken out of context and presented as compromising.
                    </li>
                    <li>
                        <Highlight>Secret recordings:</Highlight> Scandals involving secret video or audio recordings often surface in the media and can seriously damage someone’s reputation.
                    </li>
                </ul>
            </Section>
        </div>
    );
}