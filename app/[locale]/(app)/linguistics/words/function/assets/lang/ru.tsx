import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Function() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Функция</h1>

            <Section title="Этимология слова 'Функция'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight> Слово <Highlight>функция</Highlight> пришло в русский язык из латинского <Highlight>functio</Highlight>, что означает *исполнение*, *выполнение*, *действие*. Латинское <Highlight>functio</Highlight> происходит от глагола <Highlight>fungor</Highlight>, который переводится как *исполнять* или *выполнять обязанности*.
                </p>
                <p className="paragraph">
                    В латинском языке слово <Highlight>functio - [функцио!]</Highlight> использовалось для обозначения обязанности или роли, выполняемой человеком или объектом. Со временем термин стал использоваться в различных областях для описания действий или задач, выполняемых субъектом, объектом или процессом.
                </p>
            </Section>

            <Section title="Морфологические элементы">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Корень 'функ-'</Highlight> — происходит от латинского <Highlight>fungor</Highlight>, что означает *выполнять* или *исполнять*.
                    </li>
                    <li>
                        <Highlight>Суффикс '-ция'</Highlight> — типичный для существительных латинского происхождения, обозначает процесс или результат действия (например, *информация*, *инструкция*).
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст">
                <p className="paragraph">
                    В латинском языке слово <Highlight>функция</Highlight> использовалось для обозначения действий или обязанностей, которые выполнял человек в определённой роли. Со временем это слово стало использоваться в философии, математике, науке и других дисциплинах для описания роли, которую играет определённая часть системы или процесс.
                </p>
                <p className="paragraph">
                    В XVIII веке, с развитием математики и других наук, слово <Highlight>функция</Highlight> стало активно применяться для обозначения зависимости одной переменной от другой. Позже оно вошло в обиход как в научной, так и в технической терминологии для описания любых процессов, выполняющих определённые задачи.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    Сегодня слово <Highlight>функция</Highlight> имеет несколько значений в зависимости от контекста:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Математическая функция</Highlight> — это зависимость одного параметра (переменной) от другого. Пример: уравнение \( f(x) = x^2 \), где \( f(x) \) — это функция от переменной \( x \).
                    </li>
                    <li>
                        <Highlight>Функция в программировании</Highlight> — это блок кода, который выполняет определённую задачу и может быть вызван в программе. Пример: функция для вычисления суммы двух чисел.
                    </li>
                    <li>
                        <Highlight>Функция в биологии</Highlight> — это роль или задача, которую выполняет орган или система организма. Пример: функция сердца — перекачивать кровь.
                    </li>
                    <li>
                        <Highlight>Функция в социальной науке</Highlight> — это роль, которую играет отдельный индивид или институт в обществе. Пример: функция семьи — воспитание и социализация детей.
                    </li>
                    <li>
                        <Highlight>Функция в технике</Highlight> — это задача или действие, которое выполняет устройство или его часть. Пример: функция двигателя — преобразование топлива в энергию.
                    </li>
                </ul>
            </Section>

            <Section title="Виды функций">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Математические функции</Highlight> — В математике функция — это правило или закон, который связывает одно или несколько значений (аргументов) с результатом. Примеры:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Линейная функция</Highlight>: \( y = mx + b \)</li>
                            <li><Highlight>Квадратичная функция</Highlight>: \( y = ax^2 + bx + c \)</li>
                            <li><Highlight>Тригонометрическая функция</Highlight>: \( f(x) = \sin(x) \)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Программные функции</Highlight> — В программировании функция — это отдельный блок кода, который выполняет определённую задачу и может быть вызван многократно. Пример:
                        <pre className="code_block">
              {`def add(a, b):\n    return a + b`}
            </pre>
                        Здесь функция *add* принимает два аргумента и возвращает их сумму.
                    </li>
                    <li>
                        <Highlight>Биологические функции</Highlight> — В биологии функция описывает роль органа или системы в организме. Примеры:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Функция лёгких</Highlight>: обеспечение организма кислородом</li>
                            <li><Highlight>Функция печени</Highlight>: фильтрация крови и детоксикация</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Социологические функции</Highlight> — В социальной науке функция — это роль, которую играет человек, группа или институт в обществе. Примеры:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Функция образования</Highlight>: передача знаний и навыков</li>
                            <li><Highlight>Функция правительства</Highlight>: поддержание порядка и обеспечение законности</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>Технические функции</Highlight> — В инженерии и технике функция описывает задачу, которую выполняет определённое устройство или его часть. Примеры:
                        <ul className="unordered_list ml-4">
                            <li><Highlight>Функция тормозной системы автомобиля</Highlight>: снижение скорости или остановка автомобиля</li>
                            <li><Highlight>Функция микропроцессора</Highlight>: выполнение вычислительных операций</li>
                        </ul>
                    </li>
                </ul>
            </Section>

            <Section title="Примеры использования слова 'Функция'">
                <ul className="space-y-6">
                    <Base_card
                        title="Математика"
                        description="Функция \( f(x) = x^2 \) описывает квадратичную зависимость между \( x \) и \( f(x) \)."
                        icon="📐"
                    />
                    <Base_card
                        title="Программирование"
                        description="Функция проверки данных возвращает true, если данные валидны."
                        icon="💻"
                    />
                    <Base_card
                        title="Биология"
                        description="Функция почек — фильтрация крови и выведение лишней жидкости из организма."
                        icon="🧬"
                    />
                    <Base_card
                        title="Социология"
                        description="Функция полиции — обеспечение порядка и защита граждан."
                        icon="👮‍♂️"
                    />
                    <Base_card
                        title="Техника"
                        description="Основная функция кондиционера — поддержание комфортной температуры в помещении."
                        icon="🏭"
                    />
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Математика — это язык, в котором функции природы выражаются через числа и уравнения."
                        annotation="Блез Паскаль — Паскаль подчёркивает важность математических функций для описания законов природы"
                    />
                    <Quote_with_annotation
                        quote="Функциональность продукта всегда должна быть на первом месте, дизайн следует за функцией."
                        annotation="Стив Джобс — Джобс говорит о том, что внешняя форма устройства всегда должна исходить из его основной задачи или функции."
                    />
                    <Quote_with_annotation
                        quote="Каждая функция в природе имеет своё предназначение, даже если оно нам не сразу понятно."
                        annotation="Ричард Фейнман - Фейнман подчёркивает важность понимания функций в естественных процессах."
                    />
                </div>
            </Section>

            <Section title="Значение функций">
                <p className="paragraph">
                    <Highlight>Функция</Highlight> — это универсальное понятие, описывающее действие, роль или задачу, которую выполняет объект или процесс в системе. Понятие функции применимо как к математическим выражениям, так и к биологическим органам, программным блокам или социальным институтам. В каждом случае функция отражает суть взаимодействий внутри системы или между её элементами.
                </p>
            </Section>

            <Section title="Классификация функций">
                <ul className="unordered_list">
                    <li>
                        <Highlight>По области применения</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Математические</li>
                            <li>Биологические</li>
                            <li>Технические</li>
                            <li>Социальные</li>
                            <li>Программные</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>По типу зависимости</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Одномерные (зависят от одной переменной)</li>
                            <li>Многомерные (зависят от нескольких переменных)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>По характеру выполнения</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Основные функции (выполняют главную задачу системы)</li>
                            <li>Вспомогательные функции (поддерживают выполнение основных задач)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>По типу результата</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Возвращающие результат (например, математическая функция)</li>
                            <li>Не возвращающие результат (например, процедура в программировании)</li>
                        </ul>
                    </li>
                </ul>
            </Section>
        </div>
    );
}