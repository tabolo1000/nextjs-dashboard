import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import turn from "@/app/[locale]/(app)/linguistics/words/turn/assets/img/turn.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Turn() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Обратить</h1>

            <Section title="Этимология слова 'Обратить'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight> Слово <Highlight>обратить</Highlight> происходит от древнерусского <Highlight>обратити</Highlight>, которое восходит к праславянскому <Highlight>obrъtiti</Highlight>, означающему *повернуть*, *изменить направление*. Корень <Highlight>-брат-</Highlight> связан с глаголом <Highlight>брать</Highlight> в значении *поворачивать* или *направлять*.
                </p>
                <p className="paragraph">
                    В древнерусском языке слово <Highlight>обратить</Highlight> использовалось для обозначения физического поворота или изменения направления движения. Со временем оно приобрело более широкое значение, охватывая как физические изменения направления, так и переносные значения, связанные с изменением состояния, формы, внимания или отношения.
                </p>
            </Section>

            <Interactive_Image src={turn} alt={"Обратить"} width={500} height={500}/>

            <Section title="Морфологические элементы">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Приставка 'об-'</Highlight> — указывает на действие вокруг или изменение состояния по отношению к чему-либо, подчёркивая изменение направления или состояния.
                    </li>
                    <li>
                        <Highlight>Корень '-брат-'</Highlight> — происходит от глагола <Highlight>брать</Highlight>, который в этом контексте означает *направлять* или *поворачивать*.
                    </li>
                    <li>
                        <Highlight>Суффикс '-и-'</Highlight> — служит для образования глагольной формы, указывая на действие.
                    </li>
                    <li>
                        <Highlight>Окончание '-ть'</Highlight> — типичное для инфинитивной формы глаголов в русском языке.
                    </li>
                </ul>
            </Section>

            <Section title="Морфология современного русского языка">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Корень 'обрат-'</Highlight> — корень «обрат» несёт основное значение действия, связанного с изменением направления, перенаправлением или изменением состояния чего-либо.
                    </li>
                    <li>
                        <Highlight>Суффикс '-и-'</Highlight> — суффикс «-и-» указывает на образование глагола, придавая корню способность выражать процесс или действие.
                    </li>
                    <li>
                        <Highlight>Суффикс '-ть'</Highlight> — суффикс «-ть» является показателем инфинитива (начальной формы глагола), указывая на неопределённое действие.
                    </li>
                    <li>
                        <Highlight>Основа 'обрати-'</Highlight> — «обрати» — это часть слова без инфинитивного суффикса «-ть», которая выражает основу действия.
                    </li>
                    <li>
                        <Highlight>Часть речи:</Highlight> Глагол (действие, процесс).
                    </li>
                </ul>
            </Section>

            <Section title="Исторический контекст">
                <p className="paragraph">
                    В древнерусском языке слово <Highlight>обратить</Highlight> использовалось для обозначения физического изменения направления движения, например, поворота человека или предмета. В дальнейшем это слово стало применяться также в абстрактном смысле для обозначения изменения состояния, преобразования предметов или внимания на что-либо.
                </p>
                <p className="paragraph">
                    В христианской литературе и богословии слово <Highlight>обратить</Highlight> приобрело особое значение, связанное с изменением веры или духовного состояния, например, *обращение к вере* или *обращение в христианство*.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    Сегодня слово <Highlight>обратить</Highlight> используется в различных контекстах и имеет несколько значений:
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>Изменение направления</Highlight> — изменить путь, повернуть что-либо в другую сторону. Пример: *обратить взор на проблему*.
                    </li>
                    <li>
                        <Highlight>Превращение или преобразование</Highlight> — изменить состояние или форму чего-либо. Пример: *обратить воду в лёд*.
                    </li>
                    <li>
                        <Highlight>Привлечение внимания</Highlight> — сосредоточить внимание или интерес на чём-либо. Пример: *обратить внимание на детали*.
                    </li>
                    <li>
                        <Highlight>Религиозное обращение</Highlight> — процесс изменения веры или принятие другой веры. Пример: *обратить в христианство*.
                    </li>
                    <li>
                        <Highlight>Воздействие или влияние</Highlight> — применить действие или усилие к чему-то или кому-то с целью изменения состояния. Пример: *обратить силу закона против нарушителя*.
                    </li>
                </ul>
            </Section>

            <Section title="Примеры использования слова 'Обратить'">
                <ul className="space-y-6">
                    <Base_card
                        title="Физическое изменение направления"
                        description="Он решил обратить свой путь и вернуться домой."
                        icon="🌍"
                    />
                    <Base_card
                        title="Преобразование"
                        description="Химическая реакция позволила обратить жидкость в твёрдое состояние."
                        icon="⚗️"
                    />
                    <Base_card
                        title="Привлечение внимания"
                        description="Он обратил внимание на мелкие недочёты в отчёте."
                        icon="🔍"
                    />
                    <Base_card
                        title="Религиозное обращение"
                        description="Миссионеры стремились обратить людей в христианство."
                        icon="✝️"
                    />
                    <Base_card
                        title="Воздействие"
                        description="Суд решил обратить закон против нарушителей."
                        icon="⚖️"
                    />
                </ul>
            </Section>

            <Section title="Переносные значения и фразеологизмы">
                <p className="paragraph">
                    В переносном смысле слово <Highlight>обратить</Highlight> часто используется для описания абстрактных процессов или изменений:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Обратить внимание</Highlight> — сосредоточить внимание или интерес на чём-то важном.</li>
                    <li><Highlight>Обратить ресурсы</Highlight> — использовать или направить ресурсы для достижения какой-либо цели.</li>
                    <li><Highlight>Обратить усилия</Highlight> — приложить действия или усилия для достижения цели.</li>
                </ul>
                <p className="paragraph">
                    Фразеологизмы и устойчивые выражения:
                </p>
                <ul className="unordered_list">
                    <li><Highlight>Обратить внимание</Highlight> — сосредоточить внимание на чём-то.</li>
                    <li><Highlight>Обратить в прах</Highlight> — уничтожить, разрушить (переносное значение).</li>
                    <li><Highlight>Обратить силу против кого-то</Highlight> — применить закон или власть в отношении кого-либо с целью наказания.</li>
                    <li><Highlight>Обратить в бегство</Highlight> — заставить кого-то убежать, победить в бою.</li>
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Мудрость состоит в том, чтобы обратить внимание на то, что действительно важно."
                        annotation="Аристотель — о важности осознанного фокуса на ключевых аспектах жизни"
                    />
                    <Quote_with_annotation
                        quote="Невозможно обратить человека к добру, если он сам этого не желает."
                        annotation="Фёдор Достоевский — о том, что изменения возможны только при личном желании"
                    />
                    <Quote_with_annotation
                        quote="Сложности — это возможность, которую можно обратить в успех."
                        annotation="Франклин Рузвельт — о том, что трудности могут стать толчком к достижениям"
                    />
                </div>
            </Section>

            <Section title="Значение слова 'Обратить' в различных сферах">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Физика и химия</Highlight>: Описывает процессы преобразования, например, *обратимая реакция* — это реакция, которая может протекать в обоих направлениях.
                    </li>
                    <li>
                        <Highlight>Психология</Highlight>: Используется для описания изменения поведения или мышления, например, *обратить внимание на свои эмоции*.
                    </li>
                    <li>
                        <Highlight>Религия и философия</Highlight>: Связано с изменением мировоззрения, например, *обращение к новой вере*.
                    </li>
                    <li>
                        <Highlight>Социология</Highlight>: Изменение отношения общества к явлениям, например, *общество обратило свои взгляды на экологию*.
                    </li>
                </ul>
            </Section>

            <Section title="Классификация значений слова 'Обратить'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>По области применения</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Лексическое значение (физическое/переносное)</li>
                            <li>Религиозное значение</li>
                            <li>Юридическое значение</li>
                            <li>Научное и техническое значение</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>По типу действия</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Активное обращение (направление усилий)</li>
                            <li>Пассивное обращение (изменение восприятия)</li>
                        </ul>
                    </li>
                    <li>
                        <Highlight>По сфере применения</Highlight>:
                        <ul className="unordered_list ml-4">
                            <li>Физика</li>
                            <li>Психология</li>
                            <li>Социология</li>
                            <li>Техника и инженерия</li>
                        </ul>
                    </li>
                </ul>
            </Section>
        </div>
    );
}