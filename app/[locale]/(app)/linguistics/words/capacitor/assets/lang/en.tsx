import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import { Highlight } from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/capacitor/assets/img/capacitor.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import React from "react";

export default async function Capacitor() {
    return (
        <div className="main_block_task space-y-10">
            <h1 className="header_h1 text-4xl font-bold text-center my-8">
                Condenser (Capacitor)
            </h1>

            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>condenser</Highlight> comes from the Latin <em>condensare</em> — to condense, thicken. The suffix <Highlight>-or</Highlight> indicates a device that performs a certain action. Thus, a <Highlight>capacitor</Highlight> is a device that performs the function of condensation or accumulation.
                </p>
            </Section>

            <Interactive_Image src={image} alt={"capacitor"} width={500} height={500}/>

            <Section title="Morphemic Parsing" parity>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Condens-</strong> — a root connected with the process of compression, compaction (from Latin <em>condensare</em> — to compact).
                    </li>
                    <li>
                        <strong>-ator</strong> — a suffix denoting a device or mechanism that performs an action.
                    </li>
                </ul>
            </Section>

            <Section title="Historical Context" parity>
                <p className="paragraph">
                    The concept of a <Highlight>capacitor</Highlight> first appeared in the middle of the 18th century, when scientists began to study electrical phenomena and develop methods of accumulating electrical energy. The first capacitors, known as <Highlight>Leiden jars</Highlight>, were invented in 1745. These were glass vessels covered with metal foil and could store electrical charge.
                </p>
                <p className="paragraph">
                    Since then, capacitor technology has improved considerably, and they are now an integral part of many electrical and electronic circuits. Capacitors are used to store electrical energy, smooth out voltage peaks, and filter signals in a variety of devices, from consumer electronics to complex industrial systems.
                </p>
            </Section>

            <Section title="Modern Meaning" parity>
                <p className="paragraph">
                    A <Highlight>capacitor</Highlight> is an electronic component designed to store electrical charge and energy in an electric field. Depending on the type, capacitors can be used in a wide variety of applications:
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Electronics</strong>: Capacitors are used to filter and smooth signals in power circuits, and to temporarily delay and store energy.
                    </li>
                    <li>
                        <strong>Industry</strong>: In industrial systems, capacitors are used to correct power factor and stabilize electric motors.
                    </li>
                    <li>
                        <strong>Air Conditioners and Refrigerators</strong>: In refrigeration systems, the condenser is used to cool the refrigerant that is compressed by the compressor and condensed, turning it from a gas into a liquid.
                    </li>
                    <li>
                        <strong>Power Grids</strong>: Capacitors are used to increase voltage stability and reduce power loss in transmission lines.
                    </li>
                    <li>
                        <strong>Automotive</strong>: In automotive ignition systems and audio systems, capacitors help smooth out voltage and ensure stable operation of equipment.
                    </li>
                </ul>
            </Section>

            <Section title="Types of Capacitors" parity>
                <p className="paragraph">
                    Today, there are many types of <Highlight>capacitors</Highlight> used in various applications:
                </p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><strong>Electrolytic Capacitors</strong>: High capacitance, used in power circuits to smooth out voltage ripples.</li>
                    <li><strong>Ceramic Capacitors</strong>: Common in high-frequency circuits due to low cost and good electrical characteristics.</li>
                    <li><strong>Foil (Film) Capacitors</strong>: High stability, used in industrial and household devices where durability and reliability are required.</li>
                    <li><strong>Supercapacitors</strong>: Large capacitance, used for storing significant amounts of energy, common in the energy and automotive industries.</li>
                    <li><strong>Variable Capacitors</strong>: Used in radio receivers and other devices where frequency tuning is required.</li>
                </ul>
            </Section>

            <Section title="Principle of Operation of an Electric Capacitor">
                <p className="paragraph">
                    A <Highlight>capacitor</Highlight> consists of two conductive plates separated by a dielectric (non-conductive material). When voltage is applied to the plates, positive charges accumulate on one of the plates and negative charges accumulate on the other. This results in an electric field between the plates, which stores energy.
                </p>
                <p className="paragraph">Basic characteristics of capacitors include:</p>
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li><strong>Capacitance</strong>: The ability of a capacitor to store charge, measured in farads (F). The larger the area of the plates and the smaller the distance between them, the greater the capacitance.</li>
                    <li><strong>Operating Voltage</strong>: The maximum voltage at which a capacitor can operate without breaking down.</li>
                    <li><strong>Polarity</strong>: For some types of capacitors (e.g., electrolytic capacitors), it is important to observe polarity when connecting them, otherwise they may fail.</li>
                </ul>
            </Section>

            <Section title="Capacitor in Refrigeration and Air Conditioning Systems" parity>
                <p className="paragraph">
                    In refrigeration systems (such as air conditioners and refrigerators), a **condenser** is a heat exchanger used to remove heat from the system. The condenser receives hot, gaseous refrigerant compressed by a compressor and cools it, turning it into a liquid. This process is called **condensation**. As the refrigerant passes through the condenser, it releases heat to the surrounding environment, allowing the system to maintain the desired temperature.
                </p>
            </Section>

            <Section title="Interesting Fact" parity>
                <p className="paragraph">
                    **Supercapacitors** are a relatively new category of capacitors that can store a significant amount of energy compared to conventional capacitors. They are used in applications such as hybrid cars, backup power systems, and for storing energy in renewable sources like solar panels and wind turbines.
                </p>
            </Section>

            <Section title="Examples of Uses of the Word 'Capacitor'">
                <ul className="space-y-6">
                    <Base_card
                        title="Electronics"
                        description="Capacitors are used in power circuits to smooth out voltage ripple, ensuring stable operation of the device."
                        icon="📱"
                    />
                    <Base_card
                        title="Car Systems"
                        description="The capacitor in a car audio system helps maintain a constant voltage when playing loud sounds."
                        icon="🚗"
                    />
                    <Base_card
                        title="Cooling Systems"
                        description="In an air conditioner, the condenser is responsible for cooling and converting refrigerant from gaseous to liquid state."
                        icon="❄️"
                    />
                    <Base_card
                        title="Industrial Equipment"
                        description="Capacitors are used for power factor correction in electrical networks, which helps to reduce energy losses."
                        icon="🏭"
                    />
                    <Base_card
                        title="Radio Engineering"
                        description="Variable capacitors are used in radio receivers for frequency tuning."
                        icon="📻"
                    />
                    <Base_card
                        title="Power Engineering"
                        description="Supercapacitors can store and quickly release large amounts of energy, making them useful for energy storage systems."
                        icon="⚡"
                    />
                    <Base_card
                        title="Medical Devices"
                        description="Capacitors are used in defibrillators to store energy, which is then discharged into the patient's heart."
                        icon="🏥"
                    />
                    <Base_card
                        title="Electric Transportation"
                        description="Supercapacitors in electric buses allow them to charge quickly and provide power for short distances."
                        icon="🚌"
                    />
                    <Base_card
                        title="Signal Filtering"
                        description="Capacitors are used in circuits to filter out high-frequency noise, improving signal quality."
                        icon="🔧"
                    />
                    <Base_card
                        title="Audio Engineering"
                        description="Capacitors play an important role in the tuning of sound systems, ensuring the purity and stability of the audio signal."
                        icon="🎧"
                    />
                </ul>
            </Section>


            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A capacitor is a device that stores energy in an electric field and is ready to give it up at a moment's notice."
                        annotation="This quote emphasizes the function of a capacitor as an energy storage device."
                    />
                    <Quote_with_annotation
                        quote="It is impossible to imagine modern electronics without capacitors, as they play an important role in the operation of almost all electronic devices."
                        annotation="This quote highlights the importance of capacitors in modern electronic systems."
                    />
                    <Quote_with_annotation
                        quote="Supercapacitors are the future of energy storage, as they can charge in a matter of seconds."
                        annotation="This quote emphasizes the potential of supercapacitors in the energy industry."
                    />
                    <Quote_with_annotation
                        quote="A capacitor is not just a storage device, but also a filter that can protect circuits from sudden voltage fluctuations."
                        annotation="The important role of capacitors in stabilizing electrical circuits is discussed here."
                    />
                    <Quote_with_annotation
                        quote="A capacitor in a refrigeration system absorbs heat and condenses refrigerant, allowing it to maintain the desired temperature."
                        annotation="This quote highlights the role of the condenser in refrigeration systems."
                    />
                </div>
            </Section>
        </div>
    );
}