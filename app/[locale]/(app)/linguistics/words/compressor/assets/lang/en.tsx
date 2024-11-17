import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Highlight} from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/compressor/assets/img/compressor.jpeg";
import Image from "next/image";
import React from "react";

export default async function Compressor() {

    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Compressor
            </h1>

            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>compressor</Highlight> comes from the Latin <em>compressor</em>, which in turn is formed from the verb <em>comprimere</em> — <strong>to compress</strong>. The suffix <Highlight>-or</Highlight> indicates a tool or mechanism that performs the action. Thus, <Highlight>compressor</Highlight> literally means a device for compressing something, often air or gas.
                </p>
            </Section>

            <Image src={image} alt={"compressor"} width={400} height={400} />

            <Section title="Morphemic Parsing" parity>
                <ul className="unordered_list">
                    <li><strong>Com-</strong> — a prefix denoting connection, joint action (from Latin <em>com</em> — "together").</li>
                    <li><strong>Press-</strong> — a root associated with compression (from Latin <em>premere</em> — "to press").</li>
                    <li><strong>-or</strong> — a suffix denoting a tool or device.</li>
                </ul>
            </Section>

            <Section title="Historical Context" parity>
                <p className="paragraph">
                    The term <Highlight>compressor</Highlight> appeared in the technical and engineering environment with the development of technologies related to the control of air and gas pressure. The first compressors, as devices for compressing air or gas, began to be used in industry and construction in the 19th century.
                </p>
                <p className="paragraph">
                    With the invention of steam engines and the development of electric motors, compressors became much more efficient, allowing them to be used in a wide variety of industries, from mining to aviation and medicine.
                </p>
            </Section>

            <Section title="Modern Significance">
                <p className="paragraph">
                    In the modern world, a <Highlight>compressor</Highlight> is a device designed to compress and pump gases or air. Compressors are widely used in various fields, such as:
                </p>
                <ul className="unordered_list">
                    <li><strong>Industry</strong> — compressors ensure the operation of pneumatic tools and are used in cooling, ventilation, and air conditioning systems.</li>
                    <li><strong>Automotive</strong> — compressors are used in engines to create turbocharging, which increases power.</li>
                    <li><strong>Medicine</strong> — medical compressors are used in ventilators for artificial lung ventilation and oxygen supply.</li>
                    <li><strong>Refrigeration</strong> — compressors circulate refrigerant to maintain low temperatures in refrigerators and air conditioners.</li>
                    <li><strong>Construction and repair</strong> — compressors are used to operate pneumatic tools such as screwdrivers, hammers, and paint sprayers.</li>
                </ul>
            </Section>

            <Section title="Types of Compressors" parity>
                <p className="paragraph">
                    Compressors are divided into several types depending on the principle of operation:
                </p>
                <ul className="unordered_list">
                    <li><strong>Piston compressors</strong> — operate by the movement of a piston, which compresses air or gas in a cylinder.</li>
                    <li><strong>Screw compressors</strong> — use the rotation of screws to compress the gas.</li>
                    <li><strong>Centrifugal (turbochargers)</strong> — compress air using centrifugal force created by the rotor.</li>
                    <li><strong>Rotary compressors</strong> — use rotating elements to compress and move gas.</li>
                    <li><strong>Diaphragm compressors</strong> — operate by moving the diaphragm, which changes the volume of the chamber and compresses the gas.</li>
                </ul>
            </Section>

            <Section title="Interesting Fact">
                <p className="paragraph">
                    One of the most famous types of compressors is the turbocharger, which is used in car engines to increase their power. A turbocharger compresses the air entering the engine, allowing more fuel to be burned and thus increasing power without increasing the engine's volume.
                </p>
            </Section>

            <Section title="Examples of Uses of the Word 'Compressor'">
                <ul className="space-y-6">
                    <Base_card
                        title="Pneumatics"
                        description="A compressor supplies compressed air to operate pneumatic tools on a construction site."
                        icon="🔧"
                    />
                    <Base_card
                        title="Automobiles"
                        description="A turbocharger increases engine power by compressing air before it is fed into the cylinders."
                        icon="🚗"
                    />
                    <Base_card
                        title="Air Conditioning"
                        description="The compressor in an air conditioner circulates refrigerant, cooling the air in a room."
                        icon="❄️"
                    />
                    <Base_card
                        title="Medical"
                        description="A medical compressor is used in ventilators to supply air to patients."
                        icon="🏥"
                    />
                    <Base_card
                        title="Refrigeration Equipment"
                        description="In refrigerators, the compressor maintains the required temperature by circulating refrigerant."
                        icon="🧊"
                    />
                    <Base_card
                        title="Industrial Equipment"
                        description="A screw compressor is used to supply compressed air to an industrial plant."
                        icon="🏭"
                    />
                    <Base_card
                        title="Construction"
                        description="The compressor powers a pneumatic hammer by creating the necessary air pressure."
                        icon="🏗️"
                    />
                    <Base_card
                        title="Car Repair"
                        description="Car repair shops often use compressors to inflate tires and work with paint guns."
                        icon="🚘"
                    />
                    <Base_card
                        title="Audio"
                        description="In audio engineering, a compressor is used to regulate sound levels and prevent signal overload."
                        icon="🎧"
                    />
                    <Base_card
                        title="Ventilation Systems"
                        description="Compressors in ventilation and air conditioning systems provide compressed air to cool rooms."
                        icon="🌬️"
                    />
                </ul>
            </Section>

            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="The compressor is the heart of any pneumatic system."
                        annotation="The quote emphasizes the importance of the compressor in systems that use compressed air or gas."
                    />
                    <Quote_with_annotation
                        quote="Without a compressor, no modern cooling device can fulfill its purpose."
                        annotation="This quote highlights the key role of compressors in refrigeration and air conditioning."
                    />
                    <Quote_with_annotation
                        quote="A compressor is a mechanism that compresses air or gas to create pressure to operate various devices."
                        annotation="The quote explains the key purpose of a compressor."
                    />
                    <Quote_with_annotation
                        quote="With a compressor, work becomes easier and faster because it provides the necessary pressure for tools."
                        annotation="The quote emphasizes the importance of compressors in construction and industrial processes."
                    />
                    <Quote_with_annotation
                        quote="A turbocharger plays an important role in increasing the power of the engine without increasing its displacement."
                        annotation="This quote emphasizes the significance of compressors in the automotive industry."
                    />
                </div>
            </Section>

            <Audio_Navigate
                path={"/words/compressor/compressor.record"}
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}