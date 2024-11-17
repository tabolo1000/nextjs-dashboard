import Image from "next/image";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import React from "react";
import Term from "@/app/ui/math/components/сopywriting/Term";


export default function Scales () {
    return (
        <div
            className="main_block_task">
            {/* Вычитание: задача и объяснение */}
            <h2 className="header_h1">Вычитание!</h2>
            <section className="mb-10">
                <h2 className="header_h2_odd">Вычитание — давай разберемся!</h2>
                <p className="paragraph">
                    Представь, что ты гуляешь с другом. За два часа вы прошли <strong>9 км</strong>. На втором часу вы прошли <strong>4 км</strong>. А сколько километров вы прошли за первый час? Давай разберёмся!
                </p>

                <p className="paragraph">
                    У нас есть общее расстояние — это <strong>9 км</strong>. Мы знаем, что во второй час вы прошли <strong>4 км</strong>. Чтобы узнать, сколько вы прошли за первый час, нужно вычесть из 9 то, что вы прошли во второй час — <strong>4 км</strong>. Это можно записать так:
                </p>

                <p className="paragraph text-center font-bold text-lg">
                    9 − 4 = 5
                </p>

                <p className="paragraph">
                    Получается, за первый час вы прошли <strong>5 км</strong>. Это и есть решение нашей задачи!
                </p>

                {/* Таблица с терминами: уменьшаемое, вычитаемое, разность */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <p className="font-bold text-lg mb-2">Запоминаем термины:</p>
                    <ul className="unordered_list">
                        <li><strong>9</strong> — это <Term right={"right"}>уменьшаемое</Term>. Это общее расстояние, которое мы прошли.</li>
                        <li><strong>4</strong> — это <Term right={"right"}>вычитаемое</Term>. Это то, что мы прошли во второй час.</li>
                        <li><strong>5</strong> — это <Term right={"right"}>разность</Term>. Это то, что мы прошли за первый час.</li>
                    </ul>
                </div>

                <p className="paragraph">
                    Вот так просто! Вычитание — это когда нам нужно узнать, сколько осталось или сколько было изначально, если мы что-то убрали или вычли.
                </p>
            </section>

            {/* Вычитание на координатной оси */}
            <section className="mb-10">
                <h3 className="header_h3">Как это работает на числовой прямой?</h3>
                <p className="paragraph">
                    Теперь давай представим себе <Term right={"right"}>числовую прямую</Term> — это такая линия, на которой можно отмечать числа, как на линейке. Сначала мы находим число <strong>9</strong> — это наша общая длина пути. Теперь отступаем назад на <strong>4</strong> шага, ведь мы вычитаем 4 км. И оказывается, что мы попадаем на число <strong>5</strong>!
                </p>

                {/* Координатная ось */}
                <div className="flex justify-center mb-6">
                    <svg width="400" height="100" className="rounded-lg shadow-md">
                        <line x1="20" y1="50" x2="380" y2="50" stroke="#333" strokeWidth="2" />
                        <line x1="20" y1="45" x2="20" y2="55" stroke="#333" strokeWidth="2" />
                        <line x1="380" y1="45" x2="380" y2="55" stroke="#333" strokeWidth="2" />
                        <text x="15" y="70" fill="#333">0</text>
                        <text x="75" y="70" fill="#333">4</text>
                        <text x="135" y="70" fill="#333">9</text>
                        <text x="195" y="70" fill="#333">14</text>
                        {/* Стрелка */}
                        <path d="M 135 50 Q 105 25 75 50" fill="none" stroke="red" strokeWidth="2" />
                        <text x="95" y="25" fill="red">-4</text>
                    </svg>
                </div>

                <p className="paragraph">
                    Вот так работает вычитание на числовой прямой. Легко, правда?
                </p>
            </section>

            {/* Свойства вычитания суммы из числа */}
            <section className="mb-10">
                <h3 className="header_h3">Маленький секрет: свойства вычитания</h3>
                <p className="paragraph">
                    А теперь давай посмотрим на интересные примеры. Оказывается, вычитание можно делать по-разному, но результат всё равно будет одинаковым. Вот как:
                </p>

                <p className="paragraph text-center font-bold text-lg">
                    12 − (3 + 2) = 12 − 5 = 7<br />
                    (12 − 3) − 2 = 9 − 2 = 7
                </p>

                <p className="paragraph">
                    Сначала мы вычли сумму <strong>3 + 2</strong> сразу, а потом вычитали по частям. Получилось одно и то же число — <strong>7</strong>! Это называется <Term right={"right"}>свойством вычитания суммы из числа</Term>.
                </p>

                {/* Координатная ось для примера свойств вычитания */}
                <div className="flex justify-center mb-6">
                    <svg width="400" height="100" className="rounded-lg shadow-md">
                        <line x1="20" y1="50" x2="380" y2="50" stroke="#333" strokeWidth="2" />
                        <line x1="20" y1="45" x2="20" y2="55" stroke="#333" strokeWidth="2" />
                        <line x1="380" y1="45" x2="380" y2="55" stroke="#333" strokeWidth="2" />
                        <text x="15" y="70" fill="#333">0</text>
                        <text x="75" y="70" fill="#333">3</text>
                        <text x="135" y="70" fill="#333">5</text>
                        <text x="195" y="70" fill="#333">10</text>
                        {/* Стрелки */}
                        <path d="M 135 50 Q 105 25 75 50" fill="none" stroke="blue" strokeWidth="2" />
                        <path d="M 195 50 Q 165 25 135 50" fill="none" stroke="purple" strokeWidth="2" />
                        <text x="105" y="25" fill="blue">-2</text>
                        <text x="165" y="25" fill="purple">-3</text>
                    </svg>
                </div>
            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_third/",
                nextExercise: "/math/class_fifth/lesson_third/beam/beam",
            }}/>
        </div>
    );
};

