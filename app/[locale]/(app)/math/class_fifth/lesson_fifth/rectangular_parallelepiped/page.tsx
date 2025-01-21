import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function Rectangular_parallelepiped() {
    return (
        <>
            {/* Прямоугольный параллелепипед */}
            <Section title="Прямоугольный параллелепипед" parity>
                <p className="paragraph_base">
                    <Highlight>Прямоугольный параллелепипед</Highlight> — это трёхмерная геометрическая фигура, каждая грань которой представляет собой прямоугольник. Его можно визуализировать как "коробку" или "брусок" с длиной, шириной и высотой.
                </p>
                <h3 className="header_h3">Основные элементы:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Длина (a):</Highlight> одна из сторон основания.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Ширина (b):</Highlight> другая сторона основания.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        <Highlight>Высота (h):</Highlight> расстояние между верхней и нижней гранями.
                    </li>
                </ul>
                <h3 className="header_h3">Формулы:</h3>
                <p className="paragraph_base">
                    Для нахождения площади поверхности прямоугольного параллелепипеда используется формула:
                </p>
                <p className="paragraph_base">
                    <Highlight>S = 2(ab + bc + ac)</Highlight>,
                </p>
                <p className="paragraph_base">
                    где <Highlight>a</Highlight>, <Highlight>b</Highlight> и <Highlight>c</Highlight> — длина, ширина и высота соответственно.
                </p>
                <p className="paragraph_base">
                    Объём прямоугольного параллелепипеда рассчитывается как:
                    <Highlight>V = a × b × c</Highlight>.
                </p>
                <h3 className="header_h3">История и интересные факты:</h3>
                <p className="paragraph_base">
                    Концепция объёма и площади возникла ещё в Древнем Вавилоне и Египте, где строители использовали простейшие формы, чтобы рассчитать размеры кирпичей или сосудов. Древние греки, в частности Евклид, внесли большой вклад в систематизацию знаний о трёхмерных фигурах, включая параллелепипед.
                </p>
                <h3 className="header_h3">Применение:</h3>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        В строительстве: для расчёта объёма строительных материалов, таких как бетонные блоки или кирпичи.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        В логистике: для определения объёма грузов и оптимизации упаковки.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        В повседневной жизни: при покупке мебели, измерении коробок или планировании пространства.
                    </li>
                </ul>
                <h3 className="header_h3">Интересный факт:</h3>
                <p className="paragraph_base">
                    Несмотря на простоту формы, прямоугольный параллелепипед — одна из самых популярных фигур в математике и инженерии благодаря своей универсальности и лёгкости вычислений.
                </p>
                <h3 className="header_h3">Пример:</h3>
                <p className="paragraph_base">
                    Если у прямоугольного параллелепипеда <Highlight>a = 4 м</Highlight>, <Highlight>b = 3 м</Highlight>, <Highlight>c = 2 м</Highlight>, то:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li paragraph_example">
                        Площадь поверхности: <Highlight>S = 2(4 × 3 + 3 × 2 + 4 × 2) = 52 м²</Highlight>.
                    </li>
                    <li className="unordered_list_li paragraph_example">
                        Объём: <Highlight>V = 4 × 3 × 2 = 24 м³</Highlight>.
                    </li>
                </ul>
            </Section>
        </>
    );
}

export default Rectangular_parallelepiped;
