import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/technique/assets/img/technique.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import React from "react";
import { Audio_Navigate } from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Technique() {
    return (
        <div className="main_block_task space-y-10">
            <h1 className="header_h1 text-4xl font-bold text-center my-8">
                Technique
            </h1>

            {/* Etymology */}
            <Section title="Etymology">
                <p className="paragraph">
                    The word <Highlight>technique</Highlight> comes from the Greek word{" "}
                    <Highlight>τέχνη (techne)</Highlight>, which means art, craft, or skill. In modern
                    terms, technique refers to a set of methods, tools, and devices used
                    to accomplish specific tasks or achieve goals.
                </p>
            </Section>

            <Interactive_Image src={image} alt="Technique" width={500} height={500} />

            {/* Morphemic Parsing */}
            <Section title="Morphemic Parsing">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Techn-</strong> — A root associated with skill, art, or
                        technology.
                    </li>
                    <li>
                        <strong>-ic</strong> — A suffix denoting a body of knowledge or
                        techniques, as well as a field of endeavor.
                    </li>
                </ul>
            </Section>

            {/* Historical Context */}
            <Section title="Historical Context">
                <p className="paragraph">
                    The concept of <Highlight>technique</Highlight> originated in ancient
                    civilizations when people began to master and develop various ways of
                    creating tools and methods to facilitate work. In ancient Greece, the
                    word <Highlight>techne</Highlight> was used to refer to any craft or
                    art, whether it was blacksmithing, construction, or painting. Over
                    time, techne came to denote increasingly complex systems and processes
                    used in various spheres of life, from agriculture to construction to
                    medicine.
                </p>
                <p className="paragraph">
                    In later periods, particularly with the onset of the Industrial
                    Revolution in the 18th century, the word technique acquired a more
                    specific meaning, referring to a set of tools, machines, and processes
                    used to automate labor and increase productivity. From this point,
                    technology began to develop rapidly, encompassing more and more areas
                    such as transportation, communication, manufacturing, and science.
                </p>
            </Section>

            {/* Modern Meaning */}
            <Section title="Modern Meaning">
                <p className="paragraph">
                    In modern understanding, <Highlight>technique</Highlight> refers to a
                    set of methods, processes, and devices used to perform various tasks
                    in production, science, art, and other fields. Technique encompasses
                    both physical objects (machines, devices, equipment) and the methods
                    of applying them.
                </p>
            </Section>

            {/* Main Aspects of Technology */}
            <Section title="Main Aspects of Technology">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Machines and Mechanisms</strong> — Technique includes
                        machines and mechanisms that simplify and accelerate work. These
                        range from simple tools to complex automated systems.
                    </li>
                    <li>
                        <strong>Processes and Methods</strong> — Technique involves specific
                        technologies and methods by which goals are achieved.
                    </li>
                    <li>
                        <strong>Scientific Foundations</strong> — The development of
                        technique is closely related to scientific and technological
                        progress and the application of scientific knowledge to create new
                        devices and methods.
                    </li>
                    <li>
                        <strong>Engineering and Innovation</strong> — Engineering disciplines
                        play a key role in developing new techniques, and innovation helps
                        optimize existing processes.
                    </li>
                </ul>
            </Section>

            {/* Types of Technology */}
            <Section title="Types of Technology">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Manufacturing Technology</strong> — Includes machinery and
                        equipment used in industry and agriculture, such as machine tools,
                        conveyors, tractors, and combines.
                    </li>
                    <li>
                        <strong>Electronic Technology</strong> — Includes devices based on
                        the use of electricity and electronics, like computers, smartphones,
                        televisions, and home appliances.
                    </li>
                    <li>
                        <strong>Transportation Technology</strong> — Includes cars, trains,
                        airplanes, ships, and other vehicles designed for moving people and
                        goods.
                    </li>
                    <li>
                        <strong>Construction Technology</strong> — Includes machines and
                        mechanisms used in construction, such as excavators, cranes,
                        concrete mixers, and bulldozers.
                    </li>
                    <li>
                        <strong>Medical Technology</strong> — Includes devices used in
                        medicine, such as MRI scanners, X-ray machines, cardiac monitors,
                        and surgical robots.
                    </li>
                    <li>
                        <strong>Military Technology</strong> — Equipment designed for combat
                        and defense, such as tanks, fighter jets, missiles, and drones.
                    </li>
                    <li>
                        <strong>Household Technology</strong> — Devices used in everyday
                        life to simplify household tasks, such as washing machines,
                        refrigerators, food processors, and vacuum cleaners.
                    </li>
                </ul>
            </Section>

            {/* The Role of Technology in the Modern World */}
            <Section title="The Role of Technology in the Modern World">
                <p className="paragraph">
                    Technology plays a crucial role in the development of society. It
                    allows processes to be automated, increases productivity, and improves
                    the quality of life. Modern technologies, such as artificial
                    intelligence, robotics, and nanotechnology, open new horizons for
                    humanity.
                </p>
            </Section>

            {/* Main Functions of Technology */}
            <Section title="Main Functions of Technology">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Automation of Processes</strong> — Technology allows routine
                        tasks to be automated, reducing labor costs and increasing
                        efficiency.
                    </li>
                    <li>
                        <strong>Increased Productivity</strong> — With the use of
                        technology, more goods and services can be produced in less time.
                    </li>
                    <li>
                        <strong>Improved Quality of Life</strong> — Home appliances,
                        transportation, and medical devices make daily life easier, more
                        comfortable, and safer.
                    </li>
                    <li>
                        <strong>Advancing Science and Innovation</strong> — Technology helps
                        advance scientific research and fosters innovation in various
                        industries.
                    </li>
                    <li>
                        <strong>Ensuring Safety</strong> — Technology plays an important
                        role in ensuring safety in transportation, construction, medicine,
                        and defense.
                    </li>
                </ul>
            </Section>

            {/* Examples of the Use of the Word 'Technique' */}
            <Section title="Examples of the Use of the Word 'Technique'">
                <ul className="space-y-6">
                    <Base_card
                        title="Manufacturing Sector"
                        description="The new plant uses modern machinery to automate all production processes."
                        icon="🏭"
                    />
                    <Base_card
                        title="Domestic Sphere"
                        description="Household appliances such as washing machines and vacuum cleaners make household tasks much easier."
                        icon="🏠"
                    />
                    <Base_card
                        title="Construction"
                        description="Construction equipment such as excavators and cranes speed up the erection of buildings."
                        icon="🏗️"
                    />
                    <Base_card
                        title="Medicine"
                        description="Modern medical technology allows complex surgeries to be performed with minimal risk to the patient."
                        icon="🏥"
                    />
                    <Base_card
                        title="Military Sphere"
                        description="New military hardware has improved the army’s intelligence and defense capabilities."
                        icon="🚁"
                    />
                    <Base_card
                        title="Science"
                        description="Scientific equipment such as microscopes and telescopes have opened new horizons in exploring the universe."
                        icon="🔬"
                    />
                </ul>
            </Section>

            {/* Quotes */}
            <Section title="Quotes">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Technology is a tool that allows humans to create and transform the world around them."
                        annotation="The quote emphasizes that technology is a tool that empowers humans."
                    />
                    <Quote_with_annotation
                        quote="The development of technology is the engine of progress that determines the future of mankind."
                        annotation="It states that technology plays a key role in the development of society and its progress."
                    />
                    <Quote_with_annotation
                        quote="Modern technology allows us to accomplish tasks that seemed impossible a couple of decades ago."
                        annotation="The quote emphasizes how the rapid development of technology is changing our perception of what is possible."
                    />
                    <Quote_with_annotation
                        quote="Technology is the bridge between an idea and its realization in reality."
                        annotation="Here, technology is seen as a tool to turn ideas into reality."
                    />
                    <Quote_with_annotation
                        quote="Each new step in the development of technique opens up new horizons of possibilities for us."
                        annotation="The quote emphasizes the importance of innovations in technology to expand human capabilities."
                    />
                </div>
            </Section>

            {/* Contemporary Issues and Challenges */}
            <Section title="Contemporary Issues and Challenges">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Environmental Pollution</strong> — Many types of technology,
                        especially transportation and manufacturing, emit carbon dioxide and
                        other pollutants, contributing to climate change.
                    </li>
                    <li>
                        <strong>Automation and Unemployment</strong> — Advances in
                        technology and the automation of production lead to job losses in
                        some industries, causing social problems.
                    </li>
                    <li>
                        <strong>Electronic Waste</strong> — The increased use of electronic
                        devices results in large amounts of waste that are difficult to
                        recycle.
                    </li>
                    <li>
                        <strong>Energy Dependence</strong> — Many types of technology rely
                        on fossil fuel energy sources, increasing the need to develop new,
                        more environmentally friendly technologies.
                    </li>
                </ul>
            </Section>

            <Audio_Navigate
                path="/words/technique/technique.record"
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}