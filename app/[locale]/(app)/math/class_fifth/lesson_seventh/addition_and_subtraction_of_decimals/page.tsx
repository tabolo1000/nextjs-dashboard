import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Addition_and_subtraction_of_decimals() {
    return (
        <>
            {/* Сложение и вычитание десятичных дробей */}
            <Section title="Сложение и вычитание десятичных дробей" parity>
                <p className="paragraph_base">
                    Для сложения и вычитания десятичных дробей нужно записать их одну под другой, выравнивая по запятой. После этого действие выполняется, как с обычными числами.
                </p>

                <h3 className="header_h3">Пример 1: Сложение</h3>
                <p className="paragraph_example">
                    Рассмотрим пример: <Highlight>2,35 + 1,4</Highlight>.
                </p>
                <ul className="unordered_list">
                    <li>Выравниваем числа по запятой: <Highlight>2,35</Highlight> и <Highlight>1,40</Highlight>.</li>
                    <li>Складываем: <Highlight>2,35 + 1,40 = 3,75</Highlight>.</li>
                </ul>

                <h3 className="header_h3">Пример 2: Вычитание</h3>
                <p className="paragraph_example">
                    Рассмотрим пример: <Highlight>5,6 − 2,45</Highlight>.
                </p>
                <ul className="unordered_list">
                    <li>Выравниваем числа по запятой: <Highlight>5,60</Highlight> и <Highlight>2,45</Highlight>.</li>
                    <li>Вычитаем: <Highlight>5,60 − 2,45 = 3,15</Highlight>.</li>
                </ul>

                <h3 className="header_h3">Советы:</h3>
                <ul className="unordered_list">
                    <li>
                        Если числа имеют разное количество знаков после запятой, допишите недостающие нули в конце меньшего числа. Это упрощает вычисления.
                    </li>
                    <li>
                        После выполнения действия проверьте, что запятая в результате стоит на своём месте.
                    </li>
                </ul>

                <h3 className="header_h3">Пример из жизни:</h3>
                <p className="paragraph_base">
                    Вы пошли в магазин и купили продукты на <Highlight>12,75</Highlight> рубля. У вас было <Highlight>20,00</Highlight> рублей. Чтобы узнать сдачу, вычитаем: <Highlight>20,00 − 12,75 = 7,25</Highlight> рубля.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_seventh/rounding_of_numbers",
                nextExercise: "/math/class_fifth/lesson_seventh",
            }}/>
        </>
    );
}

export default Addition_and_subtraction_of_decimals;
