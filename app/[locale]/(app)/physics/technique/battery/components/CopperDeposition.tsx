
import {CustomTable} from "@/app/ui/math/components/CustomTable";
import {Section} from "@/app/ui/math/components/Section";
import React from "react";


export function CopperDeposition() {
    return <>
        <Section title=" Осаждение меди в разных условиях">
            <p className="paragraph_example ">
                Осаждение меди в электролитических системах зависит от нескольких факторов, которые
                необходимо учитывать для получения равномерного и качественного покрытия.
                Рассмотрим основные параметры:
            </p>

            <ul className="unordered_list ">
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Концентрация электролита:</span>
                    Чем выше концентрация CuSO₄, тем быстрее осаждается медь на катоде:
                    <ul className="unordered_list ">
                        <li className={"unordered_list_it paragraph_example"}>Оптимальная концентрация: 0.5–1.5 моль/л для равномерного покрытия.</li>
                        <li className={"unordered_list_it paragraph_example"}>Слишком низкая концентрация ({"<"} 0.2 моль/л) снижает скорость осаждения.</li>
                        <li className={"unordered_list_it paragraph_example"}>Слишком высокая концентрация ({">"} 2 моль/л) может вызвать образование грубых кристаллов меди.</li>
                    </ul>
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Температура раствора:</span>
                    Увеличение температуры ускоряет процесс осаждения:
                    <ul className="unordered_list ">
                        <li className={"unordered_list_it paragraph_example"}>Оптимальная температура: 40–60°C.</li>
                        <li className={"unordered_list_it paragraph_example"}>При температурах выше 70°C могут
                            возникнуть побочные реакции, такие как образование оксидов меди.
                        </li>
                        <li className={"unordered_list_it paragraph_example"}>Низкие температуры ({"<"} 20°C) замедляют
                            процесс, снижая эффективность осаждения.
                        </li>
                    </ul>
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    <span className={"second_priority_content"}>Сила тока:</span>
                    Сила тока влияет на скорость осаждения и качество покрытия:
                    <ul className="unordered_list ">
                        <li className={"unordered_list_it paragraph_example"}>Оптимальная плотность тока: 0.5–1.0
                            А/дм².
                        </li>
                        <li className={"unordered_list_it paragraph_example"}>Слишком высокая сила тока ({">"} 2.0
                            А/дм²) приводит к образованию неравномерного покрытия или дендритов.
                        </li>
                        <li className={"unordered_list_it paragraph_example"}>Слишком низкая сила тока ({"<"} 0.2 А/дм²)
                            замедляет процесс до неэффективного уровня.
                        </li>
                    </ul>
                </li>
            </ul>

            <p className="paragraph_base">
                В лабораторных условиях все параметры регулируются для достижения оптимального
                результата. Обычно используют контролируемые растворы с концентрацией CuSO₄ 1 моль/л
                при температуре 50°C и плотности тока 0.8 А/дм².
            </p>

            {/* Таблица параметров */}
            <h3 className="header_h3">Рекомендуемые параметры осаждения</h3>
            <CustomTable
                columns={[
                    { label: "Производитель", textAlign: "left" },
                    { label: "Тип", textAlign: "left" },
                    { label: "Особенности", textAlign: "left" },
                    { label: "Рекомендация", textAlign: "left" },
                ]}
                rows={[
                    ["Panasonic (Eneloop)", "NiMH", "Сохраняют до 80% заряда за 1 год хранения.", "Лучший выбор для фото- и видеотехники."],
                    ["Sony", "Li-ion", "Надежные литий-ионные аккумуляторы для бытовой электроники.", "Подходят для камер и портативных устройств."],
                    ["Samsung SDI", "Li-ion", "Литий-ионные ячейки для смартфонов и ноутбуков.", "Для гаджетов и модульных сборок."],
                    ["IKEA (LADDA)", "NiMH", "Аналог Panasonic Eneloop по доступной цене.", "Для экономного использования."]
                ]}
            />

            {/* Рекомендации */}
            <h3 className="header_h3  mt-8">Рекомендации по процессу</h3>
            <ul className="unordered_list ">
                <li className={"unordered_list_it paragraph_example"}>
                    Перед началом процесса убедитесь, что раствор электролита хорошо перемешан и очищен от примесей.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    Используйте перемешивание раствора (механическое или воздушное), чтобы предотвратить локальные перепады концентрации.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    Поддерживайте постоянный уровень температуры с помощью водяной бани или термостата.
                </li>
                <li className={"unordered_list_it paragraph_example"}>
                    Для получения равномерного слоя меди используйте ток заданной плотности и избегайте резких скачков напряжения.
                </li>
            </ul>
        </Section>
    </>
}