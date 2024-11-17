import {Section} from "@/app/ui/math/components/Section";
import {Base_card} from "@/app/ui/math/components/Base_card";
import {Audio_Navigate} from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Highlight} from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/compressor/assets/img/compressor.jpeg";
import Image from "next/image";
import React from "react";

export default async function Compressor() {

    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Компрессор
            </h1>

            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>компрессор - |kəmˈpresər|</Highlight> происходит от латинского <em>compressor</em>, что в свою очередь образовано от глагола <em>comprimere</em> — <strong>сжимать</strong>. Суффикс <Highlight>-ор</Highlight> указывает на инструмент или механизм, выполняющий действие. Таким образом, <Highlight>компрессор</Highlight> буквально означает устройство для сжатия чего-либо, чаще всего воздуха или газа.
                </p>
            </Section>
            <Image src={image} alt={"compressor"} width={400} height={400} />

            <Section title="Морфемный разбор" parity>
                <ul className="unordered_list">
                    <li><strong>Ком-</strong> — приставка, обозначающая соединение, совместное действие (от латинского <em>com [ком]</em> — "вместе").</li>
                    <li><strong>Пресс-</strong> — корень, связанный с сжатием (от латинского <em>premere [прэмэрэ]</em> — "давить").</li>
                    <li><strong>-ор</strong> — суффикс, обозначающий инструмент или устройство.</li>
                </ul>
            </Section>

            <Section title="Исторический контекст" parity>
                <p className="paragraph">
                    Термин <Highlight>компрессор</Highlight> появился в технической и инженерной среде с развитием технологий, связанных с управлением давлением воздуха и газа. Первые компрессоры, как устройства для сжатия воздуха или газа, начали использоваться в промышленности и строительстве в XIX веке.
                </p>
                <p className="paragraph">
                    С изобретением паровых машин и развитием электрических двигателей компрессоры стали значительно более эффективными, что позволило применять их в самых разных отраслях, от горнодобывающей промышленности до авиации и медицины.
                </p>
            </Section>

            <Section title="Современное значение">
                <p className="paragraph">
                    В современном мире <Highlight>компрессор</Highlight> — это устройство, предназначенное для сжатия и перекачивания газов или воздуха. Компрессоры широко используются в различных сферах, таких как:
                </p>
                <ul className="unordered_list">
                    <li><strong>Промышленность</strong> — компрессоры обеспечивают работу пневматических инструментов, используются в системах охлаждения, вентиляции и кондиционирования.</li>
                    <li><strong>Автомобилестроение</strong> — компрессоры применяются в двигателях для создания турбонаддува, что увеличивает мощность.</li>
                    <li><strong>Медицина</strong> — медицинские компрессоры используются в аппаратах для искусственной вентиляции лёгких и подачи кислорода.</li>
                    <li><strong>Холодильное оборудование</strong> — компрессоры обеспечивают циркуляцию хладагента, поддерживая низкие температуры в холодильниках и кондиционерах.</li>
                    <li><strong>Строительство и ремонт</strong> — компрессоры применяются для работы с пневматическими инструментами, такими как отвертки, молотки и краскопульты.</li>
                </ul>
            </Section>

            <Section title="Виды компрессоров" parity>
                <p className="paragraph">
                    Компрессоры подразделяются на несколько типов в зависимости от принципа действия:
                </p>
                <ul className="unordered_list">
                    <li><strong>Поршневые компрессоры</strong> — работают за счёт движения поршня, который сжимает воздух или газ в цилиндре.</li>
                    <li><strong>Винтовые компрессоры</strong> — используют вращение винтов для сжатия газа.</li>
                    <li><strong>Центробежные (турбокомпрессоры)</strong> — сжимают воздух с помощью центробежной силы, создаваемой ротором.</li>
                    <li><strong>Ротационные компрессоры</strong> — используют вращающиеся элементы для сжатия и перемещения газа.</li>
                    <li><strong>Диафрагменные компрессоры</strong> — работают за счёт перемещения диафрагмы, что изменяет объём камеры и сжимает газ.</li>
                </ul>
            </Section>

            <Section title="Интересный факт">
                <p className="paragraph">
                    Один из самых известных видов компрессоров — это турбокомпрессор, который используется в двигателях автомобилей для увеличения их мощности. Турбокомпрессор сжимает воздух, поступающий в двигатель, что позволяет сжигать больше топлива и увеличивать мощность без увеличения объёма двигателя.
                </p>
            </Section>

            <Section title="Примеры использования слова 'компрессор'">
                <ul className="space-y-6">
                    <Base_card
                        title="Пневматика"
                        description="Компрессор подаёт сжатый воздух для работы пневматических инструментов на строительной площадке."
                        icon="🔧"
                    />
                    <Base_card
                        title="Автомобили"
                        description="Турбокомпрессор увеличивает мощность двигателя, сжимая воздух перед его подачей в цилиндры."
                        icon="🚗"
                    />
                    <Base_card
                        title="Кондиционирование"
                        description="Компрессор в кондиционере обеспечивает циркуляцию хладагента, охлаждая воздух в помещении."
                        icon="❄️"
                    />
                    <Base_card
                        title="Медицина"
                        description="Медицинский компрессор используется в аппаратах искусственной вентиляции лёгких для подачи воздуха пациентам."
                        icon="🏥"
                    />
                    <Base_card
                        title="Холодильное оборудование"
                        description="В холодильниках компрессор поддерживает необходимую температуру за счёт циркуляции хладагента."
                        icon="🧊"
                    />
                    <Base_card
                        title="Промышленное оборудование"
                        description="Винтовой компрессор используется для подачи сжатого воздуха на промышленное предприятие."
                        icon="🏭"
                    />
                    <Base_card
                        title="Строительство"
                        description="Компрессор обеспечивает работу пневматического молотка, создавая необходимое давление воздуха."
                        icon="🏗️"
                    />
                    <Base_card
                        title="Ремонт автомобилей"
                        description="В автосервисах часто используют компрессоры для накачки шин и работы с краскопультами."
                        icon="🚘"
                    />
                    <Base_card
                        title="Аудио"
                        description="В аудиотехнике компрессор используется для регулирования уровня звука и предотвращения перегрузки сигнала."
                        icon="🎧"
                    />
                    <Base_card
                        title="Системы вентиляции"
                        description="Компрессоры в системах вентиляции и кондиционирования обеспечивают подачу сжатого воздуха для охлаждения помещений."
                        icon="🌬️"
                    />
                </ul>
            </Section>

            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Компрессор — это сердце любой пневматической системы."
                        annotation="Цитата подчёркивает важность компрессора в системах, где используется сжатый воздух или газ."
                    />
                    <Quote_with_annotation
                        quote="Без компрессора ни одно современное охлаждающее устройство не может выполнить свою задачу."
                        annotation="Здесь подчёркивается ключевая роль компрессоров в холодильной технике и кондиционировании."
                    />
                    <Quote_with_annotation
                        quote="Компрессор — это механизм, который сжимает воздух или газ, создавая давление для работы различных устройств."
                        annotation="В цитате объясняется основное предназначение компрессора."
                    />
                    <Quote_with_annotation
                        quote="С компрессором работа становится проще и быстрее, ведь он обеспечивает необходимое давление для инструментов."
                        annotation="Цитата подчеркивает важность компрессора в строительных и промышленных процессах."
                    />
                    <Quote_with_annotation
                        quote="Турбокомпрессор играет важную роль в увеличении мощности двигателя без увеличения его объёма."
                        annotation="Здесь подчёркивается значение компрессора в автомобилестроении."
                    />
                </div>
            </Section>

            <Audio_Navigate
                path={"/words/compressor/compressor.record"}
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}