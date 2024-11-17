import React from "react";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";


export default function Scale () {
    return <section className="mb-10">
        <h1 className="header_h1">
            Линейки и Шкалы
        </h1>
        <p className="paragraph">
            Когда мы измеряем длины, мы часто обращаемся к линейке — простому, но
            в то же время удивительно точному инструменту, который помогает нам
            разбивать пространство на равные части. Но задумывались ли вы, что за
            этими делениями скрывается целая система координат и шкал?
        </p>
        <p className="paragraph">
            Давайте погрузимся в мир измерений, штрихов и делений, чтобы понять,
            как каждое из этих миниатюрных делений служит для точного представления
            величин и как шкалы, будь то на линейке или термометре, помогают нам
            ориентироваться в мире чисел и величин.
        </p>
        <Audio_Navigate path={"/math/class_fifth/lesson_third/introduction_scales/introduction_scales.record"} to={{
            nextTask: "/math/class_fifth/lesson_third/scales",
            nextExercise: "/math/class_fifth/lesson_third/beam/beam",
        }}/>
    </section>
}