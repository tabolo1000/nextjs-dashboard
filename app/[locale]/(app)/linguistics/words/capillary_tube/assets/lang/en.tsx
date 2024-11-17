import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import { Highlight } from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/capillary_tube/assets/img/capillary_tube.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import React from "react";
import { Audio_Navigate } from "@/app/ui/math/components/Audio_Navigate";
import image_on_hand from "@/app/[locale]/(app)/linguistics/words/capillary_tube/assets/img/capillary_tube_on_hand.jpg";

export default function CapillaryTube() {
    return (
        <div className="main_block_task space-y-10">
            <h1 className="header_h1 text-4xl font-bold text-center my-8">
                Capillary Tube
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>capillary</Highlight> comes from Latin{" "}
                    <em>capillaris</em>, which is related to the concept of{" "}
                    <em>capillus</em> — hair, denoting something very thin and narrow.{" "}
                    <Highlight>Tubular</Highlight> comes from the Latin <em>tubus</em>,
                    meaning tube, channel. Thus, a capillary tube is a thin tube that is
                    used to control the flow of a liquid or gas.
                </p>
            </Section>

            {/* Interactive Image */}
            <Interactive_Image
                src={image}
                alt={"Capillary Tube"}
                width={500}
                height={500}
            />

            {/* Morphemic Parsing */}
            <Section title="Morphemic Parsing">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Capillary-</strong> — Root related to the concept of
                        thinness and narrowness.
                    </li>
                    <li>
                        <strong>-naya</strong> — Adjective suffix indicating belonging or
                        characteristic.
                    </li>
                    <li>
                        <strong>Tube-</strong> — Noun indicating the form of the device (a
                        small tube).
                    </li>
                </ul>
            </Section>

            <Interactive_Image
                src={image_on_hand}
                alt={"Capillary Tube"}
                width={500}
                height={500}
            />

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    The term <Highlight>capillary tube</Highlight> appeared in physics and
                    engineering due to the phenomenon of <Highlight>capillarity</Highlight>
                    — the ability of a liquid to rise or fall in narrow channels
                    (capillaries) under the action of surface tension. In the 17th
                    century, scientists such as Pascal and Newton began studying this
                    phenomenon to explain the movement of liquids in confined spaces.
                </p>
                <p className="paragraph">
                    Over time, capillary tubes found applications in various engineering
                    systems, especially in refrigeration and air conditioning systems.
                    These tubes play an important role in controlling the flow of
                    refrigerants, ensuring proper pressure distribution and flow rate
                    control.
                </p>
            </Section>

            {/* Current Significance */}
            <Section title="Current Significance">
                <p className="paragraph">
                    A <Highlight>capillary tube</Highlight> is a thin tube of small
                    diameter designed to control the flow of a liquid or gas by creating
                    resistance. Examples of applications:
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Refrigeration systems</strong>: Controls refrigerant flow and
                        pressure between the condenser and evaporator.
                    </li>
                    <li>
                        <strong>Air Conditioners</strong>: Helps distribute refrigerant to
                        provide efficient air cooling.
                    </li>
                    <li>
                        <strong>Medical Equipment</strong>: Used for precise dispensing of
                        liquids or gases (e.g., drip lines, blood analyzers).
                    </li>
                    <li>
                        <strong>Chemical Industry</strong>: Used for accurate measurement and
                        delivery of liquids in laboratory applications.
                    </li>
                    <li>
                        <strong>Heat Pumps</strong>: Regulate the flow of refrigerant to
                        maintain system efficiency.
                    </li>
                </ul>
            </Section>

            {/* Principle of Operation */}
            <Section title="Principle of Operation">
                <p className="paragraph">
                    The basic operating principle of a{" "}
                    <Highlight>capillary tube</Highlight> is that it creates resistance to
                    the flow of a liquid or gas, allowing control of the pressure and
                    velocity.
                </p>
                <p className="paragraph">
                    When the refrigerant passes through the tube, its pressure drops,
                    allowing it to vaporize and absorb heat in the evaporator. At the
                    inlet of the capillary tube, the refrigerant is under high pressure
                    (after the condenser), and at the outlet, it is under low pressure,
                    which is necessary for efficient cooling.
                </p>
            </Section>

            {/* Main Characteristics of Capillary Tubes */}
            <Section title="Main Characteristics of Capillary Tubes">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Diameter</strong>: The main parameter that determines the
                        flow rate and pressure drop. The smaller the diameter, the greater
                        the resistance.
                    </li>
                    <li>
                        <strong>Length</strong>: Affects the resistance. The longer the
                        tube, the greater the pressure drop.
                    </li>
                    <li>
                        <strong>Material</strong>: Usually copper, due to its good thermal
                        conductivity and corrosion resistance.
                    </li>
                    <li>
                        <strong>Flow Capacity</strong>: Determined by a combination of tube
                        length, diameter, and material.
                    </li>
                </ul>
            </Section>

            {/* Application in Refrigeration Systems */}
            <Section title="Application in Refrigeration Systems">
                <p className="paragraph">
                    In refrigerators and air conditioners, capillary tubes regulate the
                    flow of refrigerant between the condenser and evaporator. They replace
                    more complex thermostatic expansion valves in domestic systems where
                    stability and simplicity are important.
                </p>
                <p className="paragraph">
                    <strong>Advantages:</strong>
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Simplicity of construction</strong>: No moving parts, making
                        them reliable.
                    </li>
                    <li>
                        <strong>Low cost</strong>: Cheaper to manufacture compared to
                        valves.
                    </li>
                    <li>
                        <strong>Compact</strong>: Take up little space.
                    </li>
                </ul>
                <p className="paragraph">
                    <strong>Disadvantages:</strong>
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Limited adjustability</strong>: Not able to automatically
                        adjust flow to changing conditions.
                    </li>
                    <li>
                        <strong>Sensitivity to clogs</strong>: Can become clogged due to
                        small diameter, requiring filters.
                    </li>
                </ul>
            </Section>

            {/* Interesting Fact */}
            <Section title="Interesting Fact">
                <p className="paragraph">
                    Capillary tubes began to be widely used in household refrigerators in
                    the mid-20th century, replacing more complex mechanical valves. This
                    made production much cheaper and made refrigerators affordable for
                    mass consumption.
                </p>
            </Section>

            {/* Examples of Usage */}
            <Section title="Examples of Use of the Word 'Capillary Tube'">
                <ul className="space-y-6">
                    <Base_card
                        title="Refrigeration Technology"
                        description="The capillary tube in a refrigerator provides a pressure drop in the refrigerant, allowing it to vaporize in the evaporator."
                        icon="❄️"
                    />
                    <Base_card
                        title="Air Conditioners"
                        description="In residential air conditioners, the capillary tube regulates the flow of refrigerant, allowing the air to cool."
                        icon="🌬️"
                    />
                    <Base_card
                        title="Medical Devices"
                        description="Capillary tubes are used in blood analyzers to accurately measure fluid volumes."
                        icon="🏥"
                    />
                    <Base_card
                        title="Heat Pumps"
                        description="In heat pumps, the tubing stabilizes the flow of refrigerant as temperature conditions change."
                        icon="🔥"
                    />
                    <Base_card
                        title="Chemical Industry"
                        description="Used to accurately dispense reagents and other liquids in laboratories."
                        icon="⚗️"
                    />
                    <Base_card
                        title="Refrigeration Systems"
                        description="Enable the transfer of refrigerant from a high-pressure zone to a low-pressure zone."
                        icon="🌡️"
                    />
                </ul>
            </Section>

            {/* Citations */}
            <Section title="Citations">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Capillary tubing is a simple but effective way to control refrigerant flow in refrigeration systems."
                        annotation="A quotation emphasizes the simplicity and efficiency of capillary tubes."
                    />
                    <Quote_with_annotation
                        quote="Although capillary tubes are cheaper and easier to use, they are less effective in variable load systems."
                        annotation="The limitation of tubes in complex systems is emphasized here."
                    />
                    <Quote_with_annotation
                        quote="Capillary tubing is a key element in refrigeration systems that provides the pressure drop of refrigerant."
                        annotation="A quotation emphasizes the importance of tubing in refrigerators and air conditioners."
                    />
                    <Quote_with_annotation
                        quote="Due to their simplicity, capillary tubes are widely used in domestic refrigeration systems."
                        annotation="The popularity of tubes due to their reliability and low cost is noted herein."
                    />
                    <Quote_with_annotation
                        quote="In both medical and industrial applications, capillary tubes are used to accurately control and regulate the flow of liquids."
                        annotation="This quote emphasizes the versatility of using tubing in various applications."
                    />
                </div>
            </Section>

            {/* Audio Navigation */}
            <Audio_Navigate
                path={"/words/capacitor/capacitor.record"}
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}