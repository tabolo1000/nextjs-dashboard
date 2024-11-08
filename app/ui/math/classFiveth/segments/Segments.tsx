




import React from 'react';

const EducationMaterial = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Обучающий Материал</h1>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">1. Отрезки</h2>
                <p className="mb-4">
                    <strong>Отрезок</strong> — это часть прямой, имеющая два фиксированных конца. Эти концы обозначаются как точки A и B.
                    Мы можем записать отрезок как <span className="font-mono">AB</span>.
                </p>
                <p className="mb-4">Основные характеристики отрезка:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>Концы отрезка</strong>: Каждый отрезок имеет два конца, например, у отрезка AB концы — это точки A и B.</li>
                    <li><strong>Положение на отрезке</strong>: Если точка C лежит на отрезке AB, это означает, что C находится между A и B.</li>
                    <li><strong>Сравнение отрезков</strong>: Мы можем сравнивать длины отрезков. Если отрезок AB равен отрезку CD, то <span className="font-mono">AB = CD</span>.</li>
                    <li><strong>Расстояние</strong>: Расстояние между двумя точками определяется как длина отрезка, соединяющего эти точки.</li>
                </ul>
                <p className="mb-4">Например, отрезок <span className="font-mono">AB</span> длиной 10 см имеет:</p>
                <ul className="list-disc pl-5">
                    <li>Концы A и B.</li>
                    <li>Если добавить точку C, которая лежит между A и B, то можно сказать, что <span className="font-mono">AC + CB = AB</span>.</li>
                </ul>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">2. Треугольники</h2>
                <p className="mb-4">
                    <strong>Треугольник</strong> — это геометрическая фигура, состоящая из трех отрезков, соединяющих три точки, называемые вершинами.
                    Треугольник обозначается как <span className="font-mono">ΔABC</span>, где A, B и C — вершины.
                </p>
                <p className="mb-4">Виды треугольников:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li><strong>По сторонам</strong>:
                        <ul className="list-disc pl-5">
                            <li>Равносторонний: Все три стороны равны.</li>
                            <li>Равнобедренный: Две стороны равны.</li>
                            <li>Разносторонний: Все три стороны различны.</li>
                        </ul>
                    </li>
                    <li><strong>По углам</strong>:
                        <ul className="list-disc pl-5">
                            <li>Острый: Все углы меньше 90°.</li>
                            <li>Прямоугольный: Один угол равен 90°.</li>
                            <li>Тупоугольный: Один угол больше 90°.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4">3. Единицы Измерения Расстояния</h2>
                <p className="mb-4">Основные единицы:</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Сантиметры (см): Используются для измерения небольших расстояний, например, длина карандаша (20 см).</li>
                    <li>Метры (м): Основная единица, например, высота двери (2 м) или длина комнаты (5 м).</li>
                    <li>Километры (км): Для больших расстояний, например, расстояние между городами (100 км).</li>
                    <li>Дюймы и футы: Используются в некоторых странах. Например, длина телевизора (55 дюймов) или рост человека (6 футов).</li>
                </ul>
            </section>
        </div>
    );
};

export default EducationMaterial;