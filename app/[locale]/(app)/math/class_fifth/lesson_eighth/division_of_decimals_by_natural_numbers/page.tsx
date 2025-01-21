import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function DividingDecimalsByNaturalNumbers() {
    return (
        <>
            {/* Деление десятичных дробей на натуральные числа */}
            <Section title="Деление десятичных дробей на натуральные числа" parity>
                <p className="paragraph_base">
                    Деление десятичных дробей на натуральные числа выполняется аналогично делению целых чисел.
                    При этом важно правильно разместить запятую в результате.
                </p>

                <h3 className="header_h3">Пример: разделим <Highlight>4,8</Highlight> на <Highlight>2</Highlight></h3>
                <ul className="unordered_list">
                    <li>Игнорируем запятую и делим, как целые числа: <Highlight>48 ÷ 2 = 24</Highlight>.</li>
                    <li>
                        В исходном числе <Highlight>4,8</Highlight> запятая стоит после первой цифры.
                        В результате запятая ставится в том же положении: <Highlight>2,4</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Результат: <Highlight>4,8 ÷ 2 = 2,4</Highlight>.
                </p>

                <h3 className="header_h3">Обратите внимание:</h3>
                <ul className="unordered_list">
                    <li>
                        Запятая в результате всегда располагается строго под запятой делимого числа.
                    </li>
                    <li>
                        Если в делимом нет достаточного количества цифр, можно дописать нули после запятой, чтобы упростить деление.
                    </li>
                </ul>

                <h3 className="header_h3">Другой пример: разделим <Highlight>7,25</Highlight> на <Highlight>5</Highlight></h3>
                <ul className="unordered_list">
                    <li>Делим, как целые числа: <Highlight>725 ÷ 5 = 145</Highlight>.</li>
                    <li>
                        В исходном числе <Highlight>7,25</Highlight> запятая отделяет две цифры.
                        В результате запятая ставится в том же месте: <Highlight>1,45</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Результат: <Highlight>7,25 ÷ 5 = 1,45</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_eighth/multiplication_of_decimals",
                nextExercise: "/math/class_fifth/lesson_eighth",
            }}/>
        </>
    );
}

export default DividingDecimalsByNaturalNumbers;
