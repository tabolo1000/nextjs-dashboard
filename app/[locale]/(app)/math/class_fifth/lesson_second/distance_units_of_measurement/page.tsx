// src/components/EducationMaterial.tsx
import React from 'react';
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";

export default function Distance_units_of_measurement () {
    return (
        <div className={"main_block_task"}>
            <section className="main-section">
                <h1 className="header_h1">Единицы Измерения Расстояния</h1>
                <h2 className="header_h2_odd">Основные Единицы</h2>
                <ul className="list-disc pl-5 mb-4 paragraph">
                    <li><strong>Сантиметры (см)</strong>: Используются для измерения небольших расстояний. Например,
                        длина карандаша может составлять 20 см.
                    </li>
                    <li><strong>Метры (м)</strong>: Основная единица в метрической системе. Например, высота двери
                        составляет 2 м, а длина комнаты — 5 м.
                    </li>
                    <li><strong>Километры (км)</strong>: Используются для измерения больших расстояний. Например,
                        расстояние между двумя городами может быть 100 км.
                    </li>
                    <li><strong>Дюймы и футы</strong>: Эти единицы используются в некоторых странах. Например, длина
                        телевизора может составлять 55 дюймов, а рост человека — 6 футов.
                    </li>
                </ul>

                <h2 className="header_h2_even">Применение Единиц Измерения</h2>
                <p className="paragraph">
                    При измерении расстояний важно использовать правильные единицы. Например:
                </p>
                <ul className="list-disc pl-5 paragraph">
                    <li>Для измерения длины стола используйте сантиметры или метры.</li>
                    <li>Для определения расстояния между городами используйте километры.</li>
                </ul>
                <h2 className="header_h2_odd">
                    Единицы измерения расстояний
                </h2>

                <table className="table_info">
                    <thead>
                    <tr className="bg-blue-100">
                        <th className="table_header">Единица</th>
                        <th className="table_header">Обозначение</th>
                        <th className="table_header">Соотношение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table_row">
                        <td className="table_data_cell">Миллиметр</td>
                        <td className="table_data_cell">мм</td>
                        <td className="table_data_cell">1 мм = 0.1 см</td>
                    </tr>
                    <tr className="even:bg-gray-50">
                        <td className="table_data_cell">Сантиметр</td>
                        <td className="table_data_cell">см</td>
                        <td className="table_data_cell">1 см = 10 мм</td>
                    </tr>
                    <tr className="even:bg-gray-50">
                        <td className="table_data_cell">Дециметр</td>
                        <td className="table_data_cell">дм</td>
                        <td className="table_data_cell">1 дм = 10 см</td>
                    </tr>
                    <tr className="even:bg-gray-50">
                        <td className="table_data_cell">Метр</td>
                        <td className="table_data_cell">м</td>
                        <td className="table_data_cell">1 м = 100 см</td>
                    </tr>
                    <tr className="even:bg-gray-50">
                        <td className="table_data_cell">Километр</td>
                        <td className="table_data_cell">км</td>
                        <td className="table_data_cell">1 км = 1000 м</td>
                    </tr>

                    </tbody>
                </table>

                <p className="mt-6 text-lg text-center text-gray-700">
                    Для измерения длин применяются разные единицы, от миллиметров до километров.
                    Каждая из них помогает нам измерять расстояния с нужной точностью.
                </p>


                <h2 className="header_h2_even">
                Приставки для измерений и правила произношения
                </h2>

            {/* Описание приставок */}
                <p className="text-lg text-gray-700 mb-6">
                    В сложных словах с корнями, обозначающими единицы измерения, приставки
                    указывают на кратность или долю величины. Ударение при этом падает на
                    второй корень. Вот основные приставки и их значения:
                </p>

                {/* Таблица приставок */}
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-300 p-4 text-left">Приставка</th>
                            <th className="border border-gray-300 p-4 text-left">Значение</th>
                            <th className="border border-gray-300 p-4 text-left">Пример</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Кило-</td>
                            <td className="border border-gray-300 p-4">1000</td>
                            <td className="border border-gray-300 p-4">Километр (1000 метров)</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Гекто-</td>
                            <td className="border border-gray-300 p-4">100</td>
                            <td className="border border-gray-300 p-4">Гектометр (100 метров)</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Дека-</td>
                            <td className="border border-gray-300 p-4">10</td>
                            <td className="border border-gray-300 p-4">Декаметр (10 метров)</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Деци-</td>
                            <td className="border border-gray-300 p-4">1/10</td>
                            <td className="border border-gray-300 p-4">Дециметр (0.1 метра)</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Санти-</td>
                            <td className="border border-gray-300 p-4">1/100</td>
                            <td className="border border-gray-300 p-4">Сантиметр (0.01 метра)</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                            <td className="border border-gray-300 p-4">Милли-</td>
                            <td className="border border-gray-300 p-4">1/1000</td>
                            <td className="border border-gray-300 p-4">Миллиметр (0.001 метра)</td>
                        </tr>
                        </tbody>
                    </table>

            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_second/straight",
                nextExercise: "/math/class_fifth/lesson_second/beam/beam",
            }}/>
        </div>
    );
};

