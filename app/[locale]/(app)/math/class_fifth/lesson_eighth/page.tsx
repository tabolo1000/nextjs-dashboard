import React from "react";
import Link_list from "@/app/ui/math/components/Link_list";



export default function Lesson_eighth() {
    const link_of_list = [
        {
            baseUrl: "./lesson_eighth",
            paths: "/multiplying_decimals_by_natural_numbers",
            name: "Урок первый: Умножение десятичных дробей на натуральные числа",
        },
        {
            baseUrl: "./lesson_eighth",
            paths: "/division_of_decimals_by_natural_numbers",
            name: "Урок второй: Деление десятичных дробей на натуральные числа ",
        },
        {
            baseUrl: "./lesson_eighth",
            paths: "/multiplication_of_decimals",
            name: "Урок третий: Умножение десятичных дробей",
        },
        {
            baseUrl: "./lesson_eighth",
            paths: "/division_by_decimal_fraction",
            name: "Урок четвертый: Деление на десятичную дробь",
        },
        {
            baseUrl: "./lesson_eighth",
            paths: "/arithmetic_average",
            name: "Урок пятый: Среднее арифметическое",
        },
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={link_of_list} />
        </div>
    );
}