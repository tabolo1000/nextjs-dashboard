import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Highlight} from "@/app/ui/math/components/Highlight";
import movement from "@/app/[locale]/(app)/linguistics/words/movement/assets/img/movement.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Movement() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Move</h1>

            <Section title="Etymology of the Word 'Move'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight>
                    The word <Highlight>move</Highlight> comes from the Old Russian <Highlight>перемѣщати</Highlight>, composed of:
                </p>
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>"пере-"</Highlight> — a prefix indicating crossing or change of position.</li>
                    <li><Highlight>"место"</Highlight> — root meaning location or point in space.</li>
                </ul>
                <p className="paragraph">
                    Originally, it meant to transfer or relocate something from one place to another.
                </p>
            </Section>

            <Interactive_Image src={movement} alt={"movement"} width={500} height={500}/>


            <Section title="Morphological Elements">
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>Prefix "пере-"</Highlight> — signifies change or movement through something.</li>
                    <li><Highlight>Root "мест-"</Highlight> — related to the concept of place.</li>
                    <li><Highlight>Suffix "-я-"</Highlight> — indicates a verbal form expressing action or process.</li>
                    <li><Highlight>Ending "-ться"</Highlight> — reflexive marker indicating action directed at the subject.</li>
                </ul>
            </Section>

            <Section title="Historical Context">
                <p className="paragraph">
                    In Old Russian, <Highlight>перемещать</Highlight> was used to describe the physical relocation of objects.
                </p>
                <p className="paragraph">
                    Over time, it expanded to include both physical and abstract movements.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    Today, <Highlight>move</Highlight> refers to:
                </p>
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>Physical Movement</Highlight> — moving a person, animal, object, or vehicle from one place to another.</li>
                    <li><Highlight>Abstract Movement</Highlight> — transfer or change of state, position, information, or ideas.</li>
                </ul>
            </Section>

            <Section title="Examples of Usage">
                <ul className="space-y-6">
                    <Base_card
                        title="Physical Movement"
                        description="The airplane began to move along the runway before takeoff."
                        icon="✈️"
                    />
                    <Base_card
                        title="Migration"
                        description="Every autumn, birds start moving south in search of warmth."
                        icon="🐦"
                    />
                    <Base_card
                        title="Technology"
                        description="Files can easily be moved from one device to another via cloud services."
                        icon="💻"
                    />
                    <Base_card
                        title="Abstract Processes"
                        description="Thoughts started moving quickly in his head as he tried to find a solution."
                        icon="💭"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="It doesn't matter how fast you can move, it's important to know where you're going."
                        annotation="Jules Verne"
                    />
                    <Quote_with_annotation
                        quote="In the future, moving around the world will be faster than ever before."
                        annotation="Arthur Clarke"
                    />
                    <Quote_with_annotation
                        quote="A person who doesn't want to move forward will always stay behind."
                        annotation="Henry Ford"
                    />
                </div>
            </Section>

            <Section title="Importance of Movement">
                <p className="paragraph">
                    <Highlight>Move</Highlight> is a fundamental action related to spatial and temporal actions, as well as transferring information, ideas, and resources.
                </p>
            </Section>
        </div>
    );
}