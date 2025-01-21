import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function ReviewQuestionsSection() {
    return (
        <>
            {/* Вопросы и задачи на повторение */}
            <Section title="Вопросы и задачи на повторение" parity>
                <p className="paragraph_base">
                    Закрепление материала через практику — это ключ к глубокому пониманию.
                    Выполните следующие задания, чтобы проверить свои знания:
                </p>
                <h3 className="header_h3">Задачи:</h3>
                <ul className="unordered_list">
                    <li>
                        Используя калькулятор, найдите <Highlight>15% от 350</Highlight>.
                        (Подсказка: <Highlight>15%</Highlight> = <Highlight>0,15</Highlight>,
                        поэтому вычисляем <Highlight>350 × 0,15</Highlight>.)
                    </li>
                    <li>
                        Постройте прямой угол с помощью чертёжного треугольника. Затем
                        измерьте его с помощью транспортира, чтобы убедиться, что он равен
                        <Highlight>90°</Highlight>.
                    </li>
                    <li>
                        Нарисуйте круговую диаграмму, показывающую распределение времени в
                        течение дня:
                        <ul className="unordered_list">
                            <li><Highlight>Сон</Highlight>: <Highlight>40%</Highlight>.</li>
                            <li><Highlight>Учёба</Highlight>: <Highlight>30%</Highlight>.</li>
                            <li><Highlight>Отдых</Highlight>: <Highlight>30%</Highlight>.</li>
                        </ul>
                        Переведите проценты в углы (например, <Highlight>40% = 144°</Highlight>)
                        и правильно разметьте диаграмму.
                    </li>
                </ul>
                <h3 className="header_h3">Советы:</h3>
                <ul className="unordered_list">
                    <li>Используйте точные инструменты для измерений (транспортир, линейка).</li>
                    <li>
                        Для расчётов с процентами помните: <Highlight>"% — это сотая часть числа"</Highlight>.
                    </li>
                    <li>
                        Проверяйте себя: результаты должны соответствовать теоретическим ожиданиям.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Практика не только укрепляет ваши навыки, но и помогает выявить
                    моменты, которые требуют дополнительного внимания. Не бойтесь
                    возвращаться к теории при необходимости!
                </p>
            </Section>
        </>
    );
}

export default ReviewQuestionsSection;
