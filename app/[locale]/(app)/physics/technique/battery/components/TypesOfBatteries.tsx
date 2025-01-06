import React from "react";
import {Table} from "@/app/[locale]/(app)/physics/technique/battery/assets/lang/ru";
import {Section} from "@/app/ui/math/components/Section";



export function TypesOfBatteries(){
    return <>
        <Section title={"Батарейки и аккумуляторы: Полный обзор технологий"}>
            {/* Щелочные батарейки */}
            <div>
                <h3 className="header_h3">Щелочные батарейки</h3>
                <p className="under_text">Alkaline</p>
                <p className="paragraph_base">
                    Щелочные батарейки используют химическую реакцию между диоксидом марганца и
                    цинком с электролитом на основе гидроксида калия.
                </p>
                <div>
                    <h4 className="header_h4">Особенности:</h4>
                    <ul className="unordered_list">
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Напряжение:</span> 1.5 В
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}> Срок хранения:</span> 5–10 лет
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Перезаряжаемые:</span> Нет
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Емкость:</span> до 3000 мА·ч (AA)
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
            <div >
                <h3 className="header_h3">Солевые батарейки</h3>
                <p className="italic text-gray-400 ml-10">Zinc-Carbon</p>
                <p className="paragraph_base">
                    Солевые батарейки используют цинк и диоксид марганца с солевым электролитом
                    (хлорид аммония или хлорид цинка).
                </p>
                <div >
                    <h4 className="header_h4">Особенности:</h4>
                    <ul className="list-disc list-inside dark:text-gray-300">
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Напряжение:</span> 1.5 В
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Срок хранения:</span> 2–3 года
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Перезаряжаемые:</span> Нет
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Емкость:</span> 400–500 мА·ч
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
            <div >
                <h3 className="header_h3">Литиевые батарейки</h3>
                <p className="italic text-gray-400 ml-10">Lithium primary</p>
                <p className="paragraph_base">
                    Литиевые батарейки используют литий как анод и диоксид марганца или серный
                    гексафторид как катод.
                </p>
                <div >
                    <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Напряжение:</span> 1.5 В (AA, AAA), 3 В (кнопочные элементы)
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Срок хранения:</span> до 20 лет
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Перезаряжаемые:</span> Нет
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Емкость:</span> 3000 мА·ч и выше (AA)
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
            <div >
                <h3 className="header_h3">
                    Никель-металлогидридные аккумуляторы
                </h3>
                <p className="italic text-gray-400 ml-10">NiMH</p>
                <p className="paragraph_base">
                    NiMH аккумуляторы используют никель-оксид-гидроксид (катод) и
                    водородосодержащий сплав (анод) с водным электролитом.
                </p>
                <div >
                    <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Напряжение:</span> 1.2 В
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Перезаряжаемые:</span> Да
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Циклы зарядки:</span> 500–2000 циклов
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Емкость:</span> 600–2500 мА·ч
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
            <div >
                <h3 className="header_h3">Литий-ионные аккумуляторы</h3>
                <p className="italic text-gray-400 ml-10">Li-ion</p>
                <p className="paragraph_base">
                    Li-ion аккумуляторы используют литий-кобальтовый оксид или аналогичные
                    соединения в качестве катода и углерод как анод.
                </p>
                <div >
                    <h3 className="text-lg font-medium text-green-400">Особенности:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Напряжение:</span> 3.6–3.7 В
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Перезаряжаемые:</span> Да
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Циклы зарядки:</span> 300–1000 циклов
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Емкость:</span> 1000–5000 мА·ч
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>
                            <span className={"second_priority_content"}>Саморазряд:</span> менее 5% в месяц
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
        </Section>
    </>
}