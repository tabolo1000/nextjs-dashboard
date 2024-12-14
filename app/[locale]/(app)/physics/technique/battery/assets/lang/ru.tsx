

import { Section } from "@/app/ui/math/components/Section";
import { BatteryReactionsSwiper } from "../BatteryReactionsSwiper";
import { Highlight } from "@/app/ui/math/components/Highlight";
import dynamic from "next/dynamic";
import { TableComponent } from "./TableComponent";


const rowData = [
    { parameter: "Напряжение", value: "1.5 В" },
    { parameter: "Срок хранения", value: "5–10 лет" },
    { parameter: "Перезаряжаемые", value: "Нет" },
    { parameter: "Емкость", value: "до 3000 мА·ч (AA)" },
];

// Столбцы
const columnDefs = [
    { headerName: "Параметр", field: "parameter", sortable: true, filter: true },
    { headerName: "Значение", field: "value", sortable: true, filter: true },
];



const BatteryAndCopperArticle: React.FC = () => {
    return (
        <div className="main_block_task" >
           
            {/* Заголовок статьи */}
            <h1 className="header_h1 "> Как работают батарейки и что влияет на их эффективность? </h1>

            <p className="paragraph">
                <Highlight>Батарейки</Highlight> — это неотъемлемая часть нашей повседневной жизни. Они
                используются для питания множества устройств, от смартфонов до
                автомобилей. Но как они работают? Что происходит внутри батарейки во
                время её работы? И какие факторы могут повлиять на их эффективность?
                В этой статье мы разберём всё: от химических реакций до влияния
                температуры и условий хранения.
            </p>

            <TableComponent columnDefs = {columnDefs} rowData = {rowData}/>

            {/* Основной принцип работы батареек */}
            <Section title="Основной принцип работы батарейки" parity>
                {/* Введение */}
                <p className="paragraph_example ">
                    <Highlight>Батарейка</Highlight> — это электрохимическое устройство,
                    которое преобразует химическую энергию в электрическую.
                    Это стало возможным благодаря открытиям в химии и физике,
                    начиная с работы Алессандро Вольта в XVIII веке,
                    когда была создана первая батарейка — "вольтов столб".
                </p>

                {/* Основные компоненты */}
                <h3 className="header_h3">Основные компоненты батарейки</h3>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Анод:</Highlight> Источник электронов. Например, цинковая пластина в обычной батарейке.
                        <p className="paragraph">
                            Этимология: от греческого слова "ἄνοδος" (анодос), что означает "восхождение". Это связано с движением заряда от анода в направлении внешней цепи.
                        </p>
                    </li>
                    <li>
                        <Highlight>Катод:</Highlight> Приёмник электронов. Например, угольный стержень или медная пластина.
                        <p className="paragraph">
                            Этимология: от греческого "κάθοδος" (катодос), что означает "нисхождение". Это отражает движение заряда к катоду внутри батарейки.
                        </p>
                    </li>
                    <li>
                        <Highlight>Электролит:</Highlight> Среда, в которой происходят реакции. Например, раствор солей или кислоты.
                        <p className="paragraph">
                            Этимология: от греческого "ἤλεκτρον" (электрон, янтарь) и "λύσις" (разложение). Электролит — это вещество, которое проводит электрический ток за счёт движения ионов.
                        </p>
                    </li>
                </ul>

                {/* Метафора для упрощения понимания */}
                <p className="paragraph">
                    Если представить батарейку как систему подачи воды, то анод — это резервуар, из которого "вытекает" вода (электроны), катод — это место, где вода "собирается", а электролит — это трубы, по которым вода движется, чтобы соединить оба конца.
                </p>

                {/* Как работает батарейка */}
                <h3 className="header_h3">Как работает батарейка?</h3>
                <p className="paragraph_example">
                    Во время работы батарейки электроны перемещаются от анода к катоду по внешней цепи, создавая электрический ток. Внутри батарейки происходит следующее:
                </p>
                <ul className="unordered_list ">
                    <li>
                        На аноде (например, цинковой пластине) происходит окисление: металл отдаёт электроны и превращается в ионы.
                    </li>
                    <li>
                        На катоде (например, угольном стержне или медной пластине) происходит восстановление: ионы из электролита принимают электроны и превращаются в нейтральные атомы.
                    </li>
                    <li>
                        Электролит переносит ионы между анодом и катодом, обеспечивая протекание реакции.
                    </li>
                </ul>

                {/* Примеры батареек */}
                <h3 className="header_h3 ">Примеры батареек</h3>
                <ul className="unordered_list ">
                    <li>
                        <Highlight>Щелочная батарейка:</Highlight> Использует цинк (анод) и диоксид марганца (катод) с щелочным электролитом (например, гидроксид калия). Это самый распространённый тип батареек.
                    </li>
                    <li>
                        <Highlight>Литий-ионная батарейка:</Highlight> Использует литий как анод и соединения кобальта, никеля или марганца как катод. Электролит — литиевая соль в органическом растворителе. Применяется в смартфонах и электромобилях.
                    </li>
                    <li>
                        <Highlight>Свинцово-кислотная батарея:</Highlight> Использует свинец и оксид свинца с серной кислотой в качестве электролита. Часто применяется в автомобильных аккумуляторах.
                    </li>
                </ul>

                {/* Заключение секции */}
                <p className="paragraph ">
                    Батарейки — это результат удивительного взаимодействия химии и электричества. Понимание их устройства помогает не только оценить их работу, но и выбрать подходящий тип батарейки для конкретной задачи.
                </p>
            </Section>

            {/* Химические реакции в батарейке */}

            <BatteryReactionsSwiper />

            {/* Условия хранения */}
            <Section title="Как условия хранения влияют на батарейки?">
                <p className="paragraph_example ">
                    Условия хранения играют важную роль в эффективности и сроке службы батареек.
                    Вот основные факторы и их влияние:
                </p>
                <ul className="unordered_list ">
                    <li>
                        <Highlight>Температура:</Highlight>
                        Оптимальная температура хранения зависит от типа батарейки:
                        <ul>
                            <li>Щелочные: от 0°C до +25°C (допустимо до -20°C, но с понижением ёмкости).</li>
                            <li>Литий-ионные: от +5°C до +20°C. Хранение при температуре выше +30°C ускоряет деградацию.</li>
                            <li>Свинцово-кислотные: от +10°C до +25°C. При температуре выше +25°C скорость саморазряда увеличивается.</li>
                        </ul>
                        <p className="paragraph ">
                            Высокая температура ускоряет химические реакции, что приводит к саморазряду и деградации.
                            Холод может замедлить реакции, но при температуре ниже -20°C возможны повреждения внутренних компонентов.
                        </p>
                    </li>
                    <li>
                        <Highlight>Влажность:</Highlight>
                        Рекомендуемая влажность для хранения — не выше 50%. Высокая влажность может вызвать коррозию контактов и нарушение изоляции,
                        особенно у щелочных батареек. Используйте герметичные контейнеры или добавьте пакеты с силикагелем для защиты.
                    </li>
                    <li>
                        <Highlight>Механические повреждения:</Highlight>
                        Удары, падения или деформация корпуса могут привести к утечке электролита, короткому замыканию или даже возгоранию,
                        особенно у литий-ионных батареек. Всегда храните батарейки в прочной упаковке.
                    </li>
                </ul>

                <h3 className="header_h3 ">Рекомендации по хранению</h3>
                <ul className="unordered_list ">
                    <li>
                        Храните батарейки в прохладном, сухом месте, защищённом от прямых солнечных лучей.
                    </li>
                    <li>
                        Для литий-ионных батареек заряжайте их до 40–60% перед длительным хранением.
                    </li>
                    <li>
                        Избегайте хранения вместе с металлическими предметами, чтобы предотвратить короткие замыкания.
                    </li>
                    <li>
                        Используйте герметичные контейнеры или специальные ящики для хранения батареек.
                    </li>
                </ul>

                <h3 className="header_h3 ">Сроки хранения</h3>
                <table className="table-auto w-full  border-collapse border border-gray-600">
                    <thead>
                        <tr>
                            <th className="border border-gray-600 px-4 py-2">Тип батарейки</th>
                            <th className="border border-gray-600 px-4 py-2">Рекомендуемая температура</th>
                            <th className="border border-gray-600 px-4 py-2">Срок хранения</th>
                            <th className="border border-gray-600 px-4 py-2">Особенности</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Щелочные</td>
                            <td className="border border-gray-600 px-4 py-2">0°C – +25°C</td>
                            <td className="border border-gray-600 px-4 py-2">5–10 лет</td>
                            <td className="border border-gray-600 px-4 py-2">Сохраняют до 90% ёмкости через 5 лет при правильных условиях.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Литий-ионные</td>
                            <td className="border border-gray-600 px-4 py-2">+5°C – +20°C</td>
                            <td className="border border-gray-600 px-4 py-2">1–3 года</td>
                            <td className="border border-gray-600 px-4 py-2">Теряют 10–20% ёмкости ежегодно даже без использования.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Свинцово-кислотные</td>
                            <td className="border border-gray-600 px-4 py-2">+10°C – +25°C</td>
                            <td className="border border-gray-600 px-4 py-2">6–12 месяцев</td>
                            <td className="border border-gray-600 px-4 py-2">Требуют подзарядки каждые 6 месяцев при хранении.</td>
                        </tr>
                    </tbody>
                </table>

                <p className="paragraph  mt-4">
                    Соблюдение этих рекомендаций поможет батарейкам сохранить свою ёмкость и работоспособность на протяжении долгого времени.
                </p>
            </Section>

            {/* Влияние температуры */}
            <Section title="Как температура влияет на работу батареек?">

                <p className="paragraph_example ">
                    Температура оказывает значительное влияние на производительность батареек.
                    Влияние можно разделить на два основных аспекта:
                </p>

                <div className="flex flex-col lg:flex-row gap-8 mt-4">
                    {/* Блок 1: Текстовое описание */}
                    <div className="flex-1">
                        <ul className="unordered_list ">
                            <li>
                                <Highlight >Высокая температура:</Highlight>
                                Ускоряет химические реакции, что может временно увеличить мощность батарейки.
                                Однако, это сокращает срок службы, так как внутренние компоненты разрушаются быстрее.
                                <ul className="nested_list mt-2">
                                    <li>Щелочные батарейки теряют до 50% ёмкости при температуре выше +50°C.</li>
                                    <li>Литий-ионные батарейки при +40°C деградируют в 2 раза быстрее, чем при +20°C.</li>
                                </ul>
                            </li>
                            <li className="mt-4">
                                <Highlight >Низкая температура:</Highlight>
                                Замедляет химические реакции, что снижает ёмкость, мощность и скорость разряда.
                                Например:
                                <ul className="nested_list mt-2">
                                    <li>При -10°C литий-ионные батарейки теряют до 30% ёмкости.</li>
                                    <li>При -20°C щелочные батарейки могут полностью потерять работоспособность.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Блок 2: Графическое представление */}
                    <div className="flex-1">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="header_h3 text-center ">Влияние температуры</h3>
                            <p className="text-sm text-center ">
                                Как изменяется ёмкость батареек при разных температурах:
                            </p>
                            <ul className="unordered_list  mt-4">
                                <li>
                                    <span className="text-green-400">+25°C:</span> 100% ёмкости (оптимальная температура).
                                </li>
                                <li>
                                    <span className="text-blue-400">0°C:</span> 80% ёмкости.
                                </li>
                                <li>
                                    <span className="text-yellow-400">-10°C:</span> 50–70% ёмкости.
                                </li>
                                <li>
                                    <span className="text-red-400">-20°C:</span> Менее 30% ёмкости.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Таблица температур для разных батареек */}
                <h3 className="header_h3  mt-8">Рекомендованная температура</h3>
                <table className="table-auto w-full  border-collapse border border-gray-600 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-600 px-4 py-2">Тип батарейки</th>
                            <th className="border border-gray-600 px-4 py-2">Оптимальная температура</th>
                            <th className="border border-gray-600 px-4 py-2">Критическая температура</th>
                            <th className="border border-gray-600 px-4 py-2">Особенности</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Щелочные</td>
                            <td className="border border-gray-600 px-4 py-2">+10°C – +25°C</td>
                            <td className="border border-gray-600 px-4 py-2">-10°C / +50°C</td>
                            <td className="border border-gray-600 px-4 py-2">Снижение ёмкости при сильном холоде или жаре.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Литий-ионные</td>
                            <td className="border border-gray-600 px-4 py-2">+15°C – +25°C</td>
                            <td className="border border-gray-600 px-4 py-2">-20°C / +40°C</td>
                            <td className="border border-gray-600 px-4 py-2">Быстрая деградация при жаре, снижение ёмкости на морозе.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Свинцово-кислотные</td>
                            <td className="border border-gray-600 px-4 py-2">+10°C – +25°C</td>
                            <td className="border border-gray-600 px-4 py-2">-10°C / +45°C</td>
                            <td className="border border-gray-600 px-4 py-2">Сильный саморазряд при жаре, возможное замерзание электролита на морозе.</td>
                        </tr>
                    </tbody>
                </table>

                {/* Рекомендации */}
                <h3 className="header_h3  mt-8">Рекомендации по эксплуатации</h3>
                <ul className="unordered_list ">
                    <li>
                        Избегайте длительного хранения батареек при температурах выше +40°C — это может
                        привести к необратимой деградации, особенно у литий-ионных батареек.
                    </li>
                    <li>
                        При использовании батареек в холодных условиях (ниже 0°C) согрейте их перед
                        использованием, например, подержите в кармане.
                    </li>
                    <li>
                        Храните батарейки в прохладном месте (но не в морозильнике!), чтобы продлить срок службы.
                    </li>
                </ul>
            </Section>

            <Section title="Что происходит при соединении батареек последовательно и параллельно?" aria-labelledby="battery-connection-title">


                <p className="paragraph_example ">
                    Батарейки — это источник электроэнергии, работающий за счёт химических реакций.
                    Их ёмкость измеряется в миллиампер-часах (мА·ч), а напряжение — в вольтах (В).
                    Например, стандартная батарейка AA имеет напряжение 1,5 В и ёмкость около 2000 мА·ч.
                    Соединяя батарейки, мы можем менять параметры выходной энергии. Рассмотрим два основных типа соединений:
                    <Highlight> последовательно </Highlight> и <Highlight> параллельно</Highlight>.
                </p>


                {/* Последовательное соединение */}
                <article aria-labelledby="series-connection">
                    <header>
                        <h3 className="header_h3">
                            1. Последовательное соединение
                        </h3>
                    </header>
                    <p className="paragraph ">
                        При последовательном соединении положительный контакт одной батарейки соединяется с отрицательным контактом следующей.
                        Такой способ соединения увеличивает напряжение, но не изменяет ёмкость.
                        Рассмотрим пример: если у нас есть три батарейки AA, каждая с напряжением 1,5 В и ёмкостью 2000 мА·ч:
                    </p>
                    <ul className="unordered_list ">
                        <li>
                            <Highlight >Напряжение:</Highlight> Суммируется. Например, 1,5 В × 3 = <Highlight>4,5 В</Highlight>.
                        </li>
                        <li className="mt-2">
                            <Highlight >Ёмкость:</Highlight> Остаётся неизменной. Например, 2000 мА·ч.
                        </li>
                        <li className="mt-2">
                            <Highlight >Сила тока:</Highlight> Остаётся такой же, как у одной батарейки.
                        </li>
                    </ul>

                    <header>
                        <h4 className="header_h4">
                            Как ток проходит через батарейки при последовательном соединении?
                        </h4>
                    </header>
                    <p className="paragraph ">
                        При последовательном соединении ток движется через батарейки каскадно, проходя через их слои и электролит. Например:
                    </p>
                    <ul className="unordered_list ">
                        <li>
                            Электроны покидают отрицательный электрод (анод) первой батарейки.
                        </li>
                        <li className="mt-2">
                            Затем они проходят через внешний проводник, подключённый к положительному электроду (катоду) следующей батарейки.
                        </li>
                        <li className="mt-2">
                            Внутри батарейки ток проходит через <Highlight>электролит</Highlight>, где происходят химические реакции.
                            Например, для батарейки AA это переноса ионов между анодом и катодом.
                        </li>
                        <li className="mt-2">
                            На выходе из последней батарейки ток подаётся на подключённое устройство.
                        </li>
                    </ul>
                    <p className="paragraph ">
                        В результате мы получаем итоговое напряжение, равное сумме всех батареек, но с той же ёмкостью. Например,
                        три батарейки AA дадут напряжение <Highlight>4,5 В</Highlight>, достаточное для питания светодиодной лампы мощностью 1 Вт.
                    </p>
                </article>

                {/* Параллельное соединение */}
                <article aria-labelledby="parallel-connection">
                    <header>
                        <h3
                            className="header_h3"
                        >
                            2. Параллельное соединение
                        </h3>
                    </header>
                    <p className="paragraph ">
                        При параллельном соединении все положительные контакты батареек соединяются вместе, как и отрицательные.
                        Такой способ соединения увеличивает ёмкость, сохраняя напряжение. Например, если у нас есть три батарейки AA:
                    </p>
                    <ul className="unordered_list ">
                        <li>
                            <Highlight >Напряжение:</Highlight> Остаётся таким же. Например, 1,5 В.
                        </li>
                        <li className="mt-2">
                            <Highlight >Ёмкость:</Highlight> Суммируется. Например, 2000 мА·ч × 3 = <Highlight>6000 мА·ч</Highlight>.
                        </li>
                        <li className="mt-2">
                            <Highlight >Сила тока:</Highlight> Увеличивается пропорционально росту ёмкости.
                        </li>
                    </ul>

                    <header>
                        <h4 className="header_h4">Пример:</h4>
                    </header>
                    <p className="paragraph ">
                        В случае параллельного соединения трёх батареек AA устройство сможет работать в 3 раза дольше, так как ёмкость увеличивается.
                        Например, если устройство потребляет 500 мА, то:
                    </p>
                    <ul className="unordered_list ">
                        <li>Одна батарейка хватит на 4 часа (2000 мА·ч ÷ 500 мА).</li>
                        <li>Три батарейки, соединённые параллельно, хватит на <Highlight>12 часов</Highlight> (6000 мА·ч ÷ 500 мА).</li>
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
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Сравнение последовательного и параллельного соединений"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Характеристика</th>
                                <th className="border border-green-800 px-4 py-2">
                                    Последовательное соединение
                                </th>
                                <th className="border border-green-800 px-4 py-2">
                                    Параллельное соединение
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Напряжение</td>
                                <td className="border border-green-800 px-4 py-2">Суммируется</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Остаётся таким же
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Ёмкость</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Остаётся неизменной
                                </td>
                                <td className="border border-green-800 px-4 py-2">Суммируется</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Сила тока</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Остаётся неизменной
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Увеличивается
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </article>

                {/* Заключение */}
                <footer className="bg-green-800 dark:text-green-300 p-4 mt-6 rounded-lg shadow-lg">
                    <h3 className="text-center font-bold text-xl">Заключение</h3>
                    <p className="text-center mt-2">
                        Последовательное соединение увеличивает напряжение, а параллельное — ёмкость и силу тока.
                        Например, три батарейки AA соединённые последовательно дадут <Highlight>4,5 В</Highlight>, но ёмкость останется 2000 мА·ч.
                        А при параллельном соединении напряжение останется <Highlight>1,5 В</Highlight>, но ёмкость увеличится до <Highlight>6000 мА·ч</Highlight>.
                        Выбор зависит от ваших задач: требуется ли больше напряжения или больше времени работы.
                    </p>
                </footer>
            </Section>

            <Section title="Форматы батареек: всё, что нужно знать специалисту" aria-labelledby="battery-formats-title">
                <header>
                    <h2
                        id="battery-formats-title"
                        className="header_h2_odd dark:bg-green-800 dark:text-green-300"
                    >

                    </h2>
                </header>

                <article>
                    <p className="paragraph_example ">
                        Батарейки бывают разных форматов, каждый из которых предназначен для определённых устройств.
                        Их формат указывает на физические размеры, напряжение, химический состав и назначение.
                        Ниже представлен детальный обзор форматов батареек, включая детали, на которые часто не обращают внимания.
                    </p>
                </article>

                {/* Цилиндрические батарейки */}
                <article aria-labelledby="cylindrical-batteries">
                    <header>
                        <h3
                            id="cylindrical-batteries"
                            className="header_h3  mt-6"
                        >
                            1. Цилиндрические батарейки
                        </h3>
                    </header>
                    <p className="paragraph ">
                        Цилиндрические батарейки — самые распространённые. Они используются в пультах, фонариках, игрушках и других устройствах.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Таблица цилиндрических батареек"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Формат</th>
                                <th className="border border-green-800 px-4 py-2">Диаметр (мм)</th>
                                <th className="border border-green-800 px-4 py-2">Длина (мм)</th>
                                <th className="border border-green-800 px-4 py-2">Напряжение</th>
                                <th className="border border-green-800 px-4 py-2">Примеры устройств</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">AA (R6)</td>
                                <td className="border border-green-800 px-4 py-2">14,5</td>
                                <td className="border border-green-800 px-4 py-2">50,5</td>
                                <td className="border border-green-800 px-4 py-2">1,2–1,5 В</td>
                                <td className="border border-green-800 px-4 py-2">Пульты, фонарики</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">AAA (R03)</td>
                                <td className="border border-green-800 px-4 py-2">10,5</td>
                                <td className="border border-green-800 px-4 py-2">44,5</td>
                                <td className="border border-green-800 px-4 py-2">1,2–1,5 В</td>
                                <td className="border border-green-800 px-4 py-2">Часы, пульты</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">C (R14)</td>
                                <td className="border border-green-800 px-4 py-2">26,2</td>
                                <td className="border border-green-800 px-4 py-2">50,0</td>
                                <td className="border border-green-800 px-4 py-2">1,5 В</td>
                                <td className="border border-green-800 px-4 py-2">Фонари, радио, игрушки</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">D (R20)</td>
                                <td className="border border-green-800 px-4 py-2">34,2</td>
                                <td className="border border-green-800 px-4 py-2">61,5</td>
                                <td className="border border-green-800 px-4 py-2">1,5 В</td>
                                <td className="border border-green-800 px-4 py-2">Фонари, радио, крупные игрушки</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">18650</td>
                                <td className="border border-green-800 px-4 py-2">18,6</td>
                                <td className="border border-green-800 px-4 py-2">65,2</td>
                                <td className="border border-green-800 px-4 py-2">3,6–4,2 В</td>
                                <td className="border border-green-800 px-4 py-2">Ноутбуки, фонари, вейпы</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">14500</td>
                                <td className="border border-green-800 px-4 py-2">14,5</td>
                                <td className="border border-green-800 px-4 py-2">50,0</td>
                                <td className="border border-green-800 px-4 py-2">3,6–3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">Фонарики, портативные устройства</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">21700</td>
                                <td className="border border-green-800 px-4 py-2">21,0</td>
                                <td className="border border-green-800 px-4 py-2">70,0</td>
                                <td className="border border-green-800 px-4 py-2">3,6–4,2 В</td>
                                <td className="border border-green-800 px-4 py-2">Электровелосипеды, фонари</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">32650</td>
                                <td className="border border-green-800 px-4 py-2">32,2</td>
                                <td className="border border-green-800 px-4 py-2">70,0</td>
                                <td className="border border-green-800 px-4 py-2">3,2–3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">Мощные фонари, электровелосипеды</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="paragraph  mt-4">
                        <Highlight>Особенности:</Highlight> Например, батарейки формата 18650 требуют систем защиты от переразряда и перезаряда, особенно при использовании в мощных устройствах.
                    </p>
                </article>

                {/* Таблеточные батарейки */}
                <article aria-labelledby="button-batteries">
                    <header>
                        <h3
                            id="button-batteries"
                            className="header_h3  mt-6"
                        >
                            2. Таблеточные батарейки
                        </h3>
                    </header>
                    <p className="paragraph ">
                        Таблеточные батарейки компактны и используются в часах, калькуляторах, медицинских приборах и других миниатюрных устройствах.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Таблица таблеточных батареек"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Формат</th>
                                <th className="border border-green-800 px-4 py-2">Диаметр (мм)</th>
                                <th className="border border-green-800 px-4 py-2">Высота (мм)</th>
                                <th className="border border-green-800 px-4 py-2">Напряжение</th>
                                <th className="border border-green-800 px-4 py-2">Примеры устройств</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">CR2032</td>
                                <td className="border border-green-800 px-4 py-2">20</td>
                                <td className="border border-green-800 px-4 py-2">3,2</td>
                                <td className="border border-green-800 px-4 py-2">3 В</td>
                                <td className="border border-green-800 px-4 py-2">Часы, материнские платы</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">CR2025</td>
                                <td className="border border-green-800 px-4 py-2">20</td>
                                <td className="border border-green-800 px-4 py-2">2,5</td>
                                <td className="border border-green-800 px-4 py-2">3 В</td>
                                <td className="border border-green-800 px-4 py-2">Пульты, брелоки</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">CR2016</td>
                                <td className="border border-green-800 px-4 py-2">20</td>
                                <td className="border border-green-800 px-4 py-2">1,6</td>
                                <td className="border border-green-800 px-4 py-2">3 В</td>
                                <td className="border border-green-800 px-4 py-2">Калькуляторы, пульты</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">LR44</td>
                                <td className="border border-green-800 px-4 py-2">11,6</td>
                                <td className="border border-green-800 px-4 py-2">5,4</td>
                                <td className="border border-green-800 px-4 py-2">1,5 В</td>
                                <td className="border border-green-800 px-4 py-2">Игрушки, лазеры</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">SR44</td>
                                <td className="border border-green-800 px-4 py-2">11,6</td>
                                <td className="border border-green-800 px-4 py-2">5,4</td>
                                <td className="border border-green-800 px-4 py-2">1,55 В</td>
                                <td className="border border-green-800 px-4 py-2">Часы, точные приборы</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">CR123A</td>
                                <td className="border border-green-800 px-4 py-2">17,0</td>
                                <td className="border border-green-800 px-4 py-2">34,5</td>
                                <td className="border border-green-800 px-4 py-2">3 В</td>
                                <td className="border border-green-800 px-4 py-2">Фонарики, сигнализации</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="paragraph  mt-4">
                        <Highlight>Особенности:</Highlight> Литиевые батарейки, такие как CR2032, сохраняют заряд до 10 лет, что делает их лучшим выбором для устройств с низким энергопотреблением.
                    </p>
                </article>

                {/* Призматические батарейки */}
                <article aria-labelledby="prismatic-batteries">
                    <header>
                        <h3
                            id="prismatic-batteries"
                            className="header_h3  mt-6"
                        >
                            3. Призматические батарейки
                        </h3>
                    </header>
                    <p className="paragraph ">
                        Призматические батарейки имеют прямоугольную или плоскую форму. Они широко используются в компактных устройствах, таких как мобильные телефоны, фотокамеры, ноутбуки и электромобили.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Таблица призматических батареек"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Формат</th>
                                <th className="border border-green-800 px-4 py-2">Размеры (мм)</th>
                                <th className="border border-green-800 px-4 py-2">Напряжение</th>
                                <th className="border border-green-800 px-4 py-2">Ёмкость (мА·ч)</th>
                                <th className="border border-green-800 px-4 py-2">Примеры устройств</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">9V (PP3)</td>
                                <td className="border border-green-800 px-4 py-2">26,5 × 17,5 × 48,5</td>
                                <td className="border border-green-800 px-4 py-2">9 В</td>
                                <td className="border border-green-800 px-4 py-2">300–600</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Пожарные извещатели, мультиметры
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">BL-5C</td>
                                <td className="border border-green-800 px-4 py-2">53 × 34 × 5,5</td>
                                <td className="border border-green-800 px-4 py-2">3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">850–1150</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Мобильные телефоны (Nokia), портативные устройства
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">LP402025</td>
                                <td className="border border-green-800 px-4 py-2">40 × 20 × 2,5</td>
                                <td className="border border-green-800 px-4 py-2">3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">150–200</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Bluetooth-наушники, медицинские устройства
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">LP803860</td>
                                <td className="border border-green-800 px-4 py-2">80 × 38 × 6</td>
                                <td className="border border-green-800 px-4 py-2">3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">2000–2500</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Портативные колонки, планшеты
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">LP805060</td>
                                <td className="border border-green-800 px-4 py-2">80 × 50 × 6</td>
                                <td className="border border-green-800 px-4 py-2">3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">3000–3500</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Электронные книги, фотокамеры
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">EV Module</td>
                                <td className="border border-green-800 px-4 py-2">Призматический</td>
                                <td className="border border-green-800 px-4 py-2">3,2–3,7 В</td>
                                <td className="border border-green-800 px-4 py-2">40 000+</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Электромобили (Tesla, BYD)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="paragraph  mt-4">
                        <Highlight>Особенности:</Highlight> Призматические батарейки чаще всего применяются в устройствах, где важно компактное размещение. Многие из них имеют литий-ионную или литий-полимерную основу. Литий-полимерные аккумуляторы (Li-Po) имеют меньший вес и толщину по сравнению с литий-ионными, но требуют более осторожного обращения из-за чувствительности к температуре и механическим повреждениям.
                    </p>
                    <p className="paragraph ">
                        В электромобилях используются крупные призматические модули с высокой ёмкостью, которые объединяются в батарейные блоки для обеспечения необходимой мощности и запаса хода.
                    </p>
                </article>

                {/* Автомобильные аккумуляторы */}
                <article aria-labelledby="car-batteries">
                    <header>
                        <h3
                            id="car-batteries"
                            className="header_h3"
                        >
                            4. Автомобильные аккумуляторы (АКБ)
                        </h3>
                    </header>
                    <p className="paragraph ">
                        Автомобильные аккумуляторы используются для запуска двигателя и питания электрических систем автомобиля. Классический автомобильный аккумулятор — это свинцово-кислотная батарея, которая обеспечивает напряжение 12 В.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Таблица автомобильных аккумуляторов"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Тип аккумулятора</th>
                                <th className="border border-green-800 px-4 py-2">Напряжение</th>
                                <th className="border border-green-800 px-4 py-2">Ёмкость (А·ч)</th>
                                <th className="border border-green-800 px-4 py-2">Примеры применения</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Свинцово-кислотный</td>
                                <td className="border border-green-800 px-4 py-2">12 В</td>
                                <td className="border border-green-800 px-4 py-2">45–100</td>
                                <td className="border border-green-800 px-4 py-2">Легковые автомобили</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">AGM</td>
                                <td className="border border-green-800 px-4 py-2">12 В</td>
                                <td className="border border-green-800 px-4 py-2">70–120</td>
                                <td className="border border-green-800 px-4 py-2">Внедорожники, гибриды</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Гелевый</td>
                                <td className="border border-green-800 px-4 py-2">12 В</td>
                                <td className="border border-green-800 px-4 py-2">50–200</td>
                                <td className="border border-green-800 px-4 py-2">Мотоциклы, грузовики</td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Литий-ионный</td>
                                <td className="border border-green-800 px-4 py-2">3,2–3,7 В (ячейка)</td>
                                <td className="border border-green-800 px-4 py-2">1000–10000+</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Электромобили, гибриды (Tesla, Nissan Leaf)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="paragraph  mt-4">
                        <Highlight>Особенности:</Highlight> Свинцово-кислотные АКБ требуют регулярного обслуживания (добавления дистиллированной воды), тогда как AGM и гелевые батареи отличаются большей устойчивостью к вибрациям и долговечностью. Литий-ионные аккумуляторы в электромобилях представляют собой сложные модули, обеспечивающие высокую ёмкость и длительный срок службы.
                    </p>
                </article>

                {/* Заключение */}
                <footer className="bg-green-800 dark:text-green-300 p-4 mt-6 rounded-lg shadow-lg">
                    <h3 className="text-center font-bold text-xl">Заключение</h3>
                    <p className="text-center mt-2">
                        Формат батареек определяет их применение. Учитывайте размеры, напряжение, ёмкость и химический состав при выборе.
                        Например, для часов подойдут литиевые батарейки (CR2032), а для мощных устройств — цилиндрические батарейки 18650.
                    </p>
                </footer>
            </Section>

            {/* Основной блок: Батарейки и аккумуляторы */}
            <article aria-labelledby="batteries-overview">
                <header>
                    <h2
                        id="batteries-overview"
                        className="header_h2 dark:text-green-500 mt-6"
                    >
                        Батарейки и аккумуляторы: обзор производителей
                    </h2>
                </header>

                {/* Категория 1: Бытовые батарейки */}
                <Section title="1. Бытовые батарейки (щелочные, солевые, литиевые)" aria-labelledby="household-batteries">

                    <p className="paragraph ">
                        Эта категория включает батарейки стандартных форматов AA, AAA, C, D, 9V и кнопочные элементы. Они используются в пультах, игрушках, фонарях, часах и другой электронике.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Производители бытовых батареек"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Производитель</th>
                                <th className="border border-green-800 px-4 py-2">Типы батареек</th>
                                <th className="border border-green-800 px-4 py-2">Особенности</th>
                                <th className="border border-green-800 px-4 py-2">Рекомендация</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Duracell</td>
                                <td className="border border-green-800 px-4 py-2">AA, AAA, 9V</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Высокая емкость, долговечность, линейки <Highlight>Ultra Power</Highlight> и <Highlight>Optimum</Highlight>.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Для устройств с большим энергопотреблением (игрушки, фонари).
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Energizer</td>
                                <td className="border border-green-800 px-4 py-2">AA, AAA, литиевые</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Литиевые батарейки <Highlight>Ultimate Lithium</Highlight> для экстремальных температур.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Для профессиональной техники, фотоаппаратов.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Panasonic</td>
                                <td className="border border-green-800 px-4 py-2">AA, AAA, C, D</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Линейка <Highlight>Evolta</Highlight> — конкурент Duracell.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Универсальный выбор для бытовой электроники.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">GP Batteries</td>
                                <td className="border border-green-800 px-4 py-2">AA, AAA</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Хорошее соотношение цены и качества.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Для повседневного использования.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                {/* Категория 2: Перезаряжаемые аккумуляторы */}
                <Section title=" 2. Перезаряжаемые аккумуляторы (NiMH, NiCd, Li-ion)" aria-labelledby="rechargeable-batteries">
                    <p className="paragraph ">
                        Перезаряжаемые аккумуляторы используются в устройствах с высоким энергопотреблением: фотоаппаратах, геймпадах, электроинструментах. Они более экологичны и долговечны, чем одноразовые батарейки.
                    </p>
                    <table
                        className="table-auto w-full border-collapse border border-green-800 mt-4"
                        aria-label="Производители перезаряжаемых аккумуляторов"
                    >
                        <thead className="bg-green-800 text-green-300">
                            <tr>
                                <th className="border border-green-800 px-4 py-2">Производитель</th>
                                <th className="border border-green-800 px-4 py-2">Тип</th>
                                <th className="border border-green-800 px-4 py-2">Особенности</th>
                                <th className="border border-green-800 px-4 py-2">Рекомендация</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Panasonic (Eneloop)</td>
                                <td className="border border-green-800 px-4 py-2">NiMH</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Сохраняют до 80% заряда за 1 год хранения.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Лучший выбор для фото- и видеотехники.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Sony</td>
                                <td className="border border-green-800 px-4 py-2">Li-ion</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Надежные литий-ионные аккумуляторы для бытовой электроники.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Подходят для камер и портативных устройств.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">Samsung SDI</td>
                                <td className="border border-green-800 px-4 py-2">Li-ion</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Литий-ионные ячейки для смартфонов и ноутбуков.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Для гаджетов и модульных сборок.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-green-800 px-4 py-2">IKEA (LADDA)</td>
                                <td className="border border-green-800 px-4 py-2">NiMH</td>
                                <td className="border border-green-800 px-4 py-2">
                                    Аналог Panasonic Eneloop по доступной цене.
                                </td>
                                <td className="border border-green-800 px-4 py-2">
                                    Для экономного использования.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Section>

                {/* Категория 3: Литий-ионные аккумуляторы */}
                <Section title="3. Литий-ионные аккумуляторы (Li-ion, Li-Po)" aria-labelledby="lithium-ion-batteries">
                    <p className="paragraph ">
                        Литий-ионные аккумуляторы используются в смартфонах, ноутбуках, электромобилях и других устройствах, где важны высокая ёмкость и лёгкий вес.
                    </p>
                    <ul className="unordered_list ">
                        <li>
                            <Highlight>Samsung SDI:</Highlight> Один из лидеров рынка ячеек для смартфонов и ноутбуков.
                        </li>
                        <li>
                            <Highlight>LG Chem:</Highlight> Надежные аккумуляторы для электромобилей и бытовой электроники.
                        </li>
                        <li>
                            <Highlight>BYD:</Highlight> Лидер в сегменте LiFePO4 аккумуляторов для электромобилей.
                        </li>
                    </ul>
                </Section>
            </article>


            <div className="p-6 bg-gray-900 text-gray-200">
                <h1 className="text-2xl font-bold text-green-500 mb-6">
                    Батарейки и аккумуляторы: Полный обзор технологий
                </h1>

                {/* Щелочные батарейки */}
                <div className="mb-8 p-4 border border-green-800 rounded-md bg-gray-800">
                    <h2 className="text-xl font-semibold text-green-400">Щелочные батарейки</h2>
                    <p className="italic text-gray-400">Alkaline</p>
                    <p className="mt-2">
                        Щелочные батарейки используют химическую реакцию между диоксидом марганца и
                        цинком с электролитом на основе гидроксида калия.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>
                                <Highlight>Напряжение:</Highlight> 1.5 В
                            </li>
                            <li>
                                <Highlight>Срок хранения:</Highlight> 5–10 лет
                            </li>
                            <li>
                                <Highlight>Перезаряжаемые:</Highlight> Нет
                            </li>
                            <li>
                                <Highlight>Емкость:</Highlight> до 3000 мА·ч (AA)
                            </li>
                        </ul>
                    </div>
                    <Table
                        items={[
                            "Дешевые и доступные.",
                            "Хорошо работают в устройствах с низким и средним энергопотреблением.",
                            "Длительный срок хранения.",
                        ]}
                        title="Преимущества"
                    />
                    <Table
                        items={[
                            "Не подходят для устройств с высоким энергопотреблением.",
                            "Теряют емкость при низких температурах.",
                            "Могут протекать при долгом хранении.",
                        ]}
                        title="Недостатки"
                    />
                </div>

                {/* Солевые батарейки */}
                <div className="mb-8 p-4 border border-green-800 rounded-md bg-gray-800">
                    <h2 className="text-xl font-semibold text-green-400">Солевые батарейки</h2>
                    <p className="italic text-gray-400">Zinc-Carbon</p>
                    <p className="mt-2">
                        Солевые батарейки используют цинк и диоксид марганца с солевым электролитом
                        (хлорид аммония или хлорид цинка).
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>
                                <Highlight>Напряжение:</Highlight> 1.5 В
                            </li>
                            <li>
                                <Highlight>Срок хранения:</Highlight> 2–3 года
                            </li>
                            <li>
                                <Highlight>Перезаряжаемые:</Highlight> Нет
                            </li>
                            <li>
                                <Highlight>Емкость:</Highlight> 400–500 мА·ч
                            </li>
                        </ul>
                    </div>
                    <Table
                        items={["Самые дешевые батарейки.", "Подходят для устройств с минимальным энергопотреблением."]}
                        title="Преимущества"
                    />
                    <Table
                        items={[
                            "Низкая емкость.",
                            "Быстро теряют заряд при хранении.",
                            "Склонны к протечкам.",
                        ]}
                        title="Недостатки"
                    />
                </div>

                {/* Литиевые батарейки */}
                <div className="mb-8 p-4 border border-green-800 rounded-md bg-gray-800">
                    <h2 className="text-xl font-semibold text-green-400">Литиевые батарейки</h2>
                    <p className="italic text-gray-400">Lithium primary</p>
                    <p className="mt-2">
                        Литиевые батарейки используют литий как анод и диоксид марганца или серный
                        гексафторид как катод.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>
                                <Highlight>Напряжение:</Highlight> 1.5 В (AA, AAA), 3 В (кнопочные элементы)
                            </li>
                            <li>
                                <Highlight>Срок хранения:</Highlight> до 20 лет
                            </li>
                            <li>
                                <Highlight>Перезаряжаемые:</Highlight> Нет
                            </li>
                            <li>
                                <Highlight>Емкость:</Highlight> 3000 мА·ч и выше (AA)
                            </li>
                        </ul>
                    </div>
                    <Table
                        items={[
                            "Работают при экстремальных температурах (-40°C до +60°C).",
                            "Высокая емкость и длительный срок службы.",
                            "Идеальны для фотоаппаратов, GPS-устройств, медицинской техники.",
                        ]}
                        title="Преимущества"
                    />
                    <Table
                        items={[
                            "Дороже щелочных батареек.",
                            "Не подлежат переработке в большинстве регионов.",
                        ]}
                        title="Недостатки"
                    />
                </div>

                {/* Никель-металлогидридные аккумуляторы */}
                <div className="mb-8 p-4 border border-green-800 rounded-md bg-gray-800">
                    <h2 className="text-xl font-semibold text-green-400">
                        Никель-металлогидридные аккумуляторы
                    </h2>
                    <p className="italic text-gray-400">NiMH</p>
                    <p className="mt-2">
                        NiMH аккумуляторы используют никель-оксид-гидроксид (катод) и
                        водородосодержащий сплав (анод) с водным электролитом.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>
                                <Highlight>Напряжение:</Highlight> 1.2 В
                            </li>
                            <li>
                                <Highlight>Перезаряжаемые:</Highlight> Да
                            </li>
                            <li>
                                <Highlight>Циклы зарядки:</Highlight> 500–2000 циклов
                            </li>
                            <li>
                                <Highlight>Емкость:</Highlight> 600–2500 мА·ч
                            </li>
                        </ul>
                    </div>
                    <Table
                        items={[
                            "Экологичнее одноразовых батареек.",
                            "Высокая емкость, подходят для устройств с высоким энергопотреблением.",
                            "Дешевле литий-ионных аккумуляторов.",
                        ]}
                        title="Преимущества"
                    />
                    <Table
                        items={[
                            "Постепенно теряют заряд при хранении.",
                            "Могут перегреваться при неправильной зарядке.",
                            "Менее эффективны при низких температурах.",
                        ]}
                        title="Недостатки"
                    />
                </div>

                {/* Литий-ионные аккумуляторы */}
                <div className="mb-8 p-4 border border-green-800 rounded-md bg-gray-800">
                    <h2 className="text-xl font-semibold text-green-400">Литий-ионные аккумуляторы</h2>
                    <p className="italic text-gray-400">Li-ion</p>
                    <p className="mt-2">
                        Li-ion аккумуляторы используют литий-кобальтовый оксид или аналогичные
                        соединения в качестве катода и углерод как анод.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                        <ul className="list-disc list-inside text-gray-300">
                            <li>
                                <Highlight>Напряжение:</Highlight> 3.6–3.7 В
                            </li>
                            <li>
                                <Highlight>Перезаряжаемые:</Highlight> Да
                            </li>
                            <li>
                                <Highlight>Циклы зарядки:</Highlight> 300–1000 циклов
                            </li>
                            <li>
                                <Highlight>Емкость:</Highlight> 1000–5000 мА·ч
                            </li>
                            <li>
                                <Highlight>Саморазряд:</Highlight> менее 5% в месяц
                            </li>
                        </ul>
                    </div>
                    <Table
                        items={[
                            "Высокая плотность энергии (лёгкие и ёмкие).",
                            "Отсутствие эффекта памяти.",
                            "Широко используются в смартфонах, ноутбуках, электромобилях.",
                        ]}
                        title="Преимущества"
                    />
                    <Table
                        items={[
                            "Чувствительны к перегреву (могут загореться).",
                            "Срок службы ограничен (2–3 года).",
                            "Дороже NiMH и NiCd.",
                        ]}
                        title="Недостатки"
                    />
                </div>
            </div>

            {/* Почему аккумулятор разряжается быстрее на холоде? */}
            <Section title="Почему аккумулятор разряжается быстрее на холоде?">

                <p className="paragraph_example ">
                    На первый взгляд кажется, что аккумулятор не должен терять электроны на холоде.
                    Однако его «разряд» связан не с утечкой заряда, а с физико-химическими процессами,
                    которые замедляются при низких температурах. Давайте разберёмся подробнее.
                </p>

                {/* Основные причины */}
                <h3 className="header_h3  mt-6">Основные причины</h3>
                <ul className="unordered_list ">
                    <li>
                        <Highlight >Замедление химических реакций:</Highlight>
                        При температуре около <Highlight>-10°C</Highlight> скорость электрохимических процессов
                        уменьшается примерно на <Highlight>30–40%</Highlight>, что значительно снижает мощность
                        аккумулятора. При <Highlight>-20°C</Highlight> снижение может достигать <Highlight>50%</Highlight>.
                    </li>
                    <li className="mt-4">
                        <Highlight >Увеличение внутреннего сопротивления:</Highlight>
                        На морозе (например, <Highlight>-15°C</Highlight>) внутреннее сопротивление аккумулятора
                        может увеличиваться в 2–3 раза по сравнению с комнатной температурой. Это снижает
                        напряжение и доступную мощность.
                    </li>
                    <li className="mt-4">
                        <Highlight >Поведение электролита:</Highlight>
                        При температуре ниже <Highlight>-20°C</Highlight> электролит в большинстве литий-ионных
                        аккумуляторов становится настолько вязким, что его проводимость падает на
                        <Highlight>70–80%</Highlight>. В свинцово-кислотных батареях при <Highlight>-30°C</Highlight>
                        электролит может частично замерзнуть.
                    </li>
                    <li className="mt-4">
                        <Highlight >Снижение скорости диффузии ионов:</Highlight>
                        При <Highlight>-10°C</Highlight> ионы лития в литий-ионных батареях перемещаются в 2–3
                        раза медленнее, чем при +20°C. Это вызывает снижение ёмкости и замедляет зарядку.
                    </li>
                    <li className="mt-4">
                        <Highlight >Системы самозащиты:</Highlight>
                        При температуре ниже <Highlight>-15°C</Highlight> многие современные литий-ионные батареи
                        автоматически ограничивают доступную мощность, чтобы предотвратить повреждения.
                        Это создаёт эффект «быстрого разряда».
                    </li>
                </ul>

                {/* Пример из практики */}
                <h3 className="header_h3  mt-8">Пример из практики</h3>
                <p className="paragraph ">
                    Представьте, что вы используете смартфон на морозе. При температуре <Highlight>-10°C</Highlight>
                    аккумулятор может потерять до <Highlight>30%</Highlight> своей ёмкости, а при <Highlight>-20°C</Highlight> —
                    до <Highlight>50%</Highlight>. Телефон может внезапно выключиться, так как напряжение падает ниже
                    рабочего порога. Если вы согреете устройство до комнатной температуры, часть ёмкости
                    восстановится.
                </p>
                <p className="paragraph  mt-4">
                    Аналогичная ситуация происходит с автомобильными аккумуляторами. При <Highlight>-15°C</Highlight>
                    они теряют около <Highlight>20–30%</Highlight> своей пусковой мощности, а при <Highlight>-30°C</Highlight>
                    потеря достигает <Highlight>50%</Highlight>. Поэтому зимой автомобили часто сложно завести.
                </p>

                {/* Как предотвратить эффект холода */}
                <h3 className="header_h3  mt-8">Как предотвратить быструю разрядку на холоде?</h3>
                <ul className="unordered_list ">
                    <li>Держите аккумуляторы в тепле, например, в кармане или в утеплённом чехле.</li>
                    <li className="mt-2">
                        Для автомобильных аккумуляторов используйте термоизоляционные чехлы или храните
                        машину в гараже.
                    </li>
                    <li className="mt-2">
                        Выбирайте аккумуляторы, устойчивые к низким температурам. Например, литий-фосфатные
                        (LiFePO₄) аккумуляторы сохраняют до <Highlight>80%</Highlight> ёмкости при <Highlight>-10°C</Highlight>,
                        в то время как обычные литий-ионные работают менее эффективно.
                    </li>
                    <li className="mt-2">
                        Избегайте использования устройств на сильном морозе. Если это необходимо, согрейте
                        аккумулятор перед использованием.
                    </li>
                </ul>

                {/* Заключение */}
                <div className="bg-green-800 dark:text-green-300 p-4 mt-6 rounded-lg shadow-lg">
                    <h3 className="text-center font-bold text-xl">
                        Заключение
                    </h3>
                    <p className="text-center mt-2">
                        Аккумулятор разряжается быстрее на холоде не из-за потери электронов, а из-за
                        замедления химических реакций, увеличения сопротивления и снижения проводимости
                        электролита. Например, при <Highlight>-20°C</Highlight> ёмкость может снизиться до
                        <Highlight>50%</Highlight>, а при <Highlight>-30°C</Highlight> батарея может вообще перестать работать.
                        Эти эффекты временные, и ёмкость частично восстанавливается при нагреве. Следуйте
                        рекомендациям, чтобы сохранить работоспособность аккумуляторов даже в мороз!
                    </p>
                </div>
            </Section>

            {/* Осаждение меди в разных условиях */}
            <Section title=" Осаждение меди в разных условиях">

                <p className="paragraph_example ">
                    Осаждение меди в электролитических системах зависит от нескольких факторов, которые
                    необходимо учитывать для получения равномерного и качественного покрытия.
                    Рассмотрим основные параметры:
                </p>

                <ul className="unordered_list ">
                    <li>
                        <Highlight>Концентрация электролита:</Highlight>
                        Чем выше концентрация CuSO₄, тем быстрее осаждается медь на катоде:
                        <ul className="nested_list mt-2">
                            <li>Оптимальная концентрация: 0.5–1.5 моль/л для равномерного покрытия.</li>
                            <li>Слишком низкая концентрация ({"<"} 0.2 моль/л) снижает скорость осаждения.</li>
                            <li>Слишком высокая концентрация ({">"} 2 моль/л) может вызвать образование грубых кристаллов меди.</li>
                        </ul>
                    </li>
                    <li className="mt-4">
                        <Highlight>Температура раствора:</Highlight>
                        Увеличение температуры ускоряет процесс осаждения:
                        <ul className="nested_list mt-2">
                            <li>Оптимальная температура: 40–60°C.</li>
                            <li>При температурах выше 70°C могут возникнуть побочные реакции, такие как образование оксидов меди.</li>
                            <li>Низкие температуры ({"<"} 20°C) замедляют процесс, снижая эффективность осаждения.</li>
                        </ul>
                    </li>
                    <li className="mt-4">
                        <Highlight>Сила тока:</Highlight>
                        Сила тока влияет на скорость осаждения и качество покрытия:
                        <ul className="nested_list mt-2">
                            <li>Оптимальная плотность тока: 0.5–1.0 А/дм².</li>
                            <li>Слишком высокая сила тока ({">"} 2.0 А/дм²) приводит к образованию неравномерного покрытия или дендритов.</li>
                            <li>Слишком низкая сила тока ({"<"} 0.2 А/дм²) замедляет процесс до неэффективного уровня.</li>
                        </ul>
                    </li>
                </ul>

                <p className="paragraph  mt-4">
                    В лабораторных условиях все параметры регулируются для достижения оптимального
                    результата. Обычно используют контролируемые растворы с концентрацией CuSO₄ 1 моль/л
                    при температуре 50°C и плотности тока 0.8 А/дм².
                </p>

                {/* Таблица параметров */}
                <h3 className="header_h3  mt-8">Рекомендуемые параметры осаждения</h3>
                <table className="table-auto w-full  border-collapse border border-gray-600 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-600 px-4 py-2">Параметр</th>
                            <th className="border border-gray-600 px-4 py-2">Рекомендуемое значение</th>
                            <th className="border border-gray-600 px-4 py-2">Последствия отклонений</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Концентрация CuSO₄</td>
                            <td className="border border-gray-600 px-4 py-2">0.5–1.5 моль/л</td>
                            <td className="border border-gray-600 px-4 py-2">
                                Слишком низкая концентрация снижает скорость осаждения, высокая — ухудшает качество покрытия.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Температура раствора</td>
                            <td className="border border-gray-600 px-4 py-2">40–60°C</td>
                            <td className="border border-gray-600 px-4 py-2">
                                Высокая температура может вызвать побочные реакции, низкая — замедляет процесс.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 px-4 py-2">Плотность тока</td>
                            <td className="border border-gray-600 px-4 py-2">0.5–1.0 А/дм²</td>
                            <td className="border border-gray-600 px-4 py-2">
                                Высокая плотность вызывает неравномерное покрытие, низкая — снижает скорость осаждения.
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Рекомендации */}
                <h3 className="header_h3  mt-8">Рекомендации по процессу</h3>
                <ul className="unordered_list ">
                    <li>
                        Перед началом процесса убедитесь, что раствор электролита хорошо перемешан и очищен от примесей.
                    </li>
                    <li>
                        Используйте перемешивание раствора (механическое или воздушное), чтобы предотвратить локальные перепады концентрации.
                    </li>
                    <li>
                        Поддерживайте постоянный уровень температуры с помощью водяной бани или термостата.
                    </li>
                    <li>
                        Для получения равномерного слоя меди используйте ток заданной плотности и избегайте резких скачков напряжения.
                    </li>
                </ul>
            </Section>

            {/* Заключение */}
            <Section title="Итог: что важно знать о батарейках и меди?">
                <p className="paragraph_example ">
                    Подведём итоги ключевых моментов, которые помогут вам лучше понимать работу батареек
                    и процесс осаждения меди:
                </p>

                {/* Карточки с выводами */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {/* Карточка 1 */}
                    <div className="bg-gray-800  p-4 rounded-lg shadow-lg">
                        <h3 className="text-green-400 font-semibold">⚡ Батарейки</h3>
                        <p>
                            Батарейки работают благодаря электрохимическим реакциям, где одни материалы
                            растворяются, а другие осаждаются. Их эффективность зависит от условий хранения
                            и температуры.
                        </p>
                    </div>
                    {/* Карточка 2 */}
                    <div className="bg-gray-800  p-4 rounded-lg shadow-lg">
                        <h3 className="text-green-400 font-semibold">🌡️ Условия хранения</h3>
                        <p>
                            Храните батарейки при температуре от +10°C до +25°C в сухом месте, чтобы продлить
                            срок службы. Высокая температура ускоряет износ, а низкая снижает ёмкость.
                        </p>
                    </div>
                    {/* Карточка 3 */}
                    <div className="bg-gray-800  p-4 rounded-lg shadow-lg">
                        <h3 className="text-green-400 font-semibold">🔬 Осаждение меди</h3>
                        <p>
                            Осаждение меди — это процесс, зависящий от концентрации CuSO₄, температуры и силы
                            тока. Для равномерного покрытия важно соблюдать оптимальные параметры.
                        </p>
                    </div>
                </div>

                {/* Заключительный текст */}
                <p className="paragraph  mt-6">
                    Понимание этих процессов поможет вам не только правильно использовать батарейки, но
                    и оценить их поведение в различных условиях. Это знание особенно полезно для инженеров,
                    химиков и любителей науки.
                </p>

                {/* Призыв к действию */}
                <div className="bg-green-800 dark:text-green-300 p-4 mt-6 rounded-lg shadow-lg">
                    <h3 className="text-center font-bold text-xl">
                        Примените знания на практике!
                    </h3>
                    <p className="text-center mt-2">
                        Экспериментируйте с батарейками, изучайте процессы осаждения меди и делитесь своими
                        открытиями. Эти знания помогут вам лучше понимать мир вокруг!
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default BatteryAndCopperArticle;






// Компонент для отображения таблицы преимуществ и недостатков
const Table: React.FC<{ items: string[]; title: string }> = ({ items, title }) => (
    <div className="mt-4">
        <h4 className="text-lg font-semibold text-green-400">{title}</h4>
        <ul className="list-disc list-inside text-gray-300">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);