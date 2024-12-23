import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import React from "react";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import chaise_lounge from "@/app/[locale]/(app)/linguistics/words/chaise_lounge/assets/img/chaise_Lounge.jpeg";

export default function Shezlong() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">
                Шезлонг
            </h1>

            {/* Этимология */}
            <Section title="Этимология">
                <p className="paragraph">
                    Слово <Highlight>шезлонг</Highlight> происходит от французского{" "}
                    <Highlight>chaise longue  |ʃeɪz lɔːŋ|</Highlight>, что дословно переводится как
                    "длинный стул" (от <Highlight>chaise</Highlight> — стул, и{" "}
                    <Highlight>longue</Highlight> — длинный). Это предмет мебели,
                    предназначенный для отдыха в полулежачем положении.
                </p>
            </Section>
            <Interactive_Image src={chaise_lounge} alt={"Капиллярная трубка"} width={500} height={500}/>


            {/* Морфемный разбор */}
            <Section title="Морфемный разбор">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Шез-</Highlight> — часть слова, унаследованная из
                        французского <Highlight>chaise</Highlight> (стул).
                    </li>
                    <li>
                        <Highlight>-лонг</Highlight> — часть слова, происходящая от
                        французского <Highlight>longue</Highlight> (длинный).
                    </li>
                </ul>
            </Section>

            {/* Исторический контекст */}
            <Section title="Исторический контекст">
                <p className="paragraph">
                    Шезлонги, как удобные сиденья для отдыха, появились еще в Древней
                    Греции и Древнем Риме, где знатные люди использовали подобные
                    конструкции для лежания и отдыха. Однако современные шезлонги, какими
                    мы их знаем сегодня, возникли во Франции в XVII–XVIII веках. Это был
                    элемент мебели, который использовался в аристократических домах для
                    отдыха, чтения или дневного сна.
                </p>
                <p className="paragraph">
                    С развитием курортной культуры в XIX веке шезлонги стали популярными
                    на пляжах и в садах. Люди начали использовать их на открытом воздухе,
                    наслаждаясь солнцем и морскими пейзажами. Со временем шезлонг стал
                    неотъемлемой частью пляжного и загородного отдыха.
                </p>
            </Section>

            {/* Современное значение */}
            <Section title="Современное значение">
                <p className="paragraph">
                    <Highlight>Шезлонг</Highlight> — это лёгкий, складной или стационарный
                    стул с удлинённым сиденьем, позволяющий сидеть в полулежачем
                    положении. Он предназначен для отдыха на свежем воздухе, у бассейна или
                    на пляже.
                </p>
                <p className="paragraph">
                    Шезлонги могут быть выполнены из различных материалов, таких как
                    дерево, металл, пластик, иногда с мягкими текстильными вставками для
                    удобства. Большинство современных шезлонгов имеет складную конструкцию,
                    что делает их удобными для транспортировки и хранения.
                </p>
            </Section>

            {/* Виды шезлонгов */}
            <Section title="Виды шезлонгов">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <Highlight>Пляжные шезлонги</Highlight> — лёгкие и часто складные
                        конструкции, обычно выполненные из пластика или алюминия с
                        текстильной обивкой. Они легко переносятся и предназначены для
                        использования на пляже или у бассейна.
                    </li>
                    <li>
                        <Highlight>Садовые шезлонги</Highlight> — более массивные и прочные,
                        часто изготовленные из дерева или металла. Такие шезлонги могут быть
                        стационарными и используются в частных садах или на террасах.
                    </li>
                    <li>
                        <Highlight>Шезлонги для бассейнов</Highlight> — специальные шезлонги
                        с водоотталкивающей обивкой, которые устойчивы к воздействию воды и
                        солнца. Они часто имеют регулируемую спинку.
                    </li>
                    <li>
                        <Highlight>Кресло-шезлонг</Highlight> — это гибрид между креслом и
                        шезлонгом, который можно использовать как дома, так и на улице.
                        Такие модели обычно имеют мягкую обивку и могут быть оснащены
                        подлокотниками.
                    </li>
                    <li>
                        <Highlight>Шезлонги с тентом</Highlight> — модели, снабжённые навесом
                        для защиты от солнца. Это популярные варианты для пляжей и бассейнов.
                    </li>
                </ul>
            </Section>

            {/* Преимущества шезлонгов */}
            <Section title="Преимущества шезлонгов">
                <ul className="unordered_list list-disc pl-6 space-y-2">
                    <li>
                        <strong>Удобство:</strong> Шезлонги позволяют отдыхать в
                        полулежачем положении, что снижает нагрузку на позвоночник и
                        способствует расслаблению.
                    </li>
                    <li>
                        <strong>Мобильность:</strong> Складные модели легко транспортировать,
                        что делает их идеальными для отдыха на природе или пляже.
                    </li>
                    <li>
                        <strong>Регулируемость:</strong> Многие шезлонги имеют регулируемую
                        спинку, позволяя выбрать наиболее комфортное положение.
                    </li>
                    <li>
                        <strong>Эстетика:</strong> Шезлонги могут стать стильным элементом
                        интерьера сада, террасы или даже интерьера дома.
                    </li>
                </ul>
            </Section>

            {/* Примеры использования слова "шезлонг" */}
            <Section title="Примеры использования слова 'шезлонг'">
                <ul className="space-y-6">
                    <Base_card
                        title="Пляжный отдых"
                        description="На пляже мы взяли напрокат шезлонги и целый день провели, наслаждаясь солнцем и морем."
                        icon="🏖️"
                    />
                    <Base_card
                        title="Загородный дом"
                        description="В саду у нас стоит красивый деревянный шезлонг, на котором я люблю читать книги летними вечерами."
                        icon="🏡"
                    />
                    <Base_card
                        title="Около бассейна"
                        description="Возле бассейна стояли удобные шезлонги с мягкими матрасами, и мы провели там весь день, расслабляясь под солнцем."
                        icon="🏊"
                    />
                    <Base_card
                        title="Туризм"
                        description="Мы взяли с собой складные шезлонги, чтобы удобно расположиться у озера и наслаждаться природой."
                        icon="⛺"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Шезлонг — это лучший друг тех, кто любит отдыхать на свежем воздухе, наслаждаясь солнцем и тишиной."
                        annotation="Цитата подчёркивает важность шезлонга для комфортного отдыха на природе."
                    />
                    <Quote_with_annotation
                        quote="Каждый шезлонг — это маленький уголок рая для тех, кто любит полежать в тени и послушать шум волн."
                        annotation="Здесь шезлонг ассоциируется с отдыхом на пляже и умиротворением."
                    />
                    <Quote_with_annotation
                        quote="Комфортный шезлонг в саду — это место, где можно забыть обо всём и просто наслаждаться моментом."
                        annotation="Цитата подчёркивает роль шезлонга как места для отдыха и расслабления."
                    />
                </div>
            </Section>
        </div>
    );
}