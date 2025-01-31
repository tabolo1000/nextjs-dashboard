import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function CellStructure() {
    return (
        <>
            {/* Клеточное строение */}
            <Section title="Клеточное строение" parity>
                <p className="paragraph_base">
                    <Highlight>Клетка</Highlight> — это структурно-функциональная единица всех живых организмов, за исключением вирусов, которые не имеют клеточного строения.
                </p>
                <h3 className="header_h3">Типы клеток:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Прокариоты:</Highlight> клетки без ядра. Их генетический материал "плавает" в цитоплазме. Примеры: бактерии, археи.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Эукариоты:</Highlight> клетки с ядром и органоидами. Примеры: растения, животные, грибы.
                    </li>
                </ul>
                <h3 className="header_h3">Основные компоненты клетки:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Цитоплазматическая мембрана:</Highlight> барьер, регулирующий обмен веществ между клеткой и окружающей средой.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Цитоплазма:</Highlight> внутренняя среда клетки, где протекают биохимические реакции.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Органоиды:</Highlight> функциональные структуры клетки, включая:
                        <ul className="unordered_list nested">
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Митохондрии:</Highlight> "энергетические станции" клетки.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Рибосомы:</Highlight> отвечают за синтез белков.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Ядро:</Highlight> хранит генетическую информацию.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Хлоропласты:</Highlight> обеспечивают фотосинтез у растений (только у растительных клеток).
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Человеческое тело состоит примерно из <Highlight>37,2 триллиона клеток</Highlight>. Каждая из них выполняет уникальную функцию, обеспечивая жизнедеятельность организма.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_base">
                    У эукариотической клетки, например, клетки печени человека:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Содержится более <Highlight>1000 митохондрий</Highlight>, так как орган нуждается в большом количестве энергии.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Генетическая информация хранится в ядре, которое контролирует все процессы в клетке.
                    </li>
                </ul>
            </Section>
        </>
    );
}

export default CellStructure;
