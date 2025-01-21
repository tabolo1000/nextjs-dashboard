import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function ProtractorSection() {
    return (
        <>
            {/* Измерение углов. Транспортир */}
            <Section title="Измерение углов. Транспортир" parity>
                <p className="paragraph_base">
                    <Highlight>Транспортир</Highlight> — это инструмент, предназначенный для
                    измерения и построения углов. Его шкала обычно имеет диапазон от
                    <Highlight>0°</Highlight> до <Highlight>180°</Highlight>, а некоторые модели —
                    до <Highlight>360°</Highlight>.
                </p>
                <h3 className="header_h3">Как измерить угол:</h3>
                <ul className="unordered_list">
                    <li>
                        Совместите центр транспортира с вершиной угла. Центр транспортира
                        часто обозначается небольшой точкой или отверстием.
                    </li>
                    <li>
                        Установите начальный луч угла на нулевую отметку шкалы
                        (<Highlight>0°</Highlight>).
                    </li>
                    <li>
                        Определите значение угла, где второй луч пересекает шкалу
                        транспортира.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: если второй луч пересекает отметку <Highlight>45°</Highlight>, угол равен
                    <Highlight>45°</Highlight>.
                </p>
                <h3 className="header_h3">Советы по использованию:</h3>
                <ul className="unordered_list">
                    <li>
                        Убедитесь, что транспортир правильно зафиксирован и не смещается
                        во время измерения.
                    </li>
                    <li>
                        Если угол больше <Highlight>180°</Highlight>, используйте полный круговой
                        транспортир (с шкалой до <Highlight>360°</Highlight>).
                    </li>
                </ul>
                <h3 className="header_h3">Где используется транспортир:</h3>
                <p className="paragraph_base">
                    Транспортир применяется в геометрии, черчении, строительстве и даже в
                    навигации. Это универсальный инструмент для работы с углами.
                </p>
            </Section>
        </>
    );
}

export default ProtractorSection;
