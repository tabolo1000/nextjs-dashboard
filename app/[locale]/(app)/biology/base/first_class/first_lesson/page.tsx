import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";

export function LivingNatureAndMethods() {
    return (
        <>
            {/* Живая природа и методы её изучения */}
            <Section title="Живая природа и методы её изучения" parity>
                <p className="paragraph_base">
                    <Highlight>Живая природа</Highlight> — это мир, наполненный удивительными
                    организмами: от мельчайших бактерий до гигантских деревьев и животных. Каждая
                    форма жизни уникальна и играет важную роль в поддержании баланса на планете.
                </p>

                <h3 className="header_h3">§1. Живые организмы</h3>
                <p className="paragraph_base">
                    Живой организм — это сложная система, способная к обмену веществ, росту,
                    размножению и взаимодействию с окружающей средой. Основные признаки жизни:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Обмен веществ</Highlight> — получение и использование энергии.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Рост и развитие</Highlight> — изменение размеров и усложнение
                        структуры.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Размножение</Highlight> — воспроизведение себе подобных.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Ответ на раздражители</Highlight> — реакция на изменения в
                        окружающей среде.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Слово "организм" происходит от латинского <Highlight>"organismus"</Highlight>, что
                    означает "целостность", "упорядоченность". Это подчёркивает, что жизнь — это не
                    хаотичный процесс, а гармоничное взаимодействие частей.
                </p>

                <h3 className="header_h3">Интересный факт</h3>
                <p className="paragraph_example">
                    Самая большая живая структура на Земле — это грибница опёнка в Орегоне, США.
                    Её возраст превышает <Highlight>2400 лет</Highlight>, а площадь — более 9
                    квадратных километров!
                </p>

                <h3 className="header_h3">§2. Методы изучения живой природы</h3>
                <p className="paragraph_base">
                    Исследование живой природы требует использования различных <Highlight>инструментов</Highlight>
                    и <Highlight>методов</Highlight>. Биологи применяют как простые увеличительные приборы,
                    так и современные технологии.
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        <Highlight>Лупа</Highlight> — инструмент для изучения структуры небольших объектов.
                    </li>
                    <li className="unordered_list_li">
                        <Highlight>Микроскоп</Highlight> — прибор для исследования микроорганизмов и клеток.
                    </li>
                    <li className="unordered_list_li">
                        Наблюдение в природе, эксперименты и моделирование.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Слово "микроскоп" происходит от греческих слов <Highlight>"mikros"</Highlight> (маленький)
                    и <Highlight>"skopein"</Highlight> (смотреть). Впервые микроскопы начали использовать в
                    XVII веке, и они совершили революцию в науке, позволив увидеть невидимый мир.
                </p>

                <h3 className="header_h3">Практическая работа 1: Развитие фасоли из семян</h3>
                <p className="paragraph_base">
                    Наблюдайте, как из семени фасоли развивается растение. Для этого:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        Замочите семена фасоли в воде на 24 часа.
                    </li>
                    <li className="unordered_list_li">
                        Поместите их во влажную среду (например, между слоями влажной ткани).
                    </li>
                    <li className="unordered_list_li">
                        Наблюдайте, как через несколько дней появятся корешки и росток.
                    </li>
                </ul>

                <h3 className="header_h3">Лабораторная работа 1: Устройство увеличительных приборов</h3>
                <p className="paragraph_base">
                    Лупа и микроскоп — важнейшие инструменты биолога. Используя их, можно изучить
                    строение листа, насекомых и даже клеток. Помните, что правильное освещение и
                    точная настройка фокуса — залог успешного наблюдения.
                </p>

                <h3 className="header_h3">Лабораторная работа 2: Приготовление микропрепаратов</h3>
                <p className="paragraph_base">
                    Для изучения под микроскопом важно правильно подготовить образец:
                </p>
                <ul className="unordered_list">
                    <li className="unordered_list_li">
                        С помощью тонкого лезвия сделайте срез ткани растения.
                    </li>
                    <li className="unordered_list_li">
                        Поместите его на предметное стекло и добавьте каплю воды.
                    </li>
                    <li className="unordered_list_li">
                        Покройте срез покровным стеклом и аккуратно удалите лишнюю жидкость.
                    </li>
                </ul>
                <p className="paragraph_base">
                    Теперь ваш микропрепарат готов к изучению. Обратите внимание на детали — каждая
                    клетка уникальна!
                </p>
            </Section>
        </>
    );
}

export default LivingNatureAndMethods;