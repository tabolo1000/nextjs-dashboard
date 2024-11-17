// src/components/EducationMaterial.tsx
import React from 'react';
import NavigateButton from "@/app/ui/math/components/Navigate_button";
import {Audio_button} from "@/app/ui/math/components/audio_player/Audio_button";
import Term from "@/app/ui/math/components/сopywriting/Term";

export default function Introduction_segments () {
    return (
        <div className="container mx-auto p-6">
            <h1 className="header_h1">Введение</h1>
            <p className="text-xl text-gray-700">
                <Term>Геометрия</Term>  — это не просто наука, а грандиозная симфония линий, углов и
                фигур, которая пронизывает всё вокруг нас. Это древнее искусство
                измерения и понимания пространства, которое превращает хаос в гармонию.
            </p>
            <p className="mt-4 text-lg text-gray-600">
                Представьте, как невидимые нити линий соединяются, образуя удивительные
                фигуры. Треугольники, квадраты, окружности — каждая из этих форм
                несет в себе тайну, которую мы можем разгадать через изучение
                свойств и законов геометрии.
            </p>
            <p className="mt-4 text-lg text-gray-600">
                Мы отправляемся в путешествие по этой магической стране, чтобы познать
                удивительные <span className="font-semibold text-purple-600">свойства отрезков</span> и
                <span className="font-semibold text-purple-600"> треугольников</span>, а также узнать, как
                <span className="font-semibold text-blue-600"> единицы измерения</span> помогают нам
                измерять расстояния и глубже понимать окружающий мир.
            </p>
            <p className="mt-6 text-2xl font-semibold text-gray-800">
                Готовы раскрыть тайны пространства? Вперёд!
            </p>
            <Audio_button path={"/math/class_fifth/lesson_second/introduction_segments/introduction_segments"}/>
            <NavigateButton to={{
                nextTask: "./segments",
                nextExercise: "",
            }}/>
        </div>
    );
};

