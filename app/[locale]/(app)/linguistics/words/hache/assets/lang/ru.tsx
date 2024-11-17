import React from "react";
import { Section } from "@/app/ui/math/components/Section";
import { Base_card } from "@/app/ui/math/components/Base_card";
import { Highlight } from "@/app/ui/math/components/Highlight";
import hacheImage from "./../img/hache.jpg";
import { Interactive_Image } from "@/app/ui/math/components/Interactive_Image";
import { Quote_with_annotation } from "@/app/ui/math/components/сopywriting/Quote_with_annotation";

export default function Hache() {
    return (
        <div className="main_block_task">
            <h1 className="header_h1">Хаше: Этимология, значение и примеры</h1>

            {/* Этимология */}
            <Section title="Этимология слова 'хаше'">
                <p className="paragraph">
                    Слово <Highlight>хаше</Highlight> происходит от французского <Highlight>haché</Highlight>, что означает "рубленый" или "измельчённый". Оно связано с глаголом <Highlight>hacher</Highlight>, который переводится как "резать на мелкие кусочки". Этот термин относится к кулинарии, где обозначает технику приготовления блюд из мелко нарезанных ингредиентов.
                </p>
                <p className="paragraph">
                    <Highlight>Французский корень:</Highlight> Французское <Highlight>hacher</Highlight> происходит от латинского <Highlight>hassiare</Highlight>, что также означает "рубить". В кулинарии это слово обозначает способ обработки продуктов, таких как мясо или овощи.
                </p>
                <p className="paragraph">
                    <Highlight>Заимствование в русский язык:</Highlight> Слово <Highlight>хаше</Highlight> пришло в русский язык в XVIII—XIX веках через французскую кухню, которая оказала значительное влияние на российскую культуру и кулинарные традиции того времени.
                </p>
            </Section>

            {/* Интерактивное изображение */}
            <Interactive_Image src={hacheImage} alt={"Хаше"} width={500} height={500} />

            {/* Значение */}
            <Section title="Значение слова 'хаше'">
                <p className="paragraph">
                    <Highlight>Хаше</Highlight> — это блюдо, приготовленное из мелко нарезанных или измельчённых ингредиентов, чаще всего мяса, но также может включать овощи или рыбу. Основная идея хаше — это использование рубленых продуктов, которые затем могут быть обжарены, тушены или запечены.
                </p>
                <p className="paragraph">
                    Примеры хаше включают мясное хаше, овощное хаше и рыбное хаше, в зависимости от основного ингредиента.
                </p>
            </Section>

            {/* Примеры использования */}
            <Section title="Примеры использования слова 'хаше'">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Хаше из говядины:</Highlight> Мелко нарезанная говядина, обжаренная с луком и чесноком. Часто подаётся с гарниром из картофеля или риса.
                    </li>
                    <li>
                        <Highlight>Овощное хаше:</Highlight> Вегетарианский вариант с баклажанами, кабачками и помидорами, обжаренными в оливковом масле.
                    </li>
                    <li>
                        <Highlight>Хаше из курицы:</Highlight> Мелко нарезанные кусочки курицы, обжаренные с луком и специями.
                    </li>
                </ul>
            </Section>

            {/* Факторы */}
            <Section title="Факторы, влияющие на приготовление хаше">
                <ul className="unordered_list">
                    <li>
                        <Highlight>Техника нарезки:</Highlight> Правильная нарезка ингредиентов — ключевой фактор для хаше. Мелкая нарезка позволяет ингредиентам лучше пропитываться вкусами друг друга.
                    </li>
                    <li>
                        <Highlight>Тип мяса:</Highlight> Разные виды мяса могут использоваться для хаше, включая говядину, свинину или курицу. Вегетарианские варианты также популярны.
                    </li>
                    <li>
                        <Highlight>Специи и приправы:</Highlight> Использование различных специй, таких как чеснок, лук, перец и травы, придаёт блюду насыщенный вкус.
                    </li>
                </ul>
            </Section>

            {/* Хаше в культуре */}
            <Section title="Хаше в культуре и мировой кулинарии">
                <ul className="space-y-6">
                    <Base_card
                        title="Французская кухня"
                        description="Во французской кухне хаше считается классическим блюдом, главным образом приготовленным из рубленого мяса с овощами."
                        icon="🍽️"
                    />
                    <Base_card
                        title="Русская кухня"
                        description="В русской кухне блюда, похожие на хаше, включают фаршированные овощи и голубцы, где используется рубленое мясо."
                        icon="🥘"
                    />
                    <Base_card
                        title="Азиатская кухня"
                        description="В азиатской кухне также популярны блюда с мелко нарезанными ингредиентами, такие как китайский stir-fry."
                        icon="🍜"
                    />
                </ul>
            </Section>

            {/* Цитаты */}
            <Section title="Цитаты о хаше и их значение">
                <div className="text-center space-y-8 w-4/5 mx-auto flex flex-col justify-center place-items-center">
                    <Quote_with_annotation
                        quote="Хаше — это не просто нарезка, это симфония вкусов, соединённых в одном блюде."
                        annotation="Значение: Важно не только измельчить ингредиенты, но и правильно сочетать их, создавая гармонию вкусов."
                    />
                    <Quote_with_annotation
                        quote="Хаше — это искусство превращать простые ингредиенты в нечто изысканное."
                        annotation="Значение: Даже обыденные продукты могут превратиться в потрясающее блюдо, если их приготовить с умением и фантазией."
                    />
                    <Quote_with_annotation
                        quote="Рубленое или мелко нарезанное не значит простое — в хаше главная магия скрыта в деталях."
                        annotation="Значение: Тщательная нарезка и правильная комбинация вкусов делают хаше сложным и интересным блюдом."
                    />
                </div>
            </Section>
        </div>
    );
}