import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Properties_of_addition_and_subtraction() {
    return (
        <>
            {/* Буквенная запись свойств сложения и вычитания */}
            <Section title="Буквенная запись свойств сложения и вычитания" parity>
                <h3 className="header_h3">Свойства сложения:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Переместительное свойство (коммутативность):</Highlight>
                        Это свойство показывает, что от перестановки мест слагаемых сумма не меняется: <strong>a + b = b + a</strong>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Сочетательное свойство (ассоциативность):</Highlight>
                        Скобки в выражении можно переставлять, и результат останется прежним:
                        <strong>(a + b) + c = a + (b + c)</strong>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Свойство нуля (нейтральный элемент):</Highlight>
                        Если к числу прибавить ноль, значение числа не изменится:
                        <strong>a + 0 = a</strong>.
                    </li>
                </ul>
                <h3 className="header_h3">Свойства вычитания:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Не обладает переместительным свойством:</Highlight>
                        Например, <strong>5 − 3 ≠ 3 − 5</strong>. Это значит, что порядок чисел в вычитании важен.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Не обладает ассоциативным свойством:</Highlight>
                        Например, <strong>(10 − 5) − 2 ≠ 10 − (5 − 2)</strong>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Связь с сложением:</Highlight>
                        Вычитание можно выразить через сложение с противоположным числом:
                        <strong>a − b = a + (−b)</strong>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Сложение обладает важными математическими свойствами, такими как
                    коммутативность (переместительное свойство), ассоциативность (сочетательное свойство)
                    и наличие нейтрального элемента — нуля. Однако, вычитание не обладает
                    переместительностью и ассоциативностью, что делает его уникальной операцией.
                </p>
            </Section>
        </>
    );
}

export default Properties_of_addition_and_subtraction;
