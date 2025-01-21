import React from "react";
import Link_list from "@/app/ui/math/components/Link_list";


export default function Lesson_seventh() {
    const link_of_list = [
        {
            baseUrl: "./lesson_seventh",
            paths: "/decimal_notation_of_fractional_numbers",
            name: "Десятичная запись дробных чисел",
        },
        {
            baseUrl: "./lesson_seventh",
            paths: "/comparison_of_decimals",
            name: "Сравнение десятичных дробей",
        },
        {
            baseUrl: "./lesson_seventh",
            paths: "/addition_and_subtraction_of_decimals",
            name: "Сложение и вычитание десятичных дробей",
        },
        {
            baseUrl: "./lesson_seventh",
            paths: "/rounding_of_numbers",
            name: "Приближённые значения чисел. Округление чисел",
        }
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}


