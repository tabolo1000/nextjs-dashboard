import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import chaise_lounge from "@/app/[locale]/(app)/linguistics/words/chaise_lounge/assets/img/chaise_lounge.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function ChaiseLounge() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Chaise Lounge
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>chaise lounge</Highlight> comes from the French term{" "}
                    <Highlight>chaise longue</Highlight>, which literally translates to "long chair" (from{" "}
                    <Highlight>chaise</Highlight> — chair, and <Highlight>longue</Highlight> — long). It refers to a piece of furniture designed for relaxing in a semi-reclined position.
                </p>
            </Section>
            <Interactive_Image src={chaise_lounge} alt={"Капиллярная трубка"} width={500} height={500}/>

            {/* Morphemic Parsing */}
            <Section title="Morphemic Parsing">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Chaise-</Highlight> — part of the word inherited from French <Highlight>chaise</Highlight> (chair).
                    </li>
                    <li>
                        <Highlight>-long</Highlight> — part of the word derived from French <Highlight>longue</Highlight> (long).
                    </li>
                </ul>
            </Section>

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    Chaise lounges, as comfortable seating for relaxation, date back to Ancient Greece and Rome, where the elite used similar structures for lounging and resting. However, modern chaise lounges, as we know them today, emerged in France in the 17th–18th centuries. It was a piece of furniture used in aristocratic homes for relaxation, reading, or a midday nap.
                </p>
                <p className="paragraph">
                    With the rise of resort culture in the 19th century, chaise lounges became popular on beaches and in gardens. People began to use them outdoors, enjoying the sun and scenic views. Over time, the chaise lounge became an essential part of beach and countryside leisure.
                </p>
            </Section>

            {/* Modern Meaning */}
            <Section title="Modern Meaning">
                <p className="paragraph">
                    A <Highlight>chaise lounge</Highlight> is a lightweight, foldable, or stationary chair with an elongated seat, allowing for reclining in a semi-reclined position. It is designed for outdoor relaxation, by the pool, or at the beach.
                </p>
                <p className="paragraph">
                    Chaise lounges can be made from various materials, such as wood, metal, or plastic, sometimes with soft textile inserts for comfort. Most modern chaise lounges have a foldable design, making them easy to transport and store.
                </p>
            </Section>

            {/* Types of Chaise Lounges */}
            <Section title="Types of Chaise Lounges">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Beach chaise lounges</Highlight> — lightweight and often foldable, typically made of plastic or aluminum with textile upholstery. They are easy to carry and are intended for use on the beach or by the pool.
                    </li>
                    <li>
                        <Highlight>Garden chaise lounges</Highlight> — more massive and durable, often made of wood or metal. These chaise lounges can be stationary and are used in private gardens or on terraces.
                    </li>
                    <li>
                        <Highlight>Pool chaise lounges</Highlight> — special chaise lounges with water-repellent upholstery, resistant to water and sun exposure. They often have adjustable backrests.
                    </li>
                    <li>
                        <Highlight>Chaise lounge chairs</Highlight> — a hybrid between a chair and a chaise lounge, which can be used both indoors and outdoors. These models usually have soft padding and may come with armrests.
                    </li>
                    <li>
                        <Highlight>Chaise lounges with canopy</Highlight> — models equipped with a canopy for sun protection. These are popular options for beaches and pools.
                    </li>
                </ul>
            </Section>

            {/* Benefits of Chaise Lounges */}
            <Section title="Benefits of Chaise Lounges">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Comfort:</strong> Chaise lounges allow for reclining in a semi-reclined position, which reduces strain on the spine and promotes relaxation.
                    </li>
                    <li>
                        <strong>Portability:</strong> Foldable models are easy to transport, making them ideal for outdoor or beach relaxation.
                    </li>
                    <li>
                        <strong>Adjustability:</strong> Many chaise lounges have adjustable backrests, allowing you to choose the most comfortable position.
                    </li>
                    <li>
                        <strong>Aesthetic Appeal:</strong> Chaise lounges can become a stylish element of garden, terrace, or even home interior design.
                    </li>
                </ul>
            </Section>

            {/* Examples of the Use of the Word "Chaise Lounge" */}
            <Section title="Examples of the Use of the Word 'Chaise Lounge'">
                <ul className="space-y-6">
                    <Base_card
                        title="Beach Relaxation"
                        description="At the beach, we rented chaise lounges and spent the entire day enjoying the sun and the sea."
                        icon="🏖️"
                    />
                    <Base_card
                        title="Country House"
                        description="In the garden, we have a beautiful wooden chaise lounge where I love to read books on summer evenings."
                        icon="🏡"
                    />
                    <Base_card
                        title="By the Pool"
                        description="Comfortable chaise lounges with soft mattresses were placed by the pool, and we spent the whole day there, relaxing under the sun."
                        icon="🏊"
                    />
                    <Base_card
                        title="Tourism"
                        description="We brought foldable chaise lounges with us to comfortably settle by the lake and enjoy nature."
                        icon="⛺"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A chaise lounge is the best friend of those who love to relax outdoors, enjoying the sun and silence."
                        annotation="This quote emphasizes the importance of a chaise lounge for comfortable outdoor relaxation."
                    />
                    <Quote_with_annotation
                        quote="Every chaise lounge is a little corner of paradise for those who love to lie in the shade and listen to the sound of the waves."
                        annotation="Here, the chaise lounge is associated with beach relaxation and serenity."
                    />
                    <Quote_with_annotation
                        quote="A comfortable chaise lounge in the garden is a place where you can forget about everything and just enjoy the moment."
                        annotation="This quote highlights the role of the chaise lounge as a place for rest and relaxation."
                    />
                </div>
            </Section>
        </div>
    );
}