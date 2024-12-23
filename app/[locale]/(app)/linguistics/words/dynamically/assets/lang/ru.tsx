import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Highlight } from "@/app/ui/math/components/Highlight";
import dynamicImage from "@/app/[locale]/(app)/linguistics/words/dynamically/assets/img/dynamically.jpeg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Dynamically() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Динамически: Этимология, Значение и Примеры</h1>

            {/* Этимология */}
            <Section title="Этимология слова 'Динамически'">
                <p className="paragraph">
                    Слово <Highlight>"динамически"</Highlight> происходит от греческого слова <i>dynamis</i> (δύναμις), что означает "сила", "мощь", "движение". Корень <Highlight>дина-</Highlight> используется в словах, связанных с движением, изменением или активностью, таких как "динамика" и "динамо". Суффикс <Highlight>-ически</Highlight> указывает на способ действия или характеристику, связанную с чем-то.
                </p>
                <p className="paragraph">
                    <Highlight>Греческие корни:</Highlight> <i>Dynamis</i> отражает понятие силы или энергии, которая вызывает изменения или движение. Это слово легло в основу многих терминов, связанных с изменениями и развитием.
                </p>
                <p className="paragraph">
                    <Highlight>Современное использование:</Highlight> В русский язык слово "динамически" пришло через научные и технические термины, связанные с физикой, математикой и программированием. Оно стало обозначать процессы, которые происходят в зависимости от изменения условий или со временем.
                </p>
            </Section>

                <Interactive_Image
                    src={dynamicImage}
                    alt={"Динамика"}
                    width={500}
                    height={500}
                />


            {/* Значение */}
            <Section title="Значение слова 'Динамически'">
                <p className="paragraph">
                    <Highlight>Динамически</Highlight> — это наречие, которое характеризует действие, процесс или состояние, изменяющееся во времени или в зависимости от обстоятельств. Оно указывает на изменения, движения или развитие чего-либо.
                </p>
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Изменения во времени:</Highlight> Процессы или ситуации, которые изменяются со временем или в зависимости от условий. <br />
                        <i>"Система динамически адаптируется к изменениям в окружающей среде."</i>
                    </li>
                    <li>
                        <Highlight>2. Гибкость и адаптация:</Highlight> Процессы, которые могут быть изменены или настроены в зависимости от обстоятельств. <br />
                        <i>"Программное обеспечение динамически регулирует параметры в зависимости от нагрузки."</i>
                    </li>
                    <li>
                        <Highlight>3. Постоянное движение или изменение:</Highlight> Состояние, при котором что-то постоянно развивается, изменяется или движется. <br />
                        <i>"Динамически развивающаяся индустрия требует постоянного обновления знаний."</i>
                    </li>
                </ul>
            </Section>

            {/* Примеры */}
            <Section title="Примеры использования слова 'Динамически'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Динамически распределяемая память:</Highlight> В программировании этот термин означает, что память выделяется и освобождается по мере необходимости. <br />
                        <i>"Динамически выделяемая память позволяет программе эффективно использовать ресурсы компьютера."</i>
                    </li>
                    <li>
                        <Highlight>2. Динамически изменяющиеся данные:</Highlight> Это данные, которые могут изменяться в реальном времени, например, в зависимости от действий пользователя. <br />
                        <i>"График на сайте обновляется динамически, показывая актуальные данные в реальном времени."</i>
                    </li>
                    <li>
                        <Highlight>3. Динамически развивающаяся экономика:</Highlight> Экономика, которая быстро меняется и адаптируется к новым условиям. <br />
                        <i>"Динамически развивающаяся экономика требует гибкости от бизнеса."</i>
                    </li>
                    <li>
                        <Highlight>4. Динамически загружаемый контент:</Highlight> Контент, который загружается по мере необходимости, например, при прокрутке страницы. <br />
                        <i>"Динамически подгружаемый контент улучшает работу сайта."</i>
                    </li>
                </ul>
            </Section>

            {/* Связанные термины */}
            <Section title="Связанные термины">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Динамическая система:</Highlight> Система, поведение которой изменяется с течением времени.
                    </li>
                    <li>
                        <Highlight>Динамическое программирование:</Highlight> Метод оптимизации в программировании, при котором сложные задачи разбиваются на более простые подзадачи.
                    </li>
                    <li>
                        <Highlight>Динамическая память:</Highlight> Тип компьютерной памяти, которая выделяется и освобождается во время выполнения программы.
                    </li>
                    <li>
                        <Highlight>Динамическая цена:</Highlight> Система ценообразования, при которой цена товара изменяется в зависимости от спроса или времени.
                    </li>
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты о динамических процессах">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Динамика — это ключ к развитию."
                        annotation="Значение: Постоянное движение и развитие являются основой для прогресса."
                    />
                    <Quote_with_annotation
                        quote="Системы, которые не динамичны, обречены на застой."
                        annotation="Значение: Без способности изменяться, системы теряют свою актуальность."
                    />
                    <Quote_with_annotation
                        quote="Динамическая адаптация — это способность выживать в изменяющемся мире."
                        annotation="Значение: Умение адаптироваться к изменениям — ключ к успеху."
                    />
                    <Quote_with_annotation
                        quote="Динамическое мышление позволяет находить решения в постоянно меняющихся условиях."
                        annotation="Значение: Гибкость и быстрая реакция на изменения — важные навыки."
                    />
                </div>
            </Section>

            {/* Примеры динамических процессов в различных сферах */}
            <Section title="Примеры динамических процессов в различных сферах">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Динамическое ценообразование:</Highlight> В маркетинге динамическое ценообразование адаптирует цены на товары в зависимости от спроса или времени. <br />
                        <i>"Динамическое ценообразование помогает компаниям адаптироваться к изменениям на рынке."</i>
                    </li>
                    <li>
                        <Highlight>2. Динамическая оптимизация:</Highlight> В программировании динамическая оптимизация улучшает работу систем в реальном времени. <br />
                        <i>"Динамическая оптимизация позволяет программам работать быстрее."</i>
                    </li>
                    <li>
                        <Highlight>3. Динамическая память в компьютерах:</Highlight> Временное хранение данных, которые могут изменяться во время выполнения программы. <br />
                        <i>"Современные компьютеры используют динамическую память для повышения производительности."</i>
                    </li>
                    <li>
                        <Highlight>4. Динамическая нагрузка в физических системах:</Highlight> В инженерии динамическая нагрузка — это сила, которая изменяется со временем. <br />
                        <i>"Динамическая нагрузка учитывается при проектировании мостов и зданий."</i>
                    </li>
                </ul>
            </Section>

            {/* Важные аспекты динамических процессов */}
            <Section title="Важные аспекты динамических процессов">
                <ul className="unordered_list">
                    <li>
                        <Highlight>1. Изменение во времени:</Highlight> Динамические процессы включают элемент изменения во времени. <br />
                        <i>"Динамическое поведение системы сложно предсказать."</i>
                    </li>
                    <li>
                        <Highlight>2. Адаптация к изменениям:</Highlight> Динамические процессы могут изменяться и адаптироваться к новым условиям. <br />
                        <i>"Динамически адаптируемые системы быстро реагируют на изменения."</i>
                    </li>
                    <li>
                        <Highlight>3. Гибкость управления:</Highlight> Динамические процессы требуют постоянного мониторинга и гибкого управления. <br />
                        <i>"Гибкость управления позволяет поддерживать стабильность системы."</i>
                    </li>
                    <li>
                        <Highlight>4. Реакция на внешние факторы:</Highlight> Динамические процессы зависят от внешних факторов, таких как изменения в окружающей среде. <br />
                        <i>"Динамическое ценообразование учитывает множество внешних факторов."</i>
                    </li>
                </ul>
            </Section>
        </div>
    );
}