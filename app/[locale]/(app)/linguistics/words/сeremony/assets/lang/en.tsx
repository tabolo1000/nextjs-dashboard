import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import ceremonyImage from "./../img/ceremony.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Ceremony() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Ceremony: Etymology, Meaning, and Examples</h1>

            <Section title="Etymology of the word 'ceremony'">
                <p className="paragraph">
                    The word <Highlight>ceremony</Highlight> entered the Russian language through Latin. Let’s explore its etymology:
                </p>
                <p className="paragraph">
                    <Highlight>Latin origin:</Highlight> The Latin word <Highlight>caerimonia</Highlight> meant "religious rite," "sacred act," or "observance of traditions." It was used to describe rituals related to worshiping gods or performing sacred rites.
                </p>
                <p className="paragraph">
                    <Highlight>French and ecclesiastical borrowing:</Highlight> In the Middle Ages, the word <Highlight>ceremonia</Highlight> transitioned into Old French as <Highlight>cérémonie</Highlight>, from where it was later borrowed into Russian as "церемония" (ceremony). In Russian, the word began to be used not only for religious rites but also for secular rituals and formalities.
                </p>
            </Section>

            <Interactive_Image src={ceremonyImage} alt={"Ceremony"} width={500} height={500} />

            <Section title="Meaning of the word 'ceremony'">
                <p className="paragraph">
                    <Highlight>Ceremony</Highlight> is a formal, solemn event conducted according to pre-established rules or traditions. Ceremonies can be both religious and secular, and they are often accompanied by symbolic actions and rituals.
                </p>
                <p className="paragraph">
                    Ceremonies play an important role in various aspects of life, from personal events (weddings, funerals) to state and public events (inaugurations, awards). They emphasize the importance of the moment and often include elements designed to show respect, honor, or formalize an event.
                </p>
            </Section>

            <Section title="Types of Ceremonies">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Religious Ceremonies:</Highlight> These include rituals such as baptisms, weddings, funerals, as well as the celebration of religious holidays. These ceremonies often symbolize a connection with the divine and are an important part of spiritual life.
                    </li>
                    <li>
                        <Highlight>Secular Ceremonies:</Highlight> These are state and official events, such as presidential inaugurations, award ceremonies, unveiling of monuments, weddings, and other events that are not related to religion but hold significant public importance.
                    </li>
                    <li>
                        <Highlight>Military Ceremonies:</Highlight> These include parades, military awards, changing of the guard, and other formal actions associated with military service and traditions.
                    </li>
                    <li>
                        <Highlight>Cultural and Public Ceremonies:</Highlight> These can include festival openings, award ceremonies (such as the Oscars or Nobel Prize), and other cultural events accompanied by official rituals.
                    </li>
                </ul>
            </Section>

            <Section title="Examples of Ceremonies">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Wedding Ceremony:</Highlight> A formal event during which two people enter into marriage. In different cultures, wedding ceremonies can vary greatly, but the common element is the exchange of vows or symbols (such as rings).
                    </li>
                    <li>
                        <Highlight>Inauguration Ceremony:</Highlight> A formal event marking the assumption of office by a head of state or other high-ranking official. It is usually accompanied by speeches, oaths, and symbolic actions confirming the beginning of authority.
                    </li>
                    <li>
                        <Highlight>Award Ceremony:</Highlight> During such ceremonies, people who have achieved high results in a particular field (such as art, science, sports) are honored. An example would be the Nobel Prize or Oscar award ceremonies.
                    </li>
                </ul>
            </Section>

            <Section title="Ceremony in Culture">
                <ul className="space-y-6">
                    <Base_card
                        title="Ceremonies in Literature"
                        description="In literary works, ceremonies often serve as symbolic elements, showing the importance of certain events. For instance, in classic novels, weddings, funerals, or coronations often become the climactic moments of the plot."
                        icon="📚"
                    />
                    <Base_card
                        title="Ceremonies in Film"
                        description="In film, ceremonies can serve as important parts of the narrative, symbolizing transitions, changes in the characters' lives, or significant public events."
                        icon="🎥"
                    />
                    <Base_card
                        title="Ceremonies in Art"
                        description="In visual art, ceremonies are often depicted as a way to express grandeur, traditions, or the importance of public and religious events."
                        icon="🎨"
                    />
                </ul>
            </Section>


            <Section title="Quotes about Ceremonies and their Meaning">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A ceremony is a way to show respect for traditions and people."
                        annotation="Meaning: Ceremonies help preserve and pass on traditions, as well as show respect for important events and participants."
                    />
                    <Quote_with_annotation
                        quote="The meaning of a ceremony is not in its form, but in what it symbolizes."
                        annotation="Meaning: What matters are not the external actions, but the values and ideas they represent — respect, unity, the importance of the moment."
                    />
                    <Quote_with_annotation
                        quote="Without ceremonies, people forget the importance of the moment."
                        annotation="Meaning: Ceremonies help emphasize the significance of events and make them memorable, marking them out from everyday life."
                    />
                    <Quote_with_annotation
                        quote="A ceremony is a bridge between the past, present, and future."
                        annotation="Meaning: Ceremonies connect generations by preserving traditions and passing them on to future generations."
                    />
                </div>
            </Section>
        </div>
    );
}