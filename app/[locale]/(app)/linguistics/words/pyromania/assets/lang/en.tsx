import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import pyromaniaImage from "./../img/pyromania.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Pyromania() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Pyromaniac</h1>

            <Section title="Etymology of the word 'pyromaniac'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>pyromaniac</Highlight> comes from two Greek roots:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>"pyro-"</Highlight> (from Greek πῦρ, pyr) — means "fire".</li>
                    <li><Highlight>"-maniac"</Highlight> (female form from "man" — from Greek μανία, mania) — means "madness", "passion", or "obsession".</li>
                </ul>
                <p className="paragraph">
                    Thus, a <Highlight>pyromaniac</Highlight> is a woman obsessed with fire or arson.
                </p>
            </Section>

            <Interactive_Image src={pyromaniaImage} alt={"Pyromaniac"} width={500} height={500} />

            <Section title="Definition">
                <p className="paragraph">
                    A <Highlight>pyromaniac</Highlight> is a woman suffering from a pathological attraction to fire and arson. Pyromania (in a more general sense) is a mental disorder in which a person feels an uncontrollable desire to watch fire or set fires. A pyromaniac may feel satisfaction or relief from watching fire or the results of their actions.
                </p>
                <p className="paragraph">
                    Pyromania, regardless of gender, is a rare mental disorder and is classified as an impulse-control disorder, in which a person cannot regulate their actions.
                </p>
            </Section>

            <Section title="Characteristics of Pyromania">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Compulsive desire to set fires</Highlight>: A pyromaniac may feel a strong inner urge to set fires, even if they know it is dangerous or illegal.
                    </li>
                    <li>
                        <Highlight>Pleasure from watching fire</Highlight>: Such individuals may experience feelings of satisfaction, relief, or excitement from the sight of fire, a blaze, or the destruction caused by fire.
                    </li>
                    <li>
                        <Highlight>No material gain</Highlight>: Unlike arsonists, whose actions may be motivated by financial gain (e.g., insurance fraud), pyromaniacs set fires not for profit but for emotional release.
                    </li>
                    <li>
                        <Highlight>Lack of awareness of the danger</Highlight>: Pyromaniacs may not fully realize the destructive consequences of their actions, making their behavior extremely dangerous to others.
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Use">
                <ul className="space-y-6">
                    <Base_card
                        title="Literature"
                        description="Pyromaniac characters may appear as antagonists or individuals with mental disorders, adding drama to the plot. For example, in films or books, such characters are often portrayed as emotionally unstable individuals obsessed with fire."
                        icon="📚"
                    />
                    <Base_card
                        title="Psychiatry"
                        description="In psychological practice, pyromania is considered a disorder that requires therapy and treatment, as pyromaniacs can pose a danger to society."
                        icon="🧠"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="For a pyromaniac, fire is not just an element, but an obsession that lives in her mind."
                        annotation="For a pyromaniac, fire symbolizes something more than just a force of nature — it is the source of her passion and attraction."
                    />

                    <Quote_with_annotation
                        quote="The pyromaniac does not seek destruction; she seeks her freedom in the fire."
                        annotation="Pyromania may be linked to an internal struggle — fire becomes a symbol of liberation from emotional or psychological problems."
                    />

                    <Quote_with_annotation
                        quote="Only in the flames does the pyromaniac find her true strength, though it devours her from within."
                        annotation="Fire symbolizes not only external destruction but also internal turmoil — the pyromaniac experiences emotional release, but it also destroys her."
                    />

                    <Quote_with_annotation
                        quote="For a pyromaniac, fire is a dance where she always leads."
                        annotation="Fire becomes a means of control and expression for the pyromaniac; she feels power over it."
                    />

                    <Quote_with_annotation
                        quote="The pyromaniac does not wait for the fire to end; she is only interested in the moment when the fire is born."
                        annotation="A pyromaniac focuses on the act of starting the fire itself, deriving pleasure from creating it, not from its consequences."
                    />
                </div>
            </Section>

            <Section title="Treatment of Pyromania">
                <p className="paragraph">
                    Pyromania, like other impulse-control disorders, requires a comprehensive approach to treatment, which may include:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Psychotherapy</Highlight>: Behavioral therapy helps individuals learn to control their impulses and find other ways to cope with internal tensions and emotions.</li>
                    <li><Highlight>Medication</Highlight>: In some cases, medications may be used to help control impulses and reduce anxiety.</li>
                </ul>
            </Section>

            <Section title="Conclusion">
                <p className="paragraph">
                    A <Highlight>pyromaniac</Highlight> is a woman suffering from pyromania, a disorder in which a person feels an uncontrollable urge to start fires. This is a serious mental condition that requires treatment and control, as it can pose a threat to the lives and property of others.
                </p>
            </Section>
        </div>
    );
}