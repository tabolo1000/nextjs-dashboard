import {Section} from "@/app/ui/math/components/Section";
import {CustomTable} from "@/app/ui/math/components/CustomTable";
import React from "react";


export function ManufacturerReview() {
    return <Section
            title={"Батарейки и аккумуляторы: обзор производителей"}
            aria-labelledby="batteries-overview"
            parity={true}>

            {/* Категория 1: Бытовые батарейки */}
            <div aria-labelledby="household-batteries">
                <h3 className={"header_h3"}>1. Бытовые батарейки (щелочные, солевые, литиевые)</h3>
                <p className="paragraph_base">
                    Эта категория включает батарейки стандартных форматов AA, AAA, C, D, 9V и кнопочные элементы. Они
                    используются в пультах, игрушках, фонарях, часах и другой электронике.
                </p>
                <CustomTable
                    columns={[
                        {label: "Производитель", textAlign: "left"},
                        {label: "Типы батареек", textAlign: "left"},
                        {label: "Особенности", textAlign: "left"},
                        {label: "Рекомендация", textAlign: "left"},
                    ]}
                    rows={[
                        ["Duracell", "AA, AAA, 9V", "Высокая емкость, долговечность, линейки Ultra Power и Optimum.", "Для устройств с большим энергопотреблением (игрушки, фонари)."],
                        ["Energizer", "AA, AAA, литиевые", "Литиевые батарейки Ultimate Lithium для экстремальных температур.", "Для профессиональной техники, фотоаппаратов."],
                        ["Panasonic", "AA, AAA, C, D", "Линейка Evolta — конкурент Duracell.", "Универсальный выбор для бытовой электроники."],
                        ["GP Batteries", "AA, AAA", "Хорошее соотношение цены и качества.", "Для повседневного использования."]
                    ]}
                />
            </div>

            {/* Категория 2: Перезаряжаемые аккумуляторы */}
            <div aria-labelledby="rechargeable-batteries">
                <h3 className={"header_h3"}>2. Перезаряжаемые аккумуляторы (NiMH, NiCd, Li-ion)</h3>
                <p className="paragraph_base">
                    Перезаряжаемые аккумуляторы используются в устройствах с высоким энергопотреблением: фотоаппаратах,
                    геймпадах, электроинструментах. Они более экологичны и долговечны, чем одноразовые батарейки.
                </p>
                <CustomTable
                    columns={[
                        {label: "Производитель", textAlign: "left"},
                        {label: "Тип", textAlign: "left"},
                        {label: "Особенности", textAlign: "left"},
                        {label: "Рекомендация", textAlign: "left"},
                    ]}
                    rows={[
                        ["Panasonic (Eneloop)", "NiMH", "Сохраняют до 80% заряда за 1 год хранения.", "Лучший выбор для фото- и видеотехники."],
                        ["Sony", "Li-ion", "Надежные литий-ионные аккумуляторы для бытовой электроники.", "Подходят для камер и портативных устройств."],
                        ["Samsung SDI", "Li-ion", "Литий-ионные ячейки для смартфонов и ноутбуков.", "Для гаджетов и модульных сборок."],
                        ["IKEA (LADDA)", "NiMH", "Аналог Panasonic Eneloop по доступной цене.", "Для экономного использования."]
                    ]}
                />
            </div>

            {/* Категория 3: Литий-ионные аккумуляторы */}
            <div aria-labelledby="lithium-ion-batteries">
                <h3 className={"header_h3"}>3. Литий-ионные аккумуляторы (Li-ion, Li-Po)</h3>
                <p className="paragraph_base ">
                    Литий-ионные аккумуляторы используются в смартфонах, ноутбуках, электромобилях и других устройствах,
                    где важны высокая ёмкость и лёгкий вес.
                </p>
                <ul className="unordered_list">
                    <li className={"unordered_list_li paragraph_example"}>
                        <span  className={"second_priority_content"}>Samsung SDI:</span> Один из лидеров рынка ячеек для смартфонов и ноутбуков.
                    </li>
                    <li className={"unordered_list_li paragraph_example"}>
                        <span className={"second_priority_content"}>LG Chem:</span> Надежные аккумуляторы для электромобилей и бытовой электроники.
                    </li>
                    <li className={"unordered_list_li paragraph_example"}>
                        <span className={"second_priority_content"}>BYD:</span> Лидер в сегменте LiFePO4 аккумуляторов для электромобилей.
                    </li>
                </ul>
            </div>
    </Section>
}