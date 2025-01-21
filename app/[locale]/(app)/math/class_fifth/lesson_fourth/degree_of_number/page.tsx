import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Degree_of_number() {
    return (
        <>
            <Section title="Степень числа. Квадрат и куб числа" parity>
                <p className="paragraph_base">
                    <Highlight>Степень числа</Highlight> — это краткая запись вида <Highlight>aⁿ</Highlight>, где:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>a</Highlight> — это основание степени, число, которое умножается само на себя.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>n</Highlight> — показатель степени, показывающий, сколько раз основание
                        используется в умножении.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Например, <Highlight>2⁴ = 2 × 2 × 2 × 2 = 16</Highlight>.
                </p>
                <h3 className="header_h3">Квадрат числа:</h3>
                <p className="paragraph_base">
                    <Highlight>Квадрат числа</Highlight> — это возведение числа во вторую степень:
                    <Highlight>a² = a × a</Highlight>. Название «квадрат» связано с геометрией: если сторона
                    квадрата равна <Highlight>a</Highlight>, то его площадь равна <Highlight>a × a</Highlight>.
                </p>
                <p className="paragraph_base">
                    Пример: <Highlight>3² = 3 × 3 = 9</Highlight>. Это значит, что площадь квадрата со стороной 3 равна 9.
                </p>
                <h3 className="header_h3">Куб числа:</h3>
                <p className="paragraph_base">
                    <Highlight>Куб числа</Highlight> — это возведение числа в третью степень:
                    <Highlight>a³ = a × a × a</Highlight>. Название «куб» тоже связано с геометрией: если сторона куба
                    равна <Highlight>a</Highlight>, то его объём равен <Highlight>a × a × a</Highlight>.
                </p>
                <p className="paragraph_base">
                    Пример: <Highlight>2³ = 2 × 2 × 2 = 8</Highlight>. Это значит, что объём куба со стороной 2 равен 8.
                </p>
                <h3 className="header_h3">Этимология:</h3>
                <p className="paragraph_base">
                    Слово <Highlight>"степень"</Highlight> происходит от латинского «gradus» (шаг, уровень).
                    Оно показывает, на каком «уровне» находится число в процессе умножения.
                </p>
                <p className="paragraph_base">
                    Слова <Highlight>"квадрат"</Highlight> и <Highlight>"куб"</Highlight> пришли из геометрии.
                    Квадрат — это фигура с четырьмя равными сторонами, а куб — это объёмная фигура с шестью квадратными гранями.
                </p>
                <h3 className="header_h3">Интересные факты:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Квадрат числа всегда больше или равен нулю, даже если число отрицательное. Например,
                        <Highlight>(−3)² = 9</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Куб числа сохраняет знак исходного числа. Например, <Highlight>(−2)³ = −8</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Применение:</h3>
                <p className="paragraph_base">
                    Возведение в степень используется в физике (например, расчёт площадей и объёмов),
                    информатике (для работы с большими числами), и в повседневной жизни — например, при
                    расчёте процентов или энергозатрат.
                </p>
            </Section>
        </>
    );
}

export default Degree_of_number;
