import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function DivisionByDecimal() {
    return (
        <>
            {/* Деление на десятичную дробь */}
            <Section title="Деление на десятичную дробь" parity>
                <p className="paragraph_base">
                    Деление на десятичную дробь выполняется в два шага: сначала убирается
                    запятая из делителя, а затем выполняется обычное деление. Убрать
                    запятую можно, умножив и делимое, и делитель на 10, 100, 1000 и т.д.,
                    в зависимости от количества цифр после запятой в делителе.
                </p>

                <h3 className="header_h3">Пример: разделим <Highlight>3,6</Highlight> на <Highlight>0,12</Highlight></h3>
                <ul className="unordered_list">
                    <li>
                        Определяем количество цифр после запятой в делителе
                        <Highlight>0,12</Highlight>. Здесь две цифры (1 и 2).
                    </li>
                    <li>
                        Умножаем делимое и делитель на 100, чтобы избавиться от запятой:
                        <Highlight>3,6 × 100 = 360</Highlight> и <Highlight>0,12 × 100 = 12</Highlight>.
                    </li>
                    <li>Делим целые числа: <Highlight>360 ÷ 12 = 30</Highlight>.</li>
                </ul>
                <p className="paragraph_base">
                    Итог: <Highlight>3,6 ÷ 0,12 = 30</Highlight>.
                </p>

                <h3 className="header_h3">Обратите внимание:</h3>
                <ul className="unordered_list">
                    <li>
                        Запятая убирается только из делителя. Делимое преобразуется
                        соответствующим образом (умножением на то же число).
                    </li>
                    <li>
                        Это не изменяет значения дроби, так как и делимое, и делитель
                        умножаются на одно и то же число.
                    </li>
                </ul>

                <h3 className="header_h3">Ещё пример: <Highlight>7,5 ÷ 0,05</Highlight></h3>
                <ul className="unordered_list">
                    <li>
                        В делителе <Highlight>0,05</Highlight> две цифры после запятой, поэтому
                        умножаем оба числа на 100: <Highlight>7,5 × 100 = 750</Highlight> и
                        <Highlight>0,05 × 100 = 5</Highlight>.
                    </li>
                    <li>Делим: <Highlight>750 ÷ 5 = 150</Highlight>.</li>
                </ul>
                <p className="paragraph_base">
                    Итог: <Highlight>7,5 ÷ 0,05 = 150</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_eighth/arithmetic_average",
                nextExercise: "/math/class_fifth/lesson_eighth",
            }}/>
        </>
    );
}

export default DivisionByDecimal;
