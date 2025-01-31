import Link_list from "@/app/ui/math/components/Link_list";
import React from "react";


export default function Lesson_Fifth() {
    const link_of_list = [
        {
            baseUrl: "./brif",
            paths: "/cell_structure",
            name: "Урок первый: Формулы",
        },
        {
            baseUrl: "./brif",
            paths: "/life_properties",
            name: "Урок второй: Прямоугольный параллелепипед",
        },
        {
            baseUrl: "./brif",
            paths: "/metabolism",
            name: "Урок третий: Площадь. Формула площади прямоугольника",
        },
        {
            baseUrl: "./brif",
            paths: "/unity_of_chemical_composition",
            name: "Урок четвертый: Единицы измерения площадей",
        },
        {
            baseUrl: "./brif",
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