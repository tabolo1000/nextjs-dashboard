import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import {Quote_with_annotation} from "@/app/ui/math/components/сopywriting/Quote_with_annotation";
import {Interactive_Image} from "@/app/ui/math/components/Interactive_Image";
import buttonImage from "./../img/button.jpeg";

export default function ButtonInfo() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Кнопка</h1>

            {/* Этимология слова "Кнопка" */}
            <Section title="Этимология слова 'Кнопка'">
                <p className="paragraph">
                    Слово <Highlight>кнопка</Highlight> пришло в русский язык из польского языка, где существует слово <i>knopka</i>, означающее "маленькая головка" или "шарик". Это слово, в свою очередь, происходит от голландского <i>knop</i>, что означает "бутон", "шишечка", "узелок". В русском языке "кнопка" стала обозначать маленький предмет, который можно нажимать или переключать для выполнения какой-либо функции.
                </p>
            </Section>

            <Interactive_Image src={buttonImage} alt={"Кнопка"} width={500} height={500} />


            {/* Значение слова "Кнопка" */}
            <Section title="Значение слова 'Кнопка'">
                <p className="paragraph">
                    <Highlight>Кнопка</Highlight> — это небольшой объект, предназначенный для нажатия, который активирует или переключает определённую функцию. Кнопки могут быть как механическими, так и виртуальными (например, на экране компьютера или смартфона).
                </p>

                {/* Основные значения кнопки */}
                <ul className="unordered_list">
                    <li>
                        <Highlight>Механическая кнопка:</Highlight> Это физический элемент, который можно нажимать для выполнения определённой задачи, например, кнопка включения на телевизоре или клавиша на клавиатуре.
                        *"Кнопка включения компьютера расположена на передней панели системного блока."*
                    </li>
                    <li>
                        <Highlight>Виртуальная кнопка:</Highlight> Графический элемент на экране устройства, который пользователь может "нажать" с помощью мыши или сенсорного экрана.
                        *"Нажмите кнопку 'Отправить', чтобы завершить регистрацию."*
                    </li>
                    <li>
                        <Highlight>Кнопка-застёжка:</Highlight> Маленький объект, который служит для застёгивания одежды или других текстильных изделий.
                        *"Кнопка на рубашке оторвалась, и её нужно пришить."*
                    </li>
                </ul>
            </Section>

            {/* История кнопок */}
            <Section title="История кнопок">
                <p className="paragraph">
                    Если заглянуть в историческое прошлое, кнопки в виде застёжек появились задолго до того, как их начали использовать в механике или электронике. В древние времена люди использовали пуговицы, застёжки и шнурки для скрепления одежды, однако в середине XX века, с развитием технологий, кнопки стали ключевым элементом в управлении электронными устройствами.
                </p>

                <p className="paragraph">
                    Первыми механическими кнопками, которые использовались в устройствах, можно считать кнопки на телефонных аппаратах и радио, которые обеспечивали простое и надёжное управление. С популяризацией компьютеров и мобильных устройств кнопки стали неотъемлемой частью пользовательского интерфейса.
                </p>

                <p className="paragraph">
                    Виртуальные кнопки появились с развитием программных интерфейсов и сенсорных экранов. Они заменили физические кнопки в ряде устройств, таких как смартфоны и планшеты.
                </p>
            </Section>

            {/* Примеры использования кнопок */}
            <Section title="Примеры использования кнопок">
                <ul className="space-y-6">
                    <Base_card
                        title="Механические кнопки"
                        description="Механические кнопки используются на клавиатурах, бытовой технике, таких как микроволновки, стиральные машины и телевизоры."
                        icon="🖲️"
                    />
                    <Base_card
                        title="Виртуальные кнопки"
                        description="Виртуальные кнопки используются на веб-страницах и в мобильных приложениях для выполнения действий, таких как отправка форм или переход по ссылкам."
                        icon="📱"
                    />
                    <Base_card
                        title="Кнопки-застёжки"
                        description="Кнопки-застёжки используются для застёгивания одежды, таких как рубашки, пальто или брюки."
                        icon="👔"
                    />
                    <Base_card
                        title="Кнопки в транспорте"
                        description="В транспорте кнопки используются для подачи сигнала водителю, открытия дверей или активации остановки."
                        icon="🚍"
                    />
                </ul>
            </Section>

            {/* Особенности кнопок */}
            <Section title="Особенности кнопок">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Механизм работы кнопок:</Highlight> Механические кнопки работают за счёт замыкания или размыкания электрических цепей при нажатии, что активирует определённое действие.
                    </li>
                    <li>
                        <Highlight>Виртуальные кнопки:</Highlight> Виртуальные кнопки работают на основе программного кода: при нажатии срабатывает команда, которая выполняет определённое действие.
                    </li>
                    <li>
                        <Highlight>Дизайн кнопок:</Highlight> Как механические, так и виртуальные кнопки должны быть интуитивно понятны и удобны. Их форма, цвет и расположение играют важную роль в восприятии и взаимодействии с устройством.
                    </li>
                </ul>
            </Section>

            {/* Интересные факты о кнопках */}
            <Section title="Интересные факты о кнопках">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Кнопка "Power":</Highlight> Символ кнопки включения/выключения (круг с вертикальной линией) стал международным стандартом и используется практически на всех устройствах.
                    </li>
                    <li>
                        <Highlight>Кнопки в общественном транспорте:</Highlight> Кнопки для открытия дверей по требованию помогают экономить энергию и поддерживать комфортную температуру в салоне.
                    </li>
                    <li>
                        <Highlight>Сенсорные кнопки:</Highlight> Современные устройства всё чаще заменяют механические кнопки на сенсорные, что делает их более долговечными и удобными.
                    </li>
                    <li>
                        <Highlight>Кнопки в космических кораблях:</Highlight> Кнопки на космических кораблях должны быть надёжными и удобными для использования в условиях невесомости. Они имеют увеличенные размеры для удобства в скафандрах.
                    </li>
                </ul>
            </Section>

            {/* Цитаты о кнопках */}
            <Section title="Цитаты о кнопках">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Нажать на кнопку — это действие, открывающее мир возможностей."
                        annotation="Кнопка может быть простой деталью, но её нажатие может запустить сложную цепочку событий."
                    />
                    <Quote_with_annotation
                        quote="Кнопки — это мост между человеком и машиной."
                        annotation="Кнопки служат интерфейсом для взаимодействия человека с устройствами, будь то компьютер или бытовая техника."
                    />
                    <Quote_with_annotation
                        quote="Одно нажатие кнопки — и мир меняется."
                        annotation="Простое нажатие кнопки может привести к значительным изменениям или результатам."
                    />
                    <Quote_with_annotation
                        quote="Кнопка — это символ выбора и действия."
                        annotation="Кнопка символизирует возможность выбора и выполнения действия через простой механизм."
                    />
                </div>
            </Section>
        </div>
    );
}