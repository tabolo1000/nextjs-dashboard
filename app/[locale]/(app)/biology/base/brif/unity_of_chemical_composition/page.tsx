import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function ChemicalCompositionUnity() {
    return (
        <>
            {/* Единство химического состава */}
            <Section title="Единство химического состава" parity>
                <p className="paragraph_base">
                    Живые организмы обладают удивительным химическим единством, несмотря на огромное разнообразие форм жизни.
                </p>
                <h3 className="header_h3">Основные элементы:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>
                            Около 98% массы любого организма составляют всего 4 элемента: углерод (C), водород (H), кислород (O) и азот (N).
                        </Highlight> Эти элементы формируют основу органических соединений.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>
                            Углерод
                        </Highlight> — "строительный материал" жизни, так как способен образовывать сложные и разнообразные молекулы (углеводы, белки, липиды, нуклеиновые кислоты).
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>
                            Кислород и водород
                        </Highlight> — главные составляющие воды, которая составляет до 70-80% массы клетки и является универсальной средой для биохимических реакций.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>
                            Азот
                        </Highlight> — ключевой компонент аминокислот, а значит, и белков, а также нуклеиновых кислот (ДНК, РНК).
                    </li>
                </ul>
                <h3 className="header_h3">Органические соединения:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Белки:</Highlight> выполняют строительные, катализаторные (ферменты) и регуляторные функции.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Углеводы:</Highlight> основной источник энергии (глюкоза) и структурный компонент (целлюлоза у растений).
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Липиды:</Highlight> резервы энергии, компоненты мембран.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Нуклеиновые кислоты:</Highlight> хранят и передают наследственную информацию.
                    </li>
                </ul>
                <h3 className="header_h3">Неорганические вещества:</h3>
                <p className="paragraph_base">
                    Вода и минеральные соли участвуют в поддержании осмотического баланса, образовании структур (например, костей) и обеспечении функциональности ферментов.
                </p>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Единство химического состава позволяет ученым предполагать общее происхождение жизни на Земле. Все живые организмы "говорят на одном химическом языке".
                </p>
            </Section>
        </>
    );
}

export default ChemicalCompositionUnity;
