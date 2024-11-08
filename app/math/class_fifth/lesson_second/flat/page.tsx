

import React from 'react';
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import Term from "@/app/ui/math/components/сopywriting/Term";


const GeometryConcepts: React.FC = () => {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Прямая: Теория и Основные Свойства</h1>
            <section className="mb-8">
                <h2 className="header_h2_even"> ⬛ Что такое прямая?</h2>
                <p className="paragraph">
                    <Term>Прямая</Term> — это один из фундаментальных объектов в геометрии. Она представляет собой
                    бесконечную линию, не имеющую ни начала, ни конца, и не имеющую толщины. В отличие от отрезка, у
                    прямой нет конечных точек — она продолжается в обе стороны до бесконечности.
                    Прямая — это одномерный объект, имеющий только длину, но не ширину.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="header_h2_odd">➖ Основные свойства прямой</h2>
                <ul className="w-full list-inside text-lg text-gray-700 mx-auto mb-6">
                    <li><Term>Бесконечность:</Term> — Прямая не имеет границ и продолжается в обе стороны до
                        бесконечности. На практике она ограничивается только выбранной областью или масштабом, но в
                        математике прямая считается бесконечной.
                    </li>
                    <li><Term>Нулевая ширина:</Term> — Прямая не имеет толщины — это идеализированный объект, который
                        существует только в одном измерении (длина). В визуальных представлениях прямую можно рисовать с
                        толщиной, но это лишь условность.
                    </li>
                    <li><Term>Одномерность:</Term> — Прямая — это одномерный объект, так как у неё есть только одно
                        измерение — длина. Она не имеет ширины или высоты.
                    </li>
                    <li><Term>Прямая через две точки:</Term> — Через любые две точки можно провести одну и только одну
                        прямую. Это одно из ключевых свойств прямой, которое используется для построения геометрических
                        объектов.
                    </li>
                </ul>
            </section>
            <section className="mb-8 w-full">
                <h2 className="header_h2_even">➕ Прямая на координатной плоскости</h2>
                <p className="paragraph">
                    На координатной плоскости прямая задаётся уравнением вида:
                </p>
                <p className="text-xl font-semibold text-gray-800 text-center mb-6">
                    y = kx + b
                </p>
                <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mb-6">
                    где:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                    <li><strong>k</strong> — угловой коэффициент (наклон прямой),</li>
                    <li><strong>b</strong> — свободный член, отвечающий за пересечение с осью y.</li>
                </ul>
            </section>
            -------------------

            {/* Угловой коэффициент и свободный член */}
            <section className="mb-8 w-full">
                <h2 className="header_h2_odd">Угловой коэффициент и свободный член</h2>
                <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mb-6">
                    <strong>Угловой коэффициент</strong> k:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                    <li>Если k {">"} 0, прямая идёт снизу вверх (возрастающая).</li>
                    <li>Если k {"<"} 0, прямая идёт сверху вниз (убывающая).</li>
                    <li>Если k = 0, это горизонтальная прямая (параллельная оси x).</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mb-6">
                    <strong>Свободный член</strong> b:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                    <li>Свободный член показывает точку пересечения прямой с осью y (при x = 0).</li>
                </ul>
            </section>

            {/* Прямая и углы */}
            <section className="mb-8 w-full">
                <h2 className="header_h2_even">Прямая и углы</h2>
                <p className="paragraph">
                    Прямая может образовывать различные углы с другими прямыми:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                    <li><strong>Перпендикулярные прямые</strong>: Если две прямые пересекаются под углом 90°, они
                        называются перпендикулярными. Их угловые коэффициенты k₁ и k₂ связаны следующим образом: k₁ ⋅ k₂
                        = -1.
                    </li>
                    <li><strong>Параллельные прямые</strong>: Если две прямые не пересекаются, они называются
                        параллельными. Параллельные прямые имеют одинаковый угловой коэффициент k₁ = k₂, но разные
                        свободные члены b₁ ≠ b₂.
                    </li>
                </ul>
            </section>

            {/* Примеры в реальной жизни */}
            <section className="mb-8 w-full">
                <h2 className="header_h2_odd w-full">Примеры в реальной жизни</h2>
                <p className="paragraph">
                    Прямые можно встретить повсюду:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                    <li><strong>Линии горизонта</strong>: Если смотреть вдаль на ровной поверхности, например, на море
                        или в пустыне, линия горизонта выглядит как прямая.
                    </li>
                    <li><strong>Дороги и железнодорожные пути</strong>: В инженерии стремятся к тому, чтобы дороги и
                        железнодорожные пути были максимально прямыми для удобства и безопасности движения.
                    </li>
                    <li><strong>Графики функций</strong>: Линейные функции, такие как y = 2x + 1, представляют собой
                        прямые на графике.
                    </li>
                </ul>
            </section>
            <Audio_Navigate path={""} to={{
                nextTask: "/math/class_fifth/lesson_second/",
                nextExercise: "/math/class_fifth/lesson_second/beam/beam",
            }}/>
        </div>
    );
};

export default GeometryConcepts;


