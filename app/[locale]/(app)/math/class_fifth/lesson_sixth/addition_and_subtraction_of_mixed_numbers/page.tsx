import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Addition_and_subtraction_of_mixed_numbers() {
    return (
        <>
            {/* Сложение и вычитание смешанных чисел */}
            <Section title="Сложение и вычитание смешанных чисел" parity>
                <p className="paragraph_base">
                    <Highlight>Смешанные числа</Highlight> — это числа, состоящие из целой и дробной частей, например, <Highlight>2 1/3</Highlight>.
                    Чтобы сложить или вычесть такие числа, выполняйте действия поэтапно.
                </p>
                <h3 className="header_h3">Пошаговый процесс:</h3>
                <ol className="ordered_list">
                    <li className="ordered_list_li paragraph_example">
                        Сложите или вычтите целые части отдельно.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Сложите или вычтите дробные части отдельно. Если знаменатели разные, приведите их к общему знаменателю.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Если сумма дробной части больше или равна единице, преобразуйте её в смешанное число и добавьте целую часть к результату.
                    </li>
                </ol>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    Рассмотрим пример сложения: <Highlight>2 1/3 + 1 2/3</Highlight>.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Сложите целые части: <Highlight>2 + 1 = 3</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Сложите дробные части: <Highlight>1/3 + 2/3 = 3/3 = 1</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Добавьте результат к целой части: <Highlight>3 + 1 = 4</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Пример вычитания:</h3>
                <p className="paragraph_example">
                    Вычтем: <Highlight>4 2/5 − 2 3/5</Highlight>.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Вычтите целые части: <Highlight>4 − 2 = 2</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Вычтите дробные части: <Highlight>2/5 − 3/5 = −1/5</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Корректируйте результат: займите 1 из целой части, добавив её к дробной. <br />
                        <Highlight>1 5/5 − 1/5 = 1 4/5</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Ответ: <Highlight>1 4/5</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Совет:</h3>
                <p className="paragraph_base">
                    Всегда проверяйте, можно ли сократить дробь в финальном результате.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Смешанные числа использовались ещё древними греками, которые записывали их как комбинацию целого числа и дроби. Этот способ записи упрощает работу с реальными величинами, такими как длины или объёмы.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/addition_and_subtraction_of_mixed_numbers",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Addition_and_subtraction_of_mixed_numbers;
