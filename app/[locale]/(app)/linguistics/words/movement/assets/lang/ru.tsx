import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Highlight} from "@/app/ui/math/components/Highlight";
import movement from "@/app/[locale]/(app)/linguistics/words/movement/assets/img/movement.jpeg";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";

export default function Movement() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Перемещаться</h1>

            <Section title="Этимология слова 'перемещаться'">
                <p className="paragraph">
                    <Highlight>Происхождение:</Highlight>
                    Слово <Highlight>перемещаться</Highlight> происходит от древнерусского <Highlight>перемѣщати</Highlight>, которое состоит из:
                </p>
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>"пере-"</Highlight> — приставка, указывающая на изменение положения.</li>
                    <li><Highlight>"место"</Highlight> — корень, означающий локацию или точку в пространстве.</li>
                </ul>
                <p className="paragraph">
                    Изначально это слово означало переносить или переставлять что-либо с одного места на другое.
                </p>
            </Section>

            <Interactive_Image src={movement} alt={"перемещаться"} width={500} height={500} />


            <Section title="Морфологические элементы">
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>Приставка "пере-"</Highlight> — означает изменение состояния или движения.</li>
                    <li><Highlight>Корень "мест-"</Highlight> — связан с понятием места.</li>
                    <li><Highlight>Суффикс "-я-"</Highlight> — указывает на глагольную форму.</li>
                    <li><Highlight>Окончание "-ться"</Highlight> — возвратный показатель, указывающий на действие, направленное на субъекта.</li>
                </ul>
            </Section>

            <Section title="Исторический контекст">
                <p className="paragraph">
                    В древнерусском языке слово <Highlight>перемещать</Highlight> применялось для описания физического перемещения объектов.
                </p>
                <p className="paragraph">
                    Со временем оно стало использоваться для описания как физического, так и абстрактного движения.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    В современном русском языке <Highlight>перемещаться</Highlight> означает:
                </p>
                <ul className="unordered_list list-disc pl-6">
                    <li><Highlight>Физическое движение</Highlight> — перемещение человека, животного, объекта или транспортного средства.</li>
                    <li><Highlight>Абстрактное движение</Highlight> — перенос состояния, позиции, информации или идей.</li>
                </ul>
            </Section>

            <Section title="Примеры использования слова 'перемещаться'">
                <ul className="space-y-6">
                    <Base_card
                        title="Физическое перемещение"
                        description="Самолёт начал перемещаться по взлётной полосе перед взлётом."
                        icon="✈️"
                    />
                    <Base_card
                        title="Миграция"
                        description="Каждую осень птицы начинают перемещаться на юг в поисках тепла."
                        icon="🐦"
                    />
                    <Base_card
                        title="Технологии"
                        description="Файлы можно легко перемещать с одного устройства на другое через облачные сервисы."
                        icon="💻"
                    />
                    <Base_card
                        title="Абстрактные процессы"
                        description="Мысли начали быстро перемещаться в его голове, когда он пытался найти решение проблемы."
                        icon="💭"
                    />
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Неважно, как быстро ты можешь перемещаться, важно, чтобы ты знал, куда идёшь."
                        annotation="Жюль Верн"
                    />
                    <Quote_with_annotation
                        quote="В будущем перемещаться по миру можно будет быстрее, чем когда-либо прежде."
                        annotation="Артур Кларк"
                    />
                    <Quote_with_annotation
                        quote="Человек, который не хочет перемещаться вперёд, всегда будет оставаться позади."
                        annotation="Генри Форд"
                    />
                </div>
            </Section>

            <Section title="Значение перемещения">
                <p className="paragraph">
                    <Highlight>Перемещаться</Highlight> — это фундаментальное действие, связанное с движением в пространстве и времени, а также с переносом информации, идей и ресурсов.
                </p>
            </Section>
        </div>
    );
}
