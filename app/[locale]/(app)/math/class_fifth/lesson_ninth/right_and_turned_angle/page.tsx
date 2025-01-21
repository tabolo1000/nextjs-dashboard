import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function AnglesSection() {
    return (
        <>
            {/* Угол. Прямой и развернутый угол. Чертёжный треугольник */}
            <Section title="Угол. Прямой и развернутый угол. Чертёжный треугольник" parity>
                <p className="paragraph_base">
                    <Highlight>Угол</Highlight> — это геометрическая фигура, которая образуется
                    двумя лучами, исходящими из одной точки, называемой вершиной угла.
                </p>
                <h3 className="header_h3">Типы углов:</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Прямой угол</Highlight>: равен <Highlight>90°</Highlight>. Лучи угла
                        перпендикулярны друг другу и образуют строгий "угол-квадрат".
                    </li>
                    <li>
                        <Highlight>Развернутый угол</Highlight>: равен <Highlight>180°</Highlight>.
                        Это угол, в котором лучи лежат на одной прямой и образуют прямую линию.
                    </li>
                </ul>
                <h3 className="header_h3">Инструмент: чертёжный треугольник</h3>
                <p className="paragraph_base">
                    <Highlight>Чертёжный треугольник</Highlight> — это инструмент, который помогает
                    строить точные углы, такие как <Highlight>90°</Highlight>, <Highlight>45°</Highlight>,
                    и другие. Он часто используется в геометрии, черчении и технических расчётах.
                </p>
                <h3 className="header_h3">Пример использования:</h3>
                <p className="paragraph_example">
                    Чтобы построить прямой угол, используйте треугольник с углами
                    <Highlight>90°, 45° и 45°</Highlight>. Приложите длинную сторону треугольника
                    к одной линии, а короткая сторона автоматически покажет направление под прямым углом.
                </p>
                <h3 className="header_h3">Совет:</h3>
                <p className="paragraph_base">
                    Всегда проверяйте точность построений, особенно если угол используется
                    в сложных чертежах. Прямые углы часто применяются при создании зданий,
                    чертежей мебели и других объектов.
                </p>
            </Section>
        </>
    );
}

export default AnglesSection;
