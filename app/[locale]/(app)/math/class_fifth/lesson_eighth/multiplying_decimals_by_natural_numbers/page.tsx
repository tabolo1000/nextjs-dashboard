import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function MultiplyingDecimalsByNaturalNumbers() {
    return (
        <>
            {/* Умножение десятичных дробей на натуральные числа */}
            <Section title="Умножение десятичных дробей на натуральные числа" parity>
                <p className="paragraph_base">
                    Умножение десятичных дробей на натуральные числа выполняется почти так же, как умножение обычных чисел.
                    Однако нужно учитывать позицию запятой в результате.
                </p>

                <h3 className="header_h3">Пример: Умножим <Highlight>2,4</Highlight> на <Highlight>3</Highlight></h3>
                <ul className="unordered_list">
                    <li>Сначала игнорируем запятую и умножаем числа, как целые: <Highlight>24 × 3 = 72</Highlight>.</li>
                    <li>
                        В числе <Highlight>2,4</Highlight> одна цифра после запятой. Поэтому в результате отделяем одну цифру: <Highlight>7,2</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Результат: <Highlight>2,4 × 3 = 7,2</Highlight>.
                </p>

                <h3 className="header_h3">Обратите внимание:</h3>
                <ul className="unordered_list">
                    <li>
                        Запятая в десятичной дроби указывает, где заканчивается целая часть и начинается дробная.
                        Именно она помогает правильно определить место дробной части в результате.
                    </li>
                    <li>
                        Чтобы не запутаться, помните правило: <Highlight>"Запятая — это память дроби"</Highlight>.
                    </li>
                </ul>

                <h3 className="header_h3">Другой пример: Умножим <Highlight>1,75</Highlight> на <Highlight>4</Highlight></h3>
                <ul className="unordered_list">
                    <li>Игнорируем запятую: <Highlight>175 × 4 = 700</Highlight>.</li>
                    <li>В числе <Highlight>1,75</Highlight> две цифры после запятой, поэтому в результате отделяем две цифры: <Highlight>7,00 = 7</Highlight>.</li>
                </ul>
                <p className="paragraph_base">
                    Результат: <Highlight>1,75 × 4 = 7</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_eighth/division_of_decimals_by_natural_numbers",
                nextExercise: "/math/class_fifth/lesson_eighth",
            }}/>
        </>
    );
}

export default MultiplyingDecimalsByNaturalNumbers;
