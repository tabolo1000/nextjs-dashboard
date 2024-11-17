import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import quinoneImg from "./../img/quinone.jpg";
import cinchona from "@/app/[locale]/(app)/linguistics/words/quinone/assets/img/cinchona.webp";

export default function Quinone() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Quinone</h1>

            {/* Etymology of the word "Quinone" */}
            <Section title="Etymology of the word 'Quinone'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight> The word <Highlight>quinone</Highlight> entered the Russian language from the German <Highlight>Chinon</Highlight>, which, in turn, derives from the name of the substance <Highlight>quinic acid</Highlight> (German: <Highlight>Chinasäure</Highlight>), extracted from the cinchona tree (<Highlight>Cinchona</Highlight>).
                    Quinic acid was one of the first known sources of quinones. The Latin name <Highlight>Cinchona</Highlight> originates from the name of the Countess of Chinchón, the wife of the Viceroy of Peru, who was believed to have been cured of malaria by the bark of this tree.
                </p>
            </Section>

            <Interactive_Image src={cinchona} alt={"Хинон"} width={500} height={500} />



            {/* Morphological Elements */}
            <Section title="Morphological Elements">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Root 'quin-'</Highlight> — associated with quinine, a substance derived from the bark of the cinchona tree, known for its medicinal properties.
                    </li>
                    <li>
                        <Highlight>Suffix '-one'</Highlight> — characteristic of chemical compounds, often used to denote organic substances with a carbonyl group (e.g., ketones, aldehydes).
                    </li>
                </ul>
            </Section>

            {/* General Chemical Characteristics */}
            <Section title="General Chemical Characteristics">
                <p className="paragraph">
                    Quinones are a class of organic compounds that represent cyclic diketones, i.e., molecules containing two carbonyl (C=O) groups incorporated into an aromatic ring. Quinones play an important role in biochemical processes and are widely used in industry.
                </p>
                <p className="paragraph">
                    Formally, quinones can be seen as derivatives of aromatic hydrocarbons, where two hydrogen atoms are replaced by two oxygen atoms, forming two carbonyl groups. The simplest representative of this class is <Highlight>para-quinone</Highlight> (or benzoquinone), with a chemical formula of \( C_6H_4O_2 \).
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image src={quinoneImg} alt={"Quinone"} width={500} height={500} />

            {/* Structure and Properties */}
            <Section title="Structure and Properties">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Para-quinones</Highlight>: In these compounds, the carbonyl groups are located at opposite ends of the benzene ring (in the *para* position). Para-quinone \( C_6H_4O_2 \) is a classic example, where two carbonyl groups are positioned on opposite sides of the ring.
                    </li>
                    <li>
                        <Highlight>Ortho-quinones</Highlight>: In these compounds, the carbonyl groups are located next to each other (in the *ortho* position).
                    </li>
                </ul>
                <p className="paragraph">
                    Quinones are characterized by the following properties:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Color</Highlight>: Most quinones are brightly colored — yellow, orange, or red, which is explained by their complex electronic structure.</li>
                    <li><Highlight>Redox properties</Highlight>: Quinones are strong oxidizing agents and participate in numerous redox reactions.</li>
                    <li><Highlight>Solubility</Highlight>: Many quinones are poorly soluble in water but are well soluble in organic solvents such as ethanol, ethers, and acetone.</li>
                </ul>
            </Section>



            {/* Biological Role */}
            <Section title="Biological Role">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Participation in respiratory chains</Highlight>: In biology, quinones play an important role in cellular respiration processes. The main biological significance lies in quinone derivatives, such as <Highlight>ubiquinone</Highlight> (coenzyme Q), which is a key participant in the electron transport chain in mitochondria.
                    </li>
                    <li>
                        <Highlight>Antioxidant properties</Highlight>: Some quinones, like ubiquinone, also possess antioxidant properties, protecting cells from damage by free radicals.
                    </li>
                    <li>
                        <Highlight>Photosynthesis</Highlight>: In the process of photosynthesis, quinones such as <Highlight>plastoquinone</Highlight> play a crucial role in electron transport within the photosynthetic membranes of chloroplasts, helping to convert solar energy into chemical energy.
                    </li>
                </ul>
            </Section>

            {/* Industrial Applications */}
            <Section title="Industrial Applications">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Dyes</Highlight>: Quinones are used for synthesizing various dyes. Due to their bright color and resistance to external influences, they are widely applied in the textile and paper industries.
                    </li>
                    <li>
                        <Highlight>Rubber production</Highlight>: Some quinones are used as catalysts and stabilizers in rubber production, improving its properties and durability.
                    </li>
                    <li>
                        <Highlight>Photography and Film</Highlight>: Quinone derivatives were used in photography as active components in film development.
                    </li>
                    <li>
                        <Highlight>Medicine</Highlight>: In pharmaceuticals, quinones are used as active components in some drugs, including antibiotics and cancer treatments.
                    </li>
                </ul>
            </Section>

            {/* Examples of Quinones */}
            <Section title="Examples of Quinones">
                <ul className="space-y-6">
                    <Base_card
                        title="Para-quinone (Benzoquinone)"
                        description="The simplest representative of quinones with the formula C6H4O2. Para-quinone is a yellow crystalline substance with a sharp odor. It is used as an oxidizing agent and as an intermediate in organic synthesis."
                        icon="🧪"
                    />
                    <Base_card
                        title="Ubiquinone (Coenzyme Q10)"
                        description="An important biological quinone involved in cellular respiration. It is also used as a dietary supplement to increase energy levels and as an antioxidant."
                        icon="💊"
                    />
                    <Base_card
                        title="Plastoquinone"
                        description="Involved in photosynthetic reactions in the chloroplasts of plants, playing a crucial role in converting light energy."
                        icon="🌿"
                    />
                    <Base_card
                        title="Lapachol"
                        description="A natural quinone derived from the bark of tropical trees of the Tabebuia genus. Lapachol has anti-inflammatory and anti-tumor properties and is used in traditional medicine."
                        icon="🌳"
                    />
                </ul>
            </Section>

            {/* Redox Properties */}
            <Section title="Redox Properties">
                <p className="paragraph">
                    Quinones easily participate in redox reactions, converting to hydroquinones (the reduced form of quinones) and back. This ability makes them important components in biochemistry and industry. An example of such a reaction is the reduction of para-quinone to form hydroquinone:
                </p>
                <p className="paragraph">
                    \( C_6H_4O_2 + 2H \rightarrow C_6H_4(OH)_2 \)
                </p>
                <p className="paragraph">
                    Hydroquinone (or benzene-1,4-diol) is the reduced form of para-quinone and is used in various chemical processes, including photographic development.
                </p>
            </Section>

            {/* Toxicity and Safety */}
            <Section title="Toxicity and Safety">
                <p className="paragraph">
                    Some quinones can be toxic to humans and animals with prolonged exposure or in high concentrations. For example, para-quinone is an irritant to the skin and respiratory system. When working with quinones, safety precautions must be followed, including wearing protective gloves and respirators.
                </p>
            </Section>

            {/* Quotes and Sayings */}
            <Section title="Quotes and Sayings">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="By observing quinone reactions, we can understand one of the most important biochemical processes — the conversion of energy in living organisms."
                        annotation="Louis Pasteur"
                    />
                    <Quote_with_annotation
                        quote="Quinones are key players in biological oxidation and reduction, without which cellular functioning would be impossible."
                        annotation="Peter Mitchell (Nobel Prize in Chemistry)"
                    />
                </div>
            </Section>
        </div>
    );
}