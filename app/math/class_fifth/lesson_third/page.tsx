import Link_list from "@/app/ui/math/components/Link_list";

export default function Math() {
    const list_of_link = [
        {
            baseUrl: "./lesson_third",
            paths: "/introduction_scales",
            name: "Введение",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/scales",
            name: "Линейки и Шкалы",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/thermometer_scales_masses",
            name: "Термометр, Весы и Массы",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/coordinate_ray",
            name: "Координатный луч",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/number_comparison",
            name: "Меньше или больше",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/addition_numbers",
            name: "Сложения чисел",
        },
        {
            baseUrl: "./lesson_third",
            paths: "/subtraction",
            name: "Вычитание чисел",
        },
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={list_of_link}></Link_list>
        </div>
    );
}