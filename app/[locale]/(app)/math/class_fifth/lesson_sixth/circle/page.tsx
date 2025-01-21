import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Circle() {
    return (
        <>
            {/* Окружность и круг */}
            <Section title="Окружность и круг" parity>
                <p className="paragraph_base">
                    <Highlight>Окружность</Highlight> — это замкнутая линия, все точки которой находятся на одинаковом расстоянии от её центра. Это расстояние называется <Highlight>радиусом</Highlight>.
                </p>
                <p className="paragraph_base">
                    <Highlight>Круг</Highlight> — это часть плоскости, ограниченная окружностью. Круг включает в себя все точки внутри окружности, а также саму окружность.
                </p>
                <p className="paragraph_base">
                    Например, обруч можно представить как окружность, а дно стакана — как круг.
                </p>
                <h3 className="header_h3">Основные элементы окружности и круга:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Центр (O):</Highlight> точка, равноудалённая от всех точек окружности.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Радиус (R):</Highlight> расстояние от центра до любой точки на окружности.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Диаметр (D):</Highlight> наибольшее расстояние между двумя точками окружности, проходит через центр. Связан с радиусом формулой <Highlight>D = 2R</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Длина окружности (C):</Highlight> длина замкнутой линии, равна <Highlight>C = 2πR</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Площадь круга (S):</Highlight> величина площади, ограниченной окружностью, равна <Highlight>S = πR²</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Число π (пи), равное примерно 3.14159, впервые было использовано древними математиками для расчёта длины окружности. Оно представляет собой отношение длины окружности к её диаметру.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_base">
                    Если радиус окружности равен <Highlight>5 см</Highlight>, то:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Длина окружности: <Highlight>C = 2 × π × 5 ≈ 31.4 см</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Площадь круга: <Highlight>S = π × 5² ≈ 78.5 см²</Highlight>.
                    </li>
                </ul>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/circle_charts",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Circle;
