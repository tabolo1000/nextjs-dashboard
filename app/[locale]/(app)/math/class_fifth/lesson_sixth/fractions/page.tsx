import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export function Fractions() {
    return (
        <>
            {/* Доли и обыкновенные дроби */}
            <Section title="Доли и обыкновенные дроби" parity>
                <p className="paragraph_base">
                    <Highlight>Доля</Highlight> — это часть целого. Например, если торт разделён на 8 равных частей, то каждая часть — это одна восьмая <Highlight>(1/8)</Highlight>.
                </p>
                <p className="paragraph_base">
                    <Highlight>Обыкновенная дробь</Highlight> — это числовая запись, показывающая, какую долю от целого мы рассматриваем. Она состоит из двух частей: <Highlight>числителя</Highlight> и <Highlight>знаменателя</Highlight>, разделённых дробной чертой: <Highlight>a/b</Highlight>, где:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>a</Highlight> — числитель, показывает, сколько частей взято.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>b</Highlight> — знаменатель, показывает, на сколько частей разделено целое.
                    </li>
                </ul>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    Дробь <Highlight>3/5</Highlight> означает, что целое разделено на 5 равных частей, из которых взяты 3.
                </p>
                <h3 className="header_h3">Интересные факты:</h3>
                <p className="paragraph_base">
                    История дробей уходит корнями в Древний Египет. Там дроби записывали только с числителем 1, например, <Highlight>1/2</Highlight> или <Highlight>1/3</Highlight>. Остальные дроби выражались как сумма таких частей: <Highlight>2/3</Highlight> записывалась как <Highlight>1/2 + 1/6</Highlight>.
                </p>
                <h3 className="header_h3">Практическое применение:</h3>
                <p className="paragraph_base">
                    Доли используются в повседневной жизни. Например:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">В рецептах: добавьте <Highlight>1/4</Highlight> стакана сахара.</li>
                    <li className="unordered_list_li">При делении денег: разделить счёт поровну между <Highlight>4</Highlight> людьми.</li>
                    <li className="unordered_list_li">В измерениях: длина доски <Highlight>3/4</Highlight> метра.</li>
                </ul>
            </Section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_sixth/fractions",
                nextExercise: "/math/class_fifth/lesson_sixth",
            }}/>
        </>
    );
}

export default Fractions;
