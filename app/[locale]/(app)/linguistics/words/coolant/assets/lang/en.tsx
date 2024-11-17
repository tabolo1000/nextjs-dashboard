import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import { Highlight } from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/coolant/assets/img/coolant.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import React from "react";
import { Audio_Navigate } from "@/app/ui/math/components/Audio_Navigate";

export default function Coolant() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Refrigerant
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>refrigerant |ˈkuːlənt|</Highlight> is made up of two parts:{" "}
                    <Highlight>chlad-</Highlight> (from the Old Slavic word "chlad", meaning cold) and{" "}
                    <Highlight>-agent</Highlight> (from the Latin <em>agens</em>, meaning acting).
                    Thus, a refrigerant is a substance that “acts” to create cold.
                </p>
            </Section>

            <Interactive_Image
                src={image}
                alt={"Refrigerant"}
                width={500}
                height={500}
            />

            {/* Morphemic parsing */}
            <Section title="Morphemic parsing">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Chlad-</strong> — a root meaning cold or cooling.
                    </li>
                    <li>
                        <strong>-agent-</strong> — a suffix denoting an active substance that performs
                        a certain action.
                    </li>
                </ul>
            </Section>

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    The term <Highlight>refrigerant</Highlight> emerged with the development of
                    refrigeration technology and the creation of refrigeration systems. Early in the
                    history of refrigeration, natural substances such as ice and snow were used for
                    this purpose. However, with the advent of the first mechanical refrigeration machines
                    in the 19th century, there was a need for chemicals that could transfer heat efficiently.
                </p>
                <p className="paragraph">
                    The first widely used artificial refrigerant was ammonia (NH₃), which was used in
                    industrial refrigeration systems. In the 20th century, with the development of household
                    refrigerators and air conditioners, the era of using Freons — chlorofluorocarbons (CFCs) —
                    began. However, later, when it became clear that CFCs deplete the ozone layer, the search
                    for more environmentally friendly alternatives began.
                </p>
            </Section>

            {/* Modern meaning */}
            <Section title="Modern meaning">
                <p className="paragraph">
                    A <Highlight>refrigerant</Highlight> is a substance that circulates in refrigeration
                    systems (e.g., refrigerators, air conditioners, heat pumps) and transfers heat to provide
                    cooling or heating. The main task of the refrigerant is to absorb heat from one place and
                    release it to another, which is how cooling takes place.
                </p>
            </Section>

            {/* Principle of operation */}
            <Section title="Principle of operation">
                <p className="paragraph">
                    The refrigerant works in a closed cycle in the cooling system, passing through several stages:
                </p>
                <ul className="unordered_list list-decimal pl-6 space-y-2">
                    <li>
                        <strong>Evaporation</strong> — at low pressure, the refrigerant evaporates in the evaporator,
                        absorbing heat from the environment (e.g., the interior of the refrigerator).
                    </li>
                    <li>
                        <strong>Compression</strong> — in a compressor, the refrigerant is compressed and its temperature
                        and pressure increase.
                    </li>
                    <li>
                        <strong>Condensation</strong> — in the condenser, the refrigerant is cooled and condensed from a gas
                        to a liquid, while releasing heat to the environment (e.g., the air outside the refrigerator).
                    </li>
                    <li>
                        <strong>Expansion</strong> — through a pressure-reducing device (such as a capillary tube),
                        the refrigerant becomes low-temperature and low-pressure again, preparing for a new vaporization cycle.
                    </li>
                </ul>
            </Section>

            {/* Types of refrigerants */}
            <Section title="Types of refrigerants">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Chlorofluorocarbons (CFCs)</strong> — such as R12, were used until the 1990s. They are
                        very efficient but deplete the ozone layer, so their use was banned by the Montreal Protocol.
                    </li>
                    <li>
                        <strong>Hydrochlorofluorocarbons (HCFCs)</strong> — such as R22, were a temporary replacement for
                        CFCs. Their production is being phased out due to negative effects on the ozone layer.
                    </li>
                    <li>
                        <strong>Hydrofluorocarbons (HFCs)</strong> — such as R134a, which do not deplete the ozone layer
                        but have a high global warming potential (GWP).
                    </li>
                    <li>
                        <strong>Hydrofluoroolefins (HFOs)</strong> — are a new generation of refrigerants, such as R1234yf,
                        which have a low GWP and therefore have a lower impact on climate change.
                    </li>
                    <li>
                        <strong>Natural refrigerants</strong> — such as ammonia (R717), carbon dioxide (R744) and propane (R290).
                        These refrigerants are safe for the ozone layer and have a low GWP, but require special operating conditions.
                    </li>
                </ul>
            </Section>

            {/* Application */}
            <Section title="Application">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Refrigerators and freezers</strong> — use refrigerants to maintain a low temperature inside the unit.
                    </li>
                    <li>
                        <strong>Air conditioners</strong> — provide cooling of air in rooms or automobiles.
                    </li>
                    <li>
                        <strong>Heat pumps</strong> — used for both heating and cooling, using refrigerant to transfer heat.
                    </li>
                    <li>
                        <strong>Industrial refrigeration systems</strong> — in areas such as the food industry where low
                        temperatures need to be maintained for food storage.
                    </li>
                    <li>
                        <strong>Automotive air conditioning systems</strong> — use refrigerants to cool the air in the interior of a car.
                    </li>
                </ul>
            </Section>

            {/* Environmental concerns */}
            <Section title="Environmental concerns">
                <p className="paragraph">
                    The use of refrigerants is associated with a number of environmental problems, the main ones being:
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Ozone depletion</strong> — refrigerants like CFCs and HCFCs destroy the ozone layer, which
                        protects the Earth from harmful ultraviolet radiation.
                    </li>
                    <li>
                        <strong>Global warming</strong> — many refrigerants, especially HFCs, have a high global warming
                        potential (GWP), which means they strongly contribute to climate change when they leak into the atmosphere.
                        Recently, there has been an active effort to replace such refrigerants with more environmentally friendly alternatives.
                    </li>
                </ul>
            </Section>

            {/* Current trends */}
            <Section title="Current trends">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Switching to natural refrigerants</strong> — ammonia, carbon dioxide and hydrocarbons (propane)
                        are promising alternatives as they do not deplete the ozone layer and have low GWP.
                    </li>
                    <li>
                        <strong>Use of HFO refrigerants</strong> — these substances have low global warming potential and are
                        becoming increasingly popular in automotive and residential air conditioning systems.
                    </li>
                    <li>
                        <strong>Reducing refrigerant leaks</strong> — modern systems are designed to minimize refrigerant leaks,
                        which helps to reduce environmental impact.
                    </li>
                </ul>
            </Section>

            {/* Examples of uses of the word 'refrigerant' */}
            <Section title="Examples of uses of the word 'refrigerant'">
                <ul className="space-y-6">
                    <Base_card
                        title="Refrigeration systems"
                        description="The refrigerant in a refrigerator absorbs heat from the interior and carries it outside through the condenser."
                        icon="❄️"
                    />
                    <Base_card
                        title="Air conditioners"
                        description="Modern air conditioners use environmentally friendly refrigerants such as R410A or R32."
                        icon="🌬️"
                    />
                    <Base_card
                        title="Car air conditioners"
                        description="The new refrigerant R1234yf has minimal environmental impact and is becoming a standard in the automotive industry."
                        icon="🚗"
                    />
                    <Base_card
                        title="Heat pumps"
                        description="The refrigerant in a heat pump allows efficient utilization of heat even at low outdoor temperatures."
                        icon="🔥"
                    />
                    <Base_card
                        title="Industrial refrigeration systems"
                        description="Ammonia remains one of the most efficient refrigerants for large industrial systems."
                        icon="🏭"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Refrigerant is the lifeblood of any refrigeration system, without which the refrigeration process is impossible."
                        annotation="The quote emphasizes the importance of refrigerant to the operation of refrigeration systems."
                    />
                    <Quote_with_annotation
                        quote="Switching to refrigerants with low global warming potential is a key challenge for the refrigeration industry."
                        annotation="The importance of using environmentally friendly refrigerants to combat climate change is highlighted here."
                    />
                    <Quote_with_annotation
                        quote="Choosing the right refrigerant affects not only the efficiency of the system but also its environmental impact."
                        annotation="The citation emphasizes that the choice of refrigerant has both technical and environmental implications."
                    />
                    <Quote_with_annotation
                        quote="Modern refrigerants make it possible to achieve high efficiency with minimal climate impact."
                        annotation="The importance of new technologies in refrigeration and air conditioning is reflected here."
                    />
                    <Quote_with_annotation
                        quote="Safe handling of refrigerants and prevention of refrigerant leaks are critical tasks to reduce environmental damage."
                        annotation="The quote emphasizes the importance of preventing refrigerant leaks to protect the environment."
                    />
                </div>
            </Section>

            <Audio_Navigate
                path="/words/capacitor/capacitor.record"
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}