import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Mixed_numbers() {
    return (
        <>
            {/* Смешанные числа */}
            <Section title="Смешанные числа" parity>
                <p className="paragraph_base">
                    <Highlight>Смешанное число</Highlight> — это число, которое включает в себя целую часть и дробную часть. Например, <Highlight>2 3/5</Highlight>, где <Highlight>2</Highlight> — это целая часть, а <Highlight>3/5</Highlight> — дробная часть.
                </p>
                <h3 className="header_h3">Как преобразовать смешанное число в неправильную дробь:</h3>
                <p className="paragraph_base">
                    Чтобы преобразовать смешанное число в неправильную дробь:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Умножьте целую часть на знаменатель дробной части.
                    </li>
                    <li className="unordered_list_li">
                        Прибавьте числитель дробной части.
                    </li>
                    <li className="unordered_list_li">
                        Результат запишите в числителе, оставив знаменатель без изменений.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: <Highlight>2 3/5 = (2 × 5 + 3)/5 = 13/5</Highlight>.
                </p>
                <h3 className="header_h3">Как преобразовать неправильную дробь в смешанное число:</h3>
                <p className="paragraph_base">
                    Чтобы преобразовать неправильную дробь в смешанное число:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Разделите числитель на знаменатель. Целая часть — это результат деления без остатка.
                    </li>
                    <li className="unordered_list_li">
                        Остаток от деления станет числителем, а знаменатель остаётся тем же.
                    </li>
                </ul>
                <p className="paragraph_example">
                    Пример: <Highlight>13/5 = 2 3/5</Highlight> (так как 13 ÷ 5 = 2, остаток 3).
                </p>
                <h3 className="header_h3">Интересные факты:</h3>
                <p className="paragraph_base">
                    Смешанные числа часто используются в повседневной жизни, например:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Рецепты: «Добавьте <Highlight>1 1/2</Highlight> стакана муки».
                    </li>
                    <li className="unordered_list_li">
                        Строительство: «Доска длиной <Highlight>2 3/4</Highlight> метра».
                    </li>
                    <li className="unordered_list_li">
                        Часы: «Прошло <Highlight>1 1/4</Highlight> часа с начала встречи».
                    </li>
                </ul>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/mixed_numbers",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Mixed_numbers;
