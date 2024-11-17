import Link_list from "@/app/ui/math/components/Link_list";

import React from 'react';
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import Term from "@/app/ui/math/components/сopywriting/Term";
import Image from "next/image";

const SupplementaryRays: React.FC = () => {
    return (
        <div className="main_block_task">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mb-12 p-2">Лучи и Дополнительные лучи</h1>
            <Image src={"/audio/math/class_fifth/lesson_second/beam/photo/beam.png"} width={300} height={200} alt="beam"></Image>
            <p className="text-lg text-gray-700">
                <Term>Луч</Term> — это часть прямой, которая начинается в одной точке и продолжается
                в одну сторону
                до бесконечности.
                У луча есть начало, но нет конца. Например, если у нас есть точка <strong>О</strong>, а от неё
                исходит
                линия в одном направлении, то эта линия будет лучом.
            </p>
            {/* Введение */}
            <section className="mb-12">
                <h2 className="header_h2_odd">
                    🔷 Дополнительные лучи: Вечные спутники одной прямой
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    <Term>Дополнительные лучи</Term> — это два луча, которые начинаются в одной точке и идут в противоположные
                    стороны, образуя прямую линию. Важно понимать, что лучи имеют начало, но не имеют конца, они
                    продолжаются до бесконечности в своих направлениях.
                </p>
                <p className="text-lg text-gray-700 mb-4 italic">
                    Дополнительные лучи — это как две противоположные стрелы, направленные в разные стороны, но
                    начинающиеся в одной точке.
                </p>
            </section>

            {/* Пример на плоскости */}
            <section className="mb-12">
                <h2 className="header_h2_even">
                    📐 Дополнительные лучи на плоскости: Визуализируем простоту
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Представьте прямую линию <strong>ОА</strong>, которая начинается в точке <strong>О</strong> и
                    продолжается в одну сторону. Теперь из этой же точки <strong>О</strong> проведите луч в
                    противоположную сторону — это будет луч <strong>ОВ</strong>. Эти два
                    луча <strong>ОА</strong> и <strong>ОВ</strong> называются дополнительными, потому что они исходят из
                    одной точки и простираются в противоположные стороны.
                </p>
                <div className="flex justify-center mt-6">
                    <img src="https://via.placeholder.com/400" alt="Пример дополнительных лучей"
                         className="rounded-lg shadow-md"/>
                </div>
                <p className="text-center text-gray-500 mt-2 italic">Рисунок: Лучи ОА и ОВ образуют дополнительные
                    лучи</p>
            </section>

            {/* Связь с углами */}
            <section className="mb-12">
                <h2 className="header_h2_odd">
                    🎯 180 градусов: Как дополнительные лучи создают развёрнутый угол
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Дополнительные лучи играют важную роль в геометрии, особенно в работе с углами. Когда два луча
                    исходят из одной точки и продолжаются в противоположные стороны, они образуют прямую — это означает,
                    что угол между этими лучами равен <strong>180°</strong>. Такой угол
                    называют <Term right={"right"}>развёрнутым.</Term>
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Например, если у нас есть луч <strong>ОА</strong>, и луч <strong>ОВ</strong>, который направлен в
                    противоположную сторону, угол между ними будет равен 180°, потому что они, по сути, образуют одну
                    прямую линию.
                </p>
                <div className="flex justify-center mt-6">
                    <img src="https://via.placeholder.com/400" alt="Прямой угол между дополнительными лучами"
                         className="rounded-lg shadow-md"/>
                </div>
                <p className="text-center text-gray-500 mt-2 italic">Рисунок: Дополнительные лучи образуют угол в
                    180°</p>
            </section>

            {/* Пример из жизни */}
            <section className="mb-12">
                <h2 className="header_h2_even">
                    🌅 От горизонта до циферблата: Дополнительные лучи в реальной жизни
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Дополнительные лучи встречаются не только в учебниках по геометрии, но и в реальной жизни. Например,
                    представьте солнечные лучи, которые расходятся в противоположные стороны, когда солнце находится
                    прямо над горизонтом. Один луч уходит в сторону восхода, а другой — в сторону заката, образуя
                    воображаемую прямую.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Еще один пример — это стрелы на циферблате часов. Когда стрелки показывают 6 часов (одна стрелка
                    указывает на 12, а другая на 6), они образуют дополнительные лучи, ведь они направлены в
                    противоположные стороны.
                </p>
                <div className="flex justify-center mt-6">
                    <img src="https://via.placeholder.com/400" alt="Пример дополнительных лучей в реальной жизни"
                         className="rounded-lg shadow-md"/>
                </div>
                <p className="text-center text-gray-500 mt-2 italic">Рисунок: Пример дополнительных лучей в природе —
                    солнечные лучи</p>
            </section>

            {/* Задача для самопроверки */}
            <section className="mb-12">
                <h2 className="header_h2_odd">
                    🧠 Проверь себя: Как работают дополнительные лучи?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Представьте, что у вас есть прямая линия, и точка <strong>О</strong> делит её на две части.
                    Проведите луч <strong>ОА</strong> в одну сторону и луч <strong>ОВ</strong> в противоположную. Теперь
                    ответьте на следующие вопросы:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Какой угол образуют лучи <strong>ОА</strong> и <strong>ОВ</strong>?</li>
                    <li>Могут ли лучи <strong>ОА</strong> и <strong>ОВ</strong> пересечься, если они направлены в
                        противоположные стороны?
                    </li>
                    <li>Приведите пример дополнительных лучей в своей жизни (возможно, из природы или техники).</li>
                </ul>
                <p className="text-lg text-gray-700">
                    Попробуйте решить эти задачи и подумайте, как дополнительные лучи встречаются в окружающем мире.
                </p>
            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_second/flat",
                nextExercise: "/math/class_fifth/lesson_second/beam/beam",
            }}/>
        </div>
    );
};

export default SupplementaryRays;