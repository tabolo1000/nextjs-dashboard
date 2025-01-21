import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Regular_and_irregular_fractions() {
    return (
        <>
            {/* Правильные и неправильные дроби */}
            <Section title="Правильные и неправильные дроби" parity>
                <p className="paragraph_base">
                    <Highlight>Правильная дробь</Highlight> — это дробь, у которой числитель меньше знаменателя. Такие дроби меньше единицы. Например, <Highlight>3/5</Highlight>, <Highlight>2/7</Highlight>, <Highlight>9/10</Highlight>.
                </p>
                <p className="paragraph_base">
                    <Highlight>Неправильная дробь</Highlight> — это дробь, у которой числитель больше или равен знаменателю. Такие дроби больше или равны единице. Например, <Highlight>7/4</Highlight>, <Highlight>5/3</Highlight>, <Highlight>9/9</Highlight>.
                </p>
                <h3 className="header_h3">Как преобразовать неправильную дробь в смешанное число:</h3>
                <ul className="unordered_list">
                    <li>
                        Разделите числитель на знаменатель. Результат деления без остатка — это целая часть.
                    </li>
                    <li>
                        Остаток от деления становится числителем, знаменатель остаётся тем же.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: <Highlight>7/4 = 1 (целая часть) и 3/4 (дробная часть)</Highlight>, так как 7 ÷ 4 = 1, остаток 3.
                </p>
                <h3 className="header_h3">Как преобразовать смешанное число в неправильную дробь:</h3>
                <ul className="unordered_list">
                    <li>
                        Умножьте целую часть на знаменатель дробной части.
                    </li>
                    <li>
                        Прибавьте числитель дробной части к результату умножения.
                    </li>
                    <li>
                        Запишите итог в числителе, знаменатель остаётся неизменным.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: <Highlight>1 3/4 = (1 × 4 + 3)/4 = 7/4</Highlight>.
                </p>
                <h3 className="header_h3">Интересные наблюдения:</h3>
                <ul className="unordered_list">
                    <li>
                        Все правильные дроби находятся между <Highlight>0</Highlight> и <Highlight>1</Highlight> на числовой прямой.
                    </li>
                    <li>
                        Неправильные дроби можно интерпретировать как целое число плюс часть целого, что делает их удобными для практических расчётов.
                    </li>
                </ul>
                <h3 className="header_h3">Примеры из жизни:</h3>
                <p className="paragraph_base">
                    Представьте пиццу, разрезанную на 8 частей:
                </p>
                <ul className="unordered_list">
                    <li>
                        Если вы съели 3 кусочка, это <Highlight>3/8</Highlight> — правильная дробь.
                    </li>
                    <li>
                        Если вы съели 10 кусочков (взяли больше одной пиццы), это <Highlight>10/8</Highlight>, или <Highlight>1 2/8 = 1 1/4</Highlight> — неправильная дробь, преобразованная в смешанное число.
                    </li>
                </ul>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/regular_and_irregular_fractions",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Regular_and_irregular_fractions;
