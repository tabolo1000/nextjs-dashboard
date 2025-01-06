import {Highlight} from "@/app/ui/math/components/Highlight";
import {CustomTable} from "@/app/ui/math/components/CustomTable";
import {Section} from "@/app/ui/math/components/Section";
import React from "react";


export function StorageConditions(){
    return <>
        <Section title="Как условия хранения влияют на батарейки?" parity>
            <p className="paragraph_base ">
                Условия хранения играют важную роль в эффективности и сроке службы батареек.
                Вот основные факторы и их влияние:
            </p>
            <ul className="unordered_list ">
                <h3 className={"header_h3"}> Оптимальная температура хранения зависит от типа батарейки:</h3>
                <li>
                    <ul className={"unordered_list"}>
                        <li className={"unordered_list_li paragraph_example"}>Щелочные: от 0°C до +25°C (допустимо до
                            -20°C, но с понижением ёмкости).
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>Литий-ионные: от +5°C до +20°C. Хранение при
                            температуре выше +30°C ускоряет деградацию.
                        </li>
                        <li className={"unordered_list_li paragraph_example"}>Свинцово-кислотные: от +10°C до +25°C. При
                            температуре выше +25°C скорость саморазряда увеличивается.
                        </li>
                    </ul>
                    <p className="paragraph_base">
                        Высокая температура ускоряет химические реакции, что приводит к саморазряду и деградации.
                        Холод может замедлить реакции, но при температуре ниже -20°C возможны повреждения внутренних
                        компонентов.
                    </p>
                </li>
                <li>
                    <p className={"paragraph_base"}>
                        <span className={"second_priority_content"}> Влажность: </span>
                        Рекомендуемая влажность для хранения — не выше 50%. Высокая влажность может вызвать коррозию
                        контактов и нарушение изоляции,
                        особенно у щелочных батареек. Используйте герметичные контейнеры или добавьте пакеты с силикагелем
                        для защиты.
                    </p>
                </li>
                <li>
                    <p className={"paragraph_base"}>
                        <span className={"second_priority_content"}>Механические повреждения: </span>
                        Удары, падения или деформация корпуса могут привести к утечке электролита, короткому замыканию или
                        даже возгоранию,
                        особенно у литий-ионных батареек. Всегда храните батарейки в прочной упаковке.
                    </p>
                </li>
            </ul>

            <h3 className="header_h3 ">Рекомендации по хранению</h3>
            <ul className="unordered_list ">
                <li className={"unordered_list_li paragraph_example"}>
                        Храните батарейки в прохладном, сухом месте, защищённом от прямых солнечных лучей.
                </li>
                <li className={"unordered_list_li paragraph_example"}>
                     Для литий-ионных батареек заряжайте их до 40–60% перед длительным хранением.
                </li>
                <li className={"unordered_list_li paragraph_example"}>
                    Избегайте хранения вместе с металлическими предметами, чтобы предотвратить короткие замыкания.
                </li>
                <li className={"unordered_list_li paragraph_example"}>
                     Используйте герметичные контейнеры или специальные ящики для хранения батареек.
                </li>
            </ul>

            <h3 className="header_h3 ">Сроки хранения</h3>
            <CustomTable
                columns={[
                    { label: "Тип батарейки", textAlign: "left" },
                    { label: "Рекомендуемая температура", textAlign: "left" },
                    { label: "Срок хранения", textAlign: "left" },
                    { label: "Особенности", textAlign: "left" },
                ]}
                rows={[
                    ["Щелочные", "0°C – +25°C", "5–10 лет", "Сохраняют до 90% ёмкости через 5 лет при правильных условиях."],
                    ["Литий-ионные", "+5°C – +20°C", "1–3 года", "Теряют 10–20% ёмкости ежегодно даже без использования."],
                    ["Свинцово-кислотные", "+10°C – +25°C", "6–12 месяцев", "Требуют подзарядки каждые 6 месяцев при хранении."]
                ]}
            />

            <p className="paragraph_base">
                Соблюдение этих рекомендаций поможет батарейкам сохранить свою ёмкость и работоспособность на протяжении долгого времени.
            </p>
        </Section>
    </>
}