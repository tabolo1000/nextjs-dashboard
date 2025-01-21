import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Adding_and_subtracting_fractions() {
    return (
        <>
            {/* Сложение и вычитание дробей с одинаковыми знаменателями */}
            <Section title="Сложение и вычитание дробей с одинаковыми знаменателями" parity>
                <p className="paragraph_base">
                    <Highlight>Сложение и вычитание дробей</Highlight> с одинаковыми знаменателями осуществляется путём выполнения операции только над числителями, при этом знаменатель остаётся неизменным.
                </p>
                <h3 className="header_h3">Пошаговый процесс:</h3>
                <ol className="ordered_list">
                    <li className="ordered_list_li paragraph_example">
                        Убедитесь, что знаменатели у дробей одинаковые.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Выполните сложение или вычитание числителей.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Знаменатель оставьте неизменным.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Если это возможно, сократите дробь до её наименьшего вида.
                    </li>
                </ol>
                <h3 className="header_h3">Примеры:</h3>
                <p className="paragraph_example">
                    <Highlight>Сложение:</Highlight> <br />
                    <Highlight>2/7 + 3/7 = (2 + 3)/7 = 5/7</Highlight>.
                </p>
                <p className="paragraph_example">
                    <Highlight>Вычитание:</Highlight> <br />
                    <Highlight>5/8 − 3/8 = (5 − 3)/8 = 2/8 = 1/4</Highlight>.
                </p>
                <h3 className="header_h3">Обратите внимание:</h3>
                <p className="paragraph_base">
                    Если знаменатели дробей разные, сначала нужно привести дроби к общему знаменателю. Это будет рассмотрено в следующем разделе.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Операции с дробями были впервые формализованы древними египетскими математиками, которые использовали особую систему записи дробей, основанную на делении единицы.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/adding_and_subtracting_fractions",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Adding_and_subtracting_fractions;
