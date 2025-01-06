import {CustomTable} from "@/app/ui/math/components/CustomTable";
import {Section} from "@/app/ui/math/components/Section";
import React from "react";


export function TemperatureInfluence() {
    return <>
        <Section title="Как температура влияет на работу батареек?">

            <p className="paragraph_base">
                Температура оказывает значительное влияние на производительность батареек.
                Влияние можно разделить на два основных аспекта:
            </p>

            <div className="flex flex-col lg:flex-row gap-8 mt-4">
                {/* Блок 1: Текстовое описание */}
                <div className="flex-1">
                    <ul className="unordered_list ">
                        <li>
                            <p className="paragraph_base ">
                                <span className={"second_priority_content"}>Высокая температура: </span>
                                Ускоряет химические реакции, что может временно увеличить мощность батарейки.
                                Однако, это сокращает срок службы, так как внутренние компоненты разрушаются быстрее.
                            </p>
                            <ul className="unordered_list">
                                <li className="unordered_list_li paragraph_example">Щелочные батарейки теряют до 50% ёмкости при температуре выше +50°C.</li>
                                <li className="unordered_list_li paragraph_example">Литий-ионные батарейки при +40°C деградируют в 2 раза быстрее, чем при +20°C.</li>
                            </ul>
                        </li>
                        <li className="mt-4">
                            <p className="paragraph_base ">
                                <span className={"second_priority_content"}>Низкая температура:</span>
                                Замедляет химические реакции, что снижает ёмкость, мощность и скорость разряда.
                                Например:
                            </p>
                                <ul className="unordered_list">
                                    <li className="unordered_list_li paragraph_example">При -10°C литий-ионные батарейки теряют до 30% ёмкости.</li>
                                    <li className="unordered_list_li paragraph_example">При -20°C щелочные батарейки могут полностью потерять работоспособность.</li>
                                </ul>
                        </li>
                    </ul>
                </div>

                {/* Блок 2: Графическое представление */}
                <div className="flex-1">
                    <div className=" dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h3 className="header_h3">Влияние температуры</h3>
                        <p className="paragraph_base">
                            Как изменяется ёмкость батареек при разных температурах:
                        </p>
                        <ul className="unordered_list">
                            <li className="unordered_list_li paragraph_example">
                                <span className="text-green-400">+25°C:</span> 100% ёмкости (оптимальная температура).
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <span className="text-blue-400">0°C:</span> 80% ёмкости.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <span className="text-yellow-400">-10°C:</span> 50–70% ёмкости.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <span className="text-red-400">-20°C:</span> Менее 30% ёмкости.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Таблица температур для разных батареек */}
            <h3 className="header_h3  mt-8">Рекомендованная температура</h3>
            <CustomTable
                columns={[
                    { label: "Тип батарейки", textAlign: "left" },
                    { label: "Оптимальная температура", textAlign: "left" },
                    { label: "Критическая температура", textAlign: "left" },
                    { label: "Особенности", textAlign: "left" },
                ]}
                rows={[
                    ["Щелочные", "+10°C – +25°C", "-10°C / +50°C", "Снижение ёмкости при сильном холоде или жаре."],
                    ["Литий-ионные", "+15°C – +25°C", "-20°C / +40°C", "Быстрая деградация при жаре, снижение ёмкости на морозе."],
                    ["Свинцово-кислотные", "+10°C – +25°C", "-10°C / +45°C", "Сильный саморазряд при жаре, возможное замерзание электролита на морозе."]
                ]}
            />

            {/* Рекомендации */}
            <h3 className="header_h3">Рекомендации по эксплуатации</h3>
            <ul className="unordered_list ">
                <li className="unordered_list_li paragraph_example">
                    Избегайте длительного хранения батареек при температурах выше +40°C — это может
                    привести к необратимой деградации, особенно у литий-ионных батареек.
                </li>
                <li className="unordered_list_li paragraph_example">
                    При использовании батареек в холодных условиях (ниже 0°C) согрейте их перед
                    использованием, например, подержите в кармане.
                </li>
                <li className="unordered_list_li paragraph_example">
                    Храните батарейки в прохладном месте (но не в морозильнике!), чтобы продлить срок службы.
                </li>
            </ul>
        </Section>
    </>
}