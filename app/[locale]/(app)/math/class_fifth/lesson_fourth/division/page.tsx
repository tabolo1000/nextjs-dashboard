import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Division() {
    return (
        <>
            {/* Деление */}
            <Section title="Деление" parity>
                <p className="paragraph_base">
                    <Highlight>Деление</Highlight> — это операция, которая показывает, сколько раз
                    одно число (делитель) содержится в другом (делимом). Например:
                    <Highlight>20 ÷ 4 = 5</Highlight>, что означает, что число 4 помещается в число 20 ровно 5 раз.
                </p>
                <h3 className="header_h3">Виды деления:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Деление нацело:</Highlight> Когда результат деления — целое число.
                        Например: <Highlight>16 ÷ 4 = 4</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Деление с остатком:</Highlight> Когда результат деления — целое число (частное)
                        и остаток. Например, при делении <Highlight>17 ÷ 5</Highlight>: частное равно
                        <Highlight>3</Highlight>, а остаток — <Highlight>2</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Основные термины:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Делимое:</Highlight> Число, которое делят. Например, в примере <Highlight>20 ÷ 4</Highlight>
                        число 20 — это делимое.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Делитель:</Highlight> Число, на которое делят. В примере <Highlight>20 ÷ 4</Highlight>
                        число 4 — это делитель.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Частное:</Highlight> Результат деления. В примере <Highlight>20 ÷ 4</Highlight>
                        частное равно <Highlight>5</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Остаток:</Highlight> Часть делимого, которая остаётся после деления. Например,
                        при делении <Highlight>17 ÷ 5</Highlight> остаток равен <Highlight>2</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">История деления:</h3>
                <p className="paragraph_base">
                    Деление как математическая операция известно с древних времён. Египетские и вавилонские
                    математики использовали методы, похожие на современное деление, но записывали их словами или символами.
                    Символ "÷" появился только в XVI веке благодаря немецкому математику Иоганну Раху.
                </p>
                <h3 className="header_h3">Интересные факты:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        В большинстве современных языков программирования операция деления обозначается символом <Highlight>"/"</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Деление — это обратная операция умножению. Например, если <Highlight>6 × 4 = 24</Highlight>, то
                        <Highlight>24 ÷ 4 = 6</Highlight>.
                    </li>
                </ul>
            </Section>
        </>
    );
}

export default Division;
