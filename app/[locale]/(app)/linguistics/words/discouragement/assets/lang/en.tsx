import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import discouragement from "./../img/discouragement.jpeg";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Discouragement() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Discouraged
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>discouraged</Highlight> comes from the French word {" "}
                    <Highlight>courage</Highlight>, which means "courage" or "bravery." The prefix {" "}
                    <Highlight>dis-</Highlight> and the suffix <Highlight>-ed</Highlight> form a word
                    that indicates the result of an action leading to the loss of courage or determination.
                    Thus, <Highlight>discouraged</Highlight> literally means "deprived of courage" or
                    "deprived of confidence."
                </p>
            </Section>

            <Interactive_Image src={discouragement} alt={"Обескураженный"} width={500} height={500}/>


            {/* Morphological Analysis */}
            <Section title="Morphological Analysis">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Dis-</Highlight> — a prefix indicating the loss or deprivation of something.
                    </li>
                    <li>
                        <Highlight>-courage-</Highlight> — the root, related to the concept of courage or bravery.
                    </li>
                    <li>
                        <Highlight>-ed</Highlight> — a suffix forming a past participle.
                    </li>
                </ul>
            </Section>

            {/* Definition */}
            <Section title="Definition">
                <p className="paragraph">
                    <Highlight>Discouraged</Highlight> is the state of a person who finds themselves in a difficult situation and does not know how to act further. It is a feeling of confusion when a person loses confidence in their abilities, plans, or actions.
                </p>
            </Section>

            {/* Synonyms */}
            <Section title="Synonyms">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Confused</Highlight></li>
                    <li><Highlight>Puzzled</Highlight></li>
                    <li><Highlight>Shocked</Highlight></li>
                    <li><Highlight>Disheartened</Highlight></li>
                    <li><Highlight>Dejected</Highlight></li>
                </ul>
            </Section>

            {/* Examples of Usage */}
            <Section title="Examples of Usage">
                <ul className="space-y-6">
                    <Base_card
                        title="In Everyday Life"
                        description="When I saw the exam results, I was absolutely discouraged — I didn’t expect such a failure."
                        icon="📚"
                    />
                    <Base_card
                        title="In Professional Settings"
                        description="After the sudden layoffs, the employees were discouraged and didn’t know how to react to the new situation."
                        icon="💼"
                    />
                    <Base_card
                        title="In Personal Relationships"
                        description="She was discouraged by his sudden decision to end the relationship without explanation."
                        icon="💔"
                    />
                    <Base_card
                        title="In Sports"
                        description="The team was discouraged after conceding a goal in the last minutes of the match."
                        icon="⚽"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A discouraged person is someone who has lost their direction, but not yet their ability to find new ones."
                        annotation="This quote highlights that discouragement is a temporary state, and a person always has a chance to find new solutions."
                    />
                    <Quote_with_annotation
                        quote="When you're discouraged, the key is not to give up, but to seek new paths."
                        annotation="This quote reminds us of the importance of continuing to move forward, even when circumstances seem difficult."
                    />
                </div>
            </Section>

            {/* Causes of Discouragement */}
            <Section title="Causes of Discouragement">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Unexpected events</Highlight> — sudden changes or unexpected news can cause discouragement when a person is unprepared for the changes.</li>
                    <li><Highlight>Failures and setbacks</Highlight> — after serious mistakes or failures, a person may lose confidence in their abilities.</li>
                    <li><Highlight>Complex decisions</Highlight> — when faced with a difficult choice, a person may feel discouraged due to the fear of making the wrong decision.</li>
                    <li><Highlight>Lack of support</Highlight> — insufficient support from loved ones or colleagues can make a person lose confidence in their actions.</li>
                </ul>
            </Section>

            {/* How to Cope with Discouragement */}
            <Section title="How to Cope with Discouragement">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><Highlight>Acceptance of the situation</Highlight> — it is important to recognize that discouragement is a natural reaction to difficult circumstances.</li>
                    <li><Highlight>Planning the next steps</Highlight> — even when the situation seems hopeless, attempting to develop a plan of action can restore confidence.</li>
                    <li><Highlight>Feedback</Highlight> — seeking advice or support from others can help overcome feelings of confusion.</li>
                    <li><Highlight>Rest and reset</Highlight> — sometimes a short break or distraction with other tasks can help look at the problem from a new perspective.</li>
                </ul>
            </Section>
        </div>
    );
}