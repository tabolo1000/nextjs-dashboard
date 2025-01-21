import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function FractionsBasics() {
    return (
        <>
            {/* Деление дробей */}
            <Section title="Деление дробей" parity>
                <p className="paragraph_base">
                    <Highlight>Деление дробей</Highlight> — это процесс нахождения, во сколько раз одна дробь больше или меньше другой. Для деления одной дроби на другую используют простое правило:
                    первую дробь умножают на перевёрнутую вторую дробь (на её обратную).
                </p>
                <h3 className="header_h3">Правило деления дробей:</h3>
                <p className="paragraph_example">
                    Если требуется вычислить <Highlight>(a/b) ÷ (c/d)</Highlight>, то это преобразуется в <Highlight>(a/b) × (d/c)</Highlight>.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    <Highlight>(3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8</Highlight>. Ответ можно записать как десятичную дробь: <Highlight>1.875</Highlight>.
                </p>
                <h3 className="header_h3">Почему это работает?</h3>
                <p className="paragraph_base">
                    Деление дробей сводится к умножению на обратную величину, так как
                    <Highlight>(a ÷ b)</Highlight> эквивалентно <Highlight>(a × (1/b))</Highlight>.
                    Например, разделить на <Highlight>2/5</Highlight> — это то же самое, что умножить на <Highlight>5/2</Highlight>.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    В Древней Индии математики, такие как Брахмагупта, использовали похожие методы для работы с дробями ещё в VII веке, но запись дробей была горизонтальной, а не вертикальной, как в современной математике.
                </p>
                <h3 className="header_h3">Практический совет:</h3>
                <p className="paragraph_base">
                    Перед началом деления дробей попробуйте упростить их, чтобы сократить вычисления. Например:
                </p>
                <p className="paragraph_example">
                    <Highlight>(6/8) ÷ (3/4) = (3/4) ÷ (3/4) = 1</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/division_and_fractions",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default FractionsBasics;
