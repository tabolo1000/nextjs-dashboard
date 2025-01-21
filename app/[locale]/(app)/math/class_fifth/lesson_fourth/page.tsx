import Link_list from "@/app/ui/math/components/Link_list";
import React from "react";


export default function Lesson_fourth() {
    const link_of_list = [
        {
            baseUrl: "./lesson_fourth",
            paths: "/numeric_and_letter_expression",
            name: "Урок первый: Числовые и буквенные выражения",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/properties_of_addition_and_subtraction",
            name: "Урок второй: Буквенная запись свойств сложения и вычитания",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/equation",
            name: "Урок третий: Уравнение",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/multiplication_of_natural_numbers",
            name: "Урок четвертый: Умножение натуральных чисел и его свойства",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/division",
            name: "Урок пятый: Деление",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/order_of_actions",
            name: "Урок шестой: Порядок выполнения действий",
        },
        {
            baseUrl: "./lesson_fourth",
            paths: "/degree_of_number",
            name: "Урок седьмой: Степень числа",
        },
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}