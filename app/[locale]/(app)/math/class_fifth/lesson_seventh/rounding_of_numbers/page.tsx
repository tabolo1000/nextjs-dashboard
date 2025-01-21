import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Rounding_of_numbers() {
    return (
        <>
            {/* Приближённые значения чисел. Округление чисел */}
            <Section title="Приближённые значения чисел. Округление чисел" parity>
                <p className="paragraph_base">
                    В некоторых случаях числа нужно округлять, чтобы упростить вычисления или представить результат с заданной точностью.
                    Округление производится по следующему правилу:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Если цифра, следующая за разрядом округления, меньше <Highlight>5</Highlight>, то разряд округления остаётся неизменным, а все последующие цифры отбрасываются.
                    </li>
                    <li className="unordered_list_li">
                        Если цифра, следующая за разрядом округления, равна <Highlight>5</Highlight> или больше, то к разряду округления прибавляется <Highlight>1</Highlight>, а все последующие цифры отбрасываются.
                    </li>
                </ul>

                <h3 className="header_h3">Пример 1: Округление до двух знаков после запятой</h3>
                <p className="paragraph_example">
                    Округлим <Highlight>3,456</Highlight> до двух знаков после запятой.
                </p>
                <ul className="unordered_list">
                    <li>Цифра после второго знака — <Highlight>6</Highlight>. Она больше <Highlight>5</Highlight>, поэтому прибавляем <Highlight>1</Highlight> к разряду сотых.</li>
                    <li>Округлённое значение: <Highlight>3,46</Highlight>.</li>
                </ul>

                <h3 className="header_h3">Пример 2: Округление до одного знака после запятой</h3>
                <p className="paragraph_example">
                    Округлим <Highlight>7,123</Highlight> до одного знака после запятой.
                </p>
                <ul className="unordered_list">
                    <li>Цифра после первого знака — <Highlight>2</Highlight>. Она меньше <Highlight>5</Highlight>, поэтому разряд десятых остаётся неизменным.</li>
                    <li>Округлённое значение: <Highlight>7,1</Highlight>.</li>
                </ul>

                <h3 className="header_h3">Советы и примечания:</h3>
                <ul className="unordered_list">
                    <li>Округление удобно использовать в повседневной жизни, например, для работы с деньгами или измерениями.</li>
                    <li>Помните, что округление может немного исказить точность результата, особенно если требуется большая точность.</li>
                </ul>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_eighth/multiplying_decimals_by_natural_numbers",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Rounding_of_numbers;
