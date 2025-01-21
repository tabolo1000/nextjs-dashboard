import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Volumes() {
    return (
        <>
            {/* Объёмы. Объём прямоугольного параллелепипеда */}
            <Section title="Объёмы. Объём прямоугольного параллелепипеда" parity>
                <p className="paragraph_base">
                    <Highlight>)))Объём</Highlight> — это количественная мера пространства, занимаемого телом. Он показывает, сколько кубических единиц умещается внутри фигуры или объекта. Единицы измерения объёма включают кубические миллиметры (мм³), кубические сантиметры (см³), кубические метры (м³), а также литры.
                </p>
                <h3 className="header_h3">Формула объёма прямоугольного параллелепипеда:</h3>
                <p className="paragraph_base">
                    <Highlight>V = a × b × h</Highlight>, где:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>a</Highlight> — длина,
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>b</Highlight> — ширина,
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>h</Highlight> — высота.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Например, если длина <Highlight>a = 3 м</Highlight>, ширина <Highlight>b = 2 м</Highlight>, а высота <Highlight>h = 4 м</Highlight>, то объём равен: <Highlight>V = 3 × 2 × 4 = 24 м³</Highlight>.
                </p>
                <h3 className="header_h3">Единицы измерения объёма:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Кубический миллиметр (мм³):</Highlight> используется для измерения объёма очень мелких объектов, таких как кристаллы или капли.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Кубический сантиметр (см³):</Highlight> часто применяется в медицине, например, для измерения объёма шприцев.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Литр (л):</Highlight> соответствует 1 000 см³ и широко используется для измерения жидкостей.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Кубический метр (м³):</Highlight> основная единица объёма в международной системе (СИ), применяется для измерения больших объектов, таких как комнаты или ёмкости.
                    </li>
                </ul>
                <h3 className="header_h3">Исторический контекст:</h3>
                <p className="paragraph_base">
                    Ещё в Древнем Египте люди измеряли объёмы зерна или воды для расчёта запасов. Позднее греческие математики, такие как Архимед, разработали точные методы вычисления объёмов сложных тел.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Куб с длиной ребра 1 метр имеет объём <Highlight>1 м³</Highlight>, и в него поместится ровно 1 000 литров воды.
                </p>
            </Section>
        </>
    );
}

export default Volumes;
