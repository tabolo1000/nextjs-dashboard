import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Metabolism() {
    return (
        <>
            {/* Обмен веществ и энергии */}
            <Section title="Обмен веществ и энергии (метаболизм)" parity>
                <p className="paragraph_base">
                    <Highlight>Обмен веществ и энергии</Highlight> (метаболизм) — это основа жизнедеятельности. Он включает два взаимосвязанных процесса:
                    <Highlight>анаболизм</Highlight> (синтез, накопление энергии) и <Highlight>катаболизм</Highlight> (расщепление, выделение энергии).
                </p>

                <h3 className="header_h3">Процессы обмена веществ:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Ассимиляция (анаболизм):</Highlight> синтез сложных органических веществ из более простых (например, фотосинтез у растений или синтез белков из аминокислот). Требует затрат энергии, которая поступает из внешней среды (например, солнечный свет или органические вещества).
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Диссимиляция (катаболизм):</Highlight> расщепление сложных веществ с выделением энергии (например, дыхание, где глюкоза распадается на углекислый газ и воду). Энергия, высвобождаемая при катаболизме, накапливается в молекулах АТФ (аденозинтрифосфата) — универсального "энергетического аккумулятора" клетки.
                    </li>
                </ul>

                <h3 className="header_h3">Роль обмена веществ:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Обеспечение клетки энергией для роста, размножения и восстановления.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Удаление продуктов распада (например, углекислого газа, мочевины).
                    </li>
                </ul>

                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    <Highlight>Метаболизм</Highlight> — это главный критерий жизни. Даже одноклеточные организмы, такие как бактерии, имеют сложные метаболические пути, что делает их "химическими фабриками".
                </p>
            </Section>
        </>
    );
}

export default Metabolism;
