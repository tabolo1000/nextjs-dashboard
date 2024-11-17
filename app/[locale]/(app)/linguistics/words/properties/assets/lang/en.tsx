import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import properties from "../img/properties.jpeg"; // Assuming the image is located in this path.
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";

export default function Properties() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Properties
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>properties</Highlight> comes from the Old English word <Highlight>proper</Highlight>, which originates from the Latin word <Highlight>proprius</Highlight>, meaning "one's own" or "characteristic of."
                </p>
            </Section>

            {/* Image Insertion */}
            <Interactive_Image src={properties} alt={"Example of various properties of objects"} width={500} height={500} />

            {/* Morphological Analysis */}
            <Section title="Morphological Analysis">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Prop-</Highlight> — the root, which relates to something that defines or belongs to an object.
                    </li>
                    <li>
                        <Highlight>-ties</Highlight> — a suffix that forms abstract nouns indicating a state or quality, like "qualities" or "attributes."
                    </li>
                </ul>
            </Section>

            {/* Definition */}
            <Section title="Definition">
                <p className="paragraph">
                    <Highlight>Properties</Highlight> are features, characteristics, or qualities inherent to objects, substances, or phenomena, which allow them to be described or differentiated.
                </p>
            </Section>

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    The term <Highlight>properties</Highlight> has been used since ancient times to denote various characteristics of objects and phenomena. In different fields of science and knowledge, properties may have specific meanings.
                </p>
            </Section>

            {/* Types of Properties */}
            <Section title="Types of Properties">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Physical properties</Highlight> — characteristics that can be measured or observed without changing the object’s composition. Examples: density, melting point, color.
                    </li>
                    <li>
                        <Highlight>Chemical properties</Highlight> — the ability of a substance to undergo chemical reactions, altering its composition. Examples: flammability, oxidation.
                    </li>
                    <li>
                        <Highlight>Mechanical properties</Highlight> — characteristics of materials that describe their behavior under external forces. Examples: strength, elasticity.
                    </li>
                    <li>
                        <Highlight>Biological properties</Highlight> — characteristics inherent in living organisms. Examples: growth, adaptation.
                    </li>
                </ul>
            </Section>

            {/* Application */}
            <Section title="Application">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Physics</Highlight> — studying the properties of matter and energy helps in creating new technologies and materials.
                    </li>
                    <li>
                        <Highlight>Chemistry</Highlight> — knowledge of chemical properties allows scientists to develop new substances with desired characteristics.
                    </li>
                    <li>
                        <Highlight>Engineering</Highlight> — mechanical properties of materials play a key role in designing structures and mechanisms.
                    </li>
                    <li>
                        <Highlight>Biology</Highlight> — biological properties of organisms help scientists study the processes of evolution and adaptation.
                    </li>
                </ul>
            </Section>

            {/* Examples of the Use of the Word "Properties" */}
            <Section title="Examples of the Use of the Word 'Properties'">
                <ul className="space-y-6">
                    <Base_card
                        title="Physics"
                        description="The physical properties of metals, such as electrical conductivity, make them indispensable in industry."
                        icon="⚙️"
                    />
                    <Base_card
                        title="Chemistry"
                        description="The chemical properties of oxygen allow it to participate in combustion reactions."
                        icon="🧪"
                    />
                    <Base_card
                        title="Biology"
                        description="One of the most important properties of living organisms is their ability to reproduce."
                        icon="🌱"
                    />
                    <Base_card
                        title="Engineering"
                        description="The mechanical properties of steel allow it to be used in the construction of skyscrapers and bridges."
                        icon="🏗️"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="All objects possess inertia — one of the fundamental properties of matter."
                        annotation="This quote emphasizes the importance of inertia as one of the fundamental properties of matter."
                    />
                    <Quote_with_annotation
                        quote="By studying the chemical properties of substances, we uncover their true nature."
                        annotation="This quote highlights the importance of chemical properties in understanding the nature of substances."
                    />
                    <Quote_with_annotation
                        quote="The properties of space and time are closely related to the matter that fills them."
                        annotation="This quote emphasizes the relationship between matter and the properties of space and time."
                    />
                </div>
            </Section>
        </div>
    );
}