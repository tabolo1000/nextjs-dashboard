import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Decimal_notation_of_fractional_numbers() {
    return (
        <>
            {/* Десятичная запись дробных чисел */}
            <Section title="Десятичная запись дробных чисел" parity>
                <p className="paragraph_base">
                    <Highlight>Десятичная дробь</Highlight> — это дробь, у которой знаменатель является степенью числа 10 (например, 10, 100, 1000 и т.д.). Такие дроби записываются с использованием десятичной запятой. Например:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>1/10</Highlight> записывается как <Highlight>0,1</Highlight>.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>35/100</Highlight> записывается как <Highlight>0,35</Highlight>.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>567/1000</Highlight> записывается как <Highlight>0,567</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Как преобразовать обыкновенную дробь в десятичную:</h3>
                <ul className="unordered_list">
                    <li>Разделите числитель на знаменатель. Например, <Highlight>3/4 = 0,75</Highlight>.</li>
                    <li>Если знаменатель является степенью 10, просто переместите запятую в числителе влево на количество нулей. Например, <Highlight>25/100 = 0,25</Highlight>.</li>
                </ul>
                <h3 className="header_h3">Как преобразовать десятичную дробь в обыкновенную:</h3>
                <ul className="unordered_list">
                    <li>
                        Запишите число без запятой в числителе. Например, <Highlight>0,4 = 4/10</Highlight>.
                    </li>
                    <li>
                        В знаменателе укажите степень 10, соответствующую количеству знаков после запятой. Например, <Highlight>0,25 = 25/100</Highlight>.
                    </li>
                    <li>
                        Упростите дробь, если возможно. Например, <Highlight>25/100 = 1/4</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Примеры из жизни:</h3>
                <ul className="unordered_list">
                    <li>
                        Денежные расчёты: <Highlight>1 рубль 50 копеек = 1,50</Highlight>.
                    </li>
                    <li>
                        Измерения: длина 2,5 метра или вес 1,75 кг.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Десятичные дроби удобны для записи и вычислений, особенно в повседневной жизни. Они часто используются в финансах, измерениях и других сферах, где требуется высокая точность.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Не все десятичные дроби можно записать в виде конечных обыкновенных дробей. Например, <Highlight>1/3</Highlight> в десятичной записи выглядит как <Highlight>0,333...</Highlight> (бесконечная дробь).
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_seventh/comparison_of_decimals",
                nextExercise: "/math/class_fifth/lesson_seventh",
            }}/>

        </>
    );
}

export default Decimal_notation_of_fractional_numbers;
