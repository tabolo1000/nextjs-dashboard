import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import React from "react";
import Term from "@/app/ui/math/components/сopywriting/Term";


export default function Number_comparison () {
    return (
        <div className="main_block_task">
            {/* Заголовок */}
            <h1 className="header_h1">
                Меньше или больше: Путешествие в мир чисел
            </h1>

            {/* Введение */}
            <section className="mb-10">
                <p className="paragraph">
                    Представьте, что каждая цифра на координатном луче — это остановка на бесконечном числовом пути. Этот путь создаёт удивительное математическое пространство, где каждое число имеет своё место и своё значение. Давайте погрузимся в этот мир и узнаем, как числа взаимодействуют друг с другом!
                </p>
            </section>

            {/* Счёт по порядку */}
            <section className="mb-10">
                <h2 className="header_h2_odd">Считаем по порядку</h2>
                <p className="paragraph">
                    Когда мы считаем числа по порядку, у нас получается последовательность: <strong>1, 2, 3, 4, 5, 6, 7, 8, 9, ...</strong>
                    Каждое следующее число больше предыдущего. Но как узнать, какое число больше, а какое меньше?
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li><Term>Меньше</Term> — это то число, которое при счёте встречается раньше.</li>
                    <li><Term>Больше</Term> — это число, которое при счёте встречается позже.</li>
                </ul>
                <p className="paragraph">
                    Например, <strong>4 меньше 7</strong>, потому что 4 появляется раньше в счёте, чем 7. А <strong>7 больше 4</strong>, потому что оно позже.
                </p>
            </section>

            {/* Координатный луч */}
            <section className="mb-10">
                <h2 className="header_h2_even">2. Координатный луч: где живут числа</h2>
                <p className="paragraph">
                    <Term right="right">Координатный луч</Term> — это линия, где числа выстроены по порядку, начиная с <strong>0</strong> и уходя далеко вправо:
                </p>
                <div className="flex justify-center mb-6">
                    <img
                        src="path_to_number_line_image" // Замените на реальный путь к изображению координатного луча
                        alt="Координатный луч"
                        className="w-2/3 rounded-lg shadow-md"
                    />
                </div>
                <p className="paragraph">
                    Например, на рисунке видно, что точка <strong>A(4)</strong> лежит <strong>левее</strong> точки <strong>B(7)</strong>. Это значит, что <strong>4 меньше 7</strong>.
                    Запомните: на координатном луче <strong>меньшее число всегда находится левее</strong>, а <strong>большее — правее</strong>.
                </p>
            </section>

            {/* Как записать неравенства */}
            <section className="mb-10 w-full">
                <h2 className="header_h2_odd">3. Как записать неравенства</h2>
                <p className="paragraph">
                    Когда мы сравниваем два числа, мы можем записывать их отношения с помощью знаков:
                </p>
                <ul className="unordered_list">
                    <li><strong>&lt;</strong> — меньше</li>
                    <li><strong>&gt;</strong> — больше</li>
                </ul>
                <p className="paragraph">
                    Например:
                    <br />
                    <strong>4 &lt; 7</strong> — это значит, что 4 меньше 7.
                    <br />
                    <strong>8 &gt; 3</strong> — это значит, что 8 больше 3.
                </p>
            </section>

            {/* Сравнение многозначных чисел */}
            <section className="mb-10">
                <h2 className="header_h2_even">4. Сравнение многозначных чисел</h2>
                <p className="paragraph">
                    Теперь давайте посмотрим на многозначные числа. Как сравнить, допустим, <strong>2305</strong> и <strong>984</strong>?
                </p>
                <ol className="order_list">
                    <li><strong>2305 больше 984</strong>, потому что 2305 — это четырёхзначное число, а 984 — трёхзначное.</li>
                    <li>Когда мы сравниваем многозначные числа, важен <Term right={"right"}>разряд</Term>. Чем больше разрядов у числа, тем оно больше.</li>
                </ol>
                <p className="paragraph">
                    Например: <strong>2305 &gt; 1178</strong>, потому что в первом числе больше тысяч.
                    Если два числа имеют одинаковое количество разрядов, нужно сравнивать их по каждой цифре слева направо.
                </p>
            </section>

            {/* Сравнение отрезков */}
            <section className="mb-10 w-full">
                <h2 className="header_h2_odd">5. Как сравнивать отрезки</h2>
                <p className="paragraph">
                    Иногда мы сравниваем не только числа, но и <Term>отрезки</Term> на координатном луче. Например:
                </p>
                <ul className="unordered_list">
                    <li>Если отрезок <strong>AB</strong> короче отрезка <strong>CD</strong>, то пишем: <strong>AB &lt; CD</strong>.</li>
                    <li>Если отрезок <strong>AB</strong> длиннее, то пишем: <strong>AB &gt; CD</strong>.</li>
                    <li>Если они равны по длине, то: <strong>AB = CD</strong>.</li>
                </ul>
            </section>

            {/* Числовые системы */}
            <section className="mb-10">
                <h2 className="header_h2_even">6. Числовые системы: Как люди придумывали числа</h2>
                <p className="paragraph">
                    В древние времена люди записывали числа по-разному. Например, в Древней Руси числа обозначались буквами с особым знаком — <Term right={"right"}>титло(~)</Term>.
                    Это выглядело так:
                </p>
                <p className="paragraph">
                    Первые девять букв обозначали единицы, следующие девять — десятки, а последние девять — сотни. Число десять тысяч называлось <Term right={"right"}>тьма</Term>.
                </p>
                <p className="paragraph">
                    А в Европе около 1200 года арабская система записи чисел заменила старые системы. Эти цифры, которые мы называем <Term right={"right"}>арабскими</Term>, на самом деле происходят от <Term right={"right"}>индийских</Term>.
                </p>
            </section>

            {/* Десятичная и римская системы */}
            <section className="mb-10 w-full">
                <h2 className="header_h2_odd">7. Десятичная и римская системы</h2>
                <p className="paragraph">
                    Сегодня мы используем <strong>десятичную систему счисления</strong>, которая основана на числе <strong>10</strong>. Например:
                </p>
                <ul className="unordered_list">
                    <li><strong>17</strong> — это «семь на десяти», то есть 10 + 7.</li>
                    <li><strong>70</strong> — это «семь десятков».</li>
                    <li><strong>700</strong> — это «семь сотен».</li>
                </ul>
                <p className="paragraph">
                    До сих пор мы используем и <Term right={"right"}>римские цифры</Term>, которые применялись в Древнем Риме. Вот основные римские цифры:
                </p>
                <table className="table_info">
                    <thead>
                    <tr>
                        <th className="table_header">Римская цифра</th>
                        <th className="table_header">Значение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="table_data_cell">I</td>
                        <td className="table_data_cell">1</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">V</td>
                        <td className="table_data_cell">5</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">X</td>
                        <td className="table_data_cell">10</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">L</td>
                        <td className="table_data_cell">50</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">C</td>
                        <td className="table_data_cell">100</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">D</td>
                        <td className="table_data_cell">500</td>
                    </tr>
                    <tr>
                        <td className="table_data_cell">M</td>
                        <td className="table_data_cell">1000</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            {/* Заключение */}
            <section className="mb-10">
                <h2 className="header_h2_even">Заключение</h2>
                <p className="paragraph">
                    Числа рассказывают нам, как устроен мир. От древних систем записи до современных неравенств и координатных лучей — всё это помогает нам упорядочить и понять окружающую среду.
                </p>
                <p className="paragraph">
                    Каждое число, будь то 1 или 1000, имеет своё место в этом удивительном мире. И чем глубже мы погружаемся в его изучение, тем больше открываем для себя.
                </p>
            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_third/addition_numbers",
                nextExercise: "/math/class_fifth/lesson_third/beam/beam",
            }}/>
        </div>
    );
};

