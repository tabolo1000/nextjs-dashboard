import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function CircleCharts() {
    return (
        <>
            {/* Круговые диаграммы */}
            <Section title="Круговые диаграммы" parity>
                <p className="paragraph_base">
                    <Highlight>Круговая диаграмма</Highlight> — это графический способ
                    представления данных. Она изображается в виде круга, разделённого на
                    секторы, где каждый сектор показывает долю конкретной категории от
                    общего числа.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_example">
                    В классе <Highlight>40%</Highlight> учеников любят математику,
                    <Highlight>30%</Highlight> — физику, а ещё <Highlight>30%</Highlight> —
                    литературу. В круговой диаграмме это представлено тремя секторами:
                    <Highlight>40%</Highlight>, <Highlight>30%</Highlight> и
                    <Highlight>30%</Highlight>.
                </p>
                <h3 className="header_h3">Как построить круговую диаграмму:</h3>
                <ul className="unordered_list">
                    <li>
                        Переведите проценты в углы, используя формулу:
                        <Highlight>1% = 3,6°</Highlight>.
                    </li>
                    <li>
                        Для каждого значения умножьте процент на <Highlight>3,6</Highlight>.
                        Например:
                        <ul className="unordered_list">
                            <li>
                                <Highlight>40%</Highlight> = <Highlight>40 × 3,6 = 144°</Highlight>.
                            </li>
                            <li>
                                <Highlight>30%</Highlight> = <Highlight>30 × 3,6 = 108°</Highlight>.
                            </li>
                            <li>
                                Ещё <Highlight>30%</Highlight> = <Highlight>108°</Highlight>.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Постройте круг, разделив его на секторы с рассчитанными углами.
                    </li>
                </ul>
                <h3 className="header_h3">Советы:</h3>
                <ul className="unordered_list">
                    <li>Убедитесь, что сумма всех углов равна <Highlight>360°</Highlight>.</li>
                    <li>
                        Используйте разные цвета для секторов, чтобы данные были
                        легче воспринимаемыми.
                    </li>
                    <li>
                        Подпишите каждый сектор, указав процент или категорию, чтобы
                        диаграмма была информативной.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Круговые диаграммы используются в статистике, бизнесе, маркетинге и
                    других областях для наглядного представления данных.
                </p>
            </Section>
        </>
    );
}

export default CircleCharts;
