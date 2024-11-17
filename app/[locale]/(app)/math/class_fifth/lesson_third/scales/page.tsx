import Image from "next/image";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import React from "react";


export default function Scales () {
    return (
        <div
            className="main_block_task">
            {/* Заголовок */}
            <h1 className="header_h1">
                Линейки и Шкалы
            </h1>


            {/* Линейка и штрихи */}
            <section className="mb-10 w-full">
                <h2 className="header_h2_odd">Линейка: Мастер измерений</h2>
                <p className="paragraph">
                    На линейке нанесены <strong>штрихи</strong>, которые разбивают её на равные части
                    — <strong>деления</strong>.
                    Каждый штрих аккуратно указывает расстояние, а совокупность всех делений
                    образует <strong>шкалу</strong>.
                </p>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/" // замените на реальный путь к изображению линейки
                        alt="Линейка с делениями"
                        className="w-2/3 rounded-lg shadow-md"
                        width={100}
                        height={100}
                    />
                </div>
                <p className="paragraph">
                    Например, на линейке, изображённой выше, каждое деление соответствует 1 миллиметру. Если посмотреть
                    на отрезок
                    <strong> AB</strong>, его длина равна 6 сантиметрам или 60 миллиметрам. Это прекрасный пример, как
                    простые штрихи
                    помогают нам точно измерять длины, будь то в строительстве, науке или повседневной жизни.
                </p>
            </section>

            {/* Шкалы в повседневной жизни */}
            <section className="mb-10">
                <h2 className="header_h2_even">Шкалы вокруг нас</h2>
                <p className="paragraph">
                    Но линейки — это только начало. Шкалы окружают нас повсюду. Возьмём, к
                    примеру, <strong>термометр</strong>.
                    Он имеет свою шкалу, где каждое деление соответствует одному градусу Цельсия. Это позволяет нам
                    точно
                    измерять температуру окружающей среды или тела.
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
                    Представьте себе день, когда температура колеблется между 20 и 25°C. Шкала на термометре помогает
                    вам точно
                    определить, что сегодня 21°C. Мелочь? Не совсем. Это точное измерение может подсказать вам, как
                    одеться или
                    стоит ли включить кондиционер.
                </p>
            </section>

            {/* Шкалы как концепция измерений */}
            <section className="mb-10">
                <h2 className="header_h2_odd">Шкалы: Концепция измерений</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Каждая шкала — это своего рода визуализация чисел. Она позволяет наглядно представить величины, будь
                    то длина,
                    температура или масса. Важно отметить, что шкалы помогают нам не просто измерять, а понимать
                    соотношения
                    между величинами.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Например, на весах шкала демонстрирует вес объекта, будь то ананас или мешок картофеля. Каждое
                    деление на весах
                    соответствует определённой массе, и по ним можно точно определить, сколько весит предмет. Шкалы,
                    будь то на линейке,
                    весах или термометре, — это ключ к точности нашего восприятия мира.
                </p>
            </section>
            <Audio_Navigate path={"/math/class_fifth/lesson_third/scales/scales"} to={{
                nextTask: "/math/class_fifth/lesson_third/thermometer_scales_masses",
                nextExercise: "/math/class_fifth/lesson_third/beam/beam",
            }}/>
        </div>
    );
};

