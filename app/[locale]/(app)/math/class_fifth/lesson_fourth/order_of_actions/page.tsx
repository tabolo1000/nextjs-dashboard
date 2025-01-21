import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import Link from "next/link";

export function Order_of_actions() {
    return (
        <>
            {/* Порядок выполнения действий */}
            <Section title="Порядок выполнения действий" parity>
                <p className="paragraph_base">
                    При вычислении математических выражений очень важно соблюдать
                    <Highlight>порядок выполнения действий</Highlight>. Этот порядок
                    помогает избежать ошибок и получить правильный результат.
                </p>
                <h3 className="header_h3">Основные правила:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>1. Скобки:</Highlight> Сначала выполняются действия в скобках.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>2. Умножение и деление:</Highlight> Затем выполняются умножение и деление,
                        причём порядок слева направо.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>3. Сложение и вычитание:</Highlight> В последнюю очередь выполняются
                        сложение и вычитание, также слева направо.
                    </li>
                </ul>
                <h3 className="header_h3">Пример вычисления:</h3>
                <p className="paragraph_base">
                    Рассмотрим выражение <Highlight>2 + 3 × (5 − 2)</Highlight>. Чтобы найти
                    результат, нужно строго следовать правилам:
                </p>
                <ol className="ordered_list">
                    <li className="ordered_list_li paragraph_example">
                        Сначала вычисляем то, что в скобках: <Highlight>5 − 2 = 3</Highlight>.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        Затем выполняем умножение: <Highlight>3 × 3 = 9</Highlight>.
                    </li>
                    <li className="ordered_list_li paragraph_example">
                        И наконец, сложение: <Highlight>2 + 9 = 11</Highlight>.
                    </li>
                </ol>
                <h3 className="header_h3">Этимология термина:</h3>
                <p className="paragraph_base">
                    Слово <Highlight>"порядок"</Highlight> произошло от латинского "ordo", что означает
                    «расположение» или «структура». Математика требует строгого порядка действий, чтобы
                    исключить неоднозначности.
                </p>
                <h3 className="header_h3">Историческая справка:</h3>
                <p className="paragraph_base">
                    Правила порядка выполнения действий сформировались в процессе развития математики.
                    Современные обозначения, такие как круглые скобки, появились в XVI веке благодаря работам
                    математиков, таких как Кристоф Рудольф. До этого для упрощения сложных вычислений использовали
                    слова или надстрочные символы.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    В некоторых странах, например, в США и Канаде, правила порядка выполнения действий
                    часто объясняются с помощью мнемонической фразы <Highlight>PEMDAS</Highlight>, которая
                    означает Parentheses (скобки), Exponents (степени), Multiplication (умножение), Division
                    (деление), Addition (сложение) и Subtraction (вычитание).
                </p>
                <p className="paragraph_base">
                    Для запоминания можно использовать такую фразу: <Highlight>«Please Excuse My Dear Aunt Sally»</Highlight>
                    (Пожалуйста, извините мою дорогую тётю Салли).
                </p>
                <h3 className="header_h3">Для дальнейшего изучения:</h3>
                <p className="paragraph_base">
                    Узнайте больше о математических выражениях и других правилах вычислений в разделе
                    <Link href="/math/topics/expressions">"Математические выражения"</Link>.
                </p>
            </Section>
        </>
    );
}

export default Order_of_actions;
