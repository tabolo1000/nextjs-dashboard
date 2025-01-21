import React from "react";
import Link_list from "@/app/ui/math/components/Link_list";


export default function Lesson_ninth() {
    const link_of_list = [
        {
            baseUrl: "./lesson_ninth",
            paths: "/microcalculator",
            name: "Урок первый: Микрокалькулятор",
        },
        {
            baseUrl: "./lesson_ninth",
            paths: "/percentages",
            name: "Урок второй: Проценты ",
        },
        {
            baseUrl: "./lesson_ninth",
            paths: "/right_and_turned_angle",
            name: "Урок третий: Угол. Прямой и развернутый угол",
        },
        {
            baseUrl: "./lesson_ninth",
            paths: "/measuring_angles",
            name: "Урок четвертый: Измерение углов. Транспортир ",
        },
        {
            baseUrl: "./lesson_ninth",
            paths: "/circle_charts",
            name: "Урок пятый: Круговые диаграммы ",
        },
        {
            baseUrl: "./lesson_ninth",
            paths: "/questions_and_tasks_to_repeat",
            name: "Урок шестой: Вопросы и задачи на повторение",
        },

    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}