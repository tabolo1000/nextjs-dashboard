import Link_list from "@/app/ui/math/components/Link_list";

export default function Math() {
    const list_of_link = [
        {
            baseUrl: "./lesson_second",
            paths: "/introduction_segments",
            name: "Введение",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/segments",
            name: "Отрезки",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/delta",
            name: "Треугольники",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/distance_units_of_measurement",
            name: "Единицы Измерения Расстояния",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/straight",
            name: "Плоскость",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/beam",
            name: "Лучи и Дополнительные лучи",
        },
        {
            baseUrl: "./lesson_second",
            paths: "/flat",
            name: "Прямая: Теория и Основные Свойства",
        },
    ]
    return (
        <div className="flex justify-center items-center min-w-full min-h-">
            <Link_list list_of_link={list_of_link}></Link_list>
        </div>
    );
}