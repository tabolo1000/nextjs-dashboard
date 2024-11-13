import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Audio_Navigate } from "@/app/ui/math/components/Audio_Navigate";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import { Highlight } from "@/app/ui/math/components/Highlight";

export default async function Rampage() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Etymology of the word "Rampage"</h1>

            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>rampage</Highlight> comes from the root{" "}
                    <strong>chin</strong>, denoting order or service, and the prefix{" "}
                    <strong>bes-</strong>, which indicates the negation or absence of
                    something. Thus, to go on a <Highlight>rampage</Highlight> literally
                    means to act without order, to violate the established order.
                </p>
            </Section>

            <Section title="Morphemic Parsing" parity>
                <ul className="unordered_list">
                    <li>
                        <strong>Prefix "bes-"</strong> — Negation, indicates the absence of
                        order or something positive.
                    </li>
                    <li>
                        <strong>Root "chin"</strong> — Associated with the concept of order,
                        organization, or position.
                    </li>
                    <li>
                        <strong>Suffix "-stva"</strong> — Indicates an action in progress.
                    </li>
                    <li>
                        <strong>Ending "-t"</strong> — Indicates the verb form.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context" parity>
                <p className="paragraph">
                    The word <Highlight>rampage</Highlight> indicates a disturbance of
                    public or social order. In ancient and medieval times,{" "}
                    <Highlight>chin</Highlight> was associated with an established
                    hierarchy, official duties, and order in society. Those who violated
                    this order could be called <Highlight>disorderly</Highlight> because
                    their actions went against the law, tradition, or established rules.
                </p>
                <p className="paragraph">
                    Historically, rioting has often accompanied periods of social unrest
                    or political turmoil. At such times, people, feeling free from the
                    control of the authorities, could start to disrupt public order,
                    engage in pogroms, destruction, and other acts of vandalism. In
                    literature and historical chronicles, the word{" "}
                    <Highlight>riot</Highlight> was often used to describe such
                    situations.
                </p>
            </Section>

            <Section title="Modern Meaning">
                <p className="paragraph">
                    In modern parlance, to <Highlight>go on a rampage</Highlight> means to
                    commit disorderly, hooligan, or vandalistic acts. It indicates a
                    violation of established norms and rules, both social and legal. Most
                    often, the word is used in the context of riots, street hooliganism,
                    or vandalism, where people's actions go beyond the limits of what is
                    allowed and lead to chaos and destruction.
                </p>
            </Section>

            <Section title="Interesting Fact" parity>
                <p className="paragraph">
                    The word <Highlight>rampage</Highlight> has a close connection with
                    the concept of <Highlight>chin</Highlight>, which is still used today
                    in the meaning of position, status, or order. Interestingly, in
                    Russian, the word <Highlight>official</Highlight> refers to a person
                    who holds a certain position in the civil service, which is also
                    associated with the concept of order and organization. Thus, to{" "}
                    <Highlight>go on a rampage</Highlight> is the exact opposite behavior,
                    where established laws and norms are violated.
                </p>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Where disorderliness reigns, chaos rules."
                        annotation="This quote emphasizes that disorderliness leads to the disruption of order and the establishment of chaos."
                    />
                    <Quote_with_annotation
                        quote="To be disorderly is to ignore not only the law, but also the moral standards that keep society from destruction."
                        annotation="The quote suggests that rioting destroys not only the legal but also the moral foundations of society."
                    />
                    <Quote_with_annotation
                        quote="When a mob goes on a rampage, reason and order recede before the power of destruction."
                        annotation="This quote emphasizes the danger of riots when emotion and aggression overwhelm common sense."
                    />
                    <Quote_with_annotation
                        quote="Rioting always occurs where the power of law is weakened."
                        annotation="The importance of strong legal rules to prevent riots is emphasized here."
                    />
                    <Quote_with_annotation
                        quote="People riot when they feel impunity."
                        annotation="The quote indicates that disorderly conduct is more likely to occur where the perpetrators are not afraid of the consequences."
                    />
                </div>
            </Section>

            <Section title="Examples of Uses of the Word 'Rampage'">
                <ul className="space-y-6">
                    <Base_card
                        title="Mass Riots"
                        description="The crowd started rioting after the rally - the rally participants turned disorderly and disruptive."
                        icon="🚨"
                    />
                    <Base_card
                        title="Breaking the Law"
                        description="To riot is to disrespect the law and societal norms - rioting goes against the legal and moral norms of society."
                        icon="⚖️"
                    />
                    <Base_card
                        title="Teenage Hooliganism"
                        description="Teenagers were disorderly on the streets of the city - teenagers behaved rudely and violated public order."
                        icon="👟"
                    />
                    <Base_card
                        title="Vandalism"
                        description="Vandals went on a rampage destroying monuments - hooligans engaged in destroying public or cultural objects."
                        icon="🛠️"
                    />
                    <Base_card
                        title="Disorderly Conduct"
                        description="Rioting in public places is gross disorderly conduct - in public places, such actions are considered a particularly serious offense."
                        icon="🏛️"
                    />
                    <Base_card
                        title="Rioting During Rallies"
                        description="During the riots, people went on a rampage, setting cars on fire - disorderly conduct led to arson and destruction."
                        icon="🔥"
                    />
                    <Base_card
                        title="Disturbing the Peace"
                        description="They went on a rampage all night, keeping neighbors awake - the rowdy behavior disturbed the peace of others."
                        icon="😴"
                    />
                    <Base_card
                        title="Theft"
                        description="Thieves rampaged through the house, throwing things everywhere - the thieves behaved chaotically, not only stealing but also destroying the order of the house."
                        icon="🏚️"
                    />
                    <Base_card
                        title="Rioting for Fun"
                        description="Rioting for fun is disrespectful to others - actions done for fun violate the rights and peace of others."
                        icon="🎉"
                    />
                    <Base_card
                        title="Mass Rioting"
                        description="An angry mob rampaged in the square - the crowd behaved aggressively and destructively in a public place."
                        icon="👥"
                    />
                </ul>
            </Section>

            <Audio_Navigate
                path={"/words/rampage/rampage.record"}
                to={{
                    nextTask: "./cohort",
                    nextExercise: "",
                }}
            />
        </div>
    );
}