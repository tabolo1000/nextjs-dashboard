import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import properties from "../img/properties.jpeg"; // Предположим, что изображение находится по этому пути.
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";

export default function Properties() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Свойства
            </h1>

            {/* Этимология */}
            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>свойства</Highlight> происходит от древнерусского слова <Highlight>свой</Highlight>, которое восходит к праславянскому <Highlight>svojь</Highlight> и далее к индоевропейскому корню <Highlight>swe-</Highlight>, означающему "свой", "собственный".
                </p>
            </Section>

            {/* Вставка изображения */}
            <Interactive_Image src={properties} alt={"Пример различных свойств объектов"} width={500} height={500} />

            {/* Морфемный разбор */}
            <Section title="Морфемный разбор">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Свой-</Highlight> — корень, который означает принадлежность или что-то, что присуще конкретному объекту или лицу.
                    </li>
                    <li>
                        <Highlight>-ств-</Highlight> — суффикс, образующий абстрактные существительные, указывающие на состояние или качество, например, "качество", "состояние".
                    </li>
                    <li>
                        <Highlight>-а</Highlight> — окончание, указывающее на женский род существительного.
                    </li>
                </ul>
            </Section>

            {/* Определение */}
            <Section title="Определение">
                <p className="paragraph">
                    <Highlight>Свойства</Highlight> — это признаки, характеристики или качества, присущие объектам, веществам или явлениям, которые позволяют их описывать или различать.
                </p>
            </Section>

            {/* Исторический контекст */}
            <Section title="Исторический контекст">
                <p className="paragraph">
                    Термин <Highlight>свойства</Highlight> используется с древних времён для обозначения различных характеристик объектов и явлений. В разных науках и областях знаний свойства могут иметь своё особое значение.
                </p>
            </Section>

            {/* Виды свойств */}
            <Section title="Виды свойств">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Физические свойства</Highlight> — это характеристики, которые можно измерить или наблюдать без изменения сущности объекта. Примеры: плотность, температура плавления, цвет.
                    </li>
                    <li>
                        <Highlight>Химические свойства</Highlight> — это способность вещества вступать в химические реакции, изменяя свой состав. Примеры: горючесть, окисляемость.
                    </li>
                    <li>
                        <Highlight>Механические свойства</Highlight> — это характеристики материалов, описывающие их поведение под воздействием внешних сил. Примеры: прочность, упругость.
                    </li>
                    <li>
                        <Highlight>Биологические свойства</Highlight> — это характеристики, присущие живым организмам. Примеры: рост, адаптация.
                    </li>
                </ul>
            </Section>

            {/* Применение */}
            <Section title="Применение">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Физика</Highlight> — изучение свойств материи и энергии помогает в создании новых технологий и материалов.
                    </li>
                    <li>
                        <Highlight>Химия</Highlight> — знание химических свойств позволяет разрабатывать новые вещества с заданными характеристиками.
                    </li>
                    <li>
                        <Highlight>Инженерия</Highlight> — механические свойства материалов играют ключевую роль в проектировании конструкций и механизмов.
                    </li>
                    <li>
                        <Highlight>Биология</Highlight> — биологические свойства организмов помогают учёным изучать процессы эволюции и адаптации.
                    </li>
                </ul>
            </Section>

            {/* Примеры использования слова "свойства" */}
            <Section title="Примеры использования слова 'свойства'">
                <ul className="space-y-6">
                    <Base_card
                        title="Физика"
                        description="Физические свойства металлов, такие как электропроводность, делают их незаменимыми в промышленности."
                        icon="⚙️"
                    />
                    <Base_card
                        title="Химия"
                        description="Химические свойства кислорода позволяют ему участвовать в реакциях горения."
                        icon="🧪"
                    />
                    <Base_card
                        title="Биология"
                        description="Одним из важнейших свойств живых организмов является способность к размножению."
                        icon="🌱"
                    />
                    <Base_card
                        title="Инженерия"
                        description="Механические свойства стали позволяют её использовать в строительстве небоскрёбов и мостов."
                        icon="🏗️"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Все тела обладают инерцией — одним из фундаментальных свойств материи."
                        annotation="Цитата подчёркивает важность инерции как одного из фундаментальных свойств материи."
                    />
                    <Quote_with_annotation
                        quote="Изучая химические свойства веществ, мы постигаем их истинную природу."
                        annotation="Цитата говорит о значении химических свойств для понимания природы веществ."
                    />
                    <Quote_with_annotation
                        quote="Свойства пространства и времени тесно связаны с материей, которая их заполняет."
                        annotation="Цитата подчёркивает взаимосвязь между материей и свойствами пространства и времени."
                    />
                </div>
            </Section>
        </div>
    );
}