import Image from "next/image";
import Term from "@/app/ui/math/components/сopywriting/Term";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import React from "react";


export default function Thermometer_scales_masses () {
    return (
        <div className="main_block_task">
            {/* Заголовок */}
            <h1 className="header_h1">
                Термометр, Весы и Массы
            </h1>

            {/* Введение в измерения */}
            <section className="mb-10 w-full">
                <p className="paragraph">
                    <Term>Измерения</Term> — это основа науки, как и различных инженерных и практических задач, с которыми мы сталкиваемся каждый день.
                    Но измерение — это не просто отображение чисел на шкале. Это язык природы, который помогает нам понять окружающий мир.
                </p>
                <p className="paragraph">
                    Представьте себе термометр, весы или линейку. Все они говорят на одном языке — языке шкал и делений, который мы можем
                    использовать для точного описания таких понятий, как температура, вес или длина. Давайте погрузимся в этот удивительный мир измерений!
                </p>
            </section>

            {/* Термометр и его шкала */}
            <section className="mb-10">
                <h2 className="header_h2_odd">Термометр: Градусы и температура</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Термометр — это один из самых распространённых измерительных приборов, с которым мы сталкиваемся ежедневно. Он используется для измерения температуры,
                    и его шкала поделена на <Term right="right">деления</Term> , каждое из которых соответствует одному градусу Цельсия (°C).
                </p>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/" // замените на реальный путь к изображению термометра
                        alt="Термометр с температурной шкалой"
                        className="w-1/4 rounded-lg shadow-md"
                        width={100}
                        height={100}
                    />
                </div>
                <p className="paragraph">
                    На рисунке выше термометр показывает температуру <strong>21°C</strong>. Это означает, что каждая отметка на <Term right={"right"}>шкале прибора</Term> — это один градус,
                    и мы можем с точностью до градуса измерить температуру окружающей среды.
                </p>
                <p className="paragraph">
                    Термометры используются повсеместно: от контроля температуры тела до измерения температуры воздуха, воды и даже химических реакций.
                    Это простой, но чрезвычайно важный инструмент, который помогает нам лучше понимать окружающую среду.
                </p>
            </section>

            {/* Весы и измерение массы */}
            <section className="mb-10">
                <h2 className="header_h2_even">Весы: Мера массы</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    <Term>Весы</Term> — это другой важнейший инструмент для измерения массы объектов. На весах, как и на термометре, есть шкала, которая позволяет нам точно определить вес предмета.
                </p>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/" // замените на реальный путь к изображению весов
                        alt="Весы с ананасом"
                        className="w-1/3 rounded-lg shadow-md"
                        width={100}
                        height={100}
                    />
                </div>
                <p className="paragraph">
                    На рисунке выше видно, что масса ананаса составляет <strong>3 кг 600 г</strong>. Каждое деление на весах соответствует определённой массе, и благодаря этим делениям мы можем точно взвешивать предметы.
                    Весы используются повсеместно — от кухонных измерений до тяжёлой промышленности.
                </p>
            </section>

            {/* Таблица единиц массы */}
            <section className="mb-10">
                <h2 className="header_h2_odd">Единицы массы: От грамма до тонны</h2>
                <p className="paragraph">
                    В измерении массы важно понимать, что существуют различные единицы измерения. В повседневной жизни
                    мы часто сталкиваемся с граммами и килограммами,
                    но в промышленности и науке используются более крупные единицы — центнеры и тонны. Вот таблица,
                    которая поможет вам лучше ориентироваться в этих величинах:
                </p>
                <table className="table_info">
                    <thead className="thead_head">
                    <tr className={"bg-blue-100"}>
                        <th className="table_header">Единица</th>
                        <th className="table_header">Обозначение</th>
                        <th className="table_header">Эквивалент в килограммах</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table_row">
                        <td className="table_data_cell">Грамм</td>
                        <td className="table_data_cell">г</td>
                        <td className="table_data_cell">0.001 кг</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_data_cell">Килограмм</td>
                        <td className="table_data_cell">кг</td>
                        <td className="table_data_cell">1 кг</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_data_cell">Центнер</td>
                        <td className="table_data_cell">ц</td>
                        <td className="table_data_cell">100 кг</td>
                    </tr>
                    <tr className="table_row">
                        <td className="table_data_cell">Тонна</td>
                        <td className="table_data_cell">т</td>
                        <td className="table_data_cell">1000 кг</td>
                    </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Как видно из таблицы, граммы (г) используются для измерений небольших объектов, килограммы (кг)
                    — для повседневных
                    нужд, а центнеры (ц) и тонны (т) — для более крупных объектов. Например, 1 тонна равна 1000
                    килограммам, а 1 центнер — 100 килограммам.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Теперь, когда вы знаете эти единицы, вы сможете легко конвертировать массу и взвешивать любые
                    объекты, от продуктов на кухне до крупногабаритных грузов.
                </p>
            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_third/coordinate_ray",
                nextExercise: "/math/class_fifth/lesson_third/beam/beam",
            }}/>
        </div>
    );
};
