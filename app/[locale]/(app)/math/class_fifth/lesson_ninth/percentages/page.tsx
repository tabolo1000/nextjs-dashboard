import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Percentages() {
    return (
        <>
            {/* Проценты */}
            <Section title="Проценты" parity>
                <p className="paragraph_base">
                    <Highlight>Процент</Highlight> — это сотая часть числа. Знак процента
                    (<Highlight>%</Highlight>) показывает, сколько частей из 100 берётся
                    или рассматривается в конкретной задаче. Проценты помогают выражать
                    отношения частей к целому в удобной форме.
                </p>
                <h3 className="header_h3">Пример расчёта:</h3>
                <p className="paragraph_example">
                    Чтобы вычислить <Highlight>30%</Highlight> от <Highlight>200</Highlight>,
                    умножаем число на процент, представленный в виде десятичной дроби:
                    <Highlight>200 × 0,3 = 60</Highlight>.
                </p>
                <h3 className="header_h3">Основные формулы:</h3>
                <ul className="unordered_list">
                    <li>
                        Найти процент от числа:
                        <Highlight>(число × процент) ÷ 100</Highlight> или просто
                        <Highlight>число × десятичная дробь</Highlight>.
                    </li>
                    <li>
                        Узнать, сколько процентов одно число составляет от другого:
                        <Highlight>(часть ÷ целое) × 100</Highlight>.
                    </li>
                    <li>
                        Найти число по его проценту:
                        <Highlight>(значение ÷ процент) × 100</Highlight>.
                    </li>
                </ul>
                <h3 className="header_h3">Примеры:</h3>
                <ul className="unordered_list">
                    <li>
                        Скидка: товар стоит <Highlight>500 рублей</Highlight>, скидка
                        <Highlight>20%</Highlight>. Цена со скидкой:
                        <Highlight>500 − (500 × 0,2) = 500 − 100 = 400 рублей</Highlight>.
                    </li>
                    <li>
                        Банковский процент: вклад <Highlight>1000 рублей</Highlight> под
                        <Highlight>5%</Highlight> годовых. Через год:
                        <Highlight>1000 × 0,05 = 50 рублей</Highlight> прибыли.
                    </li>
                    <li>
                        Статистика: из <Highlight>200 человек</Highlight> в опросе
                        приняли участие <Highlight>120</Highlight>. Это составляет
                        <Highlight>(120 ÷ 200) × 100 = 60%</Highlight>.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Проценты широко используются в повседневной жизни: при расчёте скидок,
                    налогов, банковских ставок, анализе данных и статистике.
                </p>
                <h3 className="header_h3">Совет:</h3>
                <p className="paragraph_base">
                    Чтобы быстро находить проценты, превращайте их в десятичные дроби. Например,
                    <Highlight>25%</Highlight> — это <Highlight>0,25</Highlight>,
                    <Highlight>7%</Highlight> — это <Highlight>0,07</Highlight>.
                </p>
            </Section>
        </>
    );
}

export default Percentages;
