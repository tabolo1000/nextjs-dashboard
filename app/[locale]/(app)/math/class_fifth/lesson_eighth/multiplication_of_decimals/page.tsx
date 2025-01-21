import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function MultiplyingDecimals() {
    return (
        <>
            {/* Умножение десятичных дробей */}
            <Section title="Умножение десятичных дробей" parity>
                <p className="paragraph_base">
                    Умножение десятичных дробей состоит из двух шагов: умножение чисел
                    без учета запятых и последующее восстановление положения запятой в результате.
                </p>

                <h3 className="header_h3">Пример: умножим <Highlight>1,3</Highlight> на <Highlight>0,4</Highlight></h3>
                <ul className="unordered_list">
                    <li>
                        Сначала игнорируем запятые и умножаем числа, как целые:
                        <Highlight>13 × 4 = 52</Highlight>.
                    </li>
                    <li>
                        В исходных числах <Highlight>1,3</Highlight> и <Highlight>0,4</Highlight>
                        общее количество цифр после запятых равно двум (одна цифра в каждом числе).
                    </li>
                    <li>
                        В результате отделяем две цифры запятой, начиная справа: <Highlight>0,52</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Итог: <Highlight>1,3 × 0,4 = 0,52</Highlight>.
                </p>

                <h3 className="header_h3">Обратите внимание:</h3>
                <ul className="unordered_list">
                    <li>
                        Количество цифр после запятых в результате равно суммарному количеству цифр
                        после запятых в обоих множителях.
                    </li>
                    <li>
                        Если в результате меньше цифр, чем требуется, добавьте ведущие нули. Например:
                        <Highlight>0,05 × 0,3 = 0,015</Highlight>.
                    </li>
                </ul>

                <h3 className="header_h3">Ещё пример: умножим <Highlight>2,45</Highlight> на <Highlight>0,6</Highlight></h3>
                <ul className="unordered_list">
                    <li>Игнорируем запятые: <Highlight>245 × 6 = 1470</Highlight>.</li>
                    <li>
                        В числах <Highlight>2,45</Highlight> и <Highlight>0,6</Highlight> три цифры
                        после запятых (две в первом числе и одна во втором).
                    </li>
                    <li>
                        Отделяем три цифры в результате: <Highlight>1,470</Highlight>, то есть <Highlight>1,47</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Итог: <Highlight>2,45 × 0,6 = 1,47</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_eighth/division_by_decimal_fraction",
                nextExercise: "/math/class_fifth/lesson_eighth",
            }}/>
        </>
    );
}

export default MultiplyingDecimals;


