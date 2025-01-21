"use client";

import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export function RectangularParallelepiped() {
    // Создаём ссылку на SVG-элемент
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        // Устанавливаем размеры графика
        const width = 200;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };

        // Создаём шкалы для осей
        const xScale = d3
            .scaleLinear() // Линейная шкала
            .domain([0, 10]) // Диапазон данных
            .range([margin.left, width - margin.right]); // Диапазон пикселей

        const yScale = d3
            .scaleLinear()
            .domain([0, 10]) // Диапазон данных
            .range([height - margin.bottom, margin.top]); // Диапазон пикселей (инвертирован для направления вверх)

        // Выбираем SVG-элемент и очищаем его
        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        // Добавляем ось X
        svg
            .append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`) // Перемещаем ось вниз
            .call(d3.axisBottom(xScale).ticks(5)) // Добавляем ось с 5 метками
            .attr("font-size", "10px");

        // Добавляем ось Y
        svg
            .append("g")
            .attr("transform", `translate(${margin.left}, 0)`) // Перемещаем ось влево
            .call(d3.axisLeft(yScale).ticks(5)) // Добавляем ось с 5 метками
            .attr("font-size", "10px");

        // Добавляем прямоугольник для визуализации площади
        svg
            .append("rect")
            .attr("x", xScale(2)) // Позиция по X (пример: 2)
            .attr("y", yScale(4)) // Позиция по Y (пример: 4)
            .attr("width", xScale(6) - xScale(2)) // Ширина прямоугольника (от 2 до 6)
            .attr("height", yScale(4) - yScale(8)) // Высота прямоугольника (от 4 до 8)
            .attr("fill", "lightblue") // Цвет заливки
            .attr("stroke", "blue") // Цвет границы
            .attr("stroke-width", 2); // Толщина границы
    }, []);

    return (
        <>
            {/* Площадь. Формула площади прямоугольника */}
            <Section title="((((++___))))Площадь. Формула площади прямоугольника" parity>
                <p className="paragraph_base">
                    <Highlight>Площадь</Highlight> — это числовая величина, которая показывает, сколько пространства занимает фигура на плоскости. Единицы измерения площади зависят от масштаба: для больших объектов чаще используют квадратные метры (<Highlight>м²</Highlight>), а для небольших — квадратные сантиметры (<Highlight>см²</Highlight>).
                </p>
                {/* SVG для графики */}
                <svg width={200} height={200} ref={ref}></svg>
                <p className="paragraph_base">
                    Формула площади прямоугольника:
                    <Highlight>S = a × b</Highlight>, где:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>a</Highlight> — длина прямоугольника;
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>b</Highlight> — ширина прямоугольника;
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>S</Highlight> — площадь, результат вычисления.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Например, если <Highlight>a = 5 м</Highlight> и <Highlight>b = 3 м</Highlight>, то площадь прямоугольника вычисляется так:
                    <Highlight>S = 5 × 3 = 15 м²</Highlight>.
                </p>
                <h3 className="header_h3">История понятия площади:</h3>
                <p className="paragraph_base">
                    Концепция площади возникла ещё в древности. Египетские землемеры использовали формулы для расчёта площади полей, чтобы точно распределять земли после разливов Нила. В Древней Греции математики, такие как Евклид, формализовали вычисление площади в своих трудах, создав теоретическую основу для геометрии.
                </p>
                <h3 className="header_h3">Где применяется площадь?</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        При строительстве: для расчёта площади полов, стен и потолков.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        В сельском хозяйстве: для измерения размеров полей и участков.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        В дизайне и планировке: для точного размещения мебели и оборудования.
                    </li>
                </ul>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Древние египтяне использовали очень точные методы расчёта площади, хотя у них ещё не было системы записи дробных чисел, как у нас. Например, они знали приближённое значение площади круга, используя формулу, близкую к <Highlight>πr²</Highlight>.
                </p>
            </Section>
        </>
    );
}

export default RectangularParallelepiped;