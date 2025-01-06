import {Highlight} from "@/app/ui/math/components/Highlight";
import {CustomTable} from "@/app/ui/math/components/CustomTable";
import {Section} from "@/app/ui/math/components/Section";
import React from "react";


export function SerialVsParallel() {
    return <>
        <Section
            title="Что происходит при соединении батареек последовательно и параллельно?"
            aria-labelledby="battery-connection-title"
            parity
        >
            <p className="paragraph_example ">
                <Highlight>Батарейки</Highlight> — это источник электроэнергии, работающий за счёт химических реакций.
                Их ёмкость измеряется в миллиампер-часах (мА·ч), а напряжение — в вольтах (В).
                Например, стандартная батарейка AA имеет напряжение 1,5 В и ёмкость около 2000 мА·ч.
                Соединяя батарейки, мы можем менять параметры выходной энергии. Рассмотрим два основных типа соединений:
                <span className={"second_priority_content"}>  последовательно </span> и <span className={"second_priority_content"}> параллельно</span>.
            </p>


            {/* Последовательное соединение */}
            <article aria-labelledby="series-connection">
                <header>
                    <h3 className="header_h3">
                        1. Последовательное соединение
                    </h3>
                </header>
                <p className="paragraph_base">
                    При последовательном соединении положительный контакт одной батарейки соединяется с отрицательным контактом следующей.
                    Такой способ соединения увеличивает напряжение, но не изменяет ёмкость.
                    Рассмотрим пример: если у нас есть три батарейки AA, каждая с напряжением 1,5 В и ёмкостью 2000 мА·ч:
                </p>
                <ul className="unordered_list">
                    <li className={"unordered_list-li paragraph_example"}>
                        <span className={"second_priority_content "}>Напряжение:</span> Суммируется. Например, 1,5 В × 3 = <span className={"second_priority_content"}>4,5 В</span>.
                    </li>
                    <li className={"unordered_list-li paragraph_example"}>
                        <span className={"second_priority_content "} >Ёмкость:</span> Остаётся неизменной. Например, 2000 мА·ч.
                    </li>
                    <li className={"unordered_list-li paragraph_example"}>
                        <span className={"second_priority_content "} >Сила тока:</span> Остаётся такой же, как у одной батарейки.
                    </li>
                </ul>

                <header>
                    <h4 className="header_h4">
                        Как ток проходит через батарейки при последовательном соединении?
                    </h4>
                </header>
                <p className="paragraph_base">
                    При последовательном соединении ток движется через батарейки каскадно, проходя через их слои и электролит. Например:
                </p>
                <ul className="unordered_list">
                    <li className={"unordered_list-li paragraph_example"}>
                        Электроны покидают отрицательный электрод (анод) первой батарейки.
                    </li>
                    <li className={"unordered_list-li paragraph_example"}>
                        Затем они проходят через внешний проводник, подключённый к положительному электроду (катоду) следующей батарейки.
                    </li>
                    <li className={"unordered_list-li paragraph_example"}>
                        Внутри батарейки ток проходит через <span className={"second_priority_content"}>электролит</span>, где происходят химические реакции.
                        Например, для батарейки AA это переноса ионов между анодом и катодом.
                    </li>
                    <li className={"unordered_list-li paragraph_example"}>
                        На выходе из последней батарейки ток подаётся на подключённое устройство.
                    </li>
                </ul>
                <p className="paragraph_base">
                    В результате мы получаем итоговое напряжение, равное сумме всех батареек, но с той же ёмкостью. Например,
                    три батарейки AA дадут напряжение <span className={"second_priority_content"}>4,5 В</span>, достаточное для питания светодиодной лампы мощностью 1 Вт.
                </p>
            </article>

            {/* Параллельное соединение */}
            <article aria-labelledby="parallel-connection">
                <h3 className="header_h3">2. Параллельное соединение </h3>
                <p className="paragraph_base">
                    При параллельном соединении все положительные контакты батареек соединяются вместе, как и отрицательные.
                    Такой способ соединения увеличивает ёмкость, сохраняя напряжение. Например, если у нас есть три батарейки AA:
                </p>
                <ul className="unordered_list ">
                    <li className="unordered_list_li paragraph_example">
                        <span className={"second_priority_content"}>Напряжение:</span> Остаётся таким же. Например, 1,5 В.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <span className={"second_priority_content"} >Ёмкость:</span> Суммируется. Например, 2000 мА·ч × 3 = <span className={"second_priority_content"}>6000 мА·ч</span>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <span className={"second_priority_content"} >Сила тока:</span> Увеличивается пропорционально росту ёмкости.
                    </li>
                </ul>

                <h4 className="header_h4">Пример:</h4>
                <p className="paragraph_base">
                    В случае параллельного соединения трёх батареек AA устройство сможет работать в 3 раза дольше, так как ёмкость увеличивается.
                    Например, если устройство потребляет 500 мА, то:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">Одна батарейка хватит на 4 часа (2000 мА·ч ÷ 500 мА).</li>
                    <li className="unordered_list_li paragraph_example">Три батарейки, соединённые параллельно, хватит на <span className={"second_priority_content"}>12 часов</span> (6000 мА·ч ÷ 500 мА).</li>
                </ul>
            </article>

            {/* Сравнение соединений */}
            <article aria-labelledby="connections-comparison">
                <header>
                    <h3
                        id="connections-comparison"
                        className="header_h3"
                    >
                        Сравнение последовательного и параллельного соединений
                    </h3>
                </header>
                <CustomTable
                    columns={[
                        { label: "Характеристика", textAlign: "left" },
                        { label: "Последовательное соединение", textAlign: "left" },
                        { label: "Параллельное соединение", textAlign: "left" },
                    ]}
                    rows={[
                        ["Напряжение", "Суммируется", " Остаётся таким же"],
                        ["Ёмкость", "Остаётся неизменной", "Суммируется"],
                        ["Сила тока", "Остаётся неизменной", "Увеличивается"],
                    ]}
                />
            </article>

            {/* Заключение */}
            <div className="conclusion_of_article">
                <h4 className="header_h4 text-center">Заключение</h4>
                <p>
                    Последовательное соединение увеличивает напряжение, а параллельное — ёмкость и силу тока.
                    Например, три батарейки AA соединённые последовательно дадут <span className={"second_priority_content"}>4,5 В</span>, но ёмкость останется 2000 мА·ч.
                    А при параллельном соединении напряжение останется <span className={"second_priority_content"}>1,5 В</span>, но ёмкость увеличится до <span className={"second_priority_content"}>6000 мА·ч</span>.
                    Выбор зависит от ваших задач: требуется ли больше напряжения или больше времени работы.
                </p>
            </div>
        </Section>
    </>
}