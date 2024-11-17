import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import tubus from "../img/tubus.jpg";


export default function Tubus() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Tubus
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>tubus</Highlight> comes from the Latin{" "}
                    <Highlight>tubus</Highlight>, which means "tube" or "pipe." In Russian,
                    the word retains a similar meaning, referring to a cylindrical object
                    designed to store or protect items.
                </p>
            </Section>

            <Interactive_Image src={tubus} alt={"Тубус"} width={500} height={500}/>


            {/* Morphological Analysis */}
            <Section title="Morphological Analysis">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Tub-</Highlight> — the root, associated with the concept of a tube or cylindrical shape.
                    </li>
                    <li>
                        <Highlight>-us</Highlight> — a suffix typical for Latin loanwords.
                    </li>
                </ul>
            </Section>

            {/* Definition */}
            <Section title="Definition">
                <p className="paragraph">
                    A <Highlight>tubus</Highlight> is a cylindrical case, usually made of a hard material (plastic, cardboard, or metal), designed to store and transport long, flexible items such as drawings, posters, maps, documents, as well as optical instruments and tools.
                </p>
            </Section>

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    Tubes started being used in the 19th century when there was a need to safely transport large-format drawings, maps, and other documents that could not be folded without risk of damage. The cylindrical shape of a tubus proved to be the most suitable for rolling paper or fabric into a tube, providing protection against mechanical damage, moisture, and dirt.
                </p>
                <p className="paragraph">
                    With the development of optical instruments such as microscopes and telescopes, tubuses also began to be used in scientific and technical applications, where they served as an important part of the optical structure.
                </p>
            </Section>

            {/* Types of Tubuses */}
            <Section title="Types of Tubuses">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Tubuses for drawings and documents</Highlight> — these are lightweight cylindrical cases designed to store and transport large-format drawings, posters, maps, and other documents. They are usually made of plastic or thick cardboard and equipped with a lid to protect the contents.
                    </li>
                    <li>
                        <Highlight>Tubuses for optical instruments</Highlight> — used in devices such as microscopes, telescopes, and spyglasses. In such instruments, the tubus serves as the housing for lenses or mirrors and ensures the correct direction of light rays.
                    </li>
                    <li>
                        <Highlight>Tubuses for art supplies</Highlight> — used by artists and designers to store and transport brushes, pencils, markers, and other long tools.
                    </li>
                    <li>
                        <Highlight>Tubuses for fishing rods</Highlight> — special cases designed for the safe transportation of fishing rods. They are made from durable materials to protect against mechanical damage.
                    </li>
                    <li>
                        <Highlight>Tubuses for samples</Highlight> — used in scientific and research activities to store and transport samples, specimens, and other materials that need protection from external factors.
                    </li>
                </ul>
            </Section>

            {/* Applications */}
            <Section title="Applications">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Architecture and engineering</Highlight> — tubuses are used to transport blueprints, diagrams, and plans that cannot be folded. This is a convenient solution for storing and protecting important documents.
                    </li>
                    <li>
                        <Highlight>Art and design</Highlight> — artists and designers use tubuses to store and transport large sheets of paper, sketches, or paintings that cannot be bent.
                    </li>
                    <li>
                        <Highlight>Science</Highlight> — in optical instruments such as microscopes and telescopes, tubuses play an important role in forming and directing light rays. Additionally, scientists use tubuses to store samples and specimens.
                    </li>
                    <li>
                        <Highlight>Fishing and tourism</Highlight> — anglers use tubuses to protect fishing rods during transport, while tourists use them to store maps and other documents.
                    </li>
                    <li>
                        <Highlight>Education</Highlight> — students and teachers, especially in art or engineering schools, use tubuses to carry drawings, projects, and posters.
                    </li>
                </ul>
            </Section>

            {/* Tubus Characteristics */}
            <Section title="Tubus Characteristics">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Materials:</strong> Tubuses are made of plastic, metal, thick cardboard, or composite materials. The choice of material depends on the purpose of the tubus and the required level of protection.
                    </li>
                    <li>
                        <strong>Sizes:</strong> Tubuses come in various lengths and diameters, allowing them to be selected for specific documents or items. Some tubuses are telescopic, allowing their length to be adjusted.
                    </li>
                    <li>
                        <strong>Protective properties:</strong> Tubuses protect their contents from mechanical damage, moisture, dust, and sunlight. Some models feature waterproof caps and carrying straps.
                    </li>
                    <li>
                        <strong>Compactness and portability:</strong> Collapsible and telescopic tubuses can be compressed to a compact size for easy storage and transport, making them extremely convenient for field use.
                    </li>
                </ul>
            </Section>

            {/* Advantages of Tubuses */}
            <Section title="Advantages of Tubuses">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Reliable protection:</strong> Tubuses provide protection from mechanical damage, moisture, and dirt, which is especially important for documents, maps, or optical instruments.
                    </li>
                    <li>
                        <strong>Convenience:</strong> Thanks to their cylindrical shape, tubuses are easy to carry, especially if they are equipped with carrying straps.
                    </li>
                    <li>
                        <strong>Versatility:</strong> Tubuses are used in a wide variety of fields — from architecture and art to science and tourism.
                    </li>
                    <li>
                        <strong>Durability:</strong> Made from durable materials, tubuses last a long time and reliably protect their contents.
                    </li>
                </ul>
            </Section>

            {/* Examples of "tubus" usage */}
            <Section title="Examples of 'tubus' usage">
                <ul className="space-y-6">
                    <Base_card
                        title="Architecture"
                        description="The architect took a tubus with blueprints to show the project to the client during the meeting."
                        icon="🏛️"
                    />
                    <Base_card
                        title="Science"
                        description="The microscope was equipped with a long tubus that protected the optical system from external light."
                        icon="🔬"
                    />
                    <Base_card
                        title="Art"
                        description="The artist placed his sketches in a tubus to prevent them from getting creased during transport to the exhibition."
                        icon="🎨"
                    />
                    <Base_card
                        title="Tourism"
                        description="The tourist always carried a tubus with a map of the area to quickly navigate the route."
                        icon="🗺️"
                    />
                    <Base_card
                        title="Fishing"
                        description="To protect his fishing rods during the trip, he used a sturdy tubus."
                        icon="🎣"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="A tubus is not just a container, but a reliable protector of your blueprints and documents."
                        annotation="This quote highlights the importance of the tubus for document preservation."
                    />
                    <Quote_with_annotation
                        quote="Every engineer knows that a tubus is the best way to keep blueprints in perfect condition."
                        annotation="This quote emphasizes the popularity of tubuses among engineers and architects."
                    />
                    <Quote_with_annotation
                        quote="A tubus is as important to an optical instrument as the lenses themselves: without it, the device's performance will not be precise."
                        annotation="This quote highlights the role of the tubus in optical instruments."
                    />
                    <Quote_with_annotation
                        quote="On the hike, the tubus helped me keep my maps dry and safe, even in the toughest conditions."
                        annotation="This quote emphasizes the protective qualities of the tubus in extreme environments."
                    />
                </div>
            </Section>
        </div>
    );
}