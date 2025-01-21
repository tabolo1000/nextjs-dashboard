import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Equation() {
    return (
        <>
            {/* Уравнение */}
            <Section title="Уравнение" parity>
                <p className="paragraph_base">
                    <Highlight>Уравнение</Highlight> — это математическое равенство,
                    содержащее одну или несколько переменных. Например: <Highlight>2x + 5 = 11</Highlight>.
                    Переменные — это неизвестные числа, которые нужно найти.
                </p>
                <p className="paragraph_base">
                    <Highlight>Решение уравнения</Highlight> заключается в нахождении таких значений переменных,
                    при которых равенство становится истинным. Например, для уравнения
                    <Highlight>5x − 7 = 18</Highlight> значение переменной <Highlight>x</Highlight> равно <Highlight>5</Highlight>,
                    так как <Highlight>5 × 5 − 7 = 18</Highlight>.
                </p>
                <p className="paragraph_base">
                    <Highlight>Корень уравнения</Highlight> — это значение переменной, которое делает уравнение истинным.
                    Например, в уравнении <Highlight>x² − 4 = 0</Highlight> корни — это числа <Highlight>2</Highlight> и <Highlight>−2</Highlight>.
                </p>
                <h3 className="header_h3">История и важные аспекты:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Первые уравнения появились в древнем Египте и Месопотамии около 2000 лет до нашей эры. Тогда их записывали словами.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Современная алгебраическая символика начала формироваться в работах учёных эпохи Возрождения. Например, буквы <Highlight>x</Highlight>, <Highlight>y</Highlight>, <Highlight>z</Highlight> начали использовать благодаря французскому математику Франсуа Виету.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Немецкий математик Карл Гаусс внёс огромный вклад в развитие уравнений. Его метод решения квадратных уравнений и работа над системами уравнений стали основой современной математики.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Важное открытие Карла Гаусса — его работа над решением систем линейных уравнений, что связано с матрицами и методом Гаусса.
                </p>
                <h3 className="header_h3">Позиционная система счисления:</h3>
                <p className="paragraph_base">
                    Современные уравнения невозможно представить без использования чисел, которые
                    записываются в позиционной системе счисления. Это система, где значение цифры
                    зависит от её позиции (например, в числе 345: 3 сотни, 4 десятка, 5 единиц).
                </p>
                <p className="paragraph_base">
                    Позиционная система была изобретена в Индии и распространилась через арабских математиков в Европу.
                    Её использование стало фундаментом для всех современных вычислений.
                </p>
            </Section>
        </>
    );
}

export default Equation;
