import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import phylloquinoneImg from "./../img/phylloquinone.jpg";

export default function Phylloquinone() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Phylloquinone</h1>

            {/* Etymology of the word "Phylloquinone" */}
            <Section title="Etymology of the word 'Phylloquinone'">
                <p className="paragraph">
                    <Highlight>Origin:</Highlight>
                    The word <Highlight>phylloquinone</Highlight> comes from two Greek words:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>"Phyll-"</Highlight> (from Greek <Highlight>phyllon</Highlight>) — means "leaf", indicating its natural origin, particularly from plant leaves.
                    </li>
                    <li>
                        <Highlight>"Quinone"</Highlight> (from Latin <Highlight>chinon</Highlight>) — refers to its belonging to the class of quinones, chemical compounds containing carbonyl groups integrated into an aromatic ring.
                    </li>
                </ul>
                <p className="paragraph">
                    Thus, phylloquinone is a quinone found in the leaves of plants, reflecting its biological origin and role.
                </p>
            </Section>

            <Interactive_Image src={phylloquinoneImg} alt={"Хинон"} width={500} height={500} />

            {/* Definition and Chemical Structure */}
            <Section title="Definition and Chemical Structure">
                <p className="paragraph">
                    <Highlight>Phylloquinone</Highlight>, also known as <Highlight>vitamin K₁</Highlight>, is a natural organic compound belonging to the group of vitamin K. Vitamin K is essential for normal blood clotting and other important physiological functions.
                </p>
                <p className="paragraph">
                    Phylloquinone has the following chemical formula:
                    \[
                    C_{31}H_{46}O_2
                    \]
                </p>
                <p className="paragraph">
                    Its structure includes a <Highlight>naphthoquinone ring</Highlight> with a side chain consisting of isoprenoid units. It is a fat-soluble vitamin found in green leafy vegetables like spinach, broccoli, and kale.
                </p>
            </Section>

            {/* Biological Role */}
            <Section title="Biological Role">
                <p className="paragraph">
                    Phylloquinone (vitamin K₁) plays a crucial role in several biochemical processes, particularly in:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Blood Coagulation (Clotting):</Highlight>
                        The primary function of phylloquinone is to participate in the synthesis of proteins necessary for blood clotting. It acts as a cofactor for the enzyme γ-glutamyl carboxylase, which activates certain proteins, such as <Highlight>prothrombin</Highlight>, involved in blood clotting.
                    </li>
                    <li>
                        <Highlight>Bone Health:</Highlight>
                        Phylloquinone is essential for the synthesis of proteins like <Highlight>osteocalcin</Highlight>, which play a crucial role in binding calcium in bones and maintaining their density. Vitamin K deficiency can lead to reduced bone strength and an increased risk of osteoporosis.
                    </li>
                    <li>
                        <Highlight>Cardiovascular Support:</Highlight>
                        Vitamin K₁ helps prevent arterial calcification, reducing the risk of cardiovascular diseases. It regulates processes that control calcium buildup in soft tissues.
                    </li>
                </ul>
            </Section>

            {/* Sources of Phylloquinone */}
            <Section title="Sources of Phylloquinone">
                <p className="paragraph">
                    Phylloquinone is widely distributed in nature, especially in plants. It is primarily synthesized in the chloroplasts of green plants, and its main dietary sources for humans include:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Green Leafy Vegetables:</Highlight>
                        Spinach, broccoli, kale, lettuce.
                    </li>
                    <li>
                        <Highlight>Vegetable Oils:</Highlight>
                        Olive oil, soybean oil.
                    </li>
                    <li>
                        <Highlight>Some Fruits and Vegetables:</Highlight>
                        Avocado, kiwi, green peas, and beans.
                    </li>
                </ul>
            </Section>

            {/* Biosynthesis in Plants */}
            <Section title="Biosynthesis in Plants">
                <p className="paragraph">
                    Phylloquinone is synthesized in the chloroplasts of plants and plays a role in the process of <Highlight>photosynthesis</Highlight>. It is involved in the light-dependent phase of photosynthesis, where it participates in electron transport in Photosystem I. This makes it an important component of plants' energy metabolism.
                </p>
            </Section>

            {/* Metabolism in the Human Body */}
            <Section title="Metabolism in the Human Body">
                <p className="paragraph">
                    After ingestion, phylloquinone is absorbed in the small intestine and transported via the lymphatic system to tissues. In the liver, it is converted into active forms that participate in the carboxylation of proteins essential for blood clotting.
                </p>
                <p className="paragraph">
                    <Highlight>Vitamin K metabolism</Highlight> involves the following steps:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Absorption:</Highlight> Phylloquinone is absorbed with fats in the small intestine. Since it is a fat-soluble vitamin, its absorption requires the presence of bile.
                    </li>
                    <li>
                        <Highlight>Transport:</Highlight> After absorption, vitamin K₁ is transported in low-density lipoproteins (LDL) and other lipid particles through the lymph into the bloodstream.
                    </li>
                    <li>
                        <Highlight>Storage:</Highlight> The primary reserves of vitamin K₁ are found in the liver, although the body does not store large amounts, requiring a constant intake from food.
                    </li>
                </ul>
            </Section>

            {/* Phylloquinone and its Analogs */}
            <Section title="Phylloquinone and its Analogs">
                <p className="paragraph">
                    Besides phylloquinone (vitamin K₁), there are several other forms of vitamin K:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Menaquinone (Vitamin K₂):</Highlight> synthesized by bacteria and also involved in blood clotting and bone health. Unlike phylloquinone, vitamin K₂ has a longer chain of isoprenoid residues.
                    </li>
                    <li>
                        <Highlight>Menadione (Vitamin K₃):</Highlight> a synthetic form of vitamin K that was used as a supplement but is now less popular due to its potential toxicity at high doses.
                    </li>
                </ul>
            </Section>

            {/* Phylloquinone Deficiency */}
            <Section title="Phylloquinone Deficiency">
                <p className="paragraph">
                    Vitamin K₁ deficiency is rare in healthy individuals, as it is widely available in food. However, certain groups may be at risk of deficiency:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Newborns:</Highlight> Newborns have low stores of vitamin K, which can lead to hemorrhagic disease of the newborn. Therefore, vitamin K is often administered at birth to prevent this condition.
                    </li>
                    <li>
                        <Highlight>People with fat malabsorption:</Highlight> Since vitamin K₁ is fat-soluble, individuals with gastrointestinal disorders (e.g., celiac disease, cystic fibrosis, liver disease) may suffer from its deficiency.
                    </li>
                    <li>
                        <Highlight>People on anticoagulants:</Highlight> Anticoagulants like warfarin block the action of vitamin K, and if left uncontrolled, this can lead to vitamin deficiency.
                    </li>
                </ul>
            </Section>

            {/* Symptoms of Deficiency */}
            <Section title="Symptoms of Deficiency">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Bleeding:</Highlight> The most obvious symptom of vitamin K₁ deficiency. This can manifest as nosebleeds, gum bleeding, slow healing of cuts and bruises, and gastrointestinal bleeding.
                    </li>
                    <li>
                        <Highlight>Osteoporosis:</Highlight> Vitamin K₁ deficiency may lead to reduced bone density and an increased risk of fractures.
                    </li>
                </ul>
            </Section>

            {/* Therapeutic Use */}
            <Section title="Therapeutic Use">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Prevention and Treatment of Bleeding:</Highlight>
                        Phylloquinone is used to prevent and treat bleeding caused by vitamin K deficiency. It is administered via injection in newborns and during anticoagulant overdoses.
                    </li>
                    <li>
                        <Highlight>Support for Bone Health:</Highlight>
                        Vitamin K₁ can be part of a comprehensive therapy to improve bone health in people with osteoporosis or other conditions associated with weakened bone tissue.
                    </li>
                </ul>
            </Section>

            {/* Drug Interactions */}
            <Section title="Drug Interactions">
                <p className="paragraph">
                    Some medications can affect the metabolism and effectiveness of vitamin K₁:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Anticoagulants:</Highlight> Drugs such as warfarin block the action of vitamin K, so people taking anticoagulants need to monitor their intake of foods rich in vitamin K₁.
                    </li>
                    <li>
                        <Highlight>Antibiotics:</Highlight> Prolonged use of antibiotics can lower vitamin K levels in the body, as antibiotics destroy the bacteria responsible for synthesizing vitamin K₂ in the gut.
                    </li>
                </ul>
            </Section>

            {/* Quotes and Sayings */}
            <Section title="Quotes and Sayings">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="The role of vitamins in human health cannot be overstated. Vitamin K is no exception, as it is essential for our circulatory and skeletal systems."
                        annotation="Linus Pauling"
                    />
                    <Quote_with_annotation
                        quote="Vitamin K₁ is the key to blood clotting and bone density, but its role is often underestimated."
                        annotation="Michael Holick, biochemist"
                    />
                </div>
            </Section>
        </div>
    );
}