import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Units_of_area() {
    return (
        <>
            {/* Единицы измерения площадей */}
            <Section title="__Единицы измерения площадей" parity>
                <p className="paragraph_base">
                    <Highlight>Единицы измерения площади</Highlight> помогают выразить, сколько квадратных единиц с фиксированной длиной стороны умещается на фигуре. Например, квадрат с длиной стороны 1 метр соответствует площади <Highlight>1 м²</Highlight>.
                </p>
                <h3 className="header_h3">Основные единицы измерения:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Квадратный миллиметр (мм²):</Highlight> используется для измерения крошечных объектов, например, деталей часов или чипов.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Квадратный сантиметр (см²):</Highlight> применяется для небольших предметов, таких как тетради, книги или небольшие коробки.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Квадратный дециметр (дм²):</Highlight> удобен для измерения средних поверхностей, например, планшетов или ноутбуков.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Квадратный метр (м²):</Highlight> стандартная единица для измерения площади комнат, квартир или небольших участков.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Гектар (га):</Highlight> равен 10 000 м² (100 × 100 м). Используется в сельском хозяйстве для измерения полей и лесных участков.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Квадратный километр (км²):</Highlight> применяется для описания больших территорий, таких как города, области или природные заповедники.
                    </li>
                </ul>
                <h3 className="header_h3">Примеры применения:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Площадь листа бумаги A4 — примерно <Highlight>625 см²</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Средняя площадь жилой комнаты — около <Highlight>20 м²</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Площадь футбольного поля составляет примерно <Highlight>0,7 га</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Площадь Москвы — около <Highlight>2 561 км²</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Исторический контекст:</h3>
                <p className="paragraph_base">
                    Понятие площади зародилось ещё в Древнем Египте, когда жрецы использовали простейшие единицы измерения для расчёта земельных участков вдоль реки Нил. Впоследствии греческие математики, такие как Евклид, систематизировали эти знания, добавив строгие геометрические определения.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    В Великобритании до сих пор иногда используют такие традиционные единицы измерения площади, как <Highlight>акры</Highlight>. Один акр примерно равен 0,4 гектара или 4 047 м².
                </p>
            </Section>
        </>
    );
}

export default Units_of_area;
