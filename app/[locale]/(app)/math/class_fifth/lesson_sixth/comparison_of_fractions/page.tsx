import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Comparison_of_fractions() {
    return (
        <>
            {/* Сравнение дробей */}
            <Section title="Сравнение дробей" parity>
                <p className="paragraph_base">
                    <Highlight>Сравнение дробей</Highlight> — это определение, какая из двух дробей больше, меньше или равна другой.
                    Для этого используют следующие правила:
                </p>
                <h3 className="header_h3">1. Дроби с одинаковыми знаменателями</h3>
                <p className="paragraph_base">
                    Если знаменатели одинаковы, сравнивают числители. Дробь с большим числителем больше.
                    Например: <Highlight>3/7</Highlight> меньше <Highlight>5/7</Highlight>, так как <Highlight>3 {"<"} 5</Highlight>.
                </p>
                <h3 className="header_h3">2. Дроби с разными знаменателями</h3>
                <p className="paragraph_base">
                    Если знаменатели разные, дроби приводят к общему знаменателю. После этого сравнивают числители.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    Сравним <Highlight>2/3</Highlight> и <Highlight>3/5</Highlight>.
                </p>
                <ol className="ordered_list">
                    <li className="ordered_list_li paragraph_example">
                        Найдём общий знаменатель: <Highlight>15</Highlight>.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Преобразуем дроби: <Highlight>2/3 = 10/15</Highlight> и <Highlight>3/5 = 9/15</Highlight>.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Сравним числители: <Highlight>10 {" > "} 9</Highlight>.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Ответ: <Highlight>2/3 {" > "} 3/5</Highlight>.
                    </li>
                </ol>
                <h3 className="header_h3">3. Сравнение дробей с единицей</h3>
                <p className="paragraph_base">
                    Дробь меньше 1, если её числитель меньше знаменателя (например, <Highlight>3/5 {"<"} 1</Highlight>).
                    Дробь больше 1, если её числитель больше знаменателя (например, <Highlight>7/4 {">"} 1</Highlight>).
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Сравнение дробей широко использовалось в древности для дележа земли, урожая или других ресурсов. Например, в Древнем Египте дроби записывали в виде суммы дробей с числителем 1.
                </p>
                <h3 className="header_h3">Совет:</h3>
                <p className="paragraph_base">
                    Чтобы быстро сравнить дроби с разными знаменателями, используйте "перекрёстное умножение".
                    Для <Highlight>2/3</Highlight> и <Highlight>3/5</Highlight>:
                    умножьте числитель первой дроби на знаменатель второй (<Highlight>2 × 5 = 10</Highlight>) и числитель второй дроби на знаменатель первой (<Highlight>3 × 3 = 9</Highlight>).
                    Сравните результаты: <Highlight>10 {" > "} 9</Highlight>, значит <Highlight>2/3 {" > "} 3/5</Highlight>.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/comparison_of_fractions",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Comparison_of_fractions;
