import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Formulas() {
    return (
        <>
            {/* Формулы */}
            <Section title="Формулы" parity>
                <p className="paragraph_base">
                    <Highlight>Формула</Highlight> — это компактное математическое выражение, которое описывает зависимость между величинами. Она помогает быстро производить расчёты и решать задачи, где участвуют конкретные параметры. Например, формула площади прямоугольника:
                    <Highlight>S = a × b</Highlight>, где:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>a</Highlight> — длина прямоугольника;
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>b</Highlight> — ширина прямоугольника;
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>S</Highlight> — площадь, результат вычисления.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Например, если длина прямоугольника равна 5 метрам, а ширина — 3 метра, то его площадь вычисляется как:
                    <Highlight>S = 5 × 3 = 15 м²</Highlight>.
                </p>
                <h3 className="header_h3">История формул:</h3>
                <p className="paragraph_base">
                    Формулы появились тысячи лет назад. Уже в Древнем Египте и Вавилоне люди использовали их, чтобы измерять размеры полей, проектировать здания и вести торговлю. Например, в древнеегипетском математическом папирусе — «Папирусе Ахмеса» — есть формулы для расчёта площади трапеции и круга.
                </p>
                <p className="paragraph_base">
                    Само слово «формула» произошло от латинского <Highlight>formula</Highlight>, что означает «маленькая форма» или «шаблон». В математике и науке формулы стали неотъемлемой частью, начиная с эпохи Древней Греции, благодаря трудам таких учёных, как Архимед и Евклид.
                </p>
                <h3 className="header_h3">Примеры формул из жизни:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Формула площади треугольника: <Highlight>S = (a × h) ÷ 2</Highlight>, где <Highlight>a</Highlight> — основание, а <Highlight>h</Highlight> — высота.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Формула скорости: <Highlight>v = s ÷ t</Highlight>, где <Highlight>s</Highlight> — расстояние, а <Highlight>t</Highlight> — время.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Формула объёма куба: <Highlight>V = a³</Highlight>, где <Highlight>a</Highlight> — длина ребра куба.
                    </li>
                </ul>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Многие формулы, которые мы используем сегодня, такие как формула площади круга (<Highlight>S = πr²</Highlight>), были открыты более 2000 лет назад. Однако они по-прежнему остаются актуальными и применяются во множестве областей науки и техники.
                </p>
            </Section>
        </>
    );
}

export default Formulas;