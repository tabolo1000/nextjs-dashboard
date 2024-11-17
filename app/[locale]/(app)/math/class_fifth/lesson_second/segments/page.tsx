// src/components/EducationMaterial.tsx
import React from 'react';

import Term from "@/app/ui/math/components/сopywriting/Term";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export default function Segments () {
    return (
        <div className="container mx-auto p-6">
            <h1 className="header_h1">Отрезки</h1>
            <section className="my-8">
                <p className="paragraph">
                    <Term>Отрезок</Term> — это часть прямой, которая соединяет две точки и имеет фиксированную
                    длину.
                    Обозначается он как <span className="font-mono">AB</span>, где A и B — концы отрезка.
                </p>

                <h3 className="text-xl font-semibold mb-2">Основные Свойства Отрезков:</h3>
                <ul className="list-disc pl-5 mb-4 paragraph">
                    <li><strong>Длина отрезка</strong>: Это расстояние между его концами. Например, если длина
                        отрезка <span className="font-mono">AB</span> равна 10 см, мы можем записать <span
                            className="font-mono">|AB| = 10 см</span>.
                    </li>
                    <li><strong>Сравнение отрезков</strong>: Для понимания длины отрезков мы можем использовать
                        измерительные инструменты. Например, если <span className="font-mono">|AB| &lt; |CD|</span>, это
                        означает, что отрезок <span className="font-mono">AB</span> короче, чем отрезок <span
                            className="font-mono">CD</span>.
                    </li>
                    <li><strong>Соотношение отрезков</strong>: Если точка C лежит на отрезке <span
                        className="font-mono">AB</span>, то выполняется равенство:
                        <span className="font-mono">|AC| + |CB| = |AB|</span>.
                    </li>
                </ul>

                <strong className="paragraph_example">Пример:</strong>
                <p className="paragraph">
                    Представьте, что вы рисуете отрезок <span className="font-mono">AB</span> длиной 10 см.
                    Если вы добавите точку C, которая делит отрезок на две части, например:
                </p>
                <ul className="list-disc pl-5 mb-4 paragraph">
                    <li><span className="font-mono">|AC| = 4 см</span></li>
                    <li><span className="font-mono">|CB| = 6 см</span></li>
                </ul>
                <p className="mt-2 paragraph">
                    Это можно выразить следующим образом:
                    <span className="font-mono"> |AC| + |CB| = |AB| (4 см + 6 см = 10 см)</span>
                </p>
            </section>
            <Audio_Navigate
                to={{
                    nextTask: "./delta",
                    nextExercise: "",
                }}
                path="/math/class_fifth/lesson_second/segments/segments"
            ></Audio_Navigate>
        </div>
    );
};

