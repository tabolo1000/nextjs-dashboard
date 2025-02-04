import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import image from "@/app/[locale]/(app)/linguistics/words/technique/assets/img/technique.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import React from "react";
import { Audio_Navigate } from "@/app/ui/math/components/Audio_Navigate";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Technique() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Техника
            </h1>

            {/* Этимология */}
            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>техника</Highlight> происходит от греческого слова{" "}
                    <Highlight>τέχνη (techne - тэ́хнэ)</Highlight>, которое означает искусство, ремесло или мастерство.
                    В современном понимании техника — это совокупность методов, инструментов и устройств,
                    используемых для выполнения определённых задач или достижения целей.
                </p>
            </Section>

            <Interactive_Image
                src={image}
                alt={"Техника"}
                width={500}
                height={500}
            />

            {/* Морфемный разбор */}
            <Section title="Морфемный разбор">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Техн-</strong> — корень, связанный с мастерством, искусством или технологией.
                    </li>
                    <li>
                        <strong>-ика</strong> — суффикс, обозначающий совокупность знаний или методов, а также область деятельности.
                    </li>
                </ul>
            </Section>

            {/* Исторический контекст */}
            <Section title="Исторический контекст">
                <p className="paragraph">
                    Понятие <Highlight>техника</Highlight> возникло в древних цивилизациях, когда люди начали осваивать и развивать
                    различные способы создания инструментов и методов для облегчения труда. В античной Греции слово{" "}
                    <Highlight>techne</Highlight> использовалось для обозначения любого ремесла или искусства, будь то кузнечное дело,
                    строительство или живопись. Со временем техника стала обозначать всё более сложные системы и процессы,
                    которые использовались в различных сферах жизни — от сельского хозяйства до строительства и медицины.
                </p>
                <p className="paragraph">
                    В поздние периоды, особенно с началом индустриальной революции в XVIII веке, слово техника приобрело
                    более узкое значение, обозначая набор инструментов, машин и процессов, которые использовались для
                    автоматизации труда и повышения производительности. С этого момента техника начала стремительно развиваться,
                    охватывая всё новые области, такие как транспорт, связь, производство и наука.
                </p>
            </Section>

            {/* Современное значение */}
            <Section title="Современное значение">
                <p className="paragraph">
                    В современном понимании <Highlight>техника</Highlight> — это совокупность методов, процессов и устройств,
                    применяемых для выполнения различных задач в производстве, науке, искусстве и других сферах.
                    Техника охватывает как физические объекты (машины, приборы, оборудование), так и методы их применения.
                </p>
            </Section>

            {/* Основные аспекты техники */}
            <Section title="Основные аспекты техники">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Машины и механизмы</strong> — техника включает в себя машины и механизмы, которые применяются для
                        упрощения и ускорения работы. Это могут быть как простые инструменты, так и сложные автоматизированные системы.
                    </li>
                    <li>
                        <strong>Процессы и методы</strong> — техника подразумевает определённые технологии и методики, с помощью которых
                        достигаются поставленные цели.
                    </li>
                    <li>
                        <strong>Научные основы</strong> — развитие техники тесно связано с научно-техническим прогрессом и применением
                        научных знаний для создания новых устройств и методов.
                    </li>
                    <li>
                        <strong>Инженерия и инновации</strong> — инженерные дисциплины играют ключевую роль в разработке новой техники,
                        а инновации помогают оптимизировать существующие процессы.
                    </li>
                </ul>
            </Section>

            {/* Виды техники */}
            <Section title="Виды техники">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Производственная техника</strong> — включает машины и оборудование, используемые в промышленности и
                        сельском хозяйстве. Сюда относятся станки, конвейеры, тракторы, комбайны и многое другое.
                    </li>
                    <li>
                        <strong>Электронная техника</strong> — это устройства, основанные на применении электричества и электроники,
                        такие как компьютеры, смартфоны, телевизоры, бытовая техника.
                    </li>
                    <li>
                        <strong>Транспортная техника</strong> — включает автомобили, поезда, самолёты, корабли и другие транспортные
                        средства, предназначенные для перемещения людей и грузов.
                    </li>
                    <li>
                        <strong>Строительная техника</strong> — сюда входят машины и механизмы, используемые в строительстве: экскаваторы,
                        краны, бетономешалки, бульдозеры и т.д.
                    </li>
                    <li>
                        <strong>Медицинская техника</strong> — включает устройства, применяемые в медицине, такие как томографы,
                        рентгеновские аппараты, кардиомониторы и хирургические роботы.
                    </li>
                    <li>
                        <strong>Военная техника</strong> — техника, предназначенная для ведения боевых действий и обеспечения обороны:
                        танки, боевые самолёты, ракеты, беспилотные летательные аппараты.
                    </li>
                    <li>
                        <strong>Бытовая техника</strong> — техника, используемая в повседневной жизни для облегчения домашних задач:
                        стиральные машины, холодильники, кухонные комбайны и пылесосы.
                    </li>
                </ul>
            </Section>

            {/* Роль техники в современном мире */}
            <Section title="Роль техники в современном мире">
                <p className="paragraph">
                    Техника играет важнейшую роль в развитии общества. Она позволяет автоматизировать процессы, повышать производительность
                    труда и улучшать качество жизни. Современные технологии, такие как искусственный интеллект, робототехника и нанотехнологии,
                    открывают новые горизонты для человечества.
                </p>
            </Section>

            {/* Основные функции техники */}
            <Section title="Основные функции техники">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Автоматизация процессов</strong> — техника позволяет автоматизировать рутинные задачи, что снижает
                        трудозатраты и повышает эффективность.
                    </li>
                    <li>
                        <strong>Повышение производительности</strong> — благодаря использованию техники можно производить больше товаров
                        и услуг за меньшее время.
                    </li>
                    <li>
                        <strong>Улучшение качества жизни</strong> — бытовая техника, транспорт и медицинские устройства облегчают
                        повседневную жизнь людей, делая её комфортнее и безопаснее.
                    </li>
                    <li>
                        <strong>Развитие науки и технологий</strong> — техника помогает развивать научные исследования и внедрять инновации
                        в различные отрасли.
                    </li>
                    <li>
                        <strong>Обеспечение безопасности</strong> — техника играет важную роль в безопасности на транспорте, в строительстве,
                        в медицине и в обороне.
                    </li>
                </ul>
            </Section>

            {/* Примеры использования слова "техника" */}
            <Section title="Примеры использования слова 'техника'">
                <ul className="space-y-6">
                    <Base_card
                        title="Производственная сфера"
                        description="На новом заводе используется современная техника, позволяющая автоматизировать все процессы производства."
                        icon="🏭"
                    />
                    <Base_card
                        title="Бытовая сфера"
                        description="Бытовая техника, такая как стиральные машины и пылесосы, значительно облегчает выполнение домашних задач."
                        icon="🏠"
                    />
                    <Base_card
                        title="Строительство"
                        description="Строительная техника, такая как экскаваторы и краны, ускоряет возведение зданий."
                        icon="🏗️"
                    />
                    <Base_card
                        title="Медицина"
                        description="Современная медицинская техника позволяет проводить сложные операции с минимальным риском для пациента."
                        icon="🏥"
                    />
                    <Base_card
                        title="Транспорт"
                        description="Транспортная техника, включая самолёты и поезда, позволяет людям быстро перемещаться на большие расстояния."
                        icon="✈️"
                    />
                    <Base_card
                        title="Военная сфера"
                        description="Новая военная техника улучшила возможности армии в области разведки и обороны."
                        icon="🚁"
                    />
                    <Base_card
                        title="Наука"
                        description="Научная техника, такая как микроскопы и телескопы, открывает новые горизонты в исследовании вселенной."
                        icon="🔬"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Техника — это инструмент, который позволяет человеку создавать и преобразовывать окружающий мир."
                        annotation="Цитата подчёркивает, что техника — это средство для расширения возможностей человека."
                    />
                    <Quote_with_annotation
                        quote="Развитие техники — это двигатель прогресса, который определяет будущее человечества."
                        annotation="Здесь говорится о том, что техника играет ключевую роль в развитии общества и его прогрессе."
                    />
                    <Quote_with_annotation
                        quote="Современная техника позволяет нам выполнять задачи, которые ещё пару десятилетий назад казались невозможными."
                        annotation="Цитата подчёркивает, как быстрое развитие техники меняет наши представления о возможностях."
                    />
                    <Quote_with_annotation
                        quote="Техника — это мост между идеей и её воплощением в реальности."
                        annotation="Здесь техника рассматривается как инструмент, который позволяет превратить идеи в реальность."
                    />
                    <Quote_with_annotation
                        quote="Каждый новый шаг в развитии техники открывает перед нами новые горизонты возможностей."
                        annotation="Цитата подчёркивает важность инноваций в технике для расширения человеческих возможностей."
                    />
                </div>
            </Section>

            {/* Современные проблемы и вызовы */}
            <Section title="Современные проблемы и вызовы">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Загрязнение окружающей среды</strong> — многие виды техники, особенно транспортная и производственная,
                        приводят к выбросам углекислого газа и других загрязняющих веществ, что способствует изменению климата.
                    </li>
                    <li>
                        <strong>Автоматизация и безработица</strong> — развитие техники и автоматизация производства приводят к сокращению
                        рабочих мест в некоторых отраслях, что вызывает социальные проблемы.
                    </li>
                    <li>
                        <strong>Электронные отходы</strong> — рост использования электронных устройств приводит к накоплению большого
                        количества отходов, которые трудно перерабатывать.
                    </li>
                    <li>
                        <strong>Энергетическая зависимость</strong> — многие виды техники зависят от ископаемых источников энергии, что
                        увеличивает потребность в разработке новых, более экологичных технологий.
                    </li>
                </ul>
            </Section>

            <Audio_Navigate
                path="/words/technique/technique.record"
                to={{
                    nextTask: "./next_topic",
                    nextExercise: "",
                }}
            />
        </div>
    );
}