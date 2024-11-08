import Link from 'next/link';
import React from "react";
import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import Term from "@/app/ui/math/components/сopywriting/Term";

export default function Math() {
    return (<div>
            <section className="my-8">
                <h2 className="header_h1">Треугольники</h2>
                <h3 className="header_h2_odd">Определение</h3>
                <p className="mb-4 paragraph">
                    <Term>Треугольник</Term> — это фигура, состоящая из трех отрезков, соединяющих три точки,
                    называемые вершинами.
                    Он обозначается как <span className="font-mono">ΔABC</span>.
                </p>

                <h3 className="text-xl font-semibold mb-2">Виды Треугольников :</h3>
                <ul className="list-disc pl-5 mb-4 paragraph">
                    <li><strong>По сторонам</strong>:
                        <ul className="list-disc pl-5">
                            <li>Равносторонний треугольник: Все три стороны равны.</li>
                            <li>Равнобедренный треугольник: Две стороны равны.</li>
                            <li>Разносторонний треугольник: Все три стороны различны.</li>
                        </ul>
                    </li>
                    <li><strong>По углам</strong>:
                        <ul className="list-disc pl-5">
                            <li>Острый треугольник: Все углы меньше 90°.</li>
                            <li>Прямоугольный треугольник: Один угол равен 90°.</li>
                            <li>Тупоугольный треугольник: Один угол больше 90°.</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">Пример :</h3>
                <p className="mb-4 paragraph">
                    Рассмотрим треугольник <span className="font-mono">ΔABC</span> со сторонами:
                </p>
                <ul className="list-disc pl-5 mb-4 paragraph">
                    <li><span className="font-mono">|AB| = 5 см</span></li>
                    <li><span className="font-mono">|BC| = 7 см</span></li>
                    <li><span className="font-mono">|CA| = 6 см</span></li>
                </ul>
                <p className="mb-4 paragraph">
                    Можно заметить, что треугольник разносторонний, так как все стороны различны.
                </p>
            </section>
            <Audio_button path={"/math/class_fifth/lesson_second/delta/delta"}/>
            <NavigateButton to={{
                nextTask: "./distance_units_of_measurement",
                nextExercise: "",
            }}/></div>
    );
}