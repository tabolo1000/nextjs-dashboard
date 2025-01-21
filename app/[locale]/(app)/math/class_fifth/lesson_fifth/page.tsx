import Link_list from "@/app/ui/math/components/Link_list";
import React from "react";


export default function Lesson_Fifth() {
    const link_of_list = [
        {
            baseUrl: "./lesson_fifth",
            paths: "/formulas",
            name: "Урок первый: Формулы",
        },
        {
            baseUrl: "./lesson_fifth",
            paths: "/rectangular_parallelepiped",
            name: "Урок второй: Прямоугольный параллелепипед",
        },
        {
            baseUrl: "./lesson_fifth",
            paths: "/square",
            name: "Урок третий: Площадь. Формула площади прямоугольника",
        },
        {
            baseUrl: "./lesson_fifth",
            paths: "/units_of_area",
            name: "Урок четвертый: Единицы измерения площадей",
        },
        {
            baseUrl: "./lesson_fifth",
            paths: "/volumes",
            name: "Урок пятый: Объёмы. Объём прямоугольного параллелепипеда",
        }
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}