import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function ArithmeticMean() {
    return (
        <>
            {/* Среднее арифметическое */}
            <Section title="Среднее арифметическое" parity>
                <p className="paragraph_base">
                    <Highlight>Среднее арифметическое</Highlight> — это показатель, который
                    вычисляется как сумма всех чисел, делённая на их количество. Этот
                    показатель позволяет определить "среднее" значение набора данных.
                </p>

                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    Найдём среднее арифметическое чисел <Highlight>2,4</Highlight>, <Highlight>3,6</Highlight> и <Highlight>4,8</Highlight>.
                </p>
                <ul className="unordered_list">
                    <li>
                        Суммируем числа: <Highlight>2,4 + 3,6 + 4,8 = 10,8</Highlight>.
                    </li>
                    <li>
                        Делим сумму на количество чисел: <Highlight>10,8 ÷ 3 = 3,6</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Ответ: <Highlight>Среднее арифметическое = 3,6</Highlight>.
                </p>

                <h3 className="header_h3">Применение:</h3>
                <p className="paragraph_base">
                    Среднее арифметическое широко используется в статистике и
                    повседневной жизни, чтобы понять, как данные распределены вокруг
                    центрального значения. Например, оно помогает оценить средний балл в
                    классе, среднюю температуру за неделю или средние расходы за месяц.
                </p>

                <h3 className="header_h3">Визуализация:</h3>
                <p className="paragraph_base">
                    Представьте, что у вас есть три стакана с разным количеством воды. Чтобы
                    сделать их равными, вы выливаете воду из всех стаканов в общий сосуд, а
                    затем разливаете её обратно поровну. Это и есть аналогия среднего
                    арифметического: равномерное распределение общей суммы.
                </p>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_ninth/microcalculator",
                nextExercise: "/math/class_fifth/lesson_eighth",
            }}/>
        </>
    );
}

export default ArithmeticMean;
