import Link_list from "@/app/ui/math/components/Link_list";
import React from "react";


export default function LessonSixth() {
    const link_of_list = [
        {
            baseUrl: "./lesson_sixth",
            paths: "/circle",
            name: "Урок первый: Окружность и круг",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/fractions",
            name: "Урок второй: Доли. Обыкновенные дроби",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/comparison_of_fractions",
            name: "Урок третий: Сравнение дробей",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/regular_and_irregular_fractions",
            name: "Урок четвертый: Правильные и неправильные дроби",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/adding_and_subtracting_fractions",
            name: "Урок пятый: Объёмы. Сложение и вычитание дробей с одинаковыми знаменателями",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/division_and_fractions",
            name: "Урок шестой: Деление и дроби",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/mixed_numbers",
            name: "Урок седьмой: Смешанные числа",
        },
        {
            baseUrl: "./lesson_sixth",
            paths: "/addition_and_subtraction_of_mixed_numbers",
            name: "Урок восьмой: Сложение и вычитание смешанных чисел",
        },
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}