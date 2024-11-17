import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import substances from "../img/substances.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Substances() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Substances
            </h1>

            {/* Definition */}
            <Section title="Definition">
                <p className="paragraph">
                    A <Highlight>substance</Highlight> is the physical matter from which all objects in nature are made. Substances can be defined as collections of atoms and molecules that have mass and occupy space. Substances exist in different states of matter: solid, liquid, gas, and plasma.
                </p>
            </Section>

            <Interactive_Image src={substances} alt={"substances"} width={500} height={500}/>

            {/* Main Characteristics of a Substance */}
            <Section title="Main Characteristics of a Substance">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Mass</Highlight> — one of the key properties of a substance, which determines the amount of matter in an object.
                    </li>
                    <li>
                        <Highlight>Volume</Highlight> — the space that a substance occupies.
                    </li>
                    <li>
                        <Highlight>Density</Highlight> — the ratio of a substance’s mass to its volume, which can change depending on temperature and pressure.
                    </li>
                    <li>
                        <Highlight>Chemical composition</Highlight> — substances are composed of atoms of various elements, which can be simple (a single element) or complex (multiple elements).
                    </li>
                </ul>
            </Section>

            {/* Classification of Substances */}
            <Section title="Classification of Substances">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Simple substances</Highlight> — these are substances that consist of atoms of a single chemical element. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Oxygen (O₂) — a gas essential for respiration.</li>
                            <li>Iron (Fe) — a metal used in industry.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Complex substances</Highlight> — these are substances composed of atoms of different elements bonded together chemically. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Water (H₂O) — a compound of hydrogen and oxygen.</li>
                            <li>Carbon dioxide (CO₂) — a compound of carbon and oxygen.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Pure substances</Highlight> — substances that have a consistent chemical composition and specific physical properties. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Gold (Au) — a pure metal with consistent chemical and physical characteristics.</li>
                            <li>Diamond (C) — a crystalline form of carbon.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Mixtures</Highlight> — physical combinations of two or more substances that do not undergo a chemical reaction. Mixtures can be:
                        <ul className="list-disc list-inside pl-6">
                            <li>Homogeneous — such as saltwater, where components are evenly distributed.</li>
                            <li>Heterogeneous — such as sand in water, where components are visibly distinct.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* States of Matter */}
            <Section title="States of Matter">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Solid state</Highlight> — substances in this state have a fixed shape and volume, with particles arranged in an orderly manner. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Ice (solid phase of water).</li>
                            <li>Metals like iron or copper.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Liquid state</Highlight> — substances in the liquid state have a fixed volume but can change their shape depending on the container. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Water.</li>
                            <li>Mercury (a liquid metal).</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Gaseous state</Highlight> — gases have no fixed shape or volume; they fill the entire space available. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Air (a mixture of gases).</li>
                            <li>Methane (CH₄).</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Plasma state</Highlight> — a special state of matter where atoms and molecules are ionized, occurring at very high temperatures. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>The Sun (stars are made of plasma).</li>
                            <li>Plasma lamps.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Chemical and Physical Properties of Substances */}
            <Section title="Chemical and Physical Properties of Substances">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Physical properties</Highlight> — characteristics that can be observed and measured without changing the chemical composition of a substance. These include:
                        <ul className="list-disc list-inside pl-6">
                            <li>Color.</li>
                            <li>Density.</li>
                            <li>Melting and boiling points.</li>
                            <li>Electrical conductivity.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Chemical properties</Highlight> — the ability of a substance to undergo chemical reactions and form new substances. Examples:
                        <ul className="list-disc list-inside pl-6">
                            <li>Reactivity with oxygen (e.g., combustion).</li>
                            <li>Acid-base properties (e.g., interactions between acids and bases).</li>
                            <li>Redox reactions (oxidation-reduction).</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Examples of Substances */}
            <Section title="Examples of Substances">
                <ul className="space-y-6">
                    <Base_card
                        title="Water (H₂O)"
                        description="One of the most common substances on Earth, vital for all living organisms. Water exists in three states: liquid (water), solid (ice), and gas (steam)."
                        icon="💧"
                    />
                    <Base_card
                        title="Oxygen (O₂)"
                        description="An essential gas for respiration of all aerobic organisms. It makes up about 21% of the Earth's atmosphere and is involved in combustion and oxidation processes."
                        icon="🌬️"
                    />
                    <Base_card
                        title="Salt (NaCl)"
                        description="A chemical compound of sodium and chlorine, widely used in the food industry. In its pure form, it is a white crystalline substance."
                        icon="🧂"
                    />
                    <Base_card
                        title="Gasoline"
                        description="A complex mixture of hydrocarbons used as fuel for internal combustion engines."
                        icon="⛽"
                    />
                    <Base_card
                        title="Carbon dioxide (CO₂)"
                        description="A gas produced during respiration and combustion, also used in carbonated beverages."
                        icon="🌫️"
                    />
                </ul>
            </Section>

            {/* Importance of Substances in Life */}
            <Section title="Importance of Substances in Life">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Life processes</Highlight> — all living organisms are composed of substances (proteins, fats, carbohydrates, water, etc.) that participate in metabolism, growth, and development.
                    </li>
                    <li>
                        <Highlight>Industry</Highlight> — substances are used in manufacturing processes to create various products such as metals, plastics, building materials, medicines, and more.
                    </li>
                    <li>
                        <Highlight>Energy</Highlight> — substances like coal, oil, and natural gas are the main energy sources for humanity.
                    </li>
                    <li>
                        <Highlight>Ecology</Highlight> — understanding the chemical and physical properties of substances helps analyze their impact on the environment, prevent pollution, and develop methods for recycling waste.
                    </li>
                </ul>
            </Section>
        </div>
    );
}