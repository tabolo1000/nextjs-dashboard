import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import sterilizationImage from "@/app/[locale]/(app)/linguistics/words/sterilization/assets/img/sterilization.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Sterilization() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Sterilization</h1>

            {/* Etymology of the word "Sterilization" */}
            <Section title="Etymology of the word 'Sterilization'">
                <p className="paragraph">
                    The word <Highlight>sterilization</Highlight> comes from the Latin word <i>sterilis</i>, meaning "barren" or "infertile". This term is widely used in different scientific and medical fields to describe the process of removing or destroying all living microorganisms and their spores.
                </p>
            </Section>

            {/* Illustration */}
            <Interactive_Image src={sterilizationImage} alt={"Sterilization"} width={500} height={500} />

            {/* Meaning of the word "Sterilization" */}
            <Section title="Meaning of the word 'Sterilization'">
                <p className="paragraph">
                    <Highlight>Sterilization</Highlight> is the process of completely destroying all forms of microorganisms, including bacteria, viruses, fungi, and their spores, on objects or in the environment. This process is applied in medicine, industry, cooking, and other fields.
                </p>
            </Section>

            {/* Methods of Sterilization */}
            <Section title="Methods of Sterilization">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Thermal sterilization</Highlight> — the use of high temperatures to destroy microorganisms. Examples include autoclaving, dry heat sterilization.
                    </li>
                    <li>
                        <Highlight>Chemical sterilization</Highlight> — the use of chemicals to destroy microorganisms on surfaces and in solutions. Examples include ethylene oxide, hydrogen peroxide.
                    </li>
                    <li>
                        <Highlight>Ultraviolet sterilization</Highlight> — using ultraviolet radiation to destroy microorganisms on surfaces and in the air.
                    </li>
                    <li>
                        <Highlight>Gamma sterilization</Highlight> — using ionizing radiation to sterilize medical devices and other materials.
                    </li>
                    <li>
                        <Highlight>Filtration sterilization</Highlight> — filtering liquids or gases through filters with very small pores that trap microorganisms.
                    </li>
                </ul>
            </Section>

            {/* Examples of Sterilization */}
            <Section title="Examples of Sterilization">
                <ul className="space-y-6">
                    <Base_card
                        title="Sterilization of Surgical Instruments"
                        description="Before each operation, instruments undergo sterilization in an autoclave to prevent infectious complications."
                        icon="🩺"
                    />
                    <Base_card
                        title="Sterilization of Canned Goods"
                        description="Sterilizing jars of vegetables and fruits preserves the products for several years."
                        icon="🥫"
                    />
                    <Base_card
                        title="Sterilization of Laboratory Equipment"
                        description="To ensure research accuracy, laboratory tools undergo thorough sterilization."
                        icon="🔬"
                    />
                    <Base_card
                        title="Sterilization of Pets"
                        description="Sterilizing cats helps prevent unwanted reproduction and reduces the risk of certain diseases."
                        icon="🐱"
                    />
                </ul>
            </Section>

            {/* Quotes about Sterilization */}
            <Section title="Quotes about Sterilization">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Sterilization is the key process in the fight against infections."
                        annotation="Meaning: Sterilization helps prevent the spread of infections and maintains human health."
                    />
                    <Quote_with_annotation
                        quote="Sterility is not a luxury, but a necessity in surgery."
                        annotation="Meaning: In surgical environments, absolute sterility is crucial to avoid infections and complications."
                    />
                    <Quote_with_annotation
                        quote="Sterilization is the barrier between cleanliness and infection."
                        annotation="Meaning: Sterilization protects against the penetration and spread of harmful microorganisms."
                    />
                    <Quote_with_annotation
                        quote="Sterilization is the first step to patient safety."
                        annotation="Meaning: In medicine, sterilizing instruments and materials is the foundation of safe procedures."
                    />
                </div>
            </Section>

            {/* Importance of Sterilization */}
            <Section title="Importance of Sterilization">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Prevention of infections:</Highlight> Sterilization prevents the spread of infections in medical facilities and homes.
                    </li>
                    <li>
                        <Highlight>Extending the shelf life of products:</Highlight> In the food industry, sterilization helps preserve products for a long time.
                    </li>
                    <li>
                        <Highlight>Accuracy in scientific research:</Highlight> Laboratory sterilization is essential to prevent contamination of samples.
                    </li>
                    <li>
                        <Highlight>Animal population control:</Highlight> Sterilizing pets helps control their population and prevents the spread of diseases.
                    </li>
                </ul>
            </Section>

            {/* Methods of Sterilization Control */}
            <Section title="Methods of Sterilization Control">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Physical indicators:</Highlight> Used to monitor temperature and pressure in autoclaves. These indicators confirm that sterilization conditions have been met.
                    </li>
                    <li>
                        <Highlight>Chemical indicators:</Highlight> Special strips that change color when exposed to the sterilizing agent (temperature, chemicals, etc.).
                    </li>
                    <li>
                        <Highlight>Biological control:</Highlight> The use of bacterial spores to check the effectiveness of sterilization. If the spores are destroyed, the sterilization was successful.
                    </li>
                </ul>
            </Section>
        </div>
    );
}