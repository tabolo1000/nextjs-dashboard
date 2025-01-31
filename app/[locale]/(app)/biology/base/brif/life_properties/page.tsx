import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function LifeProperties() {
    return (
        <>
            {/* Свойства жизни */}
            <Section title="Свойства жизни" parity>
                <p className="paragraph_base">
                    Жизнь характеризуется уникальными свойствами, обеспечивающими её существование и развитие. Среди них: <Highlight>рост, развитие, размножение, наследственность и изменчивость</Highlight>. Эти процессы поддерживают как отдельные организмы, так и жизнь как явление.
                </p>

                <h3 className="header_h3">Рост и развитие:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Рост:</Highlight> увеличение размеров организма, массы или количества клеток.
                        <p className="paragraph_base">
                            Пример: у растений рост может быть непрерывным благодаря делению клеток в меристемах (зонах роста).
                        </p>
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Развитие:</Highlight> качественные изменения организма, связанные с дифференциацией клеток и формированием органов.
                        <ul className="unordered_list">
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Онтогенез:</Highlight> индивидуальное развитие организма от зачатия до смерти.
                            </li>
                            <li className="unordered_list_li paragraph_example">
                                <Highlight>Филогенез:</Highlight> историческое развитие вида в процессе эволюции.
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="header_h3">Размножение:</h3>
                <p className="paragraph_base">
                    <Highlight>Способность к воспроизводству:</Highlight> основа продолжения жизни. Различают:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Бесполое размножение:</Highlight> деление клетки, почкование, споры. Это быстрый процесс, но не обеспечивает генетического разнообразия.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Половое размножение:</Highlight> передача генетической информации от двух родителей, что увеличивает генетическое разнообразие.
                    </li>
                </ul>

                <h3 className="header_h3">Наследственность:</h3>
                <p className="paragraph_base">
                    <Highlight>Наследственность:</Highlight> способность передавать генетическую информацию следующему поколению. Основой является ДНК, содержащая гены, которые кодируют белки и определяют признаки организма.
                </p>

                <h3 className="header_h3">Изменчивость:</h3>
                <p className="paragraph_base">
                    <Highlight>Изменчивость:</Highlight> способность организмов изменяться под влиянием мутаций, рекомбинаций генов и факторов внешней среды. Это явление лежит в основе эволюции.
                </p>

                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Генетический код универсален для всех живых существ — от бактерий до человека. Это подтверждает общее происхождение жизни.
                </p>
            </Section>
        </>
    );
}

export default LifeProperties;
