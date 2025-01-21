import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Multiplication_of_natural_numbers() {
    return (
        <>
            {/* Умножение натуральных чисел и его свойства */}
            <Section title="Умножение натуральных чисел и его свойства" parity>
                <p className="paragraph_base">
                    <Highlight>Умножение</Highlight> — это математическая операция, которая
                    заменяет повторное сложение одинаковых чисел. Например, если сложить 4 три раза
                    (4 + 4 + 4), результат будет таким же, как и при умножении: <Highlight>3 × 4 = 12</Highlight>.
                </p>
                <h3 className="header_h3">Свойства умножения:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Переместительное свойство (коммутативность):</Highlight>
                        Порядок множителей не влияет на произведение: <strong>a × b = b × a</strong>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Сочетательное свойство (ассоциативность):</Highlight>
                        Результат не меняется, если сначала перемножить первые два числа, а затем
                        результат умножить на третье: <strong>(a × b) × c = a × (b × c)</strong>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Распределительное свойство:</Highlight>
                        Умножение числа на сумму равно сумме произведений этого числа
                        на каждое слагаемое: <strong>a × (b + c) = a × b + a × c</strong>.
                    </li>
                </ul>
                <h3 className="header_h3">Происхождение и значение терминов:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Произведение:</Highlight>
                        Это слово произошло от древнерусского "производити", что означает «создавать, производить».
                        Оно указывает на результат работы, в данном случае — умножения.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Множимое:</Highlight> Это число, которое умножают.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Множитель:</Highlight> Это число, на которое умножают.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        В родительном падеже множественное число слова "множитель" произносится
                        как <Highlight>"множителей"</Highlight>, а "множимое" — как <Highlight>"множимых"</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Исторический контекст:</h3>
                <p className="paragraph_base">
                    Операция умножения появилась ещё в Древнем Египте. Египетские математики использовали метод
                    "удвоения", где числа умножались путём сложения. Символ умножения "×" впервые появился
                    в работах английского математика Уильяма Отреда в 1631 году. Однако символ «точка»
                    (•) или просто отсутствие символа между числами чаще используется сегодня, особенно в алгебре.
                </p>
            </Section>
        </>
    );
}

export default Multiplication_of_natural_numbers;
