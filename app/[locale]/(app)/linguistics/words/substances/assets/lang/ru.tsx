import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import substances from "@/app/[locale]/(app)/linguistics/words/substances/assets/img/substances.jpeg";

export default function Substances() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Вещества
            </h1>

            {/* Определение */}
            <Section title="Определение">
                <p className="paragraph">
                    <Highlight>Вещество</Highlight> — это физическая материя, из которой состоят все объекты в природе. Вещества можно определить как совокупность атомов и молекул, которые имеют массу и занимают пространство. Вещества бывают в разных агрегатных состояниях: твёрдом, жидком, газообразном и плазменном.
                </p>
            </Section>
            <Interactive_Image src={substances} alt={"substances"} width={500} height={500}/>

            {/* Основные характеристики вещества */}
            <Section title="Основные характеристики вещества">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Масса</Highlight> — одно из ключевых свойств вещества, которое определяет количество материи в объекте.
                    </li>
                    <li>
                        <Highlight>Объём</Highlight> — пространство, которое занимает вещество.
                    </li>
                    <li>
                        <Highlight>Плотность</Highlight> — отношение массы вещества к его объёму, которое меняется в зависимости от температуры и давления.
                    </li>
                    <li>
                        <Highlight>Химический состав</Highlight> — вещества состоят из атомов различных элементов, которые могут быть простыми или сложными (содержащими несколько элементов).
                    </li>
                </ul>
            </Section>

            {/* Классификация веществ */}
            <Section title="Классификация веществ">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Простые вещества</Highlight> — это вещества, которые состоят из атомов одного химического элемента. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Кислород (O₂) — газ, необходимый для дыхания.</li>
                            <li>Железо (Fe) — металл, используемый в промышленности.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Сложные вещества</Highlight> — это вещества, состоящие из атомов разных элементов, соединённых химическими связями. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Вода (H₂O) — соединение водорода и кислорода.</li>
                            <li>Углекислый газ (CO₂) — соединение углерода и кислорода.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Чистые вещества</Highlight> — это вещества, которые имеют постоянный химический состав и определённые физические свойства. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Золото (Au) — чистый металл с постоянными химическими и физическими характеристиками.</li>
                            <li>Алмаз (C) — кристаллическая форма углерода.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Смеси</Highlight> — это физические соединения двух или более веществ, которые не вступают в химическую реакцию. Смеси могут быть:
                        <ul className="list-disc list-inside pl-6">
                            <li>Однородные (гомогенные) — такие как солёная вода, где компоненты равномерно распределены.</li>
                            <li>Неоднородные (гетерогенные) — такие как песок в воде, где компоненты видны невооружённым глазом.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Агрегатные состояния вещества */}
            <Section title="Агрегатные состояния вещества">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Твёрдое состояние</Highlight> — вещества в этом состоянии имеют фиксированную форму и объём, так как частицы находятся в упорядоченном состоянии. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Лёд (твёрдая фаза воды).</li>
                            <li>Металлы, такие как железо или медь.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Жидкое состояние</Highlight> — вещества в жидком состоянии имеют фиксированный объём, но могут изменять свою форму в зависимости от ёмкости. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Вода.</li>
                            <li>Ртуть (жидкий металл).</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Газообразное состояние</Highlight> — газы не имеют фиксированной формы или объёма, они заполняют весь предоставленный объём. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Воздух (смесь газов).</li>
                            <li>Метан (CH₄).</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Плазменное состояние</Highlight> — это особое состояние вещества, в котором атомы и молекулы ионизированы, и оно встречается при очень высоких температурах. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Солнце (звёзды состоят из плазмы).</li>
                            <li>Плазменные лампы.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Химические и физические свойства веществ */}
            <Section title="Химические и физические свойства веществ">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Физические свойства</Highlight> — это характеристики, которые можно наблюдать и измерить без изменения химического состава вещества. К ним относятся:
                        <ul className="list-disc list-inside pl-6">
                            <li>Цвет.</li>
                            <li>Плотность.</li>
                            <li>Температура плавления и кипения.</li>
                            <li>Электропроводность.</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Химические свойства</Highlight> — это способность вещества вступать в химические реакции и образовывать новые вещества. Примеры:
                        <ul className="list-disc list-inside pl-6">
                            <li>Реактивность с кислородом (например, горение).</li>
                            <li>Кислотно-основные свойства (например, взаимодействие кислот и оснований).</li>
                            <li>Окислительно-восстановительные реакции.</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            {/* Примеры веществ */}
            <Section title="Примеры веществ">
                <ul className="space-y-6">
                    <Base_card
                        title="Вода (H₂O)"
                        description="Одно из самых распространённых веществ на Земле, жизненно важное для всех живых организмов. Вода может находиться в трёх агрегатных состояниях: жидком (вода), твёрдом (лёд) и газообразном (пар)."
                        icon="💧"
                    />
                    <Base_card
                        title="Кислород (O₂)"
                        description="Важный газ для дыхания всех аэробных организмов. Он составляет около 21% атмосферы Земли и участвует в процессе горения и окисления."
                        icon="🌬️"
                    />
                    <Base_card
                        title="Соль (NaCl)"
                        description="Химическое соединение натрия и хлора, которое широко используется в пищевой промышленности. В чистом виде — это белое кристаллическое вещество."
                        icon="🧂"
                    />
                    <Base_card
                        title="Бензин"
                        description="Сложная смесь углеводородов, используемая как топливо для двигателей внутреннего сгорания."
                        icon="⛽"
                    />
                    <Base_card
                        title="Углекислый газ (CO₂)"
                        description="Газ, образующийся при дыхании и горении, а также используемый в газированных напитках."
                        icon="🌫️"
                    />
                </ul>
            </Section>

            {/* Важность веществ в жизни */}
            <Section title="Важность веществ в жизни">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Жизненные процессы</Highlight> — все живые организмы состоят из веществ (белков, жиров, углеводов, воды и др.), которые участвуют в обмене веществ, росте и развитии.
                    </li>
                    <li>
                        <Highlight>Промышленность</Highlight> — вещества используются в производственных процессах для создания различных продуктов, таких как металлы, пластмассы, строительные материалы, лекарства и многое другое.
                    </li>
                    <li>
                        <Highlight>Энергетика</Highlight> — вещества, такие как уголь, нефть и природный газ, являются основными источниками энергии для человечества.
                    </li>
                    <li>
                        <Highlight>Экология</Highlight> — понимание химических и физических свойств веществ помогает анализировать их воздействие на окружающую среду, предотвращать загрязнение и разрабатывать методы переработки отходов.
                    </li>
                </ul>
            </Section>
        </div>
    );
}